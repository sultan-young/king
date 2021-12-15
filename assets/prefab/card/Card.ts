import animateSystem from '../../script/framework/animation-system/animation';
import { loadResources } from '../../script/util/loader/loadResources'

const {ccclass, property} = cc._decorator;

@ccclass
export default class preCard extends cc.Component {

    @property(cc.Prefab)
    preMonster: cc.Prefab = null;

    hp: number = 1;
    atk: number = 1;
    portraitId: number = 0;
    private startScale: number = 1;
    public isChecked: boolean = false;

    async onLoad () {
        this.initRes();
        this.updateSize();
        this.startScale = this.node.scale;

        this.node.getNodeToParentTransform()

        this.node.on(cc.Node.EventType.MOUSE_ENTER, this.mouseEnter, this);
        this.node.on(cc.Node.EventType.MOUSE_LEAVE, this.mouseLeave, this);
        this.node.on(cc.Node.EventType.MOUSE_DOWN, this.mouseDown, this);
        this.node.on(cc.Node.EventType.MOUSE_UP, this.mouseUp, this);
        this.node.on(cc.Node.EventType.MOUSE_MOVE, this.mouseMove, this);
          
    }

    onDestroy() {
        this.node.off(cc.Node.EventType.MOUSE_ENTER, this.mouseEnter, this);
        this.node.off(cc.Node.EventType.MOUSE_LEAVE, this.mouseLeave, this);
        this.node.off(cc.Node.EventType.MOUSE_DOWN, this.mouseDown, this);
        this.node.off(cc.Node.EventType.MOUSE_UP, this.mouseUp, this);
        this.node.off(cc.Node.EventType.MOUSE_MOVE, this.mouseMove, this);
    }

    async initRes() {
        const portraitSp = cc.find('body/portrait', this.node).getComponent(cc.Sprite);
        const spriteFrame =  animateSystem.getPortrait(this.portraitId);
        

        portraitSp.spriteFrame = spriteFrame as cc.SpriteFrame;

        const hpLabel = cc.find('body/hp/hp', this.node).getComponent(cc.Label);
        const atkLabel = cc.find('body/atk/atk', this.node).getComponent(cc.Label);
        hpLabel.string = String(this.hp);
        atkLabel.string = String(this.atk);
    }
    // 将自身大小调整到手牌库的大小
    updateSize() {
        const scale = this.node.parent.height / this.node.height;
        this.node.scale = scale;
    }

    mouseDown(event) {
        this.isChecked = true;
        this.node.scale = this.startScale;
        const eventCustom = new cc.Event.EventCustom('createMonster', true)
        eventCustom.setUserData({
            node: this.node,
            hp: this.hp,
            atk: this.atk,
            animationId: this.portraitId,
        })
        this.node.dispatchEvent(eventCustom)
    }
    
    mouseUp() {
        this.isChecked = false;
    }

    mouseMove() {

    }

    mouseEnter() {
        this.node.scale = 1.5;
    }
    mouseLeave() {
        this.node.scale = this.startScale;
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
