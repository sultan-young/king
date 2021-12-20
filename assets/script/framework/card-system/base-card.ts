import { card_type, ICard } from './constant';
import { v4 as uuidv4 } from 'uuid';
export class BaseCard {
    private name: string; // 名称
    private hp: number; // 血量
    private atk: number; // 攻击力
    private fee: number; // 费用
    private type: card_type;
    private resourceId?: string | number;
    private uuid: string;
    

    constructor(card: ICard) {
        this.name = card.name;
        this.hp = card.hp;
        this.atk = card.atk;
        this.fee = card.fee;
        this.type = card.type;
        this.resourceId = card.resourceId;
        this.init()
    }
    init() {
        this.uuid = uuidv4();
        
    }
    
}

