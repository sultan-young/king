import ComponentBase from "../../framework/message-system/componentBase";
import ManagerCenter from "../../framework/message-system/ManagerCenter";
import Message, { MessageType } from "../../framework/message-system/message";

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends ComponentBase {


    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {
        this.node.on(cc.Node.EventType.MOUSE_DOWN, ()=> {
            ManagerCenter.sendCustomMessage(MessageType.BASE_TYPE.UI, MessageType.UI.updateCardPumpShow, true);
        }, this)
    }

    // update (dt) {}
}
