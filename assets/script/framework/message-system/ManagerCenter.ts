import ManagerBase from "./ManagerBase";
import Message, { MessageType } from "./message";

export default class ManagerCenter {
    // 管理类列表
    static Managers : ManagerBase[] = [];

    // 发送消息
    static sendMessage(msg: Message) {
        const targetManager = ManagerCenter.Managers.find(manager => manager.BaseMessageType === msg.Type)
        if (!targetManager) {
            throw new Error(`未找到对应消息类型${msg}`);
            
        }
        targetManager.receiveMessage(msg);
    }

    // 发送消息
    static sendCustomMessage(type: MessageType.BASE_TYPE, command: number, content: any) {
        let msg = new Message(type, command, content);
        ManagerCenter.sendMessage(msg);
    }
}