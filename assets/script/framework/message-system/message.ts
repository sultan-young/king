 export default class Message {
    // 类型
    Type: number;
    // 命令
    Command: number;
    // 参数
    Content: any;

    constructor(type, command, content) {
        this.Type = type;
        this.Command = command;
        this.Command = content;
    }
 }

export namespace MessageType {
    export enum UI {
        TYPE_UI,
        TYPE_NPM,
        TYPE_ENEMY,
        TYPE_ANDIO,
    }
 }