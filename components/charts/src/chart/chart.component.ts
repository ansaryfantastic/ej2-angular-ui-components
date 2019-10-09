import { Component, ElementRef, ViewContainerRef, ChangeDetectionStrategy, Renderer2, Injector, ValueProvider, ContentChild } from '@angular/core';
import { ComponentBase, IComponentBase, applyMixins, ComponentMixins, PropertyCollectionInfo, setValue } from '@syncfusion/ej2-angular-base';
import { Chart } from '@syncfusion/ej2-charts';
import { Template } from '@syncfusion/ej2-angular-base';
import { SeriesCollectionDirective } from './series.directive';
import { AxesDirective } from './axes.directive';
import { RowsDirective } from './rows.directive';
import { ColumnsDirective } from './columns.directive';
import { AnnotationsDirective } from './annotations.directive';
import { SelectedDataIndexesDirective } from './selecteddataindexes.directive';
import { IndicatorsDirective } from './indicators.directive';

export const inputs: string[] = ['allowMultiSelection','annotations','axes','background','border','chartArea','columns','crosshair','currencyCode','dataSource','description','enableAnimation','enableCanvas','enableExport','enablePersistence','enableRtl','enableSideBySidePlacement','height','indicators','isMultiSelect','isTransposed','legendSettings','locale','margin','palettes','primaryXAxis','primaryYAxis','rows','selectedDataIndexes','selectionMode','series','subTitle','subTitleStyle','tabIndex','theme','title','titleStyle','tooltip','useGroupingSeparator','width','zoomSettings'];
export const outputs: string[] = ['animationComplete','annotationRender','axisLabelRender','axisMultiLabelRender','axisRangeCalculated','beforePrint','chartMouseClick','chartMouseDown','chartMouseLeave','chartMouseMove','chartMouseUp','drag','dragComplete','dragEnd','dragStart','legendClick','legendRender','load','loaded','multiLevelLabelClick','pointClick','pointMove','pointRender','resized','scrollChanged','scrollEnd','scrollStart','selectionComplete','seriesRender','textRender','tooltipRender','zoomComplete','dataSourceChange'];
export const twoWays: string[] = ['dataSource'];

/**
 * Chart Component
 * ```html
 * <ejschart></ejschart>
 * ```
 */
@Component({
    selector: 'ejs-chart',
    inputs: inputs,
    outputs: outputs,
    template: '',
    changeDetection: ChangeDetectionStrategy.OnPush,
    queries: {
        childSeries: new ContentChild(SeriesCollectionDirective), 
        childAxes: new ContentChild(AxesDirective), 
        childRows: new ContentChild(RowsDirective), 
        childColumns: new ContentChild(ColumnsDirective), 
        childAnnotations: new ContentChild(AnnotationsDirective), 
        childSelectedDataIndexes: new ContentChild(SelectedDataIndexesDirective), 
        childIndicators: new ContentChild(IndicatorsDirective)
    }
})
@ComponentMixins([ComponentBase])
export class ChartComponent extends Chart implements IComponentBase {
    public childSeries: any;
    public childAxes: any;
    public childRows: any;
    public childColumns: any;
    public childAnnotations: any;
    public childSelectedDataIndexes: any;
    public childIndicators: any;
    public tags: string[] = ['series', 'axes', 'rows', 'columns', 'annotations', 'selectedDataIndexes', 'indicators'];
    public dataSourceChange: any;
    @ContentChild('tooltipTemplate')
    @Template()
    public tooltip_template: any;

    constructor(private ngEle: ElementRef, private srenderer: Renderer2, private viewContainerRef:ViewContainerRef, private injector: Injector) {
        super();
        this.element = this.ngEle.nativeElement;
        this.injectedModules = this.injectedModules || [];
        try {
                let mod = this.injector.get('ChartsLineSeries');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }

                let mod = this.injector.get('ChartsScatterSeries');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }

