/**
 * 面板信息显示控制器
 */
import UI from './../ui'
import { IT, ITF, Params, Formatter } from '@/main/store/adapter'
import lang from '@/main/store/adapter/lang'

const { Handler } = Laya;

const VAR_$_EQ_WEAR = 'wear_equipment'; // 穿戴上的等级
const VAR_$_EQ_CURRENT = 'current_equipment'; // 当前装备

const NAME_$_EQ_MSG_LV = 'eq_msg_lv'; // 等级
const NAME_$_EQ_MSG_OPT = 'eq_msg_opt'; // 职业
const NAME_$_EQ_MSG_R_LV = 'eq_msg_r_lv'; // 需要等级
const NAME_$_EQ_MSG_NAME = 'eq_msg_name'; // 名称
const NAME_$_EQ_MSG_ATTRS = 'eq_msg_attrs'; // 属性盒子
const NAME_$_EQ_MSG_ATTRS_TEXT = 'eq_msg_attrs_text'; // 属性文本
const { equipmentBasisMessage, equipmentAttrsMessage } = Params;

export default class EquipmentInfoShow extends UI{
    constructor(ui){
        super(ui);
        this.ui = ui;
        this.equipmentWearUI = this.queryTagName(VAR_$_EQ_WEAR);
        this.equipmentCurrentUI = this.queryTagName(VAR_$_EQ_CURRENT);
        this.wearQuote = {};
        this.currentQuote = {};
        this.init();
    }

    init(){
        this.hide();
        this.initQuote(this.equipmentWearUI, this.wearQuote);
        this.initQuote(this.equipmentCurrentUI, this.currentQuote);
    }

    /* 初始化引用 */
    initQuote(ui, quote){
        [
            NAME_$_EQ_MSG_LV,
            NAME_$_EQ_MSG_OPT, 
            NAME_$_EQ_MSG_R_LV, 
            NAME_$_EQ_MSG_NAME,
            NAME_$_EQ_MSG_ATTRS
        ].forEach(key => (quote[key] = ui.getChildByName(key)));
        quote[NAME_$_EQ_MSG_ATTRS].renderHandler = new Handler(this, this.renderList); // 添加渲染回调 
    }

    renderList(cell, index){
        let attrs = cell.dataSource,
            label = cell.getChildByName(NAME_$_EQ_MSG_ATTRS_TEXT);
        Object.keys(attrs).forEach(key => (label[key] = attrs[key]));
    }

    updateMessage(target, data){
        this.updateBasisMessage(target, data);
        this.updateAttrs(target[NAME_$_EQ_MSG_ATTRS], data.attrs);
    }

    /* 更新基本信息 */
    updateBasisMessage(target, data){
        const t = IT(data, equipmentBasisMessage);
        target[NAME_$_EQ_MSG_LV].text = Formatter({ p : '+', v : t(NAME_$_EQ_MSG_LV) || null });
        target[NAME_$_EQ_MSG_OPT].text = t(NAME_$_EQ_MSG_OPT);
        target[NAME_$_EQ_MSG_R_LV].text = `需要等级:${t(NAME_$_EQ_MSG_R_LV)}`;
        target[NAME_$_EQ_MSG_NAME].text = t(NAME_$_EQ_MSG_NAME);
    }

    /* 更新属性 */
    updateAttrs(target, data = {}){
        let keys = Object.keys(data),
            msg = equipmentAttrsMessage,
            langMsg = lang.equipmentAttrsMessage;
        // 添加渲染属性
        target.array = keys.map((key, index) => ({
            text : `${ITF(langMsg, msg, key)} : ${ITF(data, msg, key)}`
        }));
    }

    updateCurrent(data){
        this.updateMessage(this.currentQuote , data);
    }

    updateWear(data){
        this.updateMessage(this.wearQuote , data);
    }

    showMessage(data){
        if(!data) return;
        this.updateCurrent(data)
        this.updateWear(data)
        this.show();
    }
}