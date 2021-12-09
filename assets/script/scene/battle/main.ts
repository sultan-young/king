import { CARD_CONFIG } from "../../card/cardLibrary/constant";

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Prefab)
    preHandArea: cc.Prefab = null;

    @property(cc.Prefab)
    preCard: cc.Prefab = null;


    // LIFE-CYCLE CALLBACKS:

    async onLoad () {
        const preHandArea = cc.instantiate(this.preHandArea);
        let x = -300;
        CARD_CONFIG.forEach( item => {
            const preCard = cc.instantiate(this.preCard);
            const preCardCpt = preCard.getComponent('pre-card');
            preCardCpt.init({
                hp: item.hp,
                atk: item.atk,
                portraitId: item.resourceId,
            })
            x += 90;
            preHandArea.addChild(preCard)
            preCard.x = x;
            preCard.scale = 0.7;

        })
        
        this.node.addChild(preHandArea);
    }
    
    start () {

    }
}
