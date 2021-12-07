import { createCardHandContainer } from "../../card/cardLibrary/createCard";
import { CardLibrary } from "../../card/cardLibrary/index";

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

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

        // 加载手牌容器
        const node = await createCardHandContainer();
        
        node.parent = this.node;
        node.width = 500;
        node.height = 100;
        console.log(node)

        
        // await createCard({
        //     face: 'card/face/1008010101',
        //     node: this.node,
        // });
        // const a = await createCard({
        //     face: 'card/face/1009010101',
        //     node: this.node,
        // });
        // a.x = 100;
        // const b = await createCard({
        //     face: 'card/face/1010010101',
        //     node: this.node,
        // });/*  */
        // b.x = 200;
        // const c = await createCard({
        //     face: 'card/face/1011010101',
        //     node: this.node,
        // });
        // c.x = 300;
         // mask.parent = this.node;
    }
    
    start () {

    }
    // update (dt) {},
}
