/**
 * 工具栏控制器
 */
import UI from './../ui'
import Store from '@/main/store'
import CNS from '@/main/store/controllerName'
import { extend, Dom } from '@/main/unit/extends'
const NAME_$_TOOLS_BOX = 'tools_box'; // 盒子
const NAME_$_COPY = 'copy'; // 副本
const NAME_$_TRADE = 'trade'; // 交易
const NAME_$_FOLLOWER = 'follower'; // 追随者
const NAME_$_EQ_SKILL = 'equment_skill'; // 装备/技能
const NAME_$_DIAMOND_BAG = 'diamond_bag'; // 宝石/背包

const { Handler, Event } = Laya;
const HASH =  {
    [NAME_$_COPY] : CNS.COPY,
    [NAME_$_TRADE] : CNS.TRADE,
    [NAME_$_FOLLOWER] : CNS.FOLLOWER,
    [NAME_$_EQ_SKILL] : CNS.EQ_SKILL,
    [NAME_$_DIAMOND_BAG] : CNS.BAGPACK
}
export default class ToolsController extends UI {
    constructor(ui){
        super(ui)
        this.ui = ui;
        this.boxUI = ui.getChildByName(NAME_$_TOOLS_BOX);
        this.copyUI = this.boxUI.getChildByName(NAME_$_COPY);
        this.tradeUI = this.boxUI.getChildByName(NAME_$_TRADE);
        this.eqSkillUI = this.boxUI.getChildByName(NAME_$_EQ_SKILL);
        this.followerUI = this.boxUI.getChildByName(NAME_$_FOLLOWER);
        this.diamondBagUI = this.boxUI.getChildByName(NAME_$_DIAMOND_BAG);
        this.lastController = null;
        extend(this, Dom);
        this.init();
    }

    init(){
        this.copyUI.on(Event.CLICK, this,this.onClick);
        this.tradeUI.on(Event.CLICK, this,this.onClick);
        this.eqSkillUI.on(Event.CLICK, this,this.onClick);
        this.followerUI.on(Event.CLICK, this,this.onClick);
        this.diamondBagUI.on(Event.CLICK, this,this.onClick);
    }

    onClick(e){
        let target = e.target;
        if(target == this.lastController) return ;
        let controller = Store.getController(HASH[target.name]);
        if(!controller) return;
        if(this.lastController){
            this.lastController.hide();
        }
        controller.show();
        this.lastController = controller;
    }
}