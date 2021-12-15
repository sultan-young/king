import FsmState from "../../../script/framework/fsm-system/state";

export default class OpenState extends FsmState {
    onEnter() {
        this.component.getComponent(cc.Animation).play('card-pump-open');
    }
    onUpdate() {

    }
}