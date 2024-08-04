import {LayerType, UIConfig} from "../../../extensions/oops-plugin-framework/assets/core/gui/layer/LayerManager";

export enum UIID {
    /** 游戏大厅 */
    HallUI = 1,
}

export var UIConfigData: {[key: number]: UIConfig} = {
    [UIID.HallUI]: {layer: LayerType.UI, prefab: "loading/prefab/loading", bundle: "resources"},
};
