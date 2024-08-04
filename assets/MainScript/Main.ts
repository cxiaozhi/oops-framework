import {_decorator, Component, Node} from "cc";
import {oops} from "../../extensions/oops-plugin-framework/assets/core/Oops";
import {Root} from "../../extensions/oops-plugin-framework/assets/core/Root";
import {macro} from "cc";
import {DynamicAtlasManager} from "cc";
import {MainUIConfigData, MainUIID} from "./MainGuiConfig";
import {JsonUtil} from "../../extensions/oops-plugin-framework/assets/core/utils/JsonUtil";
const {ccclass, property} = _decorator;
macro.CLEANUP_IMAGE_CACHE = false;
DynamicAtlasManager.instance.enabled = true;
DynamicAtlasManager.instance.maxFrameSize = 512;
@ccclass("Main")
export class Main extends Root {
    protected initGui(): void {
        console.log("执行了");

        oops.gui.init(MainUIConfigData);
    }
    run() {
        console.log("打开界面");

        oops.gui.open(MainUIID.LoginUI);
    }
    update(deltaTime: number) {}
}
