import ComponentBase from "../../framework/message-system/componentBase";
import { MessageType } from "../../framework/message-system/message";
import UIManager from "./UiManager";

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends ComponentBase {

    // 卡牌库
    @property(cc.Prefab)
    preCardPump: cc.Prefab = null;

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        UIManager.instance.registerReceiver(this);
    }

    receiveMessage(msg) {
        super.receiveMessage(msg);
        const { Command, Content } = msg;
        switch (Command) {
            case MessageType.UI.updateCardPumpShow:
                this.updateCardPumpShow(Content);
                break;
        
            default:
                break;
        }
    }

    updateCardPumpShow(Content) {
        console.log(this.node.getChildByName('card-pump')?.active, this.node.children, '123123123')
        if (!this.node.getChildByName('card-pump')?.active) {
            // 加载卷轴
            const preVolumePump = this.node.getChildByName('card-pump');
            // this.node.addChild(preVolumePump);
            preVolumePump.active = true;
            const preVolumePumpCpt = preVolumePump.getComponent('card-pump');
            preVolumePumpCpt.open()
        } else {

        }
        

    }

    start () {
    }

    // update (dt) {}
}
