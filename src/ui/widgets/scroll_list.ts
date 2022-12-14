import { Widget } from "./widget"

export class ScrollList extends Widget<ScrollList.Configuration> {
    private getDataArrayForItems(items: Array<string>): Array<{ value: string }> {
        return items.map((item) => ({ value: item }))
    }

    build(builder = hmUI): void {
        this.widget = builder.createWidget(hmUI.widget.SCROLL_LIST, this.toNative(this.config))
    }

    toNative(config: ScrollList.Configuration): Record<string, any> {
        return {
            x: config.x,
            y: config.y,
            w: config.width,
            h: config.height,
            item_space: config.itemSpacing,
            item_config: {
                item_height: config.itemHeight ?? config.height / 3,
                item_bg_color: config.itemBackgroundColor ?? 0x000000,
                item_bg_radius: config.itemBackgroundRadius ?? 0,
                text_view: (config.type == ScrollList.Type.Text) ? [{
                    x: config.itemConfig.x,
                    y: config.itemConfig.y,
                    w: config.itemConfig.width ?? config.width,
                    h: config.itemConfig.height ?? config.itemHeight,
                    color: config.itemConfig.textColor,
                    text_size: config.itemConfig.fontSize,
                    key: 'value',
                }] : undefined,
                text_view_count: (config.type == ScrollList.Type.Text) ? 1 : 0,
                image_view: (config.type == ScrollList.Type.Image) ? [{
                    x: config.itemConfig.x,
                    y: config.itemConfig.y,
                    w: config.itemConfig.width ?? config.width,
                    h: config.itemConfig.height ?? config.itemHeight,
                    key: 'value',
                }] : undefined,
                image_view_count: (config.type == ScrollList.Type.Image) ? 1 : 0,
            },
            item_config_count: 1,
            data_array: this.getDataArrayForItems(config.items),
            data_count: config.items.length,
            item_click_func: (config.onClick !== undefined) ? ((_: any, index: number) => config.onClick!(index)) : undefined,
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

export namespace ScrollList {
    export enum Type {
        Text,
        Image,
    }

    export interface ItemConfig {
        x: number,
        y: number,

        width?: number,
        height?: number,
        text?: string,
        textColor?: number,
        fontSize?: number,
    }

    export interface Configuration {
        type: Type,

        x: number,
        y: number,
        width: number,
        height: number,
        items: Array<string>,
        itemConfig: ItemConfig,

        itemBackgroundColor?: number,
        itemBackgroundRadius?: number,
        itemHeight?: number,
        itemSpacing?: number,
        resetPositionOnUpdate?: boolean,
        onClick?: (index: number) => void,
    }
}