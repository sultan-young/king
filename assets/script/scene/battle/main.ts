import animateSystem from "../../framework/animation-system/animation";
import { CardLibSystem } from "../../framework/card-system";
import { CARD_CONFIG } from "../../framework/card-system/constant";
import ManagerCenter from "../../framework/message-system/ManagerCenter";
import { MessageType } from "../../framework/message-system/message";
import { loadResources } from '../../util/loader/loadResources'


const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Prefab)
    preHandArea: cc.Prefab = null;

    @property(cc.Prefab)
    preCard: cc.Prefab = null;

    @property(cc.Prefab)
    preMonster: cc.Prefab = null;


    // LIFE-CYCLE CALLBACKS:

    async onLoad () {
        // 开启事件监听器
        this.initEventListeners()

        
        // CardLibSystem.library.init();
        // CardLibSystem.library.loadCardLibraryData()
        // animateSystem.preLoadSpriteAtlas();
        // await animateSystem.loadSpriteFrameAtlas();

      

        // const preHandArea = cc.instantiate(this.preHandArea);
        // CARD_CONFIG.forEach( item => {
        //     const preCard = cc.instantiate(this.preCard);
        //     const preCardCpt = preCard.getComponent('Card');
        //     preCardCpt.init({
        //         hp: item.hp,
        //         atk: item.atk,
        //         portraitId: item.resourceId,
        //     })
        //     preHandArea.addChild(preCard)
        // })
        
        // this.node.addChild(preHandArea);

        // console.log(this.preMonster, animateSystem.getLib())

        // // 进行预加载

        // // 进行动画系统预加载
        // animateSystem.preLoadSpriteAtlas();
        // await animateSystem.loadSpriteFrameAtlas();
    }
    initEventListeners() {
        this.node.on('createMonster', (eventCustom: cc.Event.EventCustom)=> {
            this.createMonster(eventCustom.getUserData());
        })
    }

    createMonster({
        hp,
        atk,
        animationId,
    }) {
        console.log(hp, atk, animationId)
        const preMonster = cc.instantiate(this.preMonster);
        const preMonsterCpt = preMonster.getComponent('monster');
        preMonsterCpt.setProperty({
            hp,
            atk,
            animationId,
        });
        cc.director.getScene().addChild(preMonster)
    }

    start () {
        // 发送显示手牌区域的命令
        ManagerCenter.sendCustomMessage(MessageType.BASE_TYPE.UI, MessageType.UI.changeHandAreaShow, true );

    }
}
