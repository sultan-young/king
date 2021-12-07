import { card_type, CARD_CONFIG, ICard } from './constant';
import { Card } from './base_card';
import { createCard } from "./createCard";

export class CardLibrary {
    static haha = 'haha'
    private static cardLibrary = null;
    private cardList = [];
    
    public static get library() {
        if (!CardLibrary.cardLibrary) {
            CardLibrary.cardLibrary = new CardLibrary();
        }
        return CardLibrary.cardLibrary;
    }

    public loadCardLibraryData() {
        CARD_CONFIG.forEach((item: ICard) => {
            this.appendCard(new Card(item));
        })
    }

    public async loadCardNode() {
        return new Promise(async (resolve)=> {
            for(let i = 0; i < this.cardList.length; i++ ) {
                const node = await createCard({
                    face: `card/face/${ this.cardList[i].resourceId}`
                });
                this.cardList[i].node = node;
            }
            resolve(this.cardList);
        })
    }

    public appendCard(card) {
        this.cardList.push(card);
    }
}