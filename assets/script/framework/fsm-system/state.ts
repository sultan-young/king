import StateManager from "./fsmManager";

// 状态类
export default class FsmState  {
    // 状态ID
    stateId: number;
    // 所属节点
    node: cc.Node;
    // 所属有限状态机
    fsm: StateManager;

    constructor(stateId: number, node: cc.Node, fsm: StateManager) {
        this.stateId = stateId;
        this.node = node;
        this.fsm = fsm;
    }
    
    // 进入状态
    onEnter() {

    }

    // 状态更新
    onUpdate() {
        
    }

}
