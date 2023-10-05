/// <reference path="../../../internal.d.ts" />

declare namespace _ZoteroTypes {
  namespace Reader {
    type pdfjs = typeof import("pdfjs-dist");
    type PromiseCapability =
      typeof import("pdfjs-dist/types/src/shared/util").PromiseCapability;
    type PDFPageProxy =
      typeof import("pdfjs-dist/types/src/display/api").PDFPageProxy;
    type PDFDocumentProxy =
      typeof import("pdfjs-dist/types/src/display/api").PDFDocumentProxy;
    type PDFDocumentLoadingTask =
      typeof import("pdfjs-dist/types/src/display/api").PDFDocumentLoadingTask;
    type PDFViewer = typeof import("pdfjs-dist/types/web/pdf_viewer").PDFViewer;
    type PDFThumbnailViewer =
      typeof import("pdfjs-dist/types/web/pdf_thumbnail_viewer").PDFThumbnailViewer;
    type PDFLinkService =
      typeof import("pdfjs-dist/types/web/pdf_link_service").PDFLinkService;
    type PDFHistory =
      typeof import("pdfjs-dist/types/web/pdf_history").PDFHistory;
    type PDFFindController =
      typeof import("pdfjs-dist/types/web/pdf_find_controller").PDFFindController;
    type PDFRenderingQueue =
      typeof import("pdfjs-dist/types/web/pdf_rendering_queue").PDFRenderingQueue;
    type PDFScriptingManager =
      typeof import("pdfjs-dist/types/web/pdf_scripting_manager").PDFScriptingManager;
    type EventBus = typeof import("pdfjs-dist/types/web/event_utils").EventBus;

    interface PDFViewerApplication extends anyObj {
      pdfDocument?: PDFDocumentProxy;
      pdfLoadingTask?: PDFDocumentLoadingTask;
      pdfViewer?: PDFViewer;
      pdfThumbnailViewer?: PDFThumbnailViewer;
      pdfLinkService?: PDFLinkService;
      pdfHistory?: PDFHistory;
      pdfScriptingManager?: PDFScriptingManager;
      findController?: PDFFindController;
      eventBus?: EventBus;
      url: string;
      baseUrl: string;
      _initializedCapability: PromiseCapability;
      readonly initialized: boolean;
      readonly initializedPromise: Promise<void>;
      zoomReset(): void;
      readonly pagesCount: number;
      page: number;
      readonly supportsPrinting: boolean;
      readonly supportsFullscreen: boolean;
      readonly supportsIntegratedFind: boolean;
      readonly supportsDocumentFonts: boolean;
      readonly supportsPinchToZoom: boolean;
      initPassiveLoading(): void;
      setTitleUsingUrl(url?: string, downloadUrl?: string): void;
      setTitle(title?: string): void;
      readonly _docFilename: string;
      _hideViewBookmark(): void;
      close(): Promise<void>;
      open(args?: anyObj): Promise<void>;
      _ensureDownloadComplete(): void;
      download(options?: anyObj): Promise<void>;
      save(options?: anyObj): Promise<void>;
      downloadOrSave(options?: anyObj): void;
      openInExternalApp(): void;
      _documentError(message: string, moreInfo?: anyObj): void;

      /**
       * Report the error; used for errors affecting e.g. only a single page.
       * @param {string} message - A message that is human readable.
       * @param {Object} [moreInfo] - Further information about the error that is
       *                              more technical. Should have a 'message' and
       *                              optionally a 'stack' property.
       */
      _otherError(message: string, moreInfo?: anyObj): void;

      progress(level: number): void;
      load(pdfDocument: PDFDocumentProxy): void;
      _scriptingDocProperties(pdfDocument: PDFDocumentProxy): Promise<anyObj>;
      _initializeMetadata(pdfDocument: PDFDocumentProxy): Promise<void>;
      _initializePageLabels(pdfDocument: PDFDocumentProxy): Promise<void>;
      _initializePdfHistory({
        fingerprint,
        viewOnLoad,
        initialDest,
      }: anyObj): void;
      _initializeAnnotationStorageCallbacks(
        pdfDocument: PDFDocumentProxy
      ): void;
      _cleanup(): void;
      forceRendering(): void;
      beforePrint(): void;
      afterPrint(): void;
      rotatePages(delta: number): void;
      requestPresentationMode(): void;
      triggerPrinting(): void;
      bindEvents(): void;
      bindWindowEvents(): void;
      unbindEvents(): void;
      unbindWindowEvents(): void;

      /**
       * Used together with the integration-tests, to enable awaiting full
       * initialization of the scripting/sandbox.
       */
      readonly scriptingReady: boolean;
    }
  }
}
