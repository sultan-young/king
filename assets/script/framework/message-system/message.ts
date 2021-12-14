 export default class Message {
    // 类型
    Type: MessageType.BASE_TYPE;
    // 命令
    Command: number;
    // 参数
    Content: any;

    constructor(type, command, content) {
        this.Type = type;
        this.Command = command;
        this.Content = content;
    }
 }

export namespace MessageType {
    export enum BASE_TYPE {
        UI = 'UI',
        Audio = 'Audio',
        Animate = 'Animate',
        Sprite = 'Sprite',
        Npc = 'Npc',
        Default = 'Default',
    }

    export enum UI {
        // 显示手牌背景区域
        changeHandAreaShow,
        // 打开/关闭卡牌库
        updateCardPumpShow,
    }
    export enum Audio {

    }
    export enum Animate {

    }
    export enum Sprite {

    }
    export enum Npc {

    }
 }