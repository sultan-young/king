import { card_type, CARD_CONFIG, ICard } from './constant';
import { BaseCard } from './base-card';


// 总管卡牌的系统
export class CardSystem {
    private static cardLibrary = null;
    // 卡池
    private cardPool = [];
    
    public static get library() {
        if (!CardSystem.cardLibrary) {
            CardSystem.cardLibrary = new CardSystem();
        }
        return CardSystem.cardLibrary;
    }



    // 卡池相关操作
    // 载入卡池预设数据
    public loadCardLibraryData() {
        CARD_CONFIG.forEach((item: ICard) => {
            this.appendCard(new BaseCard(item));
        })
    }

    // 打开卡牌库
    public openCardPool() {
        
    }

    public async loadCardNode() {
        
    }

    // 向卡池添加卡
    public appendCard(card) {
        this.cardPool.push(card);
    }
}