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
        Game = 'Game',
        Resource = 'Resource',
        Audio = 'Audio',
        Animate = 'Animate',
        Sprite = 'Sprite',
        Npc = 'Npc',
        Scene = 'Scene',
        Default = 'Default',
    }

    export enum UI {
        // 显示手牌背景区域
        changeHandAreaShow = 10000,
        // 打开/关闭卡牌库
        updateCardPumpShow,
    }

    export enum Game {
        // 添加手牌
        addHandCard = 20000,
        // 删除手牌
        deleteHandCard,
    }
    export enum Resource {
        // 预加载资源,当前只包括加载卡牌资源
        preLoadCardLib = 30000,
    }
    export enum Audio {

    }
    export enum Animate {

    }
    export enum Sprite {

    }
    export enum Npc {

    }
    export enum Scene {
        
    }
 }