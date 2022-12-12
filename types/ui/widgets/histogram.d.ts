import { Builder, Widget } from "./widget";
export declare class Histogram extends Widget<Histogram.Configuration> {
    build(builder?: Builder): void;
    toNative(config: Histogram.Configuration): Record<string, any>;
    updateItems(items: Array<Histogram.Item>): void;
}
export declare namespace Histogram {
    interface AxisConfiguration {
        padding: number;
        interval: number;
        thickness: number;
        count: number;
        color: number;
    }
    interface LabelConfiguration {
        x: number;
        y: number;
        width: number;
        height: number;
        spacing: number;
        color: number;
    }
    interface Item {
        value: number;
        xLabel: string;
        yLabel: string;
    }
    interface Configuration {
        x: number;
        y: number;
        width: number;
        height: number;
        items: Array<Item>;
        columnWidth: number;
        columnSpacing: number;
        columnRadius: number;
        columnColor: number;
        xAxis: AxisConfiguration;
        yAxis: AxisConfiguration;
        xLabel: LabelConfiguration;
        yLabel: LabelConfiguration;
    }
}
