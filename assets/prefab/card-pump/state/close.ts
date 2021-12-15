import FsmState from "../../../script/framework/fsm-system/state";

export default class CloseState extends FsmState {
    onEnter() {
        super.onEnter();

        const ani = this.node.getComponent(cc.Animation);
        var animState = ani.getAnimationState('card-pump-open');
        animState.wrapMode = cc.WrapMode.Reverse;
        ani.play('card-pump-open')

        ani.on('finished', (type, data)=> {
            if (data.name === 'card-pump-open' && animState.wrapMode === cc.WrapMode.Reverse) {
                animState.wrapMode = cc.WrapMode.Normal;
                this.node.active = false;
                ani.off('finished')
            }

        }, this);
    }
    onUpdate() {
        super.onUpdate();
    }
}