/**
 * 基础UI组件list类
 */
import UI from './'
export default class List extends UI{
    
    constructor(ui,options = {}){
        super(ui);
        this.ui = ui;
        this.initOptions(options);
    }

    initOptions(options){
        const { scroll = false } = options;
        if(scroll){
            this.ui.vScrollBarSkin = "";
            this.ui.selectEnable = true;
        }
    }

    getItem(index){
        return this.ui.array[index];
    }

    getCell(index){
        return this.ui.getCell(index);
    }
}