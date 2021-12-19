
import { CARD_CONFIG } from '../../script/framework/card-system/constant';
import StateManager from '../../script/framework/fsm-system/fsmManager';
import resourceSys from '../../script/framework/resource-system/resource';
import CloseState from './state/close';
import OpenState from './state/open';


const {ccclass, property} = cc._decorator;

enum StateType {
    open,
    close,
}

@ccclass
export default class CardPump extends cc.Component {

    // LIFE-CYCLE CALLBACKS:

    public ani: cc.Animation;
    public fsmManager: StateManager;
    public pageIndex: number = 1;
    private placeholder: cc.Node;

    onLoad () {
        this.node.width = 190;
        this.node.zIndex = 3000;
        this.ani = this.node.getComponent(cc.Animation);
        // 创建状态机
        this.fsmManager = new StateManager();
        this.fsmManager.appendState(new CloseState(StateType.close, this.node, this.fsmManager));
        this.fsmManager.appendState(new OpenState(StateType.open, this.node, this.fsmManager));
        this.placeholder = this.node.getChildByName('placeholder');
    }
    open() {
        const cpts = this.placeholder.children;
        cpts.forEach( (item, index) => {
            // const node = resourceSys.cardLib.getCardNode(item.resourceId);
            // item.spriteFrame = this.frames.get(index * this.pageIndex);
            if (item.children.length) {
                item.children[0] = resourceSys.cardLib.getCardNode(CARD_CONFIG[index * this.pageIndex].resourceId);
            } else {
                item.addChild(resourceSys.cardLib.getCardNode(CARD_CONFIG[index * this.pageIndex].resourceId));
            }
        })
        this.fsmManager.changeState(StateType.open);
    }

    close() {
        this.fsmManager.changeState(StateType.close);
    }

    start () {
    }

    // update (dt) {}
}
