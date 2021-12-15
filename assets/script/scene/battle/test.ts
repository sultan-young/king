import animateSystem from "../../framework/animation-system/animation";

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
    }

    async start () {
        /* 动态添加动画代码示例 */
 
        // var nodeTest = new cc.Node();
        
        // nodeTest.name = 'NodeTest';
        
        
        // var sprite = nodeTest.addComponent(cc.Sprite);
        
        // sprite.spriteFrame = new cc.SpriteFrame(cc.url.raw('resources/cubetype1.png'));
        
        
        // nodeTest.parent = this.node;
        
        
        // 进行预加载

        // 进行动画系统预加载
        animateSystem.preLoadSpriteAtlas();
        await animateSystem.loadSpriteFrameAtlas();

        var animation = this.node.addComponent(cc.Animation);
        
        
        /* 添加SpriteFrame到frames数组 */
        
        var frames = animateSystem.getLib()[1].atk;
        
        
        
        
        var clip = cc.AnimationClip.createWithSpriteFrames(frames, 20);
        
        clip.name = 'anim_boom';
        
        clip.wrapMode = cc.WrapMode.Loop;
        
        
        /* 添加关键帧事件 */
        
        // clip.events.push({
        
        // frame: 1, // 准确的时间，以秒为单位。这里表示将在动画播放到 1s 时触发事件
        
        // func: 'frameEvent', // 回调函数名称
        
        // params: ['1', 'hello'] // 回调参数
        
        // });
        
        animation.addClip(clip);
        
        animation.play('anim_boom');
    }

    // update (dt) {}
}
