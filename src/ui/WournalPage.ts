import { DOMUtils } from "../util/DOMUtils";
import { LOG } from "../util/Logging";
import { BackgroundGenerator, BackgroundGeneratorColor } from "./BackgroundGenerators";
import { WournalDocument } from "./WournalDocument";
import { WournalPageSize } from "./WournalPageSize";

/**
 * The attribute defining a "layer" element for wournal. Really they are just
 * svg groups ("g" elements), but they are marked with this attribute.
 */
const WOURNAL_SVG_LAYER_NAME_ATTR = "wournal-layer-name";

/**
 * An SVG Canvas to draw on.
 */
export class WournalPage {

    public display: HTMLDivElement;
    /**
     * This wrapper element is necessary for zooming to work. Since css scale
     * transform is used for zooming, which does not alter the size of the
     * scaled element, we have to alter the width/height of a surrounding
     * element (this.display);
     */
    private svgWrapperEl: HTMLDivElement;

    private width: number;
    private height: number;
    private zoom: number = 1;

    public toolLayer: SVGSVGElement;

    private canvas: SVGSVGElement;
    public activePaintLayer: SVGGElement;

    /**
     * The bounding rectangle of `_svgElement`. Only updated in `onMouseDown`
     * for better performance.
     */
    private _rect: DOMRect;
    get rect() { return this._rect; }

    constructor(
        private doc: WournalDocument,
        dimensions: {height: number, width: number}
    ) {
        this.display = doc.display.ownerDocument.createElement("div");
        this.display.setAttribute("class", "wournal-page");

        this.display.style.border = "2px solid gray";
        this.display.style.margin = "10px auto 10px auto";

        this.svgWrapperEl = doc.display.ownerDocument.createElement("div");
        this.svgWrapperEl.style.transformOrigin = "0 0";
        this.display.appendChild(this.svgWrapperEl);

        this.canvas = this.doc.display.ownerDocument.createElementNS(
            "http://www.w3.org/2000/svg", "svg"
        );
        this.canvas.setAttribute("xmlns", "http://www.w3.org/2000/svg");
        this.canvas.style.position = "absolute";
        this.svgWrapperEl.appendChild(this.canvas)

        this.toolLayer = this.doc.display.ownerDocument.createElementNS(
            "http://www.w3.org/2000/svg", "svg"
        );
        this.toolLayer.style.position = "absolute";
        this.svgWrapperEl.appendChild(this.toolLayer)

        this.setPageSize(dimensions);
        this.updateDisplaySize();
        this.setZoom(1);

        this.setBackgroundLayer(new BackgroundGeneratorColor("white"));
        this.addLayer("", true);

        if (dimensions.height === WournalPageSize.DINA4_PORTRAIT.height &&
            dimensions.width === WournalPageSize.DINA4_PORTRAIT.width)
            this.loadFromUrl("res/testpage.svg");
    }

    public loadFromUrl(url: string) {
        LOG.info(`Loading url: ${url}...`);
        fetch(url)
            .then((response: Response) => response.text())
            .then((response: string) => {
                LOG.info(`Loaded url: ${url}...`);
                const loaded = DOMUtils.createElementFromHTML<SVGSVGElement>(
                    response
                );
                this.activePaintLayer.innerHTML = loaded.innerHTML;
                LOG.info(this.activePaintLayer);
            });
    }

    public setBackgroundLayer(generator: BackgroundGenerator) {
        let bg = this.getLayer("background");
        if (!bg) {
            bg = this.addLayer("background", false, true);
        }
        generator.generate(this.width, this.height, bg);
    }

