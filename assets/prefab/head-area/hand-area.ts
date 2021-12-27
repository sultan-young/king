import ComponentBase from "../../script/framework/message-system/componentBase";
import Message, { MessageType } from "../../script/framework/message-system/message";
import resourceSys from "../../script/framework/resource-system/resource";
import GameManger from "../../script/manager/game-manager/game-manager";
import ViewManager from "../../script/manager/view-manager/view-manager";

const {ccclass, property} = cc._decorator;

@ccclass
export default class HeadAreaControl extends ComponentBase {

    isShow: boolean = false;

    // LIFE-CYCLE CALLBACKS:

    async onLoad () {
        GameManger.instance.registerReceiver(this);
        ViewManager.instance.registerReceiver(this);

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
            case MessageType.View.addHandCard:
                this.addHandCard(Content)
            default:
                break;
        }
    }
    
    changeHandAreaShow(isShow: boolean) {
        if(isShow) {
            this.node.width = 500;
        } else {
            this.node.width = 0;
        }
    }
    addHandCard(card) {
        console.log(card, resourceSys.cardLib, 111)
    }
    
    start () {
        
    }
    // update (dt) {},
}
