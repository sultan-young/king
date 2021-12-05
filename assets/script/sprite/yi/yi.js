const Input = {};
let currentAnima = 'idle';
// 每秒的速度
let speed = {
    x: 200,
    y: 80,
}
const State = {
    idle: 1,
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
        cc.systemEvent.on('keydown', this.onKeydown, this);
        cc.systemEvent.on('keyup', this.onKeyup, this);
        // 初始化人物状态
        this.state = State.idle;
        this.anima = 'idle';
        this._speedX = 500;
        this._speedY = 200;
        
        this.sp = cc.v2(0,0);
        this.heroBody =  this.node.getChildByName('body');
        this.heroBodyAnima = this.heroBody.getComponent(cc.Animation);

        this.rb = this.node.getComponent(cc.RigidBody);

    },
    onDestroy() {
        cc.systemEvent.off('keydown', this.onKeydown, this);
        cc.systemEvent.off('keyup', this.onKeyup, this);
    },
    onKeydown(e) {
        Input[e.keyCode] = true;
    },
    onKeyup(e) {
        Input[e.keyCode] = false;
    },

    start () {
    },
    setAni(anima) {
        if(this.anima === anima) return;
        this.anima = anima;
        this.heroBodyAnima.play(anima);
    },
    // dt代表和上一帧相差的时间
    update (dt) {
        this.lv = this.rb.linearVelocity;

        let scaleX = Math.abs(this.heroBody.scaleX);
        let anima = currentAnima;
        this.updateSpriteState();

        if (Input[cc.macro.KEY.a] || Input[cc.macro.KEY.left]) {
            this.sp.x = -1;
            anima = 'run';
            this.heroBody.scaleX = -scaleX;
        } else if (Input[cc.macro.KEY.d] || Input[cc.macro.KEY.right]) {
            this.sp.x = 1;
            anima = 'run';
            this.heroBody.scaleX = scaleX;
        }else {
            this.sp.x = 0;
            anima = 'idle';
        };
        
        if (Input[cc.macro.KEY.w]) {
            this.sp.y = 1;
            anima = 'run';
        } else if (Input[cc.macro.KEY.s]) {
            this.sp.y = -1;
            anima = 'run';
        } else {
            this.sp.y = 0;
        }

        this.lv.x = this.sp.x * this._speedX;
        this.lv.y = this.sp.y * this._speedY;


        this.rb.linearVelocity = this.lv;

        if(anima) {
            this.setAni(anima)
        }
    },
    // 更新人物状态
    updateSpriteState() {
        switch(this.state) {
            
        }
    },
    // 碰撞回调
    onCollisionEnter(other, self) {
        // if (other.node.group === 'hero') {
        //     this.enemy.hurt();
        // }
    },
});
