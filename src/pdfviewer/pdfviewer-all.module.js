var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PdfViewerModule } from './pdfviewer.module';
import { LinkAnnotation, BookmarkView, Magnification, ThumbnailView, Toolbar, Navigation, Print, TextSelection, TextSearch, Annotation, FormFields } from '@syncfusion/ej2-pdfviewer';
export var LinkAnnotationService = { provide: 'PdfViewerLinkAnnotation', useValue: LinkAnnotation };
export var BookmarkViewService = { provide: 'PdfViewerBookmarkView', useValue: BookmarkView };
export var MagnificationService = { provide: 'PdfViewerMagnification', useValue: Magnification };
export var ThumbnailViewService = { provide: 'PdfViewerThumbnailView', useValue: ThumbnailView };
export var ToolbarService = { provide: 'PdfViewerToolbar', useValue: Toolbar };
export var NavigationService = { provide: 'PdfViewerNavigation', useValue: Navigation };
export var PrintService = { provide: 'PdfViewerPrint', useValue: Print };
export var TextSelectionService = { provide: 'PdfViewerTextSelection', useValue: TextSelection };
export var TextSearchService = { provide: 'PdfViewerTextSearch', useValue: TextSearch };
export var AnnotationService = { provide: 'PdfViewerAnnotation', useValue: Annotation };
export var FormFieldsService = { provide: 'PdfViewerFormFields', useValue: FormFields };
/**
 * NgModule definition for the PdfViewer component with providers.
 */
var PdfViewerAllModule = (function () {
    function PdfViewerAllModule() {
    }
    return PdfViewerAllModule;
}());
PdfViewerAllModule = __decorate([
    NgModule({
        imports: [CommonModule, PdfViewerModule],
        exports: [
            PdfViewerModule
        ],
        providers: [
            LinkAnnotationService,
            BookmarkViewService,
            MagnificationService,
            ThumbnailViewService,
            ToolbarService,
            NavigationService,
            PrintService,
            TextSelectionService,
            TextSearchService,
            AnnotationService,
            FormFieldsService
        ]
    })
], PdfViewerAllModule);
export { PdfViewerAllModule };
