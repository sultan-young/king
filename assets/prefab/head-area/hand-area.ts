import { CardLibSystem } from "../../script/framework/card-system";

const {ccclass, property} = cc._decorator;

@ccclass
export default class HeadArea extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';

    // LIFE-CYCLE CALLBACKS:

    async onLoad () {
        let x = -100;
        this.node.setPosition(cc.v2(0, -cc.winSize.height / 2))
        this.node.children.forEach(item => {
            x += 100;
            item.x = x;
        })
    }
    
    start () {

    }
    // update (dt) {},
}
