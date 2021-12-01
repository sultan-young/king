// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
const Input = {};
const State = {
    stand: 1,
    attack: 2,
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
        this._speed = 200;
        this.sp = cc.v2(0,0);

        // 连击点数
        this.combo = 0;

        this.heroState = State.stand;
        this.anima = 'idle';
        // this.heroAni = this.node.getComponent(cc.Animation);
        this.heroAni = this.node.getChildByName('body').getComponent(cc.Animation);
        // 获取刚体，控制sprite速度
        this.rb = this.node.getComponent(cc.RigidBody);

        this.heroAni.on('finished', this.onAnimaFinished, this)
        cc.systemEvent.on('keydown', this.onKeydown, this);
        cc.systemEvent.on('keyup', this.onKeyup, this);
    },
    onDestroy() {
        this.heroAni.off('finished', this.onAnimaFinished, this)
        cc.systemEvent.off('keydown', this.onKeydown, this);
        cc.systemEvent.off('keyup', this.onKeyup, this);
    },
    onAnimaFinished(e, data) {
        if (data.name === 'attack' || data.name === 'attack1' || data.name === 'attack2') {
            this.heroState = State.stand;
            this.combo = (this.combo + 1) % 3;
            setTimeout(() => {
                if (this.heroState === State.attack) return;
                this.combo = 0;
            }, 500);
        }
    },
    onKeydown(e) {
        Input[e.keyCode] = 1;
    },
    onKeyup(e) {
        Input[e.keyCode] = 0;
    },
    setAni(anima) {
        if(this.anima === anima) return;
        this.anima = anima;
        this.heroAni.play(anima);
    },

    start () {

    },

    update(dt) {
        let scaleX = Math.abs(this.node.scaleX);
        this.lv = this.rb.linearVelocity;
        let anima = this.anima;

        // 状态切换
        switch (this.heroState) {
            case State.stand:
                if(Input[cc.macro.KEY.j]) {
                    this.heroState = State.attack;
                }
                break;
        
            default:
                break;
        }

        if (this.heroState === State.attack) {
            if(Input[cc.macro.KEY.j]) {
                if(this.combo === 0) {
                    anima = 'attack';
                } else if(this.combo === 1) {
                    anima = 'attack1';
                } else if(this.combo === 2) {
                    anima = 'attack2';
                }
            }
        }

        if (this.heroState !== State.stand) {
            this.sp.x = 0;
        } else {
            // this.combo = 0;
            if (Input[cc.macro.KEY.a] || Input[cc.macro.KEY.left]) {
                this.sp.x = -1;
                anima = 'run';
                this.node.scaleX = -scaleX;
            } else if (Input[cc.macro.KEY.d] || Input[cc.macro.KEY.right]) {
                this.sp.x = 1;
                anima = 'run';
                this.node.scaleX = scaleX;
            }else {
                this.sp.x = 0;
                anima = 'idle';
            };
        }

        if (this.sp.x) {
            this.lv.x = this.sp.x * this._speed;
        } else {
            this.lv.x = 0;
        };

        this.node.getComponent(cc.RigidBody).linearVelocity = this.lv;

        if(anima) {
            this.setAni(anima)
        }
    },

    // update (dt) {},
});
