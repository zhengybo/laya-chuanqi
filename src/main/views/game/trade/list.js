import List from './../ui/list'
import DialogUI from '@/main/views/components/dialog'
const { Event, Handler, Dialog } = Laya;

const NAME_$_TRADE_BUY = 'buy';
export default class TradeList extends List{

    constructor(ui, options){
        super(ui, options);
        this.ui = ui;
        this.buyDialog = new DialogUI();
        this.latticeNumber = 10;
        this.nullCells = new Array(this.latticeNumber).fill('').map(item => null); // 初始化格子
        this.init();
    }

    init(){
        this.initEvent();
        this.initAction();
    }

    initEvent(){
        // this.ui.selectHandler = new Handler(this, this.onSelect);
        this.ui.renderHandler = new Handler(this, this.onRender);
        this.ui.on(Event.CLICK, this, this.onClick);
    }

    initAction(){
    }

    onClick(event){
        let target = event.target,
            parent = target.parent;
        if(target.name == NAME_$_TRADE_BUY){ // 执行购买点击
            this.buy(this.getItem(parent.listOrder));
        }else{ //之前列表点击
            this.showMessage(this.getItem(target.listOrder));
        }
    }

    onClickBuy(e){
        e.stopPropagation();
        console.log(e,e.target==e.currentTarget)
    }

    onRender(cell,index){
        cell.listOrder = index;
    }

    setItems(arr){
        this.ui.array = arr;
    }


    buy(target){
        this.buyDialog.show();
    }

    showMessage(target){
        console.log(target);
    }
}