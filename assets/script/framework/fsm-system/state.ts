import StateManager from "./fsmManager";

// 状态类
export default class FsmState  {
    // 状态ID
    stateId: number;
    // 所属组件
    component: cc.Component;
    // 所属有限状态机
    fsm: StateManager;

    constructor(stateId: number, component: cc.Component, fsm: StateManager) {
        this.stateId = stateId;
        this.component = component;
        this.fsm = fsm;
    }
    
    // 进入状态
    onEnter() {

    }

    // 状态更新
    onUpdate() {
        
    }

}
