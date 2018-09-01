/**
 * 显示组件控制器
 * 整合所有显示的组件
 */
// const VAR_$_EQ_INFO  = 'eq_info';

import Store from '@/main/store' 
import NAME from '@/main/store/controllerName'
import EquipmentInfoShow from './equipmentInfoShow'
export default class Show {
    constructor(){
        this.init();
    }

    init(){
        this.equipmentInfoUI = new equipmentInfoUI();
        this.equipmentInfo = new EquipmentInfoShow(this.equipmentInfoUI).setAttrs({ zOrder  : 1});
        Store.setController(NAME.EQ_SHOWS, this.equipmentInfo);
        Laya.stage.addChild(this.equipmentInfoUI ); //  添加进去舞台
    }
}