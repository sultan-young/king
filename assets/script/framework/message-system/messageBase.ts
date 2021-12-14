import ComponentBase from "./componentBase"
import Message, { MessageType } from "./message";
import ManagerCenter from "./messageCenter";

export default class ManagerBase extends ComponentBase {
    // 管理的消息接收者数组
    receiveList: ComponentBase[] = [];
    // 当前管理类接受的具体消息类型
    messageType: number;
    
    onLoad() {
        // 设置当前管理类接受的消息类型
        this.messageType = this.setMessageType();
        // 把管理类添加到消息中心列表
        ManagerCenter.Managers.push(this);
    }

    // 设置当前管理类的消息类型
    setMessageType() {
        return MessageType.UI.TYPE_UI;
    }

    // 注册消息监听
    registerReceiver(cb: ComponentBase) {
        this.receiveList.push(cb);
    }

    // 重写父类方法
    receiveMessage(message: Message) {
        super.receiveMessage(message);
        if(message.Type === this.messageType) {
            throw new Error("消息类型错误");
        }
        // 向下层分发消息
        this.receiveList.forEach(cb=> {
            cb.receiveMessage(message);
        })
    }
}