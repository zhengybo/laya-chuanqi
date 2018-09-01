
/**
 * 按钮列表类
 * @param {Object} ui 列表ui
 * @param {Object} options 选项
 * -- 属性
 * - toggle 是否具有按钮切换状态
 * - buttonName 按钮name
 * - data 数据源
 * -- 事件
 * - onClick 点击回调
 * - onceRenderThen 第一次渲染回调
 */
import List from './list' 

const { Handler } = Laya;

export default class ButtonList extends List {
    constructor(ui, options = {}){
        super(ui,options);
        this.options = options;
        this.data = options.data || [];
        this.toggle = options.toggle === undefined ? true : options.toggle;
        this.buttonName = options.buttonName;
        this.ui = ui;
        this.once = true;
        this.lastSelect = null;
        this.init(options);
        return this;
    }

    init(options){
        this.initEvents();
        this.initAction();
    }

    initEvents(){
        this.ui.mouseHandler = new Handler(this, this.listClick);
        this.ui.renderHandler = new Handler(this, this.listRender);
    }

    initAction(){
        this.ui.array = this.data; // 初始化格子
        
    }

    setSelect(index){
        this.ui.selectedIndex = this.currentIndex  = index;
        this.listClick({ type : 'click' }, index);
    }

    listRender(cell, index){
        cell.getChildByName(this.buttonName).label = this.data[index].label;
        if(index == this.data.length -1){
            if(this.once){
                this.once = false;
                this.options.onceRenderThen && this.options.onceRenderThen.call(this);
            }
        }
    }

    listClick(e, index){
        if(e.type == 'click'){
            let cell = this.getCell(index),
                btn = cell.getChildByName(this.buttonName);
            if(this.toggle){
                if(this.lastSelect == btn){
                    return;
                }
                if(this.lastSelect){
                    this.lastSelect.selected = false;
                }
                btn.selected = true;
                this.lastSelect = btn;
            }
            this.options.onClick && this.options.onClick.call(this, cell.dataSource);
        }
        
    }
}