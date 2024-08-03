import {Node} from "cc";
import {UICallbacks} from "../../../extensions/oops-plugin-framework/assets/core/gui/layer/Defines";
import {UIID} from "./GuiConfig";

export const CallBackConfig: {[key: number]: UICallbacks} = {
    [UIID.HallUI]: {
        // 窗口添加到界面完成事件
        onAdded: (node: Node, params: any) => {},
        // 窗口节点 destroy 之后回调
        onRemoved: (node: Node | null, params: any) => {},
    },
};
