/**
 * 物品格子控制器
 */
import equipmentSkin from '@/main/store/equipmentSkin'

const NAME_$_EQUIPMENT_IMG = 'equiment_img'; // 格子图片
const NAME_$_EQUIPMENT_SKIN = 'equiment_skin'; // 格子皮肤颜色
const NAME_$_EQUIPMENT_SELECTED = 'equipment_selected'; // 格子选中
const NAME_$_EQUIPMENT_NUMBER = 'equipment_number'; // 格子选中

export default class CellController {
    constructor(ui){
        this.ui = ui;
        this.imgUI = ui.getChildByName(NAME_$_EQUIPMENT_IMG); // 是否选择样式ui
        this.skinUI = ui.getChildByName(NAME_$_EQUIPMENT_SKIN); // 装备皮肤样式ui
        this.selectUI = ui.getChildByName(NAME_$_EQUIPMENT_SELECTED); // 是否选择样式ui
        this.numberUI = ui.getChildByName(NAME_$_EQUIPMENT_NUMBER); // 是否选择样式ui
        this.defaultImg = this.imgUI.skin;
        this.init();
    }

    init(){
        if(this.numberUI){
            this.numberUI.visible = true;
        }
    }

    /* 设置选中状态 */
    setSelected(status = true){
        this.selectUI.visible = status;
    }

    /* 渲染格子样式 */
    renderCell(data){
        data = data || {};
        this.setImg(data.src || this.defaultImg);
        this.setSkin(data.qualityId);
        this.setNumber(data.number);
    }

    /* 设置图片 */
    setImg(src){
        this.imgUI.skin = src;
    }

    /* 设置皮肤 */
    setSkin(skinId){
        this.skinUI.skin = equipmentSkin[skinId] || '';
    }

    /* 设置数据 */
    setData(data = {}){
        this.ui.dataSource = data;
    }

    /* 获取数据 */
    getData(){
        return this.ui.dataSource;
    }

    setNumber(number){
        if(this.numberUI && number){
            this.numberUI.text = `x${number}`;
        }
    }

}