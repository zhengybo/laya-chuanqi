/**
 * 工具栏控制器
 */
import UI from './../ui'
import Store from '@/main/store'
import CNS from '@/main/store/controllerName'
import { extend, Dom } from '@/main/unit/extends'
import TradeList from './list'

const VAR_$_MY = 'my'; // 我的
const VAR_TRADE = 'trade'; // 交易行
const VAR_CHANGE = 'change'; // 交易行

const NAME_$_LIST = 'list'; // 列表

const { Handler, Event } = Laya;
// const HASH =  {
//     [NAME_$_COPY] : CNS.COPY,
//     [NAME_$_TRADE] : CNS.TRADE,
//     [NAME_$_FOLLOWER] : CNS.FOLLOWER,
//     [NAME_$_EQ_SKILL] : CNS.EQ_SKILL,
//     [NAME_$_DIAMOND_BAG] : CNS.BAGPACK
// }
export default class TradeController extends UI {
    constructor(ui){
        super(ui)
        this.ui = ui;
        this.myUI = ui[VAR_$_MY];
        this.tradeUI= ui[VAR_TRADE];
        this.changeUI= ui[VAR_CHANGE];
        this.myController = new TradeList(this.myUI, { scroll : true});
        this.tradeController = new TradeList(this.tradeUI, { scroll : true});
        this.lastController = null;
        extend(this, Dom);
        this.init();
    }

    init(){
        this.hide();
        this.initEvent();
        this.initAction();
    }

    initEvent(){
        this.changeUI.selectHandler = new Handler(this, this.onTab);
    }

    initAction(){
        this.myController.setItems(new Array(8).fill('1'))
        this.tradeController.setItems(new Array(6).fill('2'))
    }

    onTab(index){
        this.myController.show(!!index);
        this.tradeController.show(!index);
    }

}