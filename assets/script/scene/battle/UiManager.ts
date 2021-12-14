import ManagerBase from "../../framework/message-system/ManagerBase";
import { MessageType } from "../../framework/message-system/message";

const {ccclass, property} = cc._decorator;

@ccclass
export default class UIManager extends ManagerBase {

    // 大管理类必须是单例
    static instance: UIManager;

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        super.onLoad();
        UIManager.instance = this;
    }

    setMessageType() {
        return MessageType.BASE_TYPE.UI;
    }

    // receiveMessage() {

    // }
}
