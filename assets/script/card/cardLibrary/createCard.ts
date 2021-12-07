import { loadResources } from '../../util/loadResources'

export async function createCard({
    face,
}) {
    // 创建mask节点并添加mask组件
    const maskNode = new cc.Node('card-mask');
    const maskCpt = maskNode.addComponent(cc.Mask);
    maskNode.width = 90;
    maskNode.height = 130;
    // 创建卡牌形象并添加sprite组件
    const spriteNode = new cc.Node('card-sprite');
    spriteNode.y = 27;
    const spriteCpt = spriteNode.addComponent(cc.Sprite);
    // 加载spriteFrame资源
    const spriteFrame =  await loadResources(face, cc.SpriteFrame);
    spriteCpt.spriteFrame = spriteFrame;    
    spriteNode.parent = maskNode;


    // 创建卡牌框并添加sprite组件
    const cardBodyNode = new cc.Node('card-sprite');
    const cardBodyCpt = cardBodyNode.addComponent(cc.Sprite);
    // 加载spriteFrame资源
    const cardBodyFrame =  await loadResources('card/base/card', cc.SpriteFrame);
    cardBodyCpt.spriteFrame = cardBodyFrame;    
    cardBodyNode.parent = maskNode;
    

    // 创建卡牌框HP
    const cardHpNode = new cc.Node('card-hp');
    cardHpNode.x = -20;
    cardHpNode.y = -28;
    const cardHpCpt = cardHpNode.addComponent(cc.Sprite);
    // 加载spriteFrame资源
    const cardHpFrame =  await loadResources('card/ui/ui-007', cc.SpriteFrame);
    cardHpCpt.spriteFrame = cardHpFrame;    
    // 创建文字label节点
    const cardHpLabel = new cc.Node('card-hp');
    cardHpLabel.color = cc.color('#F20909');
    const cardHpLabelCpt = cardHpLabel.addComponent(cc.Label);
    cardHpLabel.y = -2;
    cardHpLabelCpt.string = '1';
    cardHpLabelCpt.fontSize = 12;
    cardHpLabelCpt.lineHeight = 12;
    cardHpLabel.parent = cardHpNode;
    cardHpNode.parent = maskNode;

    // 创建卡牌框MP
    const cardMpNode = new cc.Node('card-hp');
    cardMpNode.x = 20;
    cardMpNode.y = -28;
    const cardMpCpt = cardMpNode.addComponent(cc.Sprite);
    // 加载spriteFrame资源
    const cardMpFrame =  await loadResources('card/ui/ui-007', cc.SpriteFrame);
    cardMpCpt.spriteFrame = cardMpFrame;    
    // 创建文字label节点
    const cardMpLabel = new cc.Node('card-hp');
    cardMpLabel.color = cc.color('#009F69');
    const cardMpLabelCpt = cardMpLabel.addComponent(cc.Label);
    cardMpLabel.y = -2;
    cardMpLabelCpt.string = '1';
    cardMpLabelCpt.fontSize = 12;
    cardMpLabelCpt.lineHeight = 12;
    cardMpLabel.parent = cardMpNode;
    cardMpNode.parent = maskNode;


    // 将mask元素加入节点中
    // maskNode.parent = node;

    // spriteNode.width = 60;
    // spriteNode.height = 60;

    // cardBodyNode.width = 90;
    // cardBodyNode.height = 130;

    // cardHpNode.width = 16;
    // cardHpNode.height = 16;

    // cardMpNode.width = 16;
    // cardMpNode.height = 16;

    return maskNode;
}

// 创建手牌容器
export async function createCardHandContainer() {
    const cardHandContainer = new cc.Node('card-hand-container');
    const handContainerCpt = cardHandContainer.addComponent(cc.Sprite);
    const handContainerWidget = cardHandContainer.addComponent(cc.Widget);
    handContainerWidget.bottom = 300;
    handContainerWidget.horizontalCenter = 100;
    handContainerWidget.updateAlignment();
    console.log(handContainerWidget)
    // 加载spriteFrame资源
    const cardBodyFrame = await loadResources('card/ui/hand-cards-container', cc.SpriteFrame);
    handContainerCpt.spriteFrame = cardBodyFrame;    
    return cardHandContainer;
}