    public addLayer(
        name: string = "", makeActive: boolean = false, prepend: boolean = false
    ): SVGGElement {
        const existing = this.getLayers();
        const n = name === "" ? `Layer ${existing.length}` : name;
        if (this.getLayer(n) !== undefined)
            throw new Error(`Layer with name '${n}' already exists!`);

        let g = this.doc.display.ownerDocument.createElementNS(
            "http://www.w3.org/2000/svg", "g"
        );
        g.setAttribute(WOURNAL_SVG_LAYER_NAME_ATTR, n);

        if (prepend && this.canvas.firstChild) this.canvas.firstChild.before(g)
        else this.canvas.appendChild(g);

        if (makeActive) this.setActivePaintLayer(n);
        return g;
    }

    /** Get a layer by its name */
    public getLayer(name: string): SVGGElement {
        return this.getLayers().find(
            l => l.getAttribute(WOURNAL_SVG_LAYER_NAME_ATTR) === name
        );
    }

    /** Get all layers */
    public getLayers(): SVGGElement[] {
        let layers = [];
        for (let el of this.canvas.getElementsByTagName("g")) {
            if (el.getAttribute(WOURNAL_SVG_LAYER_NAME_ATTR) !== null) {
                layers.push(el);
            }
        }
        return layers;
    }

    public setActivePaintLayer(name: string) {
        this.activePaintLayer = this.getLayers().find(
            (layer) => layer.getAttribute(WOURNAL_SVG_LAYER_NAME_ATTR) === name
        );
    }

    public getActivePaintLayer() { return this.activePaintLayer; }

    public onMouseDown(e: MouseEvent) {
        this._rect = this.toolLayer.getBoundingClientRect();
    }

    /** Update the size of this page according to the set width/height */
    private updateDisplaySize() {
        this.display.style.width = `${this.width*this.zoom}px`;
        this.display.style.height = `${this.height*this.zoom}px`;
    }

    /**
     * Set the page size according to `d`. Note that if the page is set to a
     * smaller size then its initial size, some content at the borders might be
     * removed.
     */
    public setPageSize(d: {width: number, height: number}) {
        this.width = d.width;
        this.height = d.height;
        this.toolLayer.setAttribute("width", `${d.width}`);
        this.toolLayer.setAttribute("height", `${d.height}`);
        this.canvas.setAttribute("width", `${d.width}`);
        this.canvas.setAttribute("height", `${d.height}`);
        this.updateDisplaySize();
    }

    /**
     * Set the zoom level of this page. [0-inf[
     *
     * Note: For this to work, ALL COORDINATES ACCROSS THE ENTIRE APPLICATION
     * WILL HAVE TO BE TRANSLATED TO THE CANVAS COORDINATE SYSTEM USING
     * `this.globalCoordsToCanvas` AND `this.globalDOMRectToCanvas`.
     */
    public setZoom(zoom: number) {
        // Setting the scale transform css attribute on the entire wournal
        // document seemed not to work, but for some reason it does work on the
        // individual pages. This is why zoom level is set on a page by page
        // basis.
        this.svgWrapperEl.style.transform = `scale(${zoom})`;
        this.zoom = zoom;
        this.updateDisplaySize();
    }

    /**
     * Translate x and y to canvas coords. USE THIS FOR ALL COORDINATE
     * TRANSLATIONS, OTHERWISE ZOOM WILL NOT WORK.
     */
    public globalCoordsToCanvas(
        pt: {x: number, y: number}
    ): {x: number, y: number} {
        return {
            x: (pt.x - this._rect.left) * 1/this.zoom,
            y: (pt.y - this._rect.top) * 1/this.zoom
        };
    }

    /**
     * Translate r to canvas coords. USE THIS FOR ALL COORDINATE TRANSLATIONS,
     * OTHERWISE ZOOM WILL NOT WORK.
     */
    public globalDOMRectToCanvas(r: DOMRect): DOMRect {
        return DOMRect.fromRect({
            x: (r.x - this._rect.left) * 1/this.zoom,
            y: (r.y - this._rect.top) * 1/this.zoom,
            width: r.width * 1/this.zoom,
            height: r.height * 1/this.zoom,
        });
    }
}