                let mod = this.injector.get('ChartsColumnSeries');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }

                let mod = this.injector.get('ChartsSplineSeries');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }

                let mod = this.injector.get('ChartsSplineAreaSeries');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }

                let mod = this.injector.get('ChartsStripLine');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }

                let mod = this.injector.get('ChartsAreaSeries');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }

                let mod = this.injector.get('ChartsScrollBar');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }

                let mod = this.injector.get('ChartsStepLineSeries');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }

                let mod = this.injector.get('ChartsStepAreaSeries');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }

                let mod = this.injector.get('ChartsStackingColumnSeries');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }

                let mod = this.injector.get('ChartsStackingLineSeries');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }

                let mod = this.injector.get('ChartsStackingAreaSeries');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }

                let mod = this.injector.get('ChartsBarSeries');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }

                let mod = this.injector.get('ChartsStackingBarSeries');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }

                let mod = this.injector.get('ChartsRangeColumnSeries');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }

                let mod = this.injector.get('ChartsBubbleSeries');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }

                let mod = this.injector.get('ChartsTooltip');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }

                let mod = this.injector.get('ChartsCrosshair');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }

                let mod = this.injector.get('ChartsCategory');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }

                let mod = this.injector.get('ChartsDateTime');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }

                let mod = this.injector.get('ChartsLogarithmic');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }

                let mod = this.injector.get('ChartsLegend');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }

                let mod = this.injector.get('ChartsZoom');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }

                let mod = this.injector.get('ChartsDataLabel');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }

                let mod = this.injector.get('ChartsSelection');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }

                let mod = this.injector.get('ChartsChartAnnotation');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }

                let mod = this.injector.get('ChartsHiloSeries');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }

                let mod = this.injector.get('ChartsHiloOpenCloseSeries');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }

                let mod = this.injector.get('ChartsWaterfallSeries');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }

                let mod = this.injector.get('ChartsRangeAreaSeries');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }

                let mod = this.injector.get('ChartsCandleSeries');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }

                let mod = this.injector.get('ChartsPolarSeries');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }

                let mod = this.injector.get('ChartsRadarSeries');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }

                let mod = this.injector.get('ChartsSmaIndicator');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }

                let mod = this.injector.get('ChartsTmaIndicator');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }

                let mod = this.injector.get('ChartsEmaIndicator');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }

                let mod = this.injector.get('ChartsAccumulationDistributionIndicator');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }

                let mod = this.injector.get('ChartsMacdIndicator');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }

                let mod = this.injector.get('ChartsAtrIndicator');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }

                let mod = this.injector.get('ChartsRsiIndicator');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }

                let mod = this.injector.get('ChartsMomentumIndicator');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }

                let mod = this.injector.get('ChartsStochasticIndicator');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }

                let mod = this.injector.get('ChartsBollingerBands');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }

                let mod = this.injector.get('ChartsBoxAndWhiskerSeries');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }

                let mod = this.injector.get('ChartsHistogramSeries');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }

                let mod = this.injector.get('ChartsErrorBar');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }

                let mod = this.injector.get('ChartsTrendlines');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }

                let mod = this.injector.get('ChartsDateTimeCategory');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }

                let mod = this.injector.get('ChartsMultiColoredLineSeries');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }

                let mod = this.injector.get('ChartsMultiColoredAreaSeries');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }

                let mod = this.injector.get('ChartsMultiLevelLabel');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }

                let mod = this.injector.get('ChartsParetoSeries');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }

                let mod = this.injector.get('ChartsExport');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }

                let mod = this.injector.get('ChartsDataEditing');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }

        this.registerEvents(outputs);
        this.addTwoWay.call(this, twoWays);
        setValue('currentInstance', this, this.viewContainerRef);
    }

    public ngOnInit() {
    }

    public ngAfterViewInit(): void {
    }

    public ngOnDestroy(): void {
    }

    public ngAfterContentChecked(): void {
    }

    public registerEvents: (eventList: string[]) => void;
    public addTwoWay: (propList: string[]) => void;
}
