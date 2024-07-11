import { inject, provideDependencies } from "dependency-injection";
import { BackgroundStyleT } from "document/BackgroundGenerators";
import FileSystemElectron from "persistence/FileSystemElectron";
import { SystemClipboardElectron } from "util/SystemClipboardElectron";
import Wournal from "wournal";
import './electron-api-client';
import { ApiClient } from "./electron-api-client";
import { ErrorPopup } from "app/error-popup";
import { getLogger, setupLogging } from "util/Logging";
import { waitInitUi5 } from "util/ui5-boot";
import { ConfigRepositoryLocalStorage } from "persistence/ConfigRepositoryLocalStorage";
import environment from "Shared/environment";

import 'res/font/roboto.css';
import 'res/font/roboto-mono.css';
import { mkConfigRepositoryElectronFS } from "persistence/ConfigRepositoryElectronFS";

setupLogging();

const LOG = getLogger(__filename);

function setupErrorPopup() {
  const errorDialog = new ErrorPopup();
  document.body.appendChild(errorDialog);

  window.addEventListener('error', e => {
    errorDialog.show(e.error);
    e.stopPropagation();
  });

  window.addEventListener('unhandledrejection', e => {
    errorDialog.show(e.reason);
  });
}

async function maybeLoadArgvDoc(wournal: Wournal) {
  // electron-forge seems to run wournal with an argv of "." by default
  if (!environment.production) return;

  const argv = await ApiClient["process:argv"]();
  if (argv.positionals.length > 3) return; // dev
  if (argv.positionals.length > 1) {
    const path = argv.positionals[argv.positionals.length - 1];
    const exists = await wournal.api.loadDocument(path);
    if (!exists) {
      wournal.api.newDocument({
        backgroundColor: argv.values["page-color"] as string ?? '#FFFFFF',
        backgroundStyle: argv.values["page-style"] as BackgroundStyleT ?? 'graph',
        height: parseInt(argv.values["page-height"] as string ?? '297'),
        width:  parseInt(argv.values["page-width"]  as string ?? '210'),
      }, path);
    }
  }
}

async function main() {

  provideDependencies({
    'FileSystem': FileSystemElectron,
    'SystemClipboard': SystemClipboardElectron,
    'ConfigRepository': await mkConfigRepositoryElectronFS(),
    'sourceLocation': await ApiClient["process:getRendererSourceDir"](),
  })

  setupErrorPopup();

  console.log(inject('sourceLocation'));

  const config = await inject('ConfigRepository').load();
  const wournal = new Wournal(config);

  window.electron.on["window:close"](async () => {
    LOG.info('OS attempting to close window');
    if (!(await wournal.api.promptClosingUnsaved())) {
      LOG.info('Closing Window');
      ApiClient["window:destroy"]();
    }
  })

  wournal.shortcutsCtx.addEl(document);

  ApiClient['window:setZoom'](config.zoomUI);
  const l = document.createElement('div');
  l.innerText = 'loading...';
  document.body.appendChild(l);
  await waitInitUi5();
  l.remove();


  document.body.appendChild(wournal);
  maybeLoadArgvDoc(wournal);
  LOG.info('Startup Complete')
}

main();
