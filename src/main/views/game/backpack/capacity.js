/**
 * 容量显示控制器
 */

const NAME_$_CAPACITY_TOTAL = 'total'; //  总容量
const NAME_$_CAPACITY_OCCUPY = 'occupy'; // 占有量
const DEFAULT_TOTAL = 60; // 默认总量
const DEFAULT_OCCUPY = 0; // 默认占有

export default class CapacityController {
    constructor(ui, options = {}){
        this.ui = ui;
        this.totalUI = ui.getChildByName(NAME_$_CAPACITY_TOTAL);
        this.occupyUI = ui.getChildByName(NAME_$_CAPACITY_OCCUPY);
        this.total = options.total || DEFAULT_TOTAL;
        this.occupy = options.occupy || DEFAULT_OCCUPY;
        this.init();
    }

    init(){
        this.setTotal(this.total);
    }

    setOccupy(occpuy){
        this.occupyUI.text = this.occpuy = occpuy;
    }

    getOccupy(){
        return this.occupy;
    }

    setTotal(total){
        this.totalUI.text = this.total = total;
    }

    getTotal(){
        return this.total;
    }
}