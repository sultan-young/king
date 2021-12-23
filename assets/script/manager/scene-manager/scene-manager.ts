import ComponentBase from "../../framework/message-system/componentBase";
import ManagerBase from "../../framework/message-system/ManagerBase";
import { MessageType } from "../../framework/message-system/message";

const {ccclass, property} = cc._decorator;

@ccclass
export default class ResManager extends ManagerBase {

    // 大管理类必须是单例
    static instance: ResManager;

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        super.onLoad();
        ResManager.instance = this;
        this.registerReceiver(this);
    }

    setMessageType() {
        return MessageType.BASE_TYPE.Resource;
    }

    // 注册组件消息
    registerReceiver(component: ComponentBase) {
        super.registerReceiver(component);
    }

    receiveMessage() {
    }
}
