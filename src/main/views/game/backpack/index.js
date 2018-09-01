/**
 * 背包系统控制器
 */
import UI from './../ui'
// import List from './list'
// import Capacity from './capacity'


import Consumables from './consumables'
import Equipments from './equipments'

import NAME from '@/main/store/controllerName'
import Store from '@/main/store' 
import equipments from '@/main/assets/equipment'
import { Functioned } from '@/main/unit/tool'

const VAR_$_EQUIPMENTS = 'equipments';
const VAR_$_CONSUMABLES = 'consumables';
const VAR_$_CLASSIFY = 'classify';

const { Event, Handler } = Laya;

export default class BackPackController extends UI{
    constructor(ui,options = {}){
        super(ui);
        this.ui = ui;
        // this.bagListController = null; // 背包列表控制器
        // this.capacityController = null; // 容量显示控制器
        this.classifyUI = ui[VAR_$_CLASSIFY];
        this.equipmentsController = null;
        this.consumablesController = null;
        this.equipmentsControllerUI = ui[VAR_$_EQUIPMENTS];
        this.consumablesControllerUI = ui[VAR_$_CONSUMABLES];
        // this.consumablesControllerUI = ui[VAR_$_CLASSIFY];
        // this.list = []; // 背包物品列表
        this.init(options);
    }

    init(options){
        this.equipmentsController = new Equipments(this.equipmentsControllerUI);
        this.consumablesController = new Consumables(this.consumablesControllerUI);

        // this.bagListController = new List(this.ui[VAR_$_BAG_LIST]);
        // this.capacityController = new Capacity(this.ui[VAR_$_CAPACITY]);
        // Store.setController(NAME.BAG_LIST_SHOW, this.showController);
        // 把显示和容量控制器注入背包控制器
        // Functioned.injection(this.bagListController,{ showController : Store.getController(NAME.EQ_SHOWS), capacityController : this.capacityController }); 
        // this.initOptions(options);
        this.initEvents();
        this.initAction();
        // this.bagListController.setItems(equipments);
    }

    initOptions(options){
        const { pos = [0,0]} = options; 
        // 设置背包位置
        this.ui.pos([0,250]);
    }

    /* 初始化事件 */
    initEvents(){
        this.classifyUI.selectHandler = new Handler(this, this.onTab);
       
    }

    /* 初始化动作 */
    initAction(){
        setTimeout(() => {
            let eqs = equipments.filter(item => item.classify == 'equipment');
            let con = equipments.filter(item => item.classify == 'consume');
            this.equipmentsController.setEquipments(eqs);
            this.consumablesController.setConsumables(con);
            // this.consumablesController.set
        })
        this.hide();
        // this.displayBox(this.ui.eq_info_box,false); // 隐藏装备信息栏
    }
    

    onTab(index){
        switch (index) {
        case 0:
            this.equipmentsController.show();
            this.consumablesController.hide();
            break;
        case 1:
            this.consumablesController.show();
            this.equipmentsController.hide();
            break;
        default:
            
        }
    }

    /* 展示物品信息 */
    showText(){
        let showUI = this.ui.eq_info_box;
    }
}