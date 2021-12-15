import FsmState from "../../../script/framework/fsm-system/state";

export default class CloseState extends FsmState {
    onEnter() {
        this.component.node.active = false;
        // const ani = this.component.getComponent(cc.Animation)

        // var animState = ani.getAnimationState('card-pump-open');
        // animState.wrapMode = cc.WrapMode.Reverse;
        // ani.play('card-pump-open')
        // this.node.active = false;
    }
    onUpdate() {

    }
}