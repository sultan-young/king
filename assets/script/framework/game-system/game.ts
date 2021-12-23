import { BaseCard } from "../card-system/base-card";
import { CARD_CONFIG } from "../card-system/constant";
import { getRandomNum } from "../util/util";

class Game {
    public cardLib: Array<BaseCard> = [];
    protected handCard: Array<any> = [];

    initCardLib() {
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

const game = new Game();

export default game;