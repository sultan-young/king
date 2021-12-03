// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

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
    },
    onDestroy() {
        cc.systemEvent.off('keydown', this.onKeydown, this);
        cc.systemEvent.off('keyup', this.onKeyup, this);
    },
    onKeydown(e) {
        if (e.keyCode === cc.macro.KEY.a) {
            console.log('往左走')
            this.node.setPosition(cc.Vec2(this.node.x - 5, this.node.y))
        } else if(e.keyCode === cc.macro.KEY.d) {
            console.log('往右走')
            this.node.setPosition(cc.Vec2(this.node.x + 5, this.node.y))
        }
        console.log(e.keyCode, this.node, this.node.setPosition)
    },
    onKeyup(e) {
    },

    start () {
    },

    // update (dt) {},
});
