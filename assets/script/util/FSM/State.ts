import FSMManager from "./Manager";


// 状态
export default class FSMStage extends FSMManager{
    // 当前状态ID
    stateId: number;
    // 状态拥有者
    component: cc.Component;
    // 所属状态机
    fsmManager: FSMManager;

    constructor(stateId: number, component: cc.Component, fsmManager: FSMManager) {
        super();
        this.stateId = stateId;
        this.component = component;
        this.fsmManager = fsmManager;
    }

    // 进入状态
    onEnter() {

    }

    // 状态更新中
    onUpdate() {

    }

}