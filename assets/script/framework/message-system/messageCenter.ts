import ComponentBase from "./componentBase";
import Message from "./message";

export default class ManagerCenter {
    // 管理类列表
    static Managers : ComponentBase[] = [];

    // 发送消息
    static sendMessage(msg: Message) {
        ManagerCenter.Managers.forEach(manager=> {
            manager.receiveMessage(msg)
        })
    }

    // 发送消息
    static sendCustomMessage(type: number, command: number, content: any) {
        let msg = new Message(type, command, content);
        ManagerCenter.sendMessage(msg);
    }
}