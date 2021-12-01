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

const SPEED = 80;

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
        player: {
            default: null,
            type: cc.Node
        }
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.hp = 5;
        // 基础移速
        this.sp = cc.v2(0,0);
        
        this.isHit = false;
        this.ani = this.node.getChildByName('body').getComponent(cc.Animation)
        this.rb = this.node.getComponent(cc.RigidBody);

        console.log(this.player.x, this.node.x)

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

    update (dt) {
        const heroX = this.player.x;
        // 怪物的移动速率
        this.lv = this.rb.linearVelocity;

        if (heroX >= this.node.x) {
            this.sp.x = 1;
        } else {
            this.sp.x = -1;
        }
        this.lv.x = SPEED *  this.sp.x;
        this.rb.linearVelocity = this.lv;
    },
});
