import FsmState from "../../../script/framework/fsm-system/state";

export default class OpenState extends FsmState {
    onEnter() {
        super.onEnter();
        this.node.getComponent(cc.Animation).play('card-pump-open');
    }
    onUpdate() {
        super.onUpdate();
    }
}