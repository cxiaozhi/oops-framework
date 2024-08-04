import {LayerType, UIConfig} from "../../extensions/oops-plugin-framework/assets/core/gui/layer/LayerManager";

export enum MainUIID {
    /** 登录界面 */
    LoginUI = 1,
}

export const MainUIConfigData: {[key: number]: UIConfig} = {
    [MainUIID.LoginUI]: {layer: LayerType.UI, prefab: "prefab/Test"},
};
