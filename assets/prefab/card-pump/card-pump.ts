
const {ccclass, property} = cc._decorator;

@ccclass
export default class CardPump extends cc.Component {

    // LIFE-CYCLE CALLBACKS:

    public ani: cc.Animation;

    onLoad () {
        this.node.width = 190;
        this.node.zIndex = 3000;
        this.ani = this.node.getComponent(cc.Animation);
    }
    open() {
        this.ani.play('card-pump-open')
    }

    close() {
        
    }

    start () {
    }

    // update (dt) {}
}
