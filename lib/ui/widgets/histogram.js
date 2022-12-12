import { Widget } from "./widget";
export class Histogram extends Widget {
    build(builder = hmUI) {
        this.widget = builder.createWidget(hmUI.widget.HISTOGRAM, this.toNative(this.config));
    }
    toNative(config) {
        const dataArray = config.items.map((item) => item.value);
        const dataMin = Math.min(...dataArray);
        const dataMax = Math.max(...dataArray);
        const xLabelArray = config.items.map((item) => item.xLabel);
        const yLabelArray = config.items.map((item) => item.yLabel);
        return {
            x: config.x,
            y: config.y,
            w: config.width,
            h: config.height,
            item_width: config.columnWidth,
            item_space: config.columnSpacing,
            item_radius: config.columnRadius,
            item_color: config.columnColor,
            data_min_value: dataMin,
            data_max_value: dataMax,
            data_array: dataArray,
            data_count: config.items.length,
            xline: {
                padding: config.xAxis.padding,
                space: config.xAxis.interval,
                start: 0,
                end: config.height,
                width: config.xAxis.thickness,
                count: config.xAxis.count,
                color: config.xAxis.color,
            },
            xText: {
                x: config.xLabel.x,
                y: config.xLabel.y,
                w: config.xLabel.width,
                h: config.xLabel.height,
                space: config.xLabel.spacing,
                color: config.xLabel.color,
                data_array: xLabelArray,
                count: xLabelArray.length,
            },
            yline: {
                padding: config.yAxis.padding,
                space: config.yAxis.interval,
                start: 0,
                end: config.width,
                width: config.yAxis.thickness,
                count: config.yAxis.count,
                color: config.yAxis.color,
            },
            yText: {
                x: config.yLabel.x,
                y: config.yLabel.y,
                w: config.yLabel.width,
                h: config.yLabel.height,
                space: config.yLabel.spacing,
                color: config.yLabel.color,
                data_array: yLabelArray,
                count: yLabelArray.length,
            }
        };
    }
    updateItems(items) {
        this.widget.setProperty(hmUI.prop.UPDATE_DATA, {
            data_array: items.map((item) => item.value),
            data_count: items.length,
        });
    }
}
