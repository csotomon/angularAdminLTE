export as namespace sparkLine;
export = SparkLine;

declare function SparkLine(element: HTMLElement, options);

// tslint:disable-next-line:no-namespace
declare namespace SparkLine {
    export function init(element: HTMLElement, options);
    //export function draw (Array<number>);
}
