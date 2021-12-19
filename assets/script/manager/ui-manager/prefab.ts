import { CARD_CONFIG } from "../../framework/card-system/constant";
import ComponentBase from "../../framework/message-system/componentBase";
import { MessageType } from "../../framework/message-system/message";
import resourceSys from "../../framework/resource-system/resource";
import UIManager from "./UiManager";

const {ccclass, property} = cc._decorator;

@ccclass
export default class Prefab extends ComponentBase {

    // 卡牌库
    @property(cc.Prefab)
    preCardPump: cc.Prefab = null;

    // crad
    @property(cc.Prefab)
    preCard: cc.Prefab = null;

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        UIManager.instance.registerReceiver(this);
        this.loadCrad();
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
        const preVolumePump = this.node.getChildByName('card-pump');
        const preVolumePumpCpt = preVolumePump.getComponent('card-pump');
        if (!this.node.getChildByName('card-pump')?.active) {
            // 加载卷轴
            preVolumePump.active = true;
            preVolumePumpCpt.open()
        } else {
            preVolumePumpCpt.close()
        }
        

    }

    loadCrad() {
        CARD_CONFIG.forEach( (item) => {
            const preCard = cc.instantiate(this.preCard);
            const preCardCpt = preCard.getComponent('Card');
            preCardCpt.init({
                hp: item.hp,
                atk: item.atk,
                portraitId: item.resourceId,
            })
            resourceSys.cardLib.setCardNode(item.resourceId, preCard);
        })
    }
    start () {
    }

    // update (dt) {}
}
