/**
 * 头部信息控制器
 */
import UI from './../ui'
import { Functioned, Obj } from '@/main/unit/tool'
const NAME_$_GOLD = 'gold'; // 金币
const NAME_$_PIECES = 'pieces'; // 碎片
const NAME_$_DIAMOND = 'diamond'; // 砖石
const NAME_$_GOLD_BTN = 'gold_but'; // 金币按钮
const NAME_$_DIAMOND_BTN = 'diamond_but'; // 砖石按钮
const NAME_$_ROLE_HEAD = 'role_head'; // 角色头像
const NAME_$_ROLE_NAME = 'role_name'; // 角色名称
const NAME_$_ROLE_LEVEL = 'role_level'; // 角色等级
const NAME_$_LEVEL_PERCENT = 'role_level_percent'; // 等级进度条

const def = Obj.isDef;
const { Event, Handler } = Laya;
const BUFFER_TIME = 150; // 异步更新缓冲时间

export default class HeadMessageController extends UI{
    constructor(ui){
        super(ui);
        this.ui = ui;
        this.buffer = [];
        this.bufferActuator = null; // 缓冲执行器
        this.goldUI = this.queryTagName(NAME_$_GOLD);
        this.piecesUI = this.queryTagName(NAME_$_PIECES);
        this.diamondUI = this.queryTagName(NAME_$_DIAMOND);
        this.roleHeadUI = this.queryTagName(NAME_$_ROLE_HEAD);
        this.roleNameUI = this.queryTagName(NAME_$_ROLE_NAME);
        this.roleLevelUI = this.queryTagName(NAME_$_ROLE_LEVEL);
        this.levelPercent = this.queryTagsName(NAME_$_LEVEL_PERCENT);
        this.goldBtnUI = this.queryTagName(NAME_$_GOLD_BTN);
        this.diamondBtnUI = this.queryTagName(NAME_$_DIAMOND_BTN);
        this.init();
    }

    init(){
        this.initEvents();
    }

    initEvents(){
        this.bufferActuator = Functioned.dataBuffer(this.buffer, BUFFER_TIME, this.bufferRender.bind(this));
        this.goldBtnUI.on(Event.CLICK, this, this.buyGold);
    }

    /* 由于头部信息更新可能会比较频繁，故采用异步更新策略 */
    asyncUpdateMessage(data){
        this.bufferActuator(data);
    }

    /* 同步更新 */
    syncUpdateMessage(data){
        this.updateMessage(data);
    }
    
    bufferRender(data = []){
        data = data.reduce((p, n) => {
            p.gold = (p.gold || 0) + (n.gold || 0);
            p.diamond = (p.diamond || 0) + (n.diamond || 0);
            p.pieces = (p.pieces || 0) + (n.pieces || 0);
            p.experience = (p.experience || 0) + (n.experience || 0);
            return p;
        })
        this.updateMessage(data)
    }

    /* 更新阶段性数据 */
    updateMessage(data){
        let {
            gold, pieces, diamond,
            level, experience, head
        } = data;
        def(gold) && this.addGold(gold);
        def(head) && this.addGold(head);
        def(pieces) && this.addPieces(pieces);
        def(diamond) && this.addDiamond(diamond);
        def(experience) && this.addGold(experience);
    }

    /* 重新更新数据 */
    renderMessage(){
        let {
            gold, pieces, diamond,
            level, experience, head
        } = data;
        def(gold) && this.setGold(gold);
        def(head) && this.setGold(head);
        def(pieces) && this.setPieces(pieces);
        def(diamond) && this.setDiamond(diamond);
        def(experience) && this.setGold(experience);
    }

    setGold(number){
        this.goldUI.text = number;
    }

    addGold(value){
        this.goldUI.text = +this.goldUI.text + value;
    }

    buyGold(){
        this.asyncUpdateMessage({
            gold : 10
        })
        // this.addPieces(10)
        // this.addGold(10);
    }

    setPieces(number){
        this.piecesUI.text = number;
    }

    addPieces(value){
        this.piecesUI.text = +this.piecesUI.text + value;
    }

    setDiamond(number){
        this.diamondUI.text = number;
    }

    addDiamond(value){
        this.diamondUI.text = +this.diamondUI.text + value;
    }

}