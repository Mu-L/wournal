// copied from from pdfjs-dist/web/pdf_viewer.css
export let css = `

/* Copyright 2014 Mozilla Foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

.textLayer{
  position:absolute;
  text-align:initial;
  inset:0;
  overflow:hidden;
  opacity:0.25;
  line-height:1;
  -webkit-text-size-adjust:none;
     -moz-text-size-adjust:none;
          text-size-adjust:none;
  forced-color-adjust:none;
  transform-origin:0 0;
  z-index:2;
}

.textLayer :is(span, br){
    color:transparent;
    position:absolute;
    white-space:pre;
    cursor:text;
    transform-origin:0% 0%;
  }

.textLayer span.markedContent{
    top:0;
    height:0;
  }

.textLayer .highlight{
    --highlight-bg-color:rgb(180 0 170);
    --highlight-selected-bg-color:rgb(0 100 0);

    margin:-1px;
    padding:1px;
    background-color:var(--highlight-bg-color);
    border-radius:4px;
  }

@media screen and (forced-colors: active){

.textLayer .highlight{
      --highlight-bg-color:Highlight;
      --highlight-selected-bg-color:ButtonText;
  }
    }

.textLayer .highlight.appended{
      position:initial;
    }

.textLayer .highlight.begin{
      border-radius:4px 0 0 4px;
    }

.textLayer .highlight.end{
      border-radius:0 4px 4px 0;
    }

.textLayer .highlight.middle{
      border-radius:0;
    }

.textLayer .highlight.selected{
      background-color:var(--highlight-selected-bg-color);
    }

.textLayer ::-moz-selection{
    background:blue;
    background:AccentColor;
  }

.textLayer ::selection{
    background:blue;
    background:AccentColor;
  }

.textLayer br::-moz-selection{
    background:transparent;
  }

.textLayer br::selection{
    background:transparent;
  }

.textLayer .endOfContent{
    display:block;
    position:absolute;
    inset:100% 0 0;
    z-index:-1;
    cursor:default;
    -webkit-user-select:none;
       -moz-user-select:none;
            user-select:none;
  }

.textLayer .endOfContent.active{
      top:0;
    }

.annotationLayer{
  --annotation-unfocused-field-background:url("data:image/svg+xml;charset=UTF-8,<svg width='1px' height='1px' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' style='fill:rgba(0, 54, 255, 0.13);'/></svg>");
  --input-focus-border-color:Highlight;
  --input-focus-outline:1px solid Canvas;
  --input-unfocused-border-color:transparent;
  --input-disabled-border-color:transparent;
  --input-hover-border-color:black;
  --link-outline:none;

  position:absolute;
  top:0;
  left:0;
  pointer-events:none;
  transform-origin:0 0;
  z-index:3;
}

@media screen and (forced-colors: active){

.annotationLayer{
    --input-focus-border-color:CanvasText;
    --input-unfocused-border-color:ActiveText;
    --input-disabled-border-color:GrayText;
    --input-hover-border-color:Highlight;
    --link-outline:1.5px solid LinkText;
    --hcm-highlight-filter:invert(100%);
}

    .annotationLayer .textWidgetAnnotation :is(input, textarea):required, .annotationLayer .choiceWidgetAnnotation select:required, .annotationLayer .buttonWidgetAnnotation:is(.checkBox, .radioButton) input:required{
      outline:1.5px solid selectedItem;
    }

    .annotationLayer .linkAnnotation{
      outline:var(--link-outline);
    }

      .annotationLayer .linkAnnotation:hover{
        -webkit-backdrop-filter:var(--hcm-highlight-filter);
                backdrop-filter:var(--hcm-highlight-filter);
      }

      .annotationLayer .linkAnnotation > a:hover{
        opacity:0 !important;
        background:none !important;
        box-shadow:none;
      }

    .annotationLayer .popupAnnotation .popup{
      outline:calc(1.5px * var(--scale-factor)) solid CanvasText !important;
      background-color:ButtonFace !important;
      color:ButtonText !important;
    }

    .annotationLayer .highlightArea:hover::after{
      position:absolute;
      top:0;
      left:0;
      width:100%;
      height:100%;
      -webkit-backdrop-filter:var(--hcm-highlight-filter);
              backdrop-filter:var(--hcm-highlight-filter);
      content:"";
      pointer-events:none;
    }

    .annotationLayer .popupAnnotation.focused .popup{
      outline:calc(3px * var(--scale-factor)) solid Highlight !important;
    }
  }

.annotationLayer[data-main-rotation="90"] .norotate{
    transform:rotate(270deg) translateX(-100%);
  }

.annotationLayer[data-main-rotation="180"] .norotate{
    transform:rotate(180deg) translate(-100%, -100%);
  }

.annotationLayer[data-main-rotation="270"] .norotate{
    transform:rotate(90deg) translateY(-100%);
  }

.annotationLayer canvas{
    position:absolute;
    width:100%;
    height:100%;
    pointer-events:none;
  }

.annotationLayer section{
    position:absolute;
    text-align:initial;
    pointer-events:auto;
    box-sizing:border-box;
    transform-origin:0 0;
  }

.annotationLayer :is(.linkAnnotation, .buttonWidgetAnnotation.pushButton) > a{
    position:absolute;
    font-size:1em;
    top:0;
    left:0;
    width:100%;
    height:100%;
  }

.annotationLayer :is(.linkAnnotation, .buttonWidgetAnnotation.pushButton):not(.hasBorder)
    > a:hover{
    opacity:0.2;
    background-color:rgb(255 255 0);
    box-shadow:0 2px 10px rgb(255 255 0);
  }

.annotationLayer .linkAnnotation.hasBorder:hover{
    background-color:rgb(255 255 0 / 0.2);
  }

.annotationLayer .hasBorder{
    background-size:100% 100%;
  }

.annotationLayer .textAnnotation img{
    position:absolute;
    cursor:pointer;
    width:100%;
    height:100%;
    top:0;
    left:0;
  }

.annotationLayer .textWidgetAnnotation :is(input, textarea), .annotationLayer .choiceWidgetAnnotation select, .annotationLayer .buttonWidgetAnnotation:is(.checkBox, .radioButton) input{
    background-image:var(--annotation-unfocused-field-background);
    border:2px solid var(--input-unfocused-border-color);
    box-sizing:border-box;
    font:calc(9px * var(--scale-factor)) sans-serif;
    height:100%;
    margin:0;
    vertical-align:top;
    width:100%;
  }

.annotationLayer .textWidgetAnnotation :is(input, textarea):required, .annotationLayer .choiceWidgetAnnotation select:required, .annotationLayer .buttonWidgetAnnotation:is(.checkBox, .radioButton) input:required{
    outline:1.5px solid red;
  }

.annotationLayer .choiceWidgetAnnotation select option{
    padding:0;
  }

.annotationLayer .buttonWidgetAnnotation.radioButton input{
    border-radius:50%;
  }

.annotationLayer .textWidgetAnnotation textarea{
    resize:none;
  }

.annotationLayer .textWidgetAnnotation [disabled]:is(input, textarea), .annotationLayer .choiceWidgetAnnotation select[disabled], .annotationLayer .buttonWidgetAnnotation:is(.checkBox, .radioButton) input[disabled]{
    background:none;
    border:2px solid var(--input-disabled-border-color);
    cursor:not-allowed;
  }

.annotationLayer .textWidgetAnnotation :is(input, textarea):hover, .annotationLayer .choiceWidgetAnnotation select:hover, .annotationLayer .buttonWidgetAnnotation:is(.checkBox, .radioButton) input:hover{
    border:2px solid var(--input-hover-border-color);
  }

.annotationLayer .textWidgetAnnotation :is(input, textarea):hover, .annotationLayer .choiceWidgetAnnotation select:hover, .annotationLayer .buttonWidgetAnnotation.checkBox input:hover{
    border-radius:2px;
  }

.annotationLayer .textWidgetAnnotation :is(input, textarea):focus, .annotationLayer .choiceWidgetAnnotation select:focus{
    background:none;
    border:2px solid var(--input-focus-border-color);
    border-radius:2px;
    outline:var(--input-focus-outline);
  }

.annotationLayer .buttonWidgetAnnotation:is(.checkBox, .radioButton) :focus{
    background-image:none;
    background-color:transparent;
  }

.annotationLayer .buttonWidgetAnnotation.checkBox :focus{
    border:2px solid var(--input-focus-border-color);
    border-radius:2px;
    outline:var(--input-focus-outline);
  }

.annotationLayer .buttonWidgetAnnotation.radioButton :focus{
    border:2px solid var(--input-focus-border-color);
    outline:var(--input-focus-outline);
  }

.annotationLayer .buttonWidgetAnnotation.checkBox input:checked::before,
  .annotationLayer .buttonWidgetAnnotation.checkBox input:checked::after,
  .annotationLayer .buttonWidgetAnnotation.radioButton input:checked::before{
    background-color:CanvasText;
    content:"";
    display:block;
    position:absolute;
  }

.annotationLayer .buttonWidgetAnnotation.checkBox input:checked::before,
  .annotationLayer .buttonWidgetAnnotation.checkBox input:checked::after{
    height:80%;
    left:45%;
    width:1px;
  }

.annotationLayer .buttonWidgetAnnotation.checkBox input:checked::before{
    transform:rotate(45deg);
  }

.annotationLayer .buttonWidgetAnnotation.checkBox input:checked::after{
    transform:rotate(-45deg);
  }

.annotationLayer .buttonWidgetAnnotation.radioButton input:checked::before{
    border-radius:50%;
    height:50%;
    left:25%;
    top:25%;
    width:50%;
  }

.annotationLayer .textWidgetAnnotation input.comb{
    font-family:monospace;
    padding-left:2px;
    padding-right:0;
  }

.annotationLayer .textWidgetAnnotation input.comb:focus{
    width:103%;
  }

.annotationLayer .buttonWidgetAnnotation:is(.checkBox, .radioButton) input{
    -webkit-appearance:none;
       -moz-appearance:none;
            appearance:none;
  }

.annotationLayer .fileAttachmentAnnotation .popupTriggerArea{
    height:100%;
    width:100%;
  }

.annotationLayer .popupAnnotation{
    position:absolute;
    font-size:calc(9px * var(--scale-factor));
    pointer-events:none;
    width:-moz-max-content;
    width:max-content;
    max-width:45%;
    height:auto;
  }

.annotationLayer .popup{
    background-color:rgb(255 255 153);
    box-shadow:0 calc(2px * var(--scale-factor)) calc(5px * var(--scale-factor)) rgb(136 136 136);
    border-radius:calc(2px * var(--scale-factor));
    outline:1.5px solid rgb(255 255 74);
    padding:calc(6px * var(--scale-factor));
    cursor:pointer;
    font:message-box;
    white-space:normal;
    word-wrap:break-word;
    pointer-events:auto;
  }

.annotationLayer .popupAnnotation.focused .popup{
    outline-width:3px;
  }

.annotationLayer .popup *{
    font-size:calc(9px * var(--scale-factor));
  }

.annotationLayer .popup > .header{
    display:inline-block;
  }

.annotationLayer .popup > .header h1{
    display:inline;
  }

.annotationLayer .popup > .header .popupDate{
    display:inline-block;
    margin-left:calc(5px * var(--scale-factor));
    width:-moz-fit-content;
    width:fit-content;
  }

.annotationLayer .popupContent{
    border-top:1px solid rgb(51 51 51);
    margin-top:calc(2px * var(--scale-factor));
    padding-top:calc(2px * var(--scale-factor));
  }

.annotationLayer .richText > *{
    white-space:pre-wrap;
    font-size:calc(9px * var(--scale-factor));
  }

.annotationLayer .popupTriggerArea{
    cursor:pointer;
  }

.annotationLayer section svg{
    position:absolute;
    width:100%;
    height:100%;
    top:0;
    left:0;
  }

.annotationLayer .annotationTextContent{
    position:absolute;
    width:100%;
    height:100%;
    opacity:0;
    color:transparent;
    -webkit-user-select:none;
       -moz-user-select:none;
            user-select:none;
    pointer-events:none;
  }

.annotationLayer .annotationTextContent span{
      width:100%;
      display:inline-block;
    }

.annotationLayer svg.quadrilateralsContainer{
    contain:strict;
    width:0;
    height:0;
    position:absolute;
    top:0;
    left:0;
    z-index:-1;
  }

:root{
  --xfa-unfocused-field-background:url("data:image/svg+xml;charset=UTF-8,<svg width='1px' height='1px' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' style='fill:rgba(0, 54, 255, 0.13);'/></svg>");
  --xfa-focus-outline:auto;
}

@media screen and (forced-colors: active){
  :root{
    --xfa-focus-outline:2px solid CanvasText;
  }
  .xfaLayer *:required{
    outline:1.5px solid selectedItem;
  }
}

.xfaLayer{
  background-color:transparent;
}

.xfaLayer .highlight{
  margin:-1px;
  padding:1px;
  background-color:rgb(239 203 237);
  border-radius:4px;
}

.xfaLayer .highlight.appended{
  position:initial;
}

.xfaLayer .highlight.begin{
  border-radius:4px 0 0 4px;
}

.xfaLayer .highlight.end{
  border-radius:0 4px 4px 0;
}

.xfaLayer .highlight.middle{
  border-radius:0;
}

.xfaLayer .highlight.selected{
  background-color:rgb(203 223 203);
}

.xfaPage{
  overflow:hidden;
  position:relative;
}

.xfaContentarea{
  position:absolute;
}

.xfaPrintOnly{
  display:none;
}

.xfaLayer{
  position:absolute;
  text-align:initial;
  top:0;
  left:0;
  transform-origin:0 0;
  line-height:1.2;
}

.xfaLayer *{
  color:inherit;
  font:inherit;
  font-style:inherit;
  font-weight:inherit;
  font-kerning:inherit;
  letter-spacing:-0.01px;
  text-align:inherit;
  text-decoration:inherit;
  box-sizing:border-box;
  background-color:transparent;
  padding:0;
  margin:0;
  pointer-events:auto;
  line-height:inherit;
}

.xfaLayer *:required{
  outline:1.5px solid red;
}

.xfaLayer div,
.xfaLayer svg,
.xfaLayer svg *{
  pointer-events:none;
}

.xfaLayer a{
  color:blue;
}

.xfaRich li{
  margin-left:3em;
}

.xfaFont{
  color:black;
  font-weight:normal;
  font-kerning:none;
  font-size:10px;
  font-style:normal;
  letter-spacing:0;
  text-decoration:none;
  vertical-align:0;
}

.xfaCaption{
  overflow:hidden;
  flex:0 0 auto;
}

.xfaCaptionForCheckButton{
  overflow:hidden;
  flex:1 1 auto;
}

.xfaLabel{
  height:100%;
  width:100%;
}

.xfaLeft{
  display:flex;
  flex-direction:row;
  align-items:center;
}

.xfaRight{
  display:flex;
  flex-direction:row-reverse;
  align-items:center;
}

:is(.xfaLeft, .xfaRight) > :is(.xfaCaption, .xfaCaptionForCheckButton){
  max-height:100%;
}

.xfaTop{
  display:flex;
  flex-direction:column;
  align-items:flex-start;
}

.xfaBottom{
  display:flex;
  flex-direction:column-reverse;
  align-items:flex-start;
}

:is(.xfaTop, .xfaBottom) > :is(.xfaCaption, .xfaCaptionForCheckButton){
  width:100%;
}

.xfaBorder{
  background-color:transparent;
  position:absolute;
  pointer-events:none;
}

.xfaWrapped{
  width:100%;
  height:100%;
}

:is(.xfaTextfield, .xfaSelect):focus{
  background-image:none;
  background-color:transparent;
  outline:var(--xfa-focus-outline);
  outline-offset:-1px;
}

:is(.xfaCheckbox, .xfaRadio):focus{
  outline:var(--xfa-focus-outline);
}

.xfaTextfield,
.xfaSelect{
  height:100%;
  width:100%;
  flex:1 1 auto;
  border:none;
  resize:none;
  background-image:var(--xfa-unfocused-field-background);
}

.xfaSelect{
  padding-inline:2px;
}

:is(.xfaTop, .xfaBottom) > :is(.xfaTextfield, .xfaSelect){
  flex:0 1 auto;
}

.xfaButton{
  cursor:pointer;
  width:100%;
  height:100%;
  border:none;
  text-align:center;
}

.xfaLink{
  width:100%;
  height:100%;
  position:absolute;
  top:0;
  left:0;
}

.xfaCheckbox,
.xfaRadio{
  width:100%;
  height:100%;
  flex:0 0 auto;
  border:none;
}

.xfaRich{
  white-space:pre-wrap;
  width:100%;
  height:100%;
}

.xfaImage{
  -o-object-position:left top;
     object-position:left top;
  -o-object-fit:contain;
     object-fit:contain;
  width:100%;
  height:100%;
}

.xfaLrTb,
.xfaRlTb,
.xfaTb{
  display:flex;
  flex-direction:column;
  align-items:stretch;
}

.xfaLr{
  display:flex;
  flex-direction:row;
  align-items:stretch;
}

.xfaRl{
  display:flex;
  flex-direction:row-reverse;
  align-items:stretch;
}

.xfaTb > div{
  justify-content:left;
}

.xfaPosition{
  position:relative;
}

.xfaArea{
  position:relative;
}

.xfaValignMiddle{
  display:flex;
  align-items:center;
}

.xfaTable{
  display:flex;
  flex-direction:column;
  align-items:stretch;
}

.xfaTable .xfaRow{
  display:flex;
  flex-direction:row;
  align-items:stretch;
}

.xfaTable .xfaRlRow{
  display:flex;
  flex-direction:row-reverse;
  align-items:stretch;
  flex:1;
}

.xfaTable .xfaRlRow > div{
  flex:1;
}

:is(.xfaNonInteractive, .xfaDisabled, .xfaReadOnly) :is(input, textarea){
  background:initial;
}

@media print{
  .xfaTextfield,
  .xfaSelect{
    background:transparent;
  }

  .xfaSelect{
    -webkit-appearance:none;
       -moz-appearance:none;
            appearance:none;
    text-indent:1px;
    text-overflow:"";
  }
}

.canvasWrapper svg{
    transform:none;
  }

.canvasWrapper svg[data-main-rotation="90"] use:not(.clip){
        transform:matrix(0, 1, -1, 0, 1, 0);
      }

.canvasWrapper svg[data-main-rotation="180"] use:not(.clip){
        transform:matrix(-1, 0, 0, -1, 1, 1);
      }

.canvasWrapper svg[data-main-rotation="270"] use:not(.clip){
        transform:matrix(0, -1, 1, 0, 0, 1);
      }

.canvasWrapper svg.highlight{
      --blend-mode:multiply;

      position:absolute;
      mix-blend-mode:var(--blend-mode);
      fill-rule:evenodd;
    }

@media screen and (forced-colors: active){

.canvasWrapper svg.highlight{
        --blend-mode:difference;
    }
      }

.canvasWrapper svg.highlightOutline{
      position:absolute;
      mix-blend-mode:normal;
      fill-rule:evenodd;
      fill:none;
    }

.canvasWrapper svg.highlightOutline.hovered{
        stroke:var(--hover-outline-color);
        stroke-width:var(--outline-width);
      }

.canvasWrapper svg.highlightOutline.selected .mainOutline{
          stroke:var(--outline-around-color);
          stroke-width:calc(
            var(--outline-width) + 2 * var(--outline-around-width)
          );
        }

.canvasWrapper svg.highlightOutline.selected .secondaryOutline{
          stroke:var(--outline-color);
          stroke-width:var(--outline-width);
        }

:root{
  --outline-width:2px;
  --outline-color:#0060df;
  --outline-around-width:1px;
  --outline-around-color:#f0f0f4;
  --hover-outline-around-color:var(--outline-around-color);
  --focus-outline:solid var(--outline-width) var(--outline-color);
  --unfocus-outline:solid var(--outline-width) transparent;
  --focus-outline-around:solid var(--outline-around-width) var(--outline-around-color);
  --hover-outline-color:#8f8f9d;
  --hover-outline:solid var(--outline-width) var(--hover-outline-color);
  --hover-outline-around:solid var(--outline-around-width) var(--hover-outline-around-color);
  --freetext-line-height:1.35;
  --freetext-padding:2px;
  --resizer-bg-color:var(--outline-color);
  --resizer-size:6px;
  --resizer-shift:calc(
    0px - (var(--outline-width) + var(--resizer-size)) / 2 -
      var(--outline-around-width)
  );
  --editorFreeText-editing-cursor:text;
  --editorInk-editing-cursor:pointer;
}

@media (-webkit-min-device-pixel-ratio: 1.1), (min-resolution: 1.1dppx){
  :root{
  }
}

@media screen and (forced-colors: active){
  :root{
    --outline-color:CanvasText;
    --outline-around-color:ButtonFace;
    --resizer-bg-color:ButtonText;
    --hover-outline-color:Highlight;
    --hover-outline-around-color:SelectedItemText;
  }
}

[data-editor-rotation="90"]{
  transform:rotate(90deg);
}

[data-editor-rotation="180"]{
  transform:rotate(180deg);
}

[data-editor-rotation="270"]{
  transform:rotate(270deg);
}

.annotationEditorLayer{
  background:transparent;
  position:absolute;
  inset:0;
  font-size:calc(100px * var(--scale-factor));
  transform-origin:0 0;
  cursor:auto;
  z-index:4;
}

.annotationEditorLayer.waiting{
  content:"";
  cursor:wait;
  position:absolute;
  inset:0;
  width:100%;
  height:100%;
}

.annotationEditorLayer.disabled{
  pointer-events:none;
}

.annotationEditorLayer.freetextEditing{
  cursor:var(--editorFreeText-editing-cursor);
}

.annotationEditorLayer.inkEditing{
  cursor:var(--editorInk-editing-cursor);
}

.annotationEditorLayer :is(.freeTextEditor, .inkEditor, .stampEditor){
  position:absolute;
  background:transparent;
  z-index:1;
  transform-origin:0 0;
  cursor:auto;
  max-width:100%;
  max-height:100%;
  border:var(--unfocus-outline);
}

.annotationEditorLayer .draggable.selectedEditor:is(.freeTextEditor, .inkEditor, .stampEditor){
    cursor:move;
  }

.annotationEditorLayer .selectedEditor:is(.freeTextEditor, .inkEditor, .stampEditor){
    border:var(--focus-outline);
    outline:var(--focus-outline-around);
  }

.annotationEditorLayer .selectedEditor:is(.freeTextEditor, .inkEditor, .stampEditor)::before{
      content:"";
      position:absolute;
      inset:0;
      border:var(--focus-outline-around);
      pointer-events:none;
    }

.annotationEditorLayer :is(.freeTextEditor, .inkEditor, .stampEditor):hover:not(.selectedEditor){
    border:var(--hover-outline);
    outline:var(--hover-outline-around);
  }

.annotationEditorLayer :is(.freeTextEditor, .inkEditor, .stampEditor):hover:not(.selectedEditor)::before{
      content:"";
      position:absolute;
      inset:0;
      border:var(--focus-outline-around);
    }

.annotationEditorLayer
  :is(.freeTextEditor, .inkEditor, .stampEditor, .highlightEditor) .editToolbar{
    --editor-toolbar-delete-image:url(images/editor-toolbar-delete.svg);
    --editor-toolbar-bg-color:#f0f0f4;
    --editor-toolbar-fg-color:#2e2e56;
    --editor-toolbar-border-color:#8f8f9d;
    --editor-toolbar-hover-border-color:var(--editor-toolbar-border-color);
    --editor-toolbar-hover-bg-color:#e0e0e6;
    --editor-toolbar-hover-fg-color:var(--editor-toolbar-fg-color);
    --editor-toolbar-hover-outline:none;
    --editor-toolbar-focus-outline-color:#0060df;
    --editor-toolbar-shadow:0 2px 6px 0 rgb(58 57 68 / 0.2);
    --editor-toolbar-vert-offset:6px;
    --editor-toolbar-height:28px;
    --editor-toolbar-padding:2px;

    display:flex;
    width:-moz-fit-content;
    width:fit-content;
    height:var(--editor-toolbar-height);
    flex-direction:column;
    justify-content:center;
    align-items:center;
    cursor:default;
    pointer-events:auto;
    box-sizing:content-box;
    padding:var(--editor-toolbar-padding);

    position:absolute;
    inset-inline-end:0;
    inset-block-start:calc(100% + var(--editor-toolbar-vert-offset));

    border-radius:6px;
    background-color:var(--editor-toolbar-bg-color);
    border:1px solid var(--editor-toolbar-border-color);
    box-shadow:var(--editor-toolbar-shadow);
  }

@media (prefers-color-scheme: dark){

.annotationEditorLayer
  :is(.freeTextEditor, .inkEditor, .stampEditor, .highlightEditor) .editToolbar{
      --editor-toolbar-bg-color:#2b2a33;
      --editor-toolbar-fg-color:#fbfbfe;
      --editor-toolbar-hover-bg-color:#52525e;
      --editor-toolbar-focus-outline-color:#0df;
  }
    }

@media screen and (forced-colors: active){

.annotationEditorLayer
  :is(.freeTextEditor, .inkEditor, .stampEditor, .highlightEditor) .editToolbar{
      --editor-toolbar-bg-color:ButtonFace;
      --editor-toolbar-fg-color:ButtonText;
      --editor-toolbar-border-color:ButtonText;
      --editor-toolbar-hover-border-color:AccentColor;
      --editor-toolbar-hover-bg-color:ButtonFace;
      --editor-toolbar-hover-fg-color:AccentColor;
      --editor-toolbar-hover-outline:2px solid var(--editor-toolbar-hover-border-color);
      --editor-toolbar-focus-outline-color:ButtonBorder;
      --editor-toolbar-shadow:none;
  }
    }

.annotationEditorLayer
  :is(.freeTextEditor, .inkEditor, .stampEditor, .highlightEditor) .editToolbar.hidden{
      display:none;
    }

.annotationEditorLayer
  :is(.freeTextEditor, .inkEditor, .stampEditor, .highlightEditor) .editToolbar:has(:focus-visible){
      border-color:transparent;
    }

[dir="ltr"] .annotationEditorLayer
  :is(.freeTextEditor, .inkEditor, .stampEditor, .highlightEditor) .editToolbar{
      transform-origin:100% 0;
    }

[dir="rtl"] .annotationEditorLayer
  :is(.freeTextEditor, .inkEditor, .stampEditor, .highlightEditor) .editToolbar{
      transform-origin:0 0;
    }

.annotationEditorLayer
  :is(.freeTextEditor, .inkEditor, .stampEditor, .highlightEditor) .editToolbar .buttons{
      display:flex;
      justify-content:center;
      align-items:center;
      gap:0;
      height:100%;
    }

.annotationEditorLayer
  :is(.freeTextEditor, .inkEditor, .stampEditor, .highlightEditor) .editToolbar .buttons .divider{
        width:1px;
        height:calc(
          2 * var(--editor-toolbar-padding) + var(--editor-toolbar-height)
        );
        background-color:var(--editor-toolbar-border-color);
        display:inline-block;
        margin-inline:2px;
      }

.annotationEditorLayer
  :is(.freeTextEditor, .inkEditor, .stampEditor, .highlightEditor) .editToolbar .buttons .delete{
        width:var(--editor-toolbar-height);
      }

.annotationEditorLayer
  :is(.freeTextEditor, .inkEditor, .stampEditor, .highlightEditor) .editToolbar .buttons .delete::before{
          content:"";
          -webkit-mask-image:var(--editor-toolbar-delete-image);
                  mask-image:var(--editor-toolbar-delete-image);
          -webkit-mask-repeat:no-repeat;
                  mask-repeat:no-repeat;
          -webkit-mask-position:center;
                  mask-position:center;
          display:inline-block;
          background-color:var(--editor-toolbar-fg-color);
          width:100%;
          height:100%;
        }

.annotationEditorLayer
  :is(.freeTextEditor, .inkEditor, .stampEditor, .highlightEditor) .editToolbar .buttons .delete:hover::before{
          background-color:var(--editor-toolbar-hover-fg-color);
        }

.annotationEditorLayer
  :is(.freeTextEditor, .inkEditor, .stampEditor, .highlightEditor) .editToolbar .buttons > *{
        height:var(--editor-toolbar-height);
      }

.annotationEditorLayer
  :is(.freeTextEditor, .inkEditor, .stampEditor, .highlightEditor) .editToolbar .buttons > :not(.divider){
        border:none;
        background-color:transparent;
        cursor:pointer;
      }

.annotationEditorLayer
  :is(.freeTextEditor, .inkEditor, .stampEditor, .highlightEditor) .editToolbar .buttons > :not(.divider):hover{
          border-radius:2px;
          background-color:var(--editor-toolbar-hover-bg-color);
          color:var(--editor-toolbar-hover-fg-color);
          outline:var(--editor-toolbar-hover-outline);
          outline-offset:1px;
        }

.annotationEditorLayer
  :is(.freeTextEditor, .inkEditor, .stampEditor, .highlightEditor) .editToolbar .buttons > :not(.divider):hover:active{
            outline:none;
          }

.annotationEditorLayer
  :is(.freeTextEditor, .inkEditor, .stampEditor, .highlightEditor) .editToolbar .buttons > :not(.divider):focus-visible{
          border-radius:2px;
          outline:2px solid var(--editor-toolbar-focus-outline-color);
        }

.annotationEditorLayer
  :is(.freeTextEditor, .inkEditor, .stampEditor, .highlightEditor) .editToolbar .buttons .altText{
        --alt-text-add-image:url(images/altText_add.svg);
        --alt-text-done-image:url(images/altText_done.svg);

        display:flex;
        align-items:center;
        justify-content:center;
        width:-moz-max-content;
        width:max-content;
        padding-inline:8px;
        pointer-events:all;
        font:menu;
        font-weight:590;
        font-size:12px;
        color:var(--editor-toolbar-fg-color);
      }

.annotationEditorLayer
  :is(.freeTextEditor, .inkEditor, .stampEditor, .highlightEditor) .editToolbar .buttons .altText:disabled{
          pointer-events:none;
        }

.annotationEditorLayer
  :is(.freeTextEditor, .inkEditor, .stampEditor, .highlightEditor) .editToolbar .buttons .altText::before{
          content:"";
          -webkit-mask-image:var(--alt-text-add-image);
                  mask-image:var(--alt-text-add-image);
          -webkit-mask-repeat:no-repeat;
                  mask-repeat:no-repeat;
          -webkit-mask-position:center;
                  mask-position:center;
          display:inline-block;
          width:12px;
          height:13px;
          background-color:var(--editor-toolbar-fg-color);
          margin-inline-end:4px;
        }

.annotationEditorLayer
  :is(.freeTextEditor, .inkEditor, .stampEditor, .highlightEditor) .editToolbar .buttons .altText:hover::before{
          background-color:var(--editor-toolbar-hover-fg-color);
        }

.annotationEditorLayer
  :is(.freeTextEditor, .inkEditor, .stampEditor, .highlightEditor) .editToolbar .buttons .altText.done::before{
          -webkit-mask-image:var(--alt-text-done-image);
                  mask-image:var(--alt-text-done-image);
        }

.annotationEditorLayer
  :is(.freeTextEditor, .inkEditor, .stampEditor, .highlightEditor) .editToolbar .buttons .altText .tooltip{
          display:none;
        }

.annotationEditorLayer
  :is(.freeTextEditor, .inkEditor, .stampEditor, .highlightEditor) .editToolbar .buttons .altText .tooltip.show{
            --alt-text-tooltip-bg:#f0f0f4;
            --alt-text-tooltip-fg:#15141a;
            --alt-text-tooltip-border:#8f8f9d;
            --alt-text-tooltip-shadow:0px 2px 6px 0px rgb(58 57 68 / 0.2);

            display:inline-flex;
            flex-direction:column;
            align-items:center;
            justify-content:center;
            position:absolute;
            top:calc(100% + 2px);
            inset-inline-start:0;
            padding-block:2px 3px;
            padding-inline:3px;
            max-width:300px;
            width:-moz-max-content;
            width:max-content;
            height:auto;
            font-size:12px;

            border:0.5px solid var(--alt-text-tooltip-border);
            background:var(--alt-text-tooltip-bg);
            box-shadow:var(--alt-text-tooltip-shadow);
            color:var(--alt-text-tooltip-fg);

            pointer-events:none;
          }

@media (prefers-color-scheme: dark){

.annotationEditorLayer
  :is(.freeTextEditor, .inkEditor, .stampEditor, .highlightEditor) .editToolbar .buttons .altText .tooltip.show{
              --alt-text-tooltip-bg:#1c1b22;
              --alt-text-tooltip-fg:#fbfbfe;
              --alt-text-tooltip-shadow:0px 2px 6px 0px #15141a;
          }
            }

@media screen and (forced-colors: active){

.annotationEditorLayer
  :is(.freeTextEditor, .inkEditor, .stampEditor, .highlightEditor) .editToolbar .buttons .altText .tooltip.show{
              --alt-text-tooltip-bg:Canvas;
              --alt-text-tooltip-fg:CanvasText;
              --alt-text-tooltip-border:CanvasText;
              --alt-text-tooltip-shadow:none;
          }
            }

.annotationEditorLayer .freeTextEditor{
  padding:calc(var(--freetext-padding) * var(--scale-factor));
  width:auto;
  height:auto;
  touch-action:none;
}

.annotationEditorLayer .freeTextEditor .internal{
  background:transparent;
  border:none;
  inset:0;
  overflow:visible;
  white-space:nowrap;
  font:10px sans-serif;
  line-height:var(--freetext-line-height);
  -webkit-user-select:none;
     -moz-user-select:none;
          user-select:none;
}

.annotationEditorLayer .freeTextEditor .overlay{
  position:absolute;
  display:none;
  background:transparent;
  inset:0;
  width:100%;
  height:100%;
}

.annotationEditorLayer freeTextEditor .overlay.enabled{
  display:block;
}

.annotationEditorLayer .freeTextEditor .internal:empty::before{
  content:attr(default-content);
  color:gray;
}

.annotationEditorLayer .freeTextEditor .internal:focus{
  outline:none;
  -webkit-user-select:auto;
     -moz-user-select:auto;
          user-select:auto;
}

.annotationEditorLayer .inkEditor{
  width:100%;
  height:100%;
}

.annotationEditorLayer .inkEditor.editing{
  cursor:inherit;
}

.annotationEditorLayer .inkEditor .inkEditorCanvas{
  position:absolute;
  inset:0;
  width:100%;
  height:100%;
  touch-action:none;
}

.annotationEditorLayer .stampEditor{
  width:auto;
  height:auto;
}

.annotationEditorLayer .stampEditor canvas{
  width:100%;
  height:100%;
}

.annotationEditorLayer :is(.freeTextEditor, .inkEditor, .stampEditor) > .resizers{
      position:absolute;
      inset:0;
    }

.annotationEditorLayer :is(.freeTextEditor, .inkEditor, .stampEditor) > .resizers.hidden{
        display:none;
      }

.annotationEditorLayer :is(.freeTextEditor, .inkEditor, .stampEditor) > .resizers > .resizer{
        width:var(--resizer-size);
        height:var(--resizer-size);
        background:content-box var(--resizer-bg-color);
        border:var(--focus-outline-around);
        border-radius:2px;
        position:absolute;
      }

.annotationEditorLayer :is(.freeTextEditor, .inkEditor, .stampEditor) > .resizers > .resizer.topLeft{
          top:var(--resizer-shift);
          left:var(--resizer-shift);
        }

.annotationEditorLayer :is(.freeTextEditor, .inkEditor, .stampEditor) > .resizers > .resizer.topMiddle{
          top:var(--resizer-shift);
          left:calc(50% + var(--resizer-shift));
        }

.annotationEditorLayer :is(.freeTextEditor, .inkEditor, .stampEditor) > .resizers > .resizer.topRight{
          top:var(--resizer-shift);
          right:var(--resizer-shift);
        }

.annotationEditorLayer :is(.freeTextEditor, .inkEditor, .stampEditor) > .resizers > .resizer.middleRight{
          top:calc(50% + var(--resizer-shift));
          right:var(--resizer-shift);
        }

.annotationEditorLayer :is(.freeTextEditor, .inkEditor, .stampEditor) > .resizers > .resizer.bottomRight{
          bottom:var(--resizer-shift);
          right:var(--resizer-shift);
        }

.annotationEditorLayer :is(.freeTextEditor, .inkEditor, .stampEditor) > .resizers > .resizer.bottomMiddle{
          bottom:var(--resizer-shift);
          left:calc(50% + var(--resizer-shift));
        }

.annotationEditorLayer :is(.freeTextEditor, .inkEditor, .stampEditor) > .resizers > .resizer.bottomLeft{
          bottom:var(--resizer-shift);
          left:var(--resizer-shift);
        }

.annotationEditorLayer :is(.freeTextEditor, .inkEditor, .stampEditor) > .resizers > .resizer.middleLeft{
          top:calc(50% + var(--resizer-shift));
          left:var(--resizer-shift);
        }

.annotationEditorLayer[data-main-rotation="0"]
    :is([data-editor-rotation="0"], [data-editor-rotation="180"]) > .resizers > .resizer.topLeft,
      .annotationEditorLayer[data-main-rotation="90"]
    :is([data-editor-rotation="270"], [data-editor-rotation="90"]) > .resizers > .resizer.topLeft,
      .annotationEditorLayer[data-main-rotation="180"]
    :is([data-editor-rotation="180"], [data-editor-rotation="0"]) > .resizers > .resizer.topLeft,
      .annotationEditorLayer[data-main-rotation="270"]
    :is([data-editor-rotation="90"], [data-editor-rotation="270"]) > .resizers > .resizer.topLeft,
      .annotationEditorLayer[data-main-rotation="0"]
    :is([data-editor-rotation="0"], [data-editor-rotation="180"]) > .resizers > .resizer.bottomRight,
      .annotationEditorLayer[data-main-rotation="90"]
    :is([data-editor-rotation="270"], [data-editor-rotation="90"]) > .resizers > .resizer.bottomRight,
      .annotationEditorLayer[data-main-rotation="180"]
    :is([data-editor-rotation="180"], [data-editor-rotation="0"]) > .resizers > .resizer.bottomRight,
      .annotationEditorLayer[data-main-rotation="270"]
    :is([data-editor-rotation="90"], [data-editor-rotation="270"]) > .resizers > .resizer.bottomRight{
        cursor:nwse-resize;
      }

.annotationEditorLayer[data-main-rotation="0"]
    :is([data-editor-rotation="0"], [data-editor-rotation="180"]) > .resizers > .resizer.topMiddle,
      .annotationEditorLayer[data-main-rotation="90"]
    :is([data-editor-rotation="270"], [data-editor-rotation="90"]) > .resizers > .resizer.topMiddle,
      .annotationEditorLayer[data-main-rotation="180"]
    :is([data-editor-rotation="180"], [data-editor-rotation="0"]) > .resizers > .resizer.topMiddle,
      .annotationEditorLayer[data-main-rotation="270"]
    :is([data-editor-rotation="90"], [data-editor-rotation="270"]) > .resizers > .resizer.topMiddle,
      .annotationEditorLayer[data-main-rotation="0"]
    :is([data-editor-rotation="0"], [data-editor-rotation="180"]) > .resizers > .resizer.bottomMiddle,
      .annotationEditorLayer[data-main-rotation="90"]
    :is([data-editor-rotation="270"], [data-editor-rotation="90"]) > .resizers > .resizer.bottomMiddle,
      .annotationEditorLayer[data-main-rotation="180"]
    :is([data-editor-rotation="180"], [data-editor-rotation="0"]) > .resizers > .resizer.bottomMiddle,
      .annotationEditorLayer[data-main-rotation="270"]
    :is([data-editor-rotation="90"], [data-editor-rotation="270"]) > .resizers > .resizer.bottomMiddle{
        cursor:ns-resize;
      }

.annotationEditorLayer[data-main-rotation="0"]
    :is([data-editor-rotation="0"], [data-editor-rotation="180"]) > .resizers > .resizer.topRight,
      .annotationEditorLayer[data-main-rotation="90"]
    :is([data-editor-rotation="270"], [data-editor-rotation="90"]) > .resizers > .resizer.topRight,
      .annotationEditorLayer[data-main-rotation="180"]
    :is([data-editor-rotation="180"], [data-editor-rotation="0"]) > .resizers > .resizer.topRight,
      .annotationEditorLayer[data-main-rotation="270"]
    :is([data-editor-rotation="90"], [data-editor-rotation="270"]) > .resizers > .resizer.topRight,
      .annotationEditorLayer[data-main-rotation="0"]
    :is([data-editor-rotation="0"], [data-editor-rotation="180"]) > .resizers > .resizer.bottomLeft,
      .annotationEditorLayer[data-main-rotation="90"]
    :is([data-editor-rotation="270"], [data-editor-rotation="90"]) > .resizers > .resizer.bottomLeft,
      .annotationEditorLayer[data-main-rotation="180"]
    :is([data-editor-rotation="180"], [data-editor-rotation="0"]) > .resizers > .resizer.bottomLeft,
      .annotationEditorLayer[data-main-rotation="270"]
    :is([data-editor-rotation="90"], [data-editor-rotation="270"]) > .resizers > .resizer.bottomLeft{
        cursor:nesw-resize;
      }

.annotationEditorLayer[data-main-rotation="0"]
    :is([data-editor-rotation="0"], [data-editor-rotation="180"]) > .resizers > .resizer.middleRight,
      .annotationEditorLayer[data-main-rotation="90"]
    :is([data-editor-rotation="270"], [data-editor-rotation="90"]) > .resizers > .resizer.middleRight,
      .annotationEditorLayer[data-main-rotation="180"]
    :is([data-editor-rotation="180"], [data-editor-rotation="0"]) > .resizers > .resizer.middleRight,
      .annotationEditorLayer[data-main-rotation="270"]
    :is([data-editor-rotation="90"], [data-editor-rotation="270"]) > .resizers > .resizer.middleRight,
      .annotationEditorLayer[data-main-rotation="0"]
    :is([data-editor-rotation="0"], [data-editor-rotation="180"]) > .resizers > .resizer.middleLeft,
      .annotationEditorLayer[data-main-rotation="90"]
    :is([data-editor-rotation="270"], [data-editor-rotation="90"]) > .resizers > .resizer.middleLeft,
      .annotationEditorLayer[data-main-rotation="180"]
    :is([data-editor-rotation="180"], [data-editor-rotation="0"]) > .resizers > .resizer.middleLeft,
      .annotationEditorLayer[data-main-rotation="270"]
    :is([data-editor-rotation="90"], [data-editor-rotation="270"]) > .resizers > .resizer.middleLeft{
        cursor:ew-resize;
      }

.annotationEditorLayer[data-main-rotation="0"]
    :is([data-editor-rotation="90"], [data-editor-rotation="270"]) > .resizers > .resizer.topLeft,
      .annotationEditorLayer[data-main-rotation="90"]
    :is([data-editor-rotation="0"], [data-editor-rotation="180"]) > .resizers > .resizer.topLeft,
      .annotationEditorLayer[data-main-rotation="180"]
    :is([data-editor-rotation="270"], [data-editor-rotation="90"]) > .resizers > .resizer.topLeft,
      .annotationEditorLayer[data-main-rotation="270"]
    :is([data-editor-rotation="180"], [data-editor-rotation="0"]) > .resizers > .resizer.topLeft,
      .annotationEditorLayer[data-main-rotation="0"]
    :is([data-editor-rotation="90"], [data-editor-rotation="270"]) > .resizers > .resizer.bottomRight,
      .annotationEditorLayer[data-main-rotation="90"]
    :is([data-editor-rotation="0"], [data-editor-rotation="180"]) > .resizers > .resizer.bottomRight,
      .annotationEditorLayer[data-main-rotation="180"]
    :is([data-editor-rotation="270"], [data-editor-rotation="90"]) > .resizers > .resizer.bottomRight,
      .annotationEditorLayer[data-main-rotation="270"]
    :is([data-editor-rotation="180"], [data-editor-rotation="0"]) > .resizers > .resizer.bottomRight{
        cursor:nesw-resize;
      }

.annotationEditorLayer[data-main-rotation="0"]
    :is([data-editor-rotation="90"], [data-editor-rotation="270"]) > .resizers > .resizer.topMiddle,
      .annotationEditorLayer[data-main-rotation="90"]
    :is([data-editor-rotation="0"], [data-editor-rotation="180"]) > .resizers > .resizer.topMiddle,
      .annotationEditorLayer[data-main-rotation="180"]
    :is([data-editor-rotation="270"], [data-editor-rotation="90"]) > .resizers > .resizer.topMiddle,
      .annotationEditorLayer[data-main-rotation="270"]
    :is([data-editor-rotation="180"], [data-editor-rotation="0"]) > .resizers > .resizer.topMiddle,
      .annotationEditorLayer[data-main-rotation="0"]
    :is([data-editor-rotation="90"], [data-editor-rotation="270"]) > .resizers > .resizer.bottomMiddle,
      .annotationEditorLayer[data-main-rotation="90"]
    :is([data-editor-rotation="0"], [data-editor-rotation="180"]) > .resizers > .resizer.bottomMiddle,
      .annotationEditorLayer[data-main-rotation="180"]
    :is([data-editor-rotation="270"], [data-editor-rotation="90"]) > .resizers > .resizer.bottomMiddle,
      .annotationEditorLayer[data-main-rotation="270"]
    :is([data-editor-rotation="180"], [data-editor-rotation="0"]) > .resizers > .resizer.bottomMiddle{
        cursor:ew-resize;
      }

.annotationEditorLayer[data-main-rotation="0"]
    :is([data-editor-rotation="90"], [data-editor-rotation="270"]) > .resizers > .resizer.topRight,
      .annotationEditorLayer[data-main-rotation="90"]
    :is([data-editor-rotation="0"], [data-editor-rotation="180"]) > .resizers > .resizer.topRight,
      .annotationEditorLayer[data-main-rotation="180"]
    :is([data-editor-rotation="270"], [data-editor-rotation="90"]) > .resizers > .resizer.topRight,
      .annotationEditorLayer[data-main-rotation="270"]
    :is([data-editor-rotation="180"], [data-editor-rotation="0"]) > .resizers > .resizer.topRight,
      .annotationEditorLayer[data-main-rotation="0"]
    :is([data-editor-rotation="90"], [data-editor-rotation="270"]) > .resizers > .resizer.bottomLeft,
      .annotationEditorLayer[data-main-rotation="90"]
    :is([data-editor-rotation="0"], [data-editor-rotation="180"]) > .resizers > .resizer.bottomLeft,
      .annotationEditorLayer[data-main-rotation="180"]
    :is([data-editor-rotation="270"], [data-editor-rotation="90"]) > .resizers > .resizer.bottomLeft,
      .annotationEditorLayer[data-main-rotation="270"]
    :is([data-editor-rotation="180"], [data-editor-rotation="0"]) > .resizers > .resizer.bottomLeft{
        cursor:nwse-resize;
      }

.annotationEditorLayer[data-main-rotation="0"]
    :is([data-editor-rotation="90"], [data-editor-rotation="270"]) > .resizers > .resizer.middleRight,
      .annotationEditorLayer[data-main-rotation="90"]
    :is([data-editor-rotation="0"], [data-editor-rotation="180"]) > .resizers > .resizer.middleRight,
      .annotationEditorLayer[data-main-rotation="180"]
    :is([data-editor-rotation="270"], [data-editor-rotation="90"]) > .resizers > .resizer.middleRight,
      .annotationEditorLayer[data-main-rotation="270"]
    :is([data-editor-rotation="180"], [data-editor-rotation="0"]) > .resizers > .resizer.middleRight,
      .annotationEditorLayer[data-main-rotation="0"]
    :is([data-editor-rotation="90"], [data-editor-rotation="270"]) > .resizers > .resizer.middleLeft,
      .annotationEditorLayer[data-main-rotation="90"]
    :is([data-editor-rotation="0"], [data-editor-rotation="180"]) > .resizers > .resizer.middleLeft,
      .annotationEditorLayer[data-main-rotation="180"]
    :is([data-editor-rotation="270"], [data-editor-rotation="90"]) > .resizers > .resizer.middleLeft,
      .annotationEditorLayer[data-main-rotation="270"]
    :is([data-editor-rotation="180"], [data-editor-rotation="0"]) > .resizers > .resizer.middleLeft{
        cursor:ns-resize;
      }

.annotationEditorLayer
    :is(
      [data-main-rotation="0"] [data-editor-rotation="90"],
      [data-main-rotation="90"] [data-editor-rotation="0"],
      [data-main-rotation="180"] [data-editor-rotation="270"],
      [data-main-rotation="270"] [data-editor-rotation="180"]
    ) .editToolbar{
      rotate:270deg;
    }

[dir="ltr"] .annotationEditorLayer
    :is(
      [data-main-rotation="0"] [data-editor-rotation="90"],
      [data-main-rotation="90"] [data-editor-rotation="0"],
      [data-main-rotation="180"] [data-editor-rotation="270"],
      [data-main-rotation="270"] [data-editor-rotation="180"]
    ) .editToolbar{
        inset-inline-end:calc(0px - var(--editor-toolbar-vert-offset));
        inset-block-start:0;
      }

[dir="rtl"] .annotationEditorLayer
    :is(
      [data-main-rotation="0"] [data-editor-rotation="90"],
      [data-main-rotation="90"] [data-editor-rotation="0"],
      [data-main-rotation="180"] [data-editor-rotation="270"],
      [data-main-rotation="270"] [data-editor-rotation="180"]
    ) .editToolbar{
        inset-inline-end:calc(100% + var(--editor-toolbar-vert-offset));
        inset-block-start:0;
      }

.annotationEditorLayer
    :is(
      [data-main-rotation="0"] [data-editor-rotation="180"],
      [data-main-rotation="90"] [data-editor-rotation="90"],
      [data-main-rotation="180"] [data-editor-rotation="0"],
      [data-main-rotation="270"] [data-editor-rotation="270"]
    ) .editToolbar{
      rotate:180deg;
      inset-inline-end:100%;
      inset-block-start:calc(0pc - var(--editor-toolbar-vert-offset));
    }

.annotationEditorLayer
    :is(
      [data-main-rotation="0"] [data-editor-rotation="270"],
      [data-main-rotation="90"] [data-editor-rotation="180"],
      [data-main-rotation="180"] [data-editor-rotation="90"],
      [data-main-rotation="270"] [data-editor-rotation="0"]
    ) .editToolbar{
      rotate:90deg;
    }

[dir="ltr"] .annotationEditorLayer
    :is(
      [data-main-rotation="0"] [data-editor-rotation="270"],
      [data-main-rotation="90"] [data-editor-rotation="180"],
      [data-main-rotation="180"] [data-editor-rotation="90"],
      [data-main-rotation="270"] [data-editor-rotation="0"]
    ) .editToolbar{
        inset-inline-end:calc(100% + var(--editor-toolbar-vert-offset));
        inset-block-start:100%;
      }

[dir="rtl"] .annotationEditorLayer
    :is(
      [data-main-rotation="0"] [data-editor-rotation="270"],
      [data-main-rotation="90"] [data-editor-rotation="180"],
      [data-main-rotation="180"] [data-editor-rotation="90"],
      [data-main-rotation="270"] [data-editor-rotation="0"]
    ) .editToolbar{
        inset-inline-start:calc(0px - var(--editor-toolbar-vert-offset));
        inset-block-start:0;
      }

#altTextDialog{
  --dialog-bg-color:white;
  --dialog-border-color:white;
  --dialog-shadow:0 2px 14px 0 rgb(58 57 68 / 0.2);
  --text-primary-color:#15141a;
  --text-secondary-color:#5b5b66;
  --hover-filter:brightness(0.9);
  --focus-ring-color:#0060df;
  --focus-ring-outline:2px solid var(--focus-ring-color);

  --textarea-border-color:#8f8f9d;
  --textarea-bg-color:white;
  --textarea-fg-color:var(--text-secondary-color);

  --radio-bg-color:#f0f0f4;
  --radio-checked-bg-color:#fbfbfe;
  --radio-border-color:#8f8f9d;
  --radio-checked-border-color:#0060df;

  --button-cancel-bg-color:#f0f0f4;
  --button-cancel-fg-color:var(--text-primary-color);
  --button-cancel-border-color:var(--button-cancel-bg-color);
  --button-cancel-hover-bg-color:var(--button-cancel-bg-color);
  --button-cancel-hover-fg-color:var(--button-cancel-fg-color);
  --button-cancel-hover-border-color:var(--button-cancel-hover-bg-color);

  --button-save-bg-color:#0060df;
  --button-save-fg-color:#fbfbfe;
  --button-save-hover-bg-color:var(--button-save-bg-color);
  --button-save-hover-fg-color:var(--button-save-fg-color);
  --button-save-hover-border-color:var(--button-save-hover-bg-color);

  font:message-box;
  font-size:13px;
  font-weight:400;
  line-height:150%;
  border-radius:4px;
  padding:12px 16px;
  border:1px solid var(--dialog-border-color);
  background:var(--dialog-bg-color);
  color:var(--text-primary-color);
  box-shadow:var(--dialog-shadow);
}

@media (prefers-color-scheme: dark){

#altTextDialog{
    --dialog-bg-color:#1c1b22;
    --dialog-border-color:#1c1b22;
    --dialog-shadow:0 2px 14px 0 #15141a;
    --text-primary-color:#fbfbfe;
    --text-secondary-color:#cfcfd8;
    --focus-ring-color:#0df;
    --hover-filter:brightness(1.4);

    --textarea-bg-color:#42414d;

    --radio-bg-color:#2b2a33;
    --radio-checked-bg-color:#15141a;
    --radio-checked-border-color:#0df;

    --button-cancel-bg-color:#2b2a33;
    --button-save-bg-color:#0df;
    --button-save-fg-color:#15141a;
}
  }

@media screen and (forced-colors: active){

#altTextDialog{
    --dialog-bg-color:Canvas;
    --dialog-border-color:CanvasText;
    --dialog-shadow:none;
    --text-primary-color:CanvasText;
    --text-secondary-color:CanvasText;
    --hover-filter:none;
    --focus-ring-color:ButtonBorder;

    --textarea-border-color:ButtonBorder;
    --textarea-bg-color:Field;
    --textarea-fg-color:ButtonText;

    --radio-bg-color:ButtonFace;
    --radio-checked-bg-color:ButtonFace;
    --radio-border-color:ButtonText;
    --radio-checked-border-color:ButtonText;

    --button-cancel-bg-color:ButtonFace;
    --button-cancel-fg-color:ButtonText;
    --button-cancel-border-color:ButtonText;
    --button-cancel-hover-bg-color:AccentColor;
    --button-cancel-hover-fg-color:AccentColorText;

    --button-save-bg-color:ButtonText;
    --button-save-fg-color:ButtonFace;
    --button-save-hover-bg-color:AccentColor;
    --button-save-hover-fg-color:AccentColorText;
}
  }

#altTextDialog::backdrop{
    -webkit-mask:url(#alttext-manager-mask);
            mask:url(#alttext-manager-mask);
  }

#altTextDialog.positioned{
    margin:0;
  }

#altTextDialog #altTextContainer{
    width:300px;
    height:-moz-fit-content;
    height:fit-content;
    display:inline-flex;
    flex-direction:column;
    align-items:flex-start;
    gap:16px;
  }

#altTextDialog #altTextContainer *:focus-visible{
      outline:var(--focus-ring-outline);
      outline-offset:2px;
    }

#altTextDialog #altTextContainer .radio{
      display:flex;
      flex-direction:column;
      align-items:flex-start;
      gap:4px;
    }

#altTextDialog #altTextContainer .radio .radioButton{
        display:flex;
        gap:8px;
        align-self:stretch;
        align-items:center;
      }

#altTextDialog #altTextContainer .radio .radioButton input{
          -webkit-appearance:none;
             -moz-appearance:none;
                  appearance:none;
          box-sizing:border-box;
          width:16px;
          height:16px;
          border-radius:50%;
          background-color:var(--radio-bg-color);
          border:1px solid var(--radio-border-color);
        }

#altTextDialog #altTextContainer .radio .radioButton input:hover{
            filter:var(--hover-filter);
          }

#altTextDialog #altTextContainer .radio .radioButton input:checked{
            background-color:var(--radio-checked-bg-color);
            border:4px solid var(--radio-checked-border-color);
          }

#altTextDialog #altTextContainer .radio .radioLabel{
        display:flex;
        padding-inline-start:24px;
        align-items:flex-start;
        gap:10px;
        align-self:stretch;
      }

#altTextDialog #altTextContainer .radio .radioLabel span{
          flex:1 0 0;
          font-size:11px;
          color:var(--text-secondary-color);
        }

#altTextDialog #altTextContainer #overallDescription{
      display:flex;
      flex-direction:column;
      align-items:flex-start;
      gap:4px;
      align-self:stretch;
    }

#altTextDialog #altTextContainer #overallDescription span{
        align-self:stretch;
      }

#altTextDialog #altTextContainer #overallDescription .title{
        font-size:13px;
        font-style:normal;
        font-weight:590;
      }

#altTextDialog #altTextContainer #addDescription{
      display:flex;
      flex-direction:column;
      align-items:stretch;
      gap:8px;
    }

#altTextDialog #altTextContainer #addDescription .descriptionArea{
        flex:1;
        padding-inline:24px 10px;
      }

#altTextDialog #altTextContainer #addDescription .descriptionArea textarea{
          font:inherit;
          width:100%;
          min-height:75px;
          padding:8px;
          resize:none;
          margin:0;
          box-sizing:border-box;
          border-radius:4px;
          border:1px solid var(--textarea-border-color);
          background:var(--textarea-bg-color);
          color:var(--textarea-fg-color);
        }

#altTextDialog #altTextContainer #addDescription .descriptionArea textarea:focus{
            outline-offset:0;
            border-color:transparent;
          }

#altTextDialog #altTextContainer #addDescription .descriptionArea textarea:disabled{
            pointer-events:none;
            opacity:0.4;
          }

#altTextDialog #altTextContainer #buttons{
      display:flex;
      justify-content:flex-end;
      align-items:flex-start;
      gap:8px;
      align-self:stretch;
    }

#altTextDialog #altTextContainer #buttons button{
        border-radius:4px;
        border:1px solid;
        font:menu;
        font-weight:600;
        padding:4px 16px;
        width:auto;
        height:32px;
      }

#altTextDialog #altTextContainer #buttons button:hover{
          cursor:pointer;
          filter:var(--hover-filter);
        }

#altTextDialog #altTextContainer #buttons button#altTextCancel{
          color:var(--button-cancel-fg-color);
          background-color:var(--button-cancel-bg-color);
          border-color:var(--button-cancel-border-color);
        }

#altTextDialog #altTextContainer #buttons button#altTextCancel:hover{
            color:var(--button-cancel-hover-fg-color);
            background-color:var(--button-cancel-hover-bg-color);
            border-color:var(--button-cancel-hover-border-color);
          }

#altTextDialog #altTextContainer #buttons button#altTextSave{
          color:var(--button-save-hover-fg-color);
          background-color:var(--button-save-hover-bg-color);
          border-color:var(--button-save-hover-border-color);
          opacity:1;
        }

#altTextDialog #altTextContainer #buttons button#altTextSave:hover{
            color:var(--button-save-hover-fg-color);
            background-color:var(--button-save-hover-bg-color);
            border-color:var(--button-save-hover-border-color);
          }

.colorPicker{
  --hover-outline-color:#0250bb;
  --selected-outline-color:#0060df;
  --swatch-border-color:#cfcfd8;
}

@media (prefers-color-scheme: dark){

.colorPicker{
    --hover-outline-color:#80ebff;
    --selected-outline-color:#aaf2ff;
    --swatch-border-color:#52525e;
}
  }

@media screen and (forced-colors: active){

.colorPicker{
    --hover-outline-color:Highlight;
    --selected-outline-color:var(--hover-outline-color);
    --swatch-border-color:ButtonText;
}
  }

.colorPicker .swatch{
    width:16px;
    height:16px;
    border:1px solid var(--swatch-border-color);
    border-radius:100%;
    outline-offset:2px;
    box-sizing:border-box;
    forced-color-adjust:none;
  }

.colorPicker button:is(:hover, .selected) > .swatch{
    border:none;
  }

.annotationEditorLayer[data-main-rotation="0"] .highlightEditor > .editToolbar{
      rotate:0deg;
    }

.annotationEditorLayer[data-main-rotation="90"] .highlightEditor > .editToolbar{
      rotate:270deg;
    }

.annotationEditorLayer[data-main-rotation="180"] .highlightEditor > .editToolbar{
      rotate:180deg;
    }

.annotationEditorLayer[data-main-rotation="270"] .highlightEditor > .editToolbar{
      rotate:90deg;
    }

.annotationEditorLayer .highlightEditor{
    position:absolute;
    background:transparent;
    z-index:1;
    transform-origin:0 0;
    cursor:auto;
    max-width:100%;
    max-height:100%;
    border:none;
    outline:none;
    pointer-events:none;
    transform:none;
  }

.annotationEditorLayer .highlightEditor .internal{
      position:absolute;
      top:0;
      left:0;
      width:100%;
      height:100%;
      pointer-events:auto;
    }

.annotationEditorLayer .highlightEditor.disabled .internal{
      pointer-events:none;
    }

.annotationEditorLayer .highlightEditor.selectedEditor .internal{
        cursor:pointer;
      }

.annotationEditorLayer .highlightEditor .editToolbar{
      --editor-toolbar-colorpicker-arrow-image:url(images/toolbarButton-menuArrow.svg);

      transform-origin:center !important;
    }

.annotationEditorLayer .highlightEditor .editToolbar .buttons .colorPicker{
          position:relative;
          width:auto;
          display:flex;
          justify-content:center;
          align-items:center;
          gap:4px;
          padding:4px;
        }

.annotationEditorLayer .highlightEditor .editToolbar .buttons .colorPicker::after{
            content:"";
            -webkit-mask-image:var(--editor-toolbar-colorpicker-arrow-image);
                    mask-image:var(--editor-toolbar-colorpicker-arrow-image);
            -webkit-mask-repeat:no-repeat;
                    mask-repeat:no-repeat;
            -webkit-mask-position:center;
                    mask-position:center;
            display:inline-block;
            background-color:var(--editor-toolbar-fg-color);
            width:12px;
            height:12px;
          }

.annotationEditorLayer .highlightEditor .editToolbar .buttons .colorPicker:hover::after{
            background-color:var(--editor-toolbar-hover-fg-color);
          }

.annotationEditorLayer .highlightEditor .editToolbar .buttons .colorPicker:has(.dropdown:not(.hidden)){
            background-color:var(--editor-toolbar-hover-bg-color);
          }

.annotationEditorLayer .highlightEditor .editToolbar .buttons .colorPicker .dropdown{
            position:absolute;
            display:flex;
            justify-content:center;
            align-items:center;
            flex-direction:column;
            gap:11px;
            padding-block:8px;
            border-radius:6px;
            background-color:var(--editor-toolbar-bg-color);
            border:1px solid var(--editor-toolbar-border-color);
            box-shadow:var(--editor-toolbar-shadow);
            inset-block-start:calc(100% + 4px);
            width:calc(100% + 2 * var(--editor-toolbar-padding));
          }

.annotationEditorLayer .highlightEditor .editToolbar .buttons .colorPicker .dropdown button{
              width:100%;
              height:auto;
              border:none;
              cursor:pointer;
              display:flex;
              justify-content:center;
              align-items:center;
              background:none;
            }

.annotationEditorLayer .highlightEditor .editToolbar .buttons .colorPicker .dropdown button:is(:active, :focus-visible){
                outline:none;
              }

.annotationEditorLayer .highlightEditor .editToolbar .buttons .colorPicker .dropdown button > .swatch{
                outline-offset:2px;
              }

.annotationEditorLayer .highlightEditor .editToolbar .buttons .colorPicker .dropdown button[aria-selected="true"] > .swatch{
                outline:2px solid var(--selected-outline-color);
              }

.annotationEditorLayer .highlightEditor .editToolbar .buttons .colorPicker .dropdown button:is(:hover, :active, :focus-visible) > .swatch{
                outline:2px solid var(--hover-outline-color);
              }

.editorParamsToolbar:has(#highlightParamsToolbarContainer){
  padding:unset;
}

#highlightParamsToolbarContainer{
  height:auto;
  padding-inline:10px;
  padding-block:10px 16px;
  display:flex;
  flex-direction:column;
  box-sizing:border-box;
}

#highlightParamsToolbarContainer .colorPicker{
    display:flex;
    flex-direction:column;
    gap:8px;
  }

#highlightParamsToolbarContainer .colorPicker #highlightColorPickerLabel{
      width:-moz-fit-content;
      width:fit-content;
      inset-inline-start:0;
    }

#highlightParamsToolbarContainer .colorPicker .dropdown{
      display:flex;
      justify-content:space-between;
      align-items:center;
      flex-direction:row;
      height:auto;
    }

#highlightParamsToolbarContainer .colorPicker .dropdown button{
        width:auto;
        height:auto;
        border:none;
        cursor:pointer;
        display:flex;
        justify-content:center;
        align-items:center;
        background:none;
        flex:0 0 auto;
      }

#highlightParamsToolbarContainer .colorPicker .dropdown button .swatch{
          width:24px;
          height:24px;
        }

#highlightParamsToolbarContainer .colorPicker .dropdown button:is(:active, :focus-visible){
          outline:none;
        }

#highlightParamsToolbarContainer .colorPicker .dropdown button[aria-selected="true"] > .swatch{
          outline:2px solid var(--selected-outline-color);
        }

#highlightParamsToolbarContainer .colorPicker .dropdown button:is(:hover, :active, :focus-visible) > .swatch{
          outline:2px solid var(--hover-outline-color);
        }

:root{
  --viewer-container-height:0;
  --pdfViewer-padding-bottom:0;
  --page-margin:1px auto -8px;
  --page-border:9px solid transparent;
  --spreadHorizontalWrapped-margin-LR:-3.5px;
  --loading-icon-delay:400ms;
}

@media screen and (forced-colors: active){
  :root{
    --pdfViewer-padding-bottom:9px;
    --page-margin:8px auto -1px;
    --page-border:1px solid CanvasText;
    --spreadHorizontalWrapped-margin-LR:3.5px;
  }
}

[data-main-rotation="90"]{
  transform:rotate(90deg) translateY(-100%);
}
[data-main-rotation="180"]{
  transform:rotate(180deg) translate(-100%, -100%);
}
[data-main-rotation="270"]{
  transform:rotate(270deg) translateX(-100%);
}

#hiddenCopyElement{
  position:absolute;
  top:0;
  left:0;
  width:0;
  height:0;
  display:none;
}

.pdfViewer{
  --scale-factor:1;

  padding-bottom:var(--pdfViewer-padding-bottom);
}

.pdfViewer .canvasWrapper{
  overflow:hidden;
  width:100%;
  height:100%;
  z-index:1;
}

.pdfViewer .page{
  direction:ltr;
  width:816px;
  height:1056px;
  margin:var(--page-margin);
  position:relative;
  overflow:visible;
  border:var(--page-border);
  background-clip:content-box;
  background-color:rgb(255 255 255);
}

.pdfViewer .dummyPage{
  position:relative;
  width:0;
  height:var(--viewer-container-height);
}

.pdfViewer.noUserSelect{
  -webkit-user-select:none;
     -moz-user-select:none;
          user-select:none;
}

.pdfViewer.removePageBorders .page{
  margin:0 auto 10px;
  border:none;
}

.pdfViewer.singlePageView{
  display:inline-block;
}

.pdfViewer.singlePageView .page{
  margin:0;
  border:none;
}

.pdfViewer:is(.scrollHorizontal, .scrollWrapped),
.spread{
  margin-inline:3.5px;
  text-align:center;
}

.pdfViewer.scrollHorizontal,
.spread{
  white-space:nowrap;
}

.pdfViewer.removePageBorders,
.pdfViewer:is(.scrollHorizontal, .scrollWrapped) .spread{
  margin-inline:0;
}

.spread :is(.page, .dummyPage),
.pdfViewer:is(.scrollHorizontal, .scrollWrapped) :is(.page, .spread){
  display:inline-block;
  vertical-align:middle;
}

.spread .page,
.pdfViewer:is(.scrollHorizontal, .scrollWrapped) .page{
  margin-inline:var(--spreadHorizontalWrapped-margin-LR);
}

.pdfViewer.removePageBorders .spread .page,
.pdfViewer.removePageBorders:is(.scrollHorizontal, .scrollWrapped) .page{
  margin-inline:5px;
}

.pdfViewer .page canvas{
  margin:0;
  display:block;
}

.pdfViewer .page canvas .structTree{
  contain:strict;
}

.pdfViewer .page canvas[hidden]{
  display:none;
}

.pdfViewer .page canvas[zooming]{
  width:100%;
  height:100%;
}

.pdfViewer .page.loadingIcon::after{
  position:absolute;
  top:0;
  left:0;
  content:"";
  width:100%;
  height:100%;
  background:url("images/loading-icon.gif") center no-repeat;
  display:none;
  transition-property:display;
  transition-delay:var(--loading-icon-delay);
  z-index:5;
  contain:strict;
}

.pdfViewer .page.loading::after{
  display:block;
}

.pdfViewer .page:not(.loading)::after{
  transition-property:none;
  display:none;
}

.pdfPresentationMode .pdfViewer{
  padding-bottom:0;
}

.pdfPresentationMode .spread{
  margin:0;
}

.pdfPresentationMode .pdfViewer .page{
  margin:0 auto;
  border:2px solid transparent;
}
`;

css += `
/* custom additional pdf.js css */

/* smoothes out text selection */
/* its a bit scary that this seems necessary, but oh well */
.textLayer span {
    min-height: 2em !important;
}

/* hide annotation layer popups but keep non-popup annotations visible */
.annotationLayer * {
  display: none;
}
`;
