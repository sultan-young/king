// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import animateSystem from "../../script/framework/animation-system";

const {ccclass, property} = cc._decorator;

@ccclass
export default class Monster extends cc.Component {

    @property
    hp: number = 1;

    @property
    atk: number = 1;

    @property
    animationId: number = 0;

    setProperty({
      hp,
      atk,
      animationId,
    }) {
      this.animationId = animationId;
      this.atk = atk;
      this.hp = hp;
    }


    // LIFE-CYCLE CALLBACKS:

    private sp: cc.Sprite;
    private ani: cc.Animation;

    onLoad () {
        this.sp = this.node.getComponent(cc.Sprite);
        const animateMap = animateSystem.getAnimation(this.animationId);
        let animation = this.node.addComponent(cc.Animation);
        
        for(let key in animateMap) {
          let frames = animateMap[key];
          var clip = cc.AnimationClip.createWithSpriteFrames(frames, 20);
          clip.name = key;
          clip.wrapMode = cc.WrapMode.Loop;
          animation.addClip(clip);
        }

        this.ani = this.node.getComponent(cc.Animation)
        animation.play('byatk');
    }

    start () {

    }

    // update (dt) {}
}
