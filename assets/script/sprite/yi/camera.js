const offsetCount = {
    x: 0,
    y: 0,
};

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
        MAP_Width: {
            default: 0,
            type: cc.Float,
        },
        MAP_HEIGHT: {
            default: 0,
            type: cc.Float,
        }
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        // this.camera = this.node.getComponent(cc.Camera)
        // this.spriteNode = this.node.parent;
        // this.startPoint = this.camera.getScreenToWorldPoint(cc.v2(this.node.x, this.node.y));

        this.MIN_X = 0;
        this.MAX_X = this.MAP_Width - this.node.width;
        this.MIN_Y = 0;
        this.MAX_Y = this.MAP_HEIGHT - this.node.height;
    },

    start () {
    },

    update (dt) {
        
    },
    lateUpdate(dt) {
        const x = this.node.parent.x;
        const y = this.node.parent.y;
        if (x < this.MIN_X) {
            this.node.setPosition(cc.v2(-x, this.node.y))
        } else if (x > this.MAX_X) {
            this.node.setPosition(cc.v2(this.MAX_X - x, this.node.y))
        }
        if (y < this.MIN_X) {
            this.node.setPosition(cc.v2(this.node.x,-y))
        } else if (y > this.MAX_Y) {
            this.node.setPosition(cc.v2(this.MAX_Y - x, this.node.y))
        }
    },
});
