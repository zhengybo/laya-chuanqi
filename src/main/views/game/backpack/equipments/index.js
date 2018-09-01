/**
 * 装备列表控制器
 */
import UI from './../../ui'
import List from './../list'
import ListUI from './../../ui/list'
import ButtonList from './../../ui/buttonList'
import Capacity from './../capacity'

import Show from './../../show/equipmentInfoShow'

import { filter, action } from './data'
import equipments from '@/main/assets/equipment'
import { Functioned } from '@/main/unit/tool'

const NAME_$_EQ_LIST = 'list';
const NAME_$_EQ_CAPACITY = 'capacity';
const NAME_$_EQ_FILTER  = 'filter'
const NAME_$_EQ_ACTION  = 'action'
const NAME_$_EQ_SHOW = 'show'
const NAME_$_EQ_FILTER_BTN  = 'filter_btn'
const NAME_$_EQ_LIST_BTN  = 'list_btn'

const { Event, Handler } = Laya;
export default class Equipments extends UI{
    constructor(ui){
        super(ui);
        this.ui = ui;
        this.equipments = [];
        this.listController = null;
        this.capacityController = null;
        this.filterController = null;
        this.actionController = null
        this.listControllerUI = ui.getChildByName(NAME_$_EQ_LIST);
        this.capacityControllerUI = ui.getChildByName(NAME_$_EQ_CAPACITY);
        this.filterUI = ui.getChildByName(NAME_$_EQ_FILTER);
        this.actionUI = this.queryTagName(NAME_$_EQ_ACTION,ui);
        this.showUI = ui.getChildByName(NAME_$_EQ_SHOW);
        this.init();
    }

    init(){
        this.listController = new List(this.listControllerUI, { scroll : true });
        this.capacityController = new Capacity(this.capacityControllerUI);
        const options = {
            scroll : true , 
            data : filter, 
            buttonName : NAME_$_EQ_FILTER_BTN,
            onClick : this.change.bind(this),
            onceRenderThen(){
                this.setSelect(0);
            }
        }
        this.showController = new Show(this.showUI);
        this.filterController = new ButtonList(this.filterUI, options);
        this.actionController =  new ButtonList(this.actionUI, { data : action, buttonName : NAME_$_EQ_LIST_BTN, toggle : false});
        Functioned.injection(this.listController,{ showController : this.showController, capacityController : this.capacityController }); 
        this.initAction();
        this.initEvents();
    }

    initEvents(){
        
    }

    initAction(){
        // this.setEquipments(equipments);
    }

    setEquipments(equipments){
        this.equipments = equipments;
        this.listController.setItems(this.equipments);
    }

    change(data){
        this.listController.resetListShow();
        let type = data.type;
        if(type === ''){
            this.listController.setItems(this.equipments);
            return ;
        } else{
            let result =  this.equipments.filter(item => item.type == type);
            this.listController.setItems(result);
        }
        
    }
}