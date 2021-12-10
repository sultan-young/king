// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';

    // LIFE-CYCLE CALLBACKS:

    public ani: cc.Animation;

    onLoad () {
        this.node.width = 190;
        this.node.zIndex = 3000;
        console.log(this.node)
        this.ani = this.node.getComponent(cc.Animation);
    }
    open() {
        this.ani.play('volume-pump-open')
    }

    close() {
        
    }

    start () {
        console.log(111)
        
    }

    // update (dt) {}
}
