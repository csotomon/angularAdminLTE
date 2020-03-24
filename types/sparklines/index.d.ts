export as namespace sparkLine;
export = Sparkline;

declare function Sparkline(element: HTMLElement, options: Sparkline.Options): Sparkline.SparkLine;

// tslint:disable-next-line:no-namespace
declare namespace Sparkline {
  export function init(element: HTMLElement, options: Options): SparkLine;
  // export function draw (Array<number>);
  interface SparkLine extends Object {
    element: HTMLElement;
    options: any; // Sparkline.options;
    canvas: any;
    context: CanvasRenderingContext2D;
    ratio: number;
  }

  class Options {
    width: 100;
    height?: number;
    lineColorb: 'black';
    lineWidthb: 1.5;
    startColor: 'transparent';
    endColor: 'black';
    maxColor: 'transparent';
    minColor: 'transparent';
    minValue?: number;
    maxValue?: number;
    minMaxValue: number;
    maxMinValue: number;
    dotRadius: 2.5;
    tooltip?: null;
    fillBelow: true;
    fillLighten: 0.5;
    startLine: false;
    endLine: false;
    minLine: false;
    maxLine: false;
    bottomLine: false;
    topLine: false;
    averageLine: false;
  }
}
