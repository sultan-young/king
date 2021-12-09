import { createCardHandContainer } from "../../card/cardLibrary/createCard";
import { CardLibrary } from "../../card/cardLibrary/index";

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
        CardLibrary.library.loadCardLibraryData()
        // 加载卡牌库node节点
        const a = await CardLibrary.library.loadCardNode()

        this.node.setPosition(cc.v2(0, -cc.winSize.height / 2 + this.node.height / 2 + 0))
    }
    
    start () {

    }
    // update (dt) {},
}
