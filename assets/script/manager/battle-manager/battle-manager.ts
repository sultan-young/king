import ComponentBase from "../../framework/message-system/componentBase";
import ManagerBase from "../../framework/message-system/ManagerBase";
import { MessageType } from "../../framework/message-system/message";

const {ccclass, property} = cc._decorator;

@ccclass
export default class BattleManger extends ManagerBase {

    // 大管理类必须是单例
    static instance: BattleManger;

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        super.onLoad();
        BattleManger.instance = this;
    }

    setMessageType() {
        return MessageType.BASE_TYPE.Battle;
    }

    // 注册组件消息
    registerReceiver(component: ComponentBase) {
        super.registerReceiver(component);
    }

    

    // receiveMessage() {

    // }
}
