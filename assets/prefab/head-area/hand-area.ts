import { CardLibSystem } from "../../script/framework/card-system";
import ComponentBase from "../../script/framework/message-system/componentBase";
import Message, { MessageType } from "../../script/framework/message-system/message";
import UIManager from "../../script/scene/battle/UiManager";

const {ccclass, property} = cc._decorator;

@ccclass
export default class HeadAreaControl extends ComponentBase {

    isShow: boolean = false;

    // LIFE-CYCLE CALLBACKS:

    async onLoad () {
        UIManager.instance.registerReceiver(this);

        // let x = -100;
        // this.node.setPosition(cc.v2(0, -cc.winSize.height / 2))
        // this.node.children.forEach(item => {
        //     x += 100;
        //     item.x = x;
        // })
    }

    // 接受到的消息
    receiveMessage(msg: Message) {
        super.receiveMessage(msg);
        const { Command, Content } = msg;
        switch (Command) {
            case MessageType.UI.changeHandAreaShow:
                this.changeHandAreaShow(Content);
                break;
        
            default:
                break;
        }
        console.log(msg, '手牌区域得到了消息')
    }
    
    changeHandAreaShow(isShow: boolean) {
        if(isShow) {
            this.node.width = 500;
        } else {
            this.node.width = 0;
        }
    }
    
    start () {
    }
    // update (dt) {},
}
