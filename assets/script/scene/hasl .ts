import { createCard } from "../card";
const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';

    // LIFE-CYCLE CALLBACKS:

    async onLoad () {
        
        await createCard({
            face: 'card/face/1008010101',
            node: this.node,
        });
        const a = await createCard({
            face: 'card/face/1009010101',
            node: this.node,
        });
        a.x = 100;
        const b = await createCard({
            face: 'card/face/1010010101',
            node: this.node,
        });
        b.x = 200;
        const c = await createCard({
            face: 'card/face/1011010101',
            node: this.node,
        });
        c.x = 300;
         // mask.parent = this.node;
    }
    
    start () {

    }
    // update (dt) {},
}
