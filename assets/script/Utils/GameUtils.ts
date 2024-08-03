import {oops} from "../../../extensions/oops-plugin-framework/assets/core/Oops";
import {UIID} from "../config/GuiConfig";

export class GameUtils {
    static open(uiid: UIID) {
        oops.gui.open(uiid);
    }
}
