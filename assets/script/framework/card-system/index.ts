import { card_type, CARD_CONFIG, ICard } from './constant';
import { BaseCard } from './base-card';
import { loadResources } from '../../util/loader/loadResources';


// 总管卡牌的系统
export class CardLibSystem {
    private static cardLibrary = null;
    // 卡池
    private cardPool = [];

    public static get library() {
        if (!CardLibSystem.cardLibrary) {
            CardLibSystem.cardLibrary = new CardLibSystem();
        }
        return CardLibSystem.cardLibrary;
    }

    init() {
    }

    // 卡池相关操作
    // 载入卡池预设数据
    public async loadCardLibraryData() {
        CARD_CONFIG.forEach((item: ICard) => {
            const card = new BaseCard(item);
            this.appendCard(card);
        })
    }

    // 向卡池添加卡
    public appendCard(card) {
        this.cardPool.push(card);
    }
}