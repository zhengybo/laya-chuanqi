/**
 * 弹框控制器
 */
import UI from '@/main/views/game/ui'

const { Event, Handler } = Laya;

export default class DialogController extends UI{
    constructor(options){
		let ui = new dialogMaskUI();
        super(ui, options);
		this.ui = ui;
		this.dialog = new dialogUI();
        this.init();
        return this;
    }

    init(){
        this.initEvents();
        this.initAction();
    }

	initEvents(){
		this.ui.on(Event.CLICK, this, this.hide);
		this.dialog.closeHandler = new Handler(this, this.close);
	}

	show(){
		super.show();
		this.dialog.show();
	}

	hide(){
		this.dialog.close();
	}

	close(){
		super.hide();
	}

	initAction(){
		Laya.stage.addChild(this.ui);
		this.ui.zOrder = 999;
		this.dialog.zOrder = 1000;
	}

}