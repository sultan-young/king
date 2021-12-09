import { loadResources } from '../util/loadResources'

const {ccclass, property} = cc._decorator;

@ccclass
export default class preCard extends cc.Component {

    hp: number = 1;
    atk: number = 1;
    portraitId: number = 0;

    async onLoad () {
        const portraitSp = this.node.getChildByName('portrait').getComponent(cc.Sprite);
        const spriteFrame =  await loadResources('card/face/' + this.portraitId, cc.SpriteFrame);

        portraitSp.spriteFrame = spriteFrame;

        const hpLabel = cc.find('hp/hp', this.node).getComponent(cc.Label);
        const atkLabel = cc.find('atk/atk', this.node).getComponent(cc.Label);
        hpLabel.string = String(this.hp);
        atkLabel.string = String(this.atk);

        this.node.on(cc.Node.EventType.MOUSE_ENTER, (event) => {
            this.node.scale = 2;
        }, this);
        this.node.on(cc.Node.EventType.MOUSE_LEAVE, (event) => {
            this.node.scale = 1;
        }, this);
          
    }

    onDestroy() {
       
    }

    init({hp, atk, portraitId}) {
        this.hp = hp;
        this.atk = atk;
        this.portraitId = portraitId;
    }

    setHp() {

    }

    setAtk() {

    }
    
    start () {

    }
    // update (dt) {},
}
