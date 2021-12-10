import FSMStage from './State';

export default class FSMManager {
    // 状态列表
    stateList: Array<FSMStage> = [];
    // 当前状态id
    currentStateId: number = -1;

    // 改变状态
    changeState(stateId: number) {
        this.currentStateId = stateId;
        // 调用新状态的方法
        this.stateList[this.currentStateId].onEnter();
    }

    // 更新调用
    onUpdate() {
        if(this.currentStateId !== -1) {
            // 调用当前状态update方法
            this.stateList[this.currentStateId].onUpdate();
        }
    }

}