export enum card_type {
    beast = '野兽',
    human = '人类',
    ghost = '鬼怪',
}

export interface ICard {
    name: string, // 名称
    hp: number, // 血量
    atk: number, // 攻击力
    fee: number, // 费用
    type: card_type,
    resourceId?: string | number,
    passiveSkillId?: number, // 被动技能
    attackSkillId?: number, // 主动技能
}

// 通过配置该表，可以直接生成对应的卡牌。
export const CARD_CONFIG:Array<ICard> = [
    {
        name: '小红',
        hp: 2,
        atk: 0,
        fee: 0,
        resourceId: 1008010101,
        type: card_type.beast,
        passiveSkillId: 10000,
        attackSkillId: 20000,
    },
    {
        name: '伊泽瑞尔',
        hp: 1,
        atk: 1,
        fee: 1,
        type: card_type.beast,
        passiveSkillId: 10001,
        attackSkillId: 20001,
        resourceId: 1009010101,
    },
    {
        name: '螃蟹',
        hp: 2,
        atk: 1,
        fee: 2,
        type: card_type.beast,
        passiveSkillId: 10002,
        attackSkillId: 20002,
        resourceId: 1010010101,
    },
    {
        name: '德莱文',
        hp: 1,
        atk: 2,
        fee: 2,
        type: card_type.beast,
        passiveSkillId: 10003,
        attackSkillId: 20003,
        resourceId: 1011010101,
    },
    {
        name: '阿卡丽',
        hp: 2,
        atk: 2,
        fee: 3,
        type: card_type.beast,
        passiveSkillId: 10004,
        attackSkillId: 20004,
        resourceId: 1011010102,
    },
]