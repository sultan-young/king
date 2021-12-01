// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
const State = {
    stand: 1,
    attack: 2,
    hurt: 3,
}

cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.hp = 5;
        // 基础移速
        this._speed = 80;
        this.sp = cc.v2(0,0);
        
        this.isHit = false;
        this.ani = this.node.getChildByName('body').getComponent(cc.Animation)
        this.rb = this.node.getComponent(cc.RigidBody);

        this.ani.on('finished', (e, data) => {
            this.hp--;
            this.isHit = false;
            this.ani.play('idle')
            if (this.hp === 0) {
                this.node.destroy();
            }
        }, this)
    },
    
    hurt() {
        this.isHit = true;
        this.ani.play('hurt');
    },

    start () {

    },

    // update (dt) {},
});
