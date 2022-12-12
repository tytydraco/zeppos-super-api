import { Builder, Widget } from "./widget"

export class TextScrollList extends Widget<TextScrollList.Configuration> {
    private getDataArrayForItems(items: Array<string>): Array<{ value: string }> {
        return items.map((item) => ({ value: item }))
    }

    build(builder: Builder = hmUI): void {
        this.widget = builder.createWidget(hmUI.widget.SCROLL_LIST, this.toNative(this.config))
    }

    toNative(config: TextScrollList.Configuration): Record<string, any> {
        return {
            x: config.x,
            y: config.y,
            w: config.width,
            h: config.height,
            item_space: config.itemSpacing,
            item_config: {
                item_height: config.itemHeight,
                item_bg_color: config.itemBackgroundColor,
                item_bg_radius: config.itemBackgroundRadius,
                text_view: [{
                    x: config.itemConfig.x,
                    y: config.itemConfig.y,
                    w: config.itemConfig.width,
                    h: config.itemConfig.height,
                    color: config.itemConfig.color,
                    text_size: config.itemConfig.fontSize,
                    key: 'value',
                }],
                text_view_count: 1,
            },
            item_config_count: 1,
            data_array: this.getDataArrayForItems(config.items),
            data_count: config.items.length,
            item_click_func: (_: any, index: number) => config.onClick(index),
            on_page: config.resetPositionOnUpdate ? 0 : 1,
        }
    }

    updateItems(items: Array<string>) {
        this.widget.setProperty(hmUI.prop.UPDATE_DATA, {
            data_array: this.getDataArrayForItems(items),
            data_count: items.length,
        })
    }
}

export namespace TextScrollList {
    export interface ItemConfig {
        x: number,
        y: number,
        width: number,
        height: number,
        text: string,
        color?: number,
        fontSize?: number,
    }

    export interface Configuration {
        x: number,
        y: number,
        width: number,
        height: number,
        items: Array<string>,
        itemConfig: ItemConfig,
        itemHeight: number,
        itemBackgroundColor: number,
        itemBackgroundRadius: number,

        itemSpacing?: number,
        resetPositionOnUpdate?: boolean,
        onClick?: (index: number) => void,
    }
}