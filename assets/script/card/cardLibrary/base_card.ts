import { card_type, ICard } from './constant';

export class Card {
    private name: string; // 名称
    private hp: number; // 血量
    private atk: number; // 攻击力
    private fee: number; // 费用
    private type: card_type;
    private resourceId?: string | number;
    constructor(card: ICard) {
        this.name = card.name;
        this.hp = card.hp;
        this.atk = card.atk;
        this.fee = card.fee;
        this.type = card.type;
        this.resourceId = card.resourceId;
    }
}

