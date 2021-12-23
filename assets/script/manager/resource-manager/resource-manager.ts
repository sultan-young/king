import { CARD_CONFIG } from "../../framework/card-system/constant";
import game from "../../framework/game-system/game";
import ComponentBase from "../../framework/message-system/componentBase";
import ManagerBase from "../../framework/message-system/ManagerBase";
import { MessageType } from "../../framework/message-system/message";
import resourceSys from "../../framework/resource-system/resource";

const {ccclass, property} = cc._decorator;

@ccclass
export default class ResManager extends ManagerBase {

    // 大管理类必须是单例
    static instance: ResManager;

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        super.onLoad();
        ResManager.instance = this;
        // 如果单个管理者，则将自己直接注册到管理中心
        this.registerReceiver(this);
    }

    setMessageType() {
        return MessageType.BASE_TYPE.Resource;
    }

    // 注册组件消息
    registerReceiver(component: ComponentBase) {
        super.registerReceiver(component);
    }

    

    receiveMessage(msg) {
        const { Command, Content, Type} = msg;
        if (Type !== this.BaseMessageType) return;
        switch (Command) {
            case MessageType.Resource.preLoadCardLib:
                this.preLoadCardLib();
                break;
        
            default:
                break;
        }
    }
    preLoadCardLib() {
        // 加载卡牌头像
        resourceSys.cardLib.loadCardFrame(game.cardLib.map( card => card.resourceId));
    }
}
