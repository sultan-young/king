import { createCardHandContainer } from "../../framework/card-system/createCard";
import { CardSystem } from "../../framework/card-system/index";

const {ccclass, property} = cc._decorator;

@ccclass
export default class HeadArea extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';

    // LIFE-CYCLE CALLBACKS:

    async onLoad () {
        // 加载卡牌库数据
        CardSystem.library.loadCardLibraryData()
        // 加载卡牌库node节点
        const a = await CardSystem.library.loadCardNode()

        this.node.setPosition(cc.v2(0, -cc.winSize.height / 2 + this.node.height / 2 + 0))
    }
    
    start () {

    }
    // update (dt) {},
}
