import ComponentBase from "./componentBase"
import ManagerCenter from "./ManagerCenter";
import Message, { MessageType } from "./message";

export default class ManagerBase extends ComponentBase {
    // 管理的消息接收者数组
    receiveList: ComponentBase[] = [];
    // 当前管理类接受的具体消息类型
    BaseMessageType: MessageType.BASE_TYPE;
    
    onLoad() {
        // 设置当前管理类接受的消息类型
        this.BaseMessageType = this.setMessageType();
        // 把管理类添加到消息中心列表
        ManagerCenter.Managers.push(this);
    }

    // 设置当前管理类的消息类型
    setMessageType() {
        return MessageType.BASE_TYPE.Default;
    }

    // 注册消息监听
    registerReceiver(cb: ComponentBase) {
        this.receiveList.push(cb);
    }

    // 重写父类接受消息方法
    receiveMessage(message: Message) {
        super.receiveMessage(message);
        if(message.Type !== this.BaseMessageType) {
            throw new Error("消息类型错误");
        }
        // 向下层分发消息
        this.receiveList.forEach(cb=> {
            cb.receiveMessage(message);
        })
    }
}