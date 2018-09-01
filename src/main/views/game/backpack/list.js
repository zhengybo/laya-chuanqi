/**
 * 背包列表控制器
 */
import Cell from './cell'
import List from './../ui/list'


const { Event, Handler } = Laya;

export default class ShowController extends List{
    constructor(ui, options){
        super(ui,{ scroll : true });
        this.ui = ui;
        this.options = options;
        this.lastSelect = null; // 最近被选中的cell
        this.latticeNumber = 60;
        this.cellControllers = {}; // 格子们的控制器
        this.nullCells = new Array(this.latticeNumber).fill('').map(item => null); // 初始化格子
        this.init();
        return this;
    }

    init(){
        this.initEvents();
        this.initAction();
    }

    /* 初始化事件 */
    initEvents(){
        let backList = this.ui;
        backList.selectHandler = new Handler(this, this.onSelect);
        backList.renderHandler = new Handler(this, this.updateItem);
    }

    /* 初始化动作 */
    initAction(){
        let backList = this.ui;
        backList.array  = this.nullCells;
        backList.cells.forEach(cell => (this.cellControllers[cell.$_GID] = new Cell(cell, this.options))); // 生成 格子控制器
    }

    /* 设置物品栏 */
    setItems(arr = []){
        let result = [],
            occupy = arr.length,
            backList = this.ui;
        result = this.nullCells.slice(occupy);
        result.unshift(...arr);
        backList.array = result;
        this._c_.capacityController.setOccupy(occupy);
    }

    onSelect(index){
        let cell = this.getCell(index);
        if(!cell) return;
        let c = this.getCellController(cell);
        this.setSelected(c);
        this.showText(c.getData());
    }

    updateItem(cell,index){
        if(!cell) return;
        let c = this.getCellController(cell),
            data = c.getData();
        c.renderCell(data)
    }

    /* 展示物品信息 */
    showText(data){
        this._c_.showController.showMessage(data);
        // let showUI = this.ui.eq_info_box;
    }

    /* 设置被选中了 */
    setSelected(c){
        let lst = this.lastSelect;
        if(!c.getData()) return;
        if(lst) lst.setSelected(false);
        this.lastSelect = c;
        c.setSelected(true);
    }

    /* 获取格子控制器 */
    getCellController(cell){
        let id = typeof cell == 'object' ?  cell.$_GID : cell;
        return this.cellControllers[id];
    }

    /* 设置格子数 */
    setLattice(number = 60){
        this.latticeNumber = number;
    }

    /* 重置显示状态 */
    resetListShow(){
        if(this.lastSelect){
            this.lastSelect.setSelected(false); // 重置选中状态
            this.ui.selectedIndex = -1;
        }
        this.ui.scrollTo(0);
        this._c_.showController.hide();
    }

    /* 更新背包信息 */
    updateInfo(){

    }

    /* 增加物品 */
    addItem(id){

    }


    /* 获取背包物品信息 */
    getItemInfo(){
        
    }

    showItemInfo(){
        // this.ui.eq_info_box.hide();
        console.log();
    }
}