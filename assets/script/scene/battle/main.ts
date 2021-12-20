import animateSystem from "../../framework/animation-system/animation";
import BattleSys from "../../framework/battle-system/battle";
import { CardLibSystem } from "../../framework/card-system";
import { CARD_CONFIG } from "../../framework/card-system/constant";
import ManagerCenter from "../../framework/message-system/ManagerCenter";
import { MessageType } from "../../framework/message-system/message";
import BattleManger from "../../manager/battle-manager/battle-manager";
import { loadResources } from '../../util/loader/loadResources';

const {ccclass, property} = cc._decorator;

@ccclass
export default class Main extends cc.Component {

    @property(cc.Prefab)
    preHandArea: cc.Prefab = null;

    @property(cc.Prefab)
    preCard: cc.Prefab = null;

    @property(cc.Prefab)
    preMonster: cc.Prefab = null;


    // LIFE-CYCLE CALLBACKS:
    battleSys:BattleSys = null;

    receiveMessage(msg) {
        
    }

    async onLoad () {
        // 开启事件监听器
        this.initEventListeners();
        // BattleManger.instance.registerReceiver(this);
        

        
        // CardLibSystem.library.init();
        // CardLibSystem.library.loadCardLibraryData()
        // animateSystem.preLoadSpriteAtlas();
        // await animateSystem.loadSpriteFrameAtlas();

      
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
        this.battleSys = new BattleSys();
        const card = this.battleSys.getRandomCard()
        console.log(card)

        // 发送显示手牌区域的命令
        // ManagerCenter.sendCustomMessage(MessageType.BASE_TYPE.UI, MessageType.UI.changeHandAreaShow, true );
        setTimeout(() => {
        ManagerCenter.sendCustomMessage(MessageType.BASE_TYPE.Battle, MessageType.Battle.addHandCard, card);
            
        }, 2000);
    }
}
