/**
 * 消耗品控制器
 */
import UI from './../../ui'
import List from './../list'
import ListUI from './../../ui/list'
import ButtonList from './../../ui/buttonList'
import Capacity from './../capacity'
import Show from './../../show/equipmentInfoShow'

import { action } from './data'

import equipments from '@/main/assets/equipment'
import { Functioned } from '@/main/unit/tool'

const NAME_$_EQ_ACTION  = 'action'
const NAME_$_EQ_LIST = 'list';
const NAME_$_EQ_SHOW = 'show'
const NAME_$_EQ_CAPACITY = 'capacity';
const NAME_$_EQ_LIST_BTN  = 'list_btn'
const { Event, Handler } = Laya;

const CAPACITY_TOTAL = 40; // 默认总量 
export default class Consumables extends UI{
    constructor(ui){
        super(ui);
        this.ui = ui;
        this.consumables = [];
        this.listController = null;
        this.capacityController = null;
        this.actionController = null
        this.listControllerUI = ui.getChildByName(NAME_$_EQ_LIST);
        this.capacityControllerUI = ui.getChildByName(NAME_$_EQ_CAPACITY);
        this.actionUI = this.queryTagName(NAME_$_EQ_ACTION, ui);
        this.showUI = ui.getChildByName(NAME_$_EQ_SHOW);
        this.init();
    }

    init(){
        this.showController = new Show(this.showUI);
        this.listController = new List(this.listControllerUI, { scroll : true });
        this.capacityController = new Capacity(this.capacityControllerUI, { total : CAPACITY_TOTAL });
        this.actionController =  new ButtonList(this.actionUI, { data : action, buttonName : NAME_$_EQ_LIST_BTN, toggle : false});
        Functioned.injection(this.listController,{ showController : this.showController, capacityController : this.capacityController }); 
        this.initAction();
        this.initEvents();
    }

    initEvents(){
        
    }
    

    initAction(){
        // this.setConsumables(consumables)
        this.hide();
    }

    setConsumables(consumables){
        this.consumables = consumables;
        this.listController.setItems(this.consumables);
    }
}