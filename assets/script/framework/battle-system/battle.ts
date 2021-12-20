import { BaseCard } from "../card-system/base-card";
import { CARD_CONFIG } from "../card-system/constant";
import { getRandomNum } from "../util/util";
class BattleSys {
    protected handCard: Array<any> = [];
    protected cardLib: Array<any> = [];

    constructor() {
        this.init();
    }

    init() {
        this.initCardSprite();
    }
    initCardSprite()  {
        CARD_CONFIG.forEach((baseCard) => {
            const card = new BaseCard({
                name: baseCard.name,
                hp: baseCard.hp,
                atk: baseCard.atk,
                fee: baseCard.fee,
                type: baseCard.type,
                resourceId: baseCard.resourceId,
            })
            this.cardLib.push(card);
        })
    }

    addHandCard(card) {
        this.handCard.push(card);
    }
    getRandomCard() {
        const randowNum = getRandomNum(0, this.cardLib.length);
        return this.cardLib[randowNum];
    }
    deleteHandCard(card) {
        const index = this.handCard.findIndex((item) => card.uuid === item.uuid);
        this.handCard.splice(index, 1);
    }
}

export default BattleSys;