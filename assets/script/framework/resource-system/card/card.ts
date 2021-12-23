import { loadResources } from '../util/loadResources';

const baseUrl = 'card-atlas';

class CardLib {
    private cardLib: Map<number, cc.SpriteFrame> = new Map();
    private cardNode: Map<number, cc.Node> = new Map();

    async setCardNode(id, node) {
        this.cardNode.set(id, node);
        return this.cardNode;
    }

    getCardNode(id) {
        return this.cardNode.get(id);
    }

    // 加载卡牌资源
    async loadCardFrame(ids: (Array<number> | number)) {
        
        try {
            if (typeof ids === 'object') {
                ids.forEach(async (id) => {
                    const faceFrame = await loadResources({
                        method: 'load',
                        url: `${baseUrl}/${id}/face`,
                        type: cc.SpriteFrame,
                    }) as cc.SpriteFrame;
                    this.cardLib.set(id, faceFrame);
                })
            } else {
                const faceFrame = await loadResources({
                    method: 'load',
                    url: `${baseUrl}/${ids}/face`,
                    type: cc.SpriteFrame,
                }) as cc.SpriteFrame;
                this.cardLib.set(ids, faceFrame);
            }
            
        } catch (error) {
            throw new Error("卡牌资源加载出错");
        }
    }
}

export default CardLib;