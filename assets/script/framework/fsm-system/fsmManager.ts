import State from "./state";

// 状态机
export default class StateManager {
    // 所有状态map
    stateMap: Map<number, State> = new Map();
    // 当前状态id
    currentStateId: number = -1;

    // 改变状态
    changeState(id) {
        if (!this.stateMap.get(id)) {
            throw new Error("没有当前状态");
        }
        this.currentStateId = id;
        this.stateMap.get(id).onEnter();
    }

    // 更新状态
    onUpdate() {
        if(this.currentStateId !== -1) {
            // 调用当前状态update方法
            this.stateMap.get(this.currentStateId).onUpdate();
        }
    }

    appendState(state: State) {
        this.stateMap.set(state.stateId, state);
    }
}
