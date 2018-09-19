var CLASS$=Laya.class;
var STATICATTR$=Laya.static;
var View=laya.ui.View;
var Dialog=laya.ui.Dialog;
var backpackUI=(function(_super){
		function backpackUI(){
			
		    this.equipments=null;
		    this.current_equipment=null;
		    this.wear_equipment=null;
		    this.consumables=null;
		    this.classify=null;

			backpackUI.__super.call(this);
		}

		CLASS$(backpackUI,'ui.backpackUI',_super);
		var __proto__=backpackUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(backpackUI.uiView);

		}

		backpackUI.uiView={"type":"View","props":{"width":750,"top":200,"height":962},"child":[{"type":"Image","props":{"y":0,"x":0,"visible":false,"top":0,"skin":"gameResource/bag_bg.png","right":0,"left":0,"bottom":0}},{"type":"Image","props":{"x":0,"width":754,"skin":"gameResource/bag_info.png","height":390,"bottom":0}},{"type":"Box","props":{"y":0,"x":0,"width":750,"var":"equipments","height":962},"child":[{"type":"Image","props":{"y":0,"x":0,"width":750,"skin":"gameResource/eq.png","height":570}},{"type":"List","props":{"y":106,"x":55,"width":560,"vScrollBarSkin":"comp/vscroll.png","spaceX":4,"repeatY":9,"repeatX":6,"name":"list","height":350},"child":[{"type":"Box","props":{"width":90,"renderType":"render","height":87.5},"child":[{"type":"Image","props":{"width":85,"visible":false,"skin":"gameResource/24.png","name":"equipment_selected","height":85,"centerY":0,"centerX":0}},{"type":"Image","props":{"width":90,"name":"equiment_skin","mouseEnabled":true,"height":90,"centerY":0,"centerX":0}},{"type":"Image","props":{"width":60,"skin":"gameResource/A游戏的主界面素材_331.png","name":"equiment_img","mouseEnabled":true,"height":60,"centerY":0,"centerX":0}},{"type":"Image","props":{"width":10,"skin":"gameResource/00197(已去底).png","right":10,"name":"加锁","mouseEnabled":true,"height":10,"bottom":10}}]}]},{"type":"Box","props":{"y":488,"width":200,"right":82,"name":"capacity","height":30},"child":[{"type":"Label","props":{"text":"背包容量","fontSize":30,"color":"#f6eaea"}},{"type":"Label","props":{"width":40,"text":"0","name":"occupy","left":125,"fontSize":30,"color":"#f6eaea","align":"right"}},{"type":"Label","props":{"text":"/","left":165,"fontSize":30,"color":"#f6eaea"}},{"type":"Label","props":{"width":40,"text":"60","name":"total","left":175,"fontSize":30,"color":"#f6eaea"}}]},{"type":"List","props":{"y":106,"width":80,"repeatY":8,"repeatX":1,"name":"filter","left":618,"height":350,"dataSource":"123"},"child":[{"type":"Box","props":{"width":80,"renderType":"render","height":50},"child":[{"type":"Button","props":{"y":0,"x":0,"width":80,"visible":true,"toggle":false,"stateNum":2,"skin":"gameResource/btn.png","selected":false,"name":"filter_btn","labelStrokeColor":"#aeaeae","labelStroke":0,"labelSize":24,"labelColors":"#aeaeae,#cdad2e,#cdad2e","labelBold":true,"height":50,"gray":false}}]}]},{"type":"Box","props":{"x":0,"name":"show","bottom":0},"child":[{"type":"Box","props":{"x":0,"width":750,"height":390},"child":[{"type":"Image","props":{"width":754,"skin":"gameResource/bag_info.png","name":"bg_img","height":390}},{"type":"Box","props":{"width":375,"var":"current_equipment","name":"current_equipment","left":0,"height":390},"child":[{"type":"Label","props":{"top":16,"text":"当前装备","fontSize":26,"color":"#c3baba","centerX":0}},{"type":"Label","props":{"y":63,"x":50,"width":130,"name":"eq_msg_name","height":22,"fontSize":22,"color":"#d9cbcb"}},{"type":"Label","props":{"y":63,"x":190,"width":130,"name":"eq_msg_lv","height":22,"fontSize":22,"color":"#d9cbcb"}},{"type":"Label","props":{"y":92,"x":50,"width":130,"name":"eq_msg_r_lv","height":22,"fontSize":22,"color":"#d9cbcb"}},{"type":"Label","props":{"y":92,"x":190,"width":130,"name":"eq_msg_opt","height":22,"fontSize":22,"color":"#d9cbcb"}},{"type":"List","props":{"y":143,"x":50,"width":275,"repeatY":8,"repeatX":1,"name":"eq_msg_attrs","height":176},"child":[{"type":"Box","props":{"y":0,"x":0,"renderType":"render"},"child":[{"type":"Label","props":{"y":0,"x":0,"width":275,"top":0,"name":"eq_msg_attrs_text","height":30,"fontSize":22,"color":"#bcafae","align":"left"}}]}]}]},{"type":"Box","props":{"width":375,"var":"wear_equipment","right":0,"name":"wear_equipment","height":390},"child":[{"type":"Label","props":{"y":16,"x":-27,"text":"已装备","fontSize":26,"color":"#e04343","centerX":0}},{"type":"Label","props":{"y":63,"x":30,"width":130,"name":"eq_msg_name","height":22,"fontSize":22,"color":"#d9cbcb"}},{"type":"Label","props":{"y":63,"x":170,"width":130,"name":"eq_msg_lv","height":22,"fontSize":22,"color":"#d9cbcb"}},{"type":"Label","props":{"y":92,"x":30,"width":130,"name":"eq_msg_r_lv","height":22,"fontSize":22,"color":"#d9cbcb"}},{"type":"Label","props":{"y":92,"x":170,"width":130,"name":"eq_msg_opt","height":22,"fontSize":22,"color":"#d9cbcb"}},{"type":"List","props":{"y":143,"x":30,"width":275,"repeatY":8,"repeatX":1,"name":"eq_msg_attrs","height":176},"child":[{"type":"Box","props":{"y":0,"x":0,"renderType":"render"},"child":[{"type":"Label","props":{"y":0,"x":0,"width":275,"top":0,"name":"eq_msg_attrs_text","height":30,"fontSize":22,"color":"#bcafae","align":"left"}}]}]}]},{"type":"Image","props":{"width":5,"skin":"gameResource/split.png","height":314,"centerX":0,"bottom":20}}]},{"type":"List","props":{"y":74,"width":80,"right":4,"repeatY":5,"repeatX":1,"name":"action","height":252,"dataSource":"123"},"child":[{"type":"Box","props":{"width":80,"renderType":"render","height":50},"child":[{"type":"Button","props":{"y":0,"x":0,"width":80,"visible":true,"toggle":false,"stateNum":2,"skin":"gameResource/btn.png","selected":false,"name":"list_btn","labelStrokeColor":"#aeaeae","labelStroke":0,"labelSize":24,"labelColors":"#aeaeae,#cdad2e,#cdad2e","labelBold":true,"height":50,"gray":false}}]}]}]}]},{"type":"Box","props":{"width":750,"visible":false,"var":"consumables","height":962},"child":[{"type":"Image","props":{"y":0,"x":0,"width":750,"skin":"gameResource/eq.png","height":570}},{"type":"List","props":{"y":106,"x":55,"width":637,"vScrollBarSkin":"comp/vscroll.png","spaceX":4,"repeatY":9,"repeatX":7,"name":"list","height":350},"child":[{"type":"Box","props":{"width":90,"renderType":"render","height":87.5},"child":[{"type":"Image","props":{"width":85,"visible":false,"skin":"gameResource/24.png","name":"equipment_selected","height":85,"centerY":0,"centerX":0}},{"type":"Image","props":{"width":90,"name":"equiment_skin","mouseEnabled":true,"height":90,"centerY":0,"centerX":0}},{"type":"Image","props":{"width":60,"skin":"gameResource/A游戏的主界面素材_331.png","name":"equiment_img","mouseEnabled":true,"height":60,"centerY":0,"centerX":0}},{"type":"Image","props":{"width":10,"skin":"gameResource/00197(已去底).png","right":10,"name":"加锁","mouseEnabled":true,"height":10,"bottom":10}},{"type":"Label","props":{"visible":false,"right":18,"name":"equipment_number","height":12,"fontSize":16,"color":"#f3efef","bottom":14}}]}]},{"type":"Box","props":{"y":488,"width":200,"right":82,"name":"capacity","height":30},"child":[{"type":"Label","props":{"text":"背包容量","fontSize":30,"color":"#f6eaea"}},{"type":"Label","props":{"width":40,"text":"0","name":"occupy","left":125,"fontSize":30,"color":"#f6eaea","align":"right"}},{"type":"Label","props":{"text":"/","left":165,"fontSize":30,"color":"#f6eaea"}},{"type":"Label","props":{"width":40,"text":"60","name":"total","left":175,"fontSize":30,"color":"#f6eaea"}}]},{"type":"Box","props":{"name":"show","bottom":0},"child":[{"type":"Box","props":{"x":0,"width":750,"height":390},"child":[{"type":"Image","props":{"width":754,"skin":"gameResource/bag_info.png","name":"bg_img","height":390}},{"type":"Box","props":{"width":375,"name":"current_equipment","left":0,"height":390},"child":[{"type":"Label","props":{"top":16,"text":"当前装备","fontSize":26,"color":"#c3baba","centerX":0}},{"type":"Label","props":{"y":63,"x":50,"width":130,"name":"eq_msg_name","height":22,"fontSize":22,"color":"#d9cbcb"}},{"type":"Label","props":{"y":63,"x":190,"width":130,"name":"eq_msg_lv","height":22,"fontSize":22,"color":"#d9cbcb"}},{"type":"Label","props":{"y":92,"x":50,"width":130,"name":"eq_msg_r_lv","height":22,"fontSize":22,"color":"#d9cbcb"}},{"type":"Label","props":{"y":92,"x":190,"width":130,"name":"eq_msg_opt","height":22,"fontSize":22,"color":"#d9cbcb"}},{"type":"List","props":{"y":143,"x":50,"width":275,"repeatY":8,"repeatX":1,"name":"eq_msg_attrs","height":176},"child":[{"type":"Box","props":{"y":0,"x":0,"renderType":"render"},"child":[{"type":"Label","props":{"y":0,"x":0,"width":275,"top":0,"name":"eq_msg_attrs_text","height":30,"fontSize":22,"color":"#bcafae","align":"left"}}]}]}]},{"type":"Box","props":{"width":375,"right":0,"name":"wear_equipment","height":390},"child":[{"type":"Label","props":{"y":16,"x":-27,"text":"已装备","fontSize":26,"color":"#e04343","centerX":0}},{"type":"Label","props":{"y":63,"x":30,"width":130,"name":"eq_msg_name","height":22,"fontSize":22,"color":"#d9cbcb"}},{"type":"Label","props":{"y":63,"x":170,"width":130,"name":"eq_msg_lv","height":22,"fontSize":22,"color":"#d9cbcb"}},{"type":"Label","props":{"y":92,"x":30,"width":130,"name":"eq_msg_r_lv","height":22,"fontSize":22,"color":"#d9cbcb"}},{"type":"Label","props":{"y":92,"x":170,"width":130,"name":"eq_msg_opt","height":22,"fontSize":22,"color":"#d9cbcb"}},{"type":"List","props":{"y":143,"x":30,"width":275,"repeatY":8,"repeatX":1,"name":"eq_msg_attrs","height":176},"child":[{"type":"Box","props":{"y":0,"x":0,"renderType":"render"},"child":[{"type":"Label","props":{"y":0,"x":0,"width":275,"top":0,"name":"eq_msg_attrs_text","height":30,"fontSize":22,"color":"#bcafae","align":"left"}}]}]}]},{"type":"Image","props":{"width":5,"skin":"gameResource/split.png","height":314,"centerX":0,"bottom":20}}]},{"type":"List","props":{"y":74,"right":4,"repeatY":5,"repeatX":1,"name":"action","height":252,"dataSource":"123"},"child":[{"type":"Box","props":{"width":120,"renderType":"render","height":50},"child":[{"type":"Button","props":{"y":0,"x":0,"width":120,"visible":true,"toggle":false,"stateNum":2,"skin":"gameResource/btn.png","selected":false,"name":"list_btn","labelStrokeColor":"#aeaeae","labelStroke":0,"labelSize":24,"labelColors":"#aeaeae,#cdad2e,#cdad2e","labelBold":true,"height":50,"gray":false}}]}]}]}]},{"type":"Box","props":{"y":484,"x":81,"width":280,"visible":true,"top":484,"name":"pieces_box","left":81,"height":40},"child":[{"type":"Image","props":{"width":380,"top":0,"left":0,"height":40,"bottom":0}},{"type":"Image","props":{"y":0,"x":0,"width":50,"top":0,"skin":"gameResource/pieces.png","left":0,"bottom":0}},{"type":"Label","props":{"y":5,"x":55,"top":5,"text":"碎片数量:","overflow":"scroll","name":"pieces","left":55,"height":30,"fontSize":30,"color":"#cc6633","bottom":5,"align":"left"}},{"type":"Label","props":{"width":168,"top":4,"text":"0","overflow":"scroll","name":"pieces","left":198,"height":30,"fontSize":30,"color":"#cc6633","bottom":5,"align":"left"}}]},{"type":"Tab","props":{"width":331,"var":"classify","top":27,"stateNum":3,"space":20,"skin":"gameResource/tab1.png","selectedIndex":0,"mouseThrough":true,"mouseEnabled":true,"layoutEnabled":true,"labels":"装备,消耗品","labelStrokeColor":"#c88c8b","labelSize":40,"labelColors":"#ccc,#cdad2e,#cdad2e","height":60,"direction":"horizontal","centerX":0}}]};
		return backpackUI;
	})(View);
var dialogUI=(function(_super){
		function dialogUI(){
			

			dialogUI.__super.call(this);
		}

		CLASS$(dialogUI,'ui.dialog.dialogUI',_super);
		var __proto__=dialogUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(dialogUI.uiView);

		}

		dialogUI.uiView={"type":"Dialog","props":{"y":0,"x":0,"width":400,"visible":true,"height":300},"child":[{"type":"Image","props":{"y":10,"x":10,"top":0,"skin":"bagResource/eq_info_pic.png","right":0,"mouseThrough":false,"left":0,"bottom":0}}]};
		return dialogUI;
	})(Dialog);
var dialogMaskUI=(function(_super){
		function dialogMaskUI(){
			

			dialogMaskUI.__super.call(this);
		}

		CLASS$(dialogMaskUI,'ui.dialog.dialogMaskUI',_super);
		var __proto__=dialogMaskUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(dialogMaskUI.uiView);

		}

		dialogMaskUI.uiView={"type":"View","props":{"width":750,"visible":false,"height":1442},"child":[{"type":"Box","props":{"y":10,"x":10,"top":0,"right":0,"left":0,"bottom":0,"alpha":0.3},"child":[{"type":"Rect","props":{"y":0,"x":0,"width":750,"lineWidth":0,"height":1442,"fillColor":"#000"}}]}]};
		return dialogMaskUI;
	})(View);
var gameFrameUI=(function(_super){
		function gameFrameUI(){
			
		    this.head_message=null;
		    this.head=null;
		    this.tools=null;
		    this.tools_box=null;

			gameFrameUI.__super.call(this);
		}

		CLASS$(gameFrameUI,'ui.gameFrameUI',_super);
		var __proto__=gameFrameUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(gameFrameUI.uiView);

		}

		gameFrameUI.uiView={"type":"View","props":{"width":750,"height":1334},"child":[{"type":"Image","props":{"y":10,"x":10,"top":14,"skin":"gameResource/bg_pic.png","right":0,"left":1,"bottom":0}},{"type":"Box","props":{"y":10,"x":10,"visible":true,"var":"head_message","top":0,"right":0,"left":0,"height":200},"child":[{"type":"Image","props":{"var":"head","top":0,"skin":"gameResource/titlebg.png","right":0,"left":0,"bottom":0}},{"type":"Image","props":{"width":120,"top":30,"skin":"gameResource/head_girl.png","name":"role_head","left":15,"height":120}},{"type":"Box","props":{"width":280,"visible":true,"top":130,"name":"pieces_box","left":440,"height":40},"child":[{"type":"Image","props":{"top":0,"skin":"gameResource/titlebg.png","right":0,"left":0,"bottom":0}},{"type":"Image","props":{"y":0,"x":0,"width":50,"top":0,"skin":"gameResource/pieces.png","left":0,"bottom":0}},{"type":"Label","props":{"width":280,"top":5,"text":"0","right":0,"name":"pieces","left":0,"height":30,"fontSize":30,"color":"#cc6633","bottom":5,"align":"center"}}]},{"type":"Box","props":{"width":280,"visible":true,"top":30,"name":"diamond_box","left":440,"height":40},"child":[{"type":"Image","props":{"y":0,"x":0,"top":0,"skin":"gameResource/titlebg.png","right":0,"left":0,"bottom":0}},{"type":"Image","props":{"width":50,"top":0,"skin":"gameResource/diamond.png","left":0,"bottom":0}},{"type":"Label","props":{"width":200,"top":5,"text":"0","name":"diamond","left":40,"fontSize":30,"color":"#cc6633","bottom":5,"align":"center"}},{"type":"Button","props":{"width":40,"top":0,"stateNum":2,"skin":"gameResource/btn_add.png","right":0,"name":"diamond_but","left":240,"height":40,"bottom":0}}]},{"type":"Box","props":{"width":280,"visible":true,"top":80,"name":"gold_box","left":440,"height":40},"child":[{"type":"Image","props":{"top":0,"skin":"gameResource/titlebg.png","right":0,"left":0,"bottom":0}},{"type":"Image","props":{"width":50,"top":0,"skin":"gameResource/glod.png","left":0,"bottom":0}},{"type":"Label","props":{"width":200,"top":5,"text":"0","name":"gold","left":40,"fontSize":30,"color":"#cc6633","bottom":5,"align":"center"}},{"type":"Button","props":{"width":40,"top":0,"stateNum":2,"skin":"gameResource/btn_add.png","sizeGrid":"0,0,0,0","right":0,"renderType":"render","name":"gold_but","left":240,"height":40,"bottom":0}}]},{"type":"Box","props":{"width":280,"visible":true,"top":30,"name":"role_name","left":150,"height":40},"child":[{"type":"Image","props":{"top":0,"skin":"gameResource/titlebg.png","right":0,"left":0,"bottom":0}},{"type":"Label","props":{"top":5,"text":"【测试名字】7","right":0,"name":"role_name","left":0,"fontSize":30,"color":"#ffffff","bottom":0,"align":"center"}}]},{"type":"Box","props":{"x":149,"width":280,"visible":true,"top":80,"name":"exp_box","height":40},"child":[{"type":"Image","props":{"y":0,"x":0,"top":0,"skin":"gameResource/titlebg.png","right":0,"left":0,"bottom":0}},{"type":"ProgressBar","props":{"width":235,"top":5,"skin":"gameResource/progress.png","name":"experience","left":45,"bottom":5}},{"type":"Image","props":{"width":45,"top":5,"skin":"gameResource/exp.png","left":0,"bottom":5}}]},{"type":"Box","props":{"width":280,"visible":true,"top":130,"name":"level_box","left":150,"height":40},"child":[{"type":"Image","props":{"top":0,"skin":"gameResource/titlebg.png","right":0,"left":0,"bottom":0}},{"type":"Label","props":{"width":210,"top":5,"text":"89%","right":0,"name":"role_level_percent","left":70,"height":35,"fontSize":30,"color":"#23f606","bottom":0,"align":"center"}},{"type":"Label","props":{"width":40,"top":5,"text":"100","name":"role_level","left":35,"fontSize":30,"color":"#cc6633","bottom":5}},{"type":"Image","props":{"width":30,"top":5,"skin":"gameResource/level.png","left":5,"bottom":5}}]}]},{"type":"Box","props":{"y":10,"x":10,"width":750,"visible":true,"var":"tools","top":1162,"left":0,"height":170},"child":[{"type":"Image","props":{"top":0,"skin":"gameResource/titlebg.png","right":0,"left":0,"bottom":0}},{"type":"Box","props":{"width":750,"var":"tools_box","name":"tools_box","height":170},"child":[{"type":"Box","props":{"y":2,"x":17,"width":130,"name":"trade","left":17,"height":170,"centerY":2},"child":[{"type":"Image","props":{"x":0,"width":128,"top":0,"name":"skin","height":128}},{"type":"Image","props":{"x":0,"width":128,"top":0,"skin":"gameResource/bag.png","name":"img","height":128}},{"type":"Label","props":{"width":130,"text":"交易所","height":30,"fontSize":24,"color":"#cdad2e","centerX":0,"bottom":10,"bold":true,"align":"center"}}]},{"type":"Box","props":{"y":2,"x":157,"width":130,"name":"equment_skill","left":157,"height":170,"centerY":2},"child":[{"type":"Image","props":{"x":0,"width":128,"top":0,"name":"skin","height":128}},{"type":"Image","props":{"x":0,"width":128,"top":0,"skin":"gameResource/bag.png","name":"img","height":128}},{"type":"Label","props":{"width":130,"text":"装备/技能","height":30,"fontSize":24,"color":"#cdad2e","centerX":0,"bottom":10,"bold":true,"align":"center"}}]},{"type":"Box","props":{"y":2,"x":463,"width":130,"right":157,"name":"diamond_bag","height":170,"centerY":2},"child":[{"type":"Image","props":{"x":0,"width":128,"top":0,"name":"skin","height":128}},{"type":"Image","props":{"x":0,"width":128,"top":0,"skin":"gameResource/bag.png","name":"img","height":128}},{"type":"Label","props":{"width":130,"text":"砖石/背包","height":30,"fontSize":24,"color":"#cdad2e","centerX":0,"bottom":10,"bold":true,"align":"center"}}]},{"type":"Box","props":{"y":2,"x":603,"right":17,"name":"follower","height":170,"centerY":2},"child":[{"type":"Image","props":{"x":0,"width":128,"top":0,"name":"skin","height":128}},{"type":"Image","props":{"x":0,"width":128,"top":0,"skin":"gameResource/bag.png","name":"img","height":128}},{"type":"Label","props":{"width":130,"text":"追随者","height":30,"fontSize":24,"color":"#cdad2e","centerX":0,"bottom":10,"bold":true,"align":"center"}}]},{"type":"Box","props":{"y":0,"x":300,"width":150,"name":"copy","height":170,"centerY":0,"centerX":0},"child":[{"type":"Image","props":{"x":0,"width":150,"top":0,"name":"skin","height":128}},{"type":"Image","props":{"x":0,"width":150,"top":0,"skin":"gameResource/bag.png","name":"img","height":128}},{"type":"Label","props":{"width":130,"text":"埋骨之地","height":30,"fontSize":24,"color":"#cdad2e","centerX":0,"bottom":10,"bold":true,"align":"center"}}]}]}]},{"type":"Image","props":{"y":60,"x":60,"top":200,"skin":"gameResource/titlebg.png","right":0,"left":0,"bottom":172}}]};
		return gameFrameUI;
	})(View);
var guildUI=(function(_super){
		function guildUI(){
			
		    this.save_creat_guild=null;

			guildUI.__super.call(this);
		}

		CLASS$(guildUI,'ui.guildUI',_super);
		var __proto__=guildUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(guildUI.uiView);

		}

		guildUI.uiView={"type":"View","props":{"width":750,"height":1334},"child":[{"type":"Image","props":{"y":30,"x":30,"top":200,"skin":"gameResource/bag_info.png","right":0,"left":0,"bottom":172}},{"type":"Box","props":{"y":260,"x":45,"width":660,"height":841},"child":[{"type":"Label","props":{"y":96,"x":20,"text":"帮会名称","fontSize":30,"color":"#ffffff"}},{"type":"Label","props":{"y":96,"x":350,"width":90,"text":"人数","height":30,"fontSize":30,"color":"#ffffff","align":"left"}},{"type":"Label","props":{"y":96,"x":450,"text":"战斗","fontSize":30,"color":"#ffffff"}},{"type":"Label","props":{"y":96,"x":550,"text":"加入","fontSize":30,"color":"#ffffff"}},{"type":"List","props":{"y":146,"x":0,"width":660,"vScrollBarSkin":"comp/vscroll.png","spaceY":20,"repeatY":20,"repeatX":1,"height":693},"child":[{"type":"Box","props":{"renderType":"render"},"child":[{"type":"Image","props":{"width":640,"top":0,"skin":"gameResource/topbg1.png","left":0,"height":40}},{"type":"Label","props":{"y":5,"x":0,"text":"【笑傲九天】","fontSize":28,"color":"#08f825","align":"left"}},{"type":"Label","props":{"y":5,"x":180,"width":141,"text":"江湖小虾米","height":30,"fontSize":28,"color":"#08f825"}},{"type":"Label","props":{"y":5,"x":330,"width":105,"text":"100/100","height":30,"fontSize":28,"color":"#08f825"}},{"type":"Label","props":{"y":5,"x":450,"width":54,"text":"是","height":30,"fontSize":28,"color":"#08f825","align":"center"}},{"type":"Button","props":{"y":0,"x":540,"width":80,"stateNum":2,"skin":"gameResource/btn.png","layoutEnabled":true,"labelSize":28,"labelColors":"#08f825,#08f825,#08f825,#08f825","label":"加入","height":40}}]}]},{"type":"Label","props":{"x":270,"text":"帮会列表","fontSize":30,"color":"#ffffff","align":"center"}},{"type":"Button","props":{"x":537,"width":80,"stateNum":2,"skin":"gameResource/btn.png","layoutEnabled":true,"labelSize":30,"labelColors":"#f80d09,#f80d09,#f80d09,#f80d09","label":"创建","height":40}},{"type":"Label","props":{"y":96,"x":220,"text":"会长","fontSize":30,"color":"#ffffff"}}]},{"type":"Box","props":{"y":515,"x":123},"child":[{"type":"Image","props":{"y":1,"width":503,"skin":"gameResource/bag_bg.png","height":389}},{"type":"Button","props":{"y":299,"x":205,"var":"save_creat_guild","stateNum":1,"skin":"gameResource/btn_midle.png","labelSize":30,"label":"创建"}},{"type":"Label","props":{"y":33,"x":147,"text":"请输入帮会名称","fontSize":30,"color":"#ffffff"}},{"type":"TextInput","props":{"y":97,"x":113,"width":278,"text":"【龙门丶客栈】","skin":"comp/textinput.png","height":52,"fontSize":30,"color":"#09f639","bold":true,"align":"center"}},{"type":"Label","props":{"y":176,"x":176,"text":"消耗500","fontSize":30,"color":"#ffffff"}},{"type":"Image","props":{"y":185,"x":292,"skin":"gameResource/diamond.png"}},{"type":"Label","props":{"y":222,"x":113,"width":282,"text":"错误提示信息","height":72,"fontSize":30,"color":"#f61006","align":"center"}}]}]};
		return guildUI;
	})(View);
var guild_2UI=(function(_super){
		function guild_2UI(){
			

			guild_2UI.__super.call(this);
		}

		CLASS$(guild_2UI,'ui.guild_2UI',_super);
		var __proto__=guild_2UI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(guild_2UI.uiView);

		}

		guild_2UI.uiView={"type":"View","props":{"width":750,"height":1334},"child":[{"type":"Image","props":{"y":40,"x":40,"top":200,"skin":"gameResource/bag_info.png","right":0,"left":0,"bottom":172}},{"type":"Label","props":{"y":270,"x":285,"text":"【笑傲江湖】","fontSize":30,"color":"#ffffff","align":"center"}},{"type":"Button","props":{"y":278,"x":632,"width":75,"skin":"comp/button.png","label":"申请列表","height":23}},{"type":"Button","props":{"y":1068,"x":637,"width":75,"skin":"comp/button.png","label":"退出公会","height":23}},{"type":"Button","props":{"y":858,"x":37,"width":185,"skin":"comp/button.png","label":"帮会人员扩容","height":58}},{"type":"Button","props":{"y":858,"x":282,"width":185,"skin":"comp/button.png","label":"开启/关闭帮会战争","height":58}},{"type":"Button","props":{"y":858,"x":527,"width":185,"skin":"comp/button.png","label":"开启/关闭帮会战争","height":58}}]};
		return guild_2UI;
	})(View);
var head1UI=(function(_super){
		function head1UI(){
			
		    this.headbox=null;
		    this.diamondbox=null;
		    this.moneybox=null;
		    this.levelbox=null;

			head1UI.__super.call(this);
		}

		CLASS$(head1UI,'ui.head1UI',_super);
		var __proto__=head1UI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(head1UI.uiView);

		}

		head1UI.uiView={"type":"View","props":{"width":750,"top":-44,"height":1334},"child":[{"type":"Image","props":{"y":1173,"x":0,"width":750,"skin":"gameResource/head_bg.png","height":161}},{"type":"Image","props":{"y":0,"x":0,"width":750,"skin":"gameResource/head_bg.png","height":200}},{"type":"Label","props":{"y":40,"x":140,"width":180,"text":"【噬血丶狂战】","height":30,"fontSize":30,"color":"#f90d09","align":"center"}},{"type":"Box","props":{"y":30,"x":10,"var":"headbox"},"child":[{"type":"Image","props":{"width":140,"skin":"gameResource/head_role.png","height":140}},{"type":"Image","props":{"y":14,"x":23,"skin":"gameResource/girl_zs.png"}}]},{"type":"Box","props":{"y":30,"x":560,"width":165,"var":"diamondbox","height":44},"child":[{"type":"Image","props":{"width":150,"skin":"gameResource/pic1.png","height":44}},{"type":"Label","props":{"y":15,"x":45,"width":80,"text":"100000","height":20,"fontSize":18,"color":"#ffffff","align":"right"}},{"type":"Button","props":{"y":10,"x":130,"width":30,"stateNum":2,"skin":"gameResource/btn_add.png","label":"label","height":30}},{"type":"Image","props":{"y":15,"skin":"gameResource/diamond.png"}}]},{"type":"Box","props":{"y":30,"x":360,"var":"moneybox"},"child":[{"type":"Image","props":{"width":190,"skin":"gameResource/pic1.png","height":44}},{"type":"Image","props":{"y":15,"width":40,"skin":"gameResource/glod.png"}},{"type":"Label","props":{"y":15,"x":30,"width":125,"text":"999999999","height":20,"fontSize":18,"color":"#ffffff","align":"right"}},{"type":"Button","props":{"y":10,"x":160,"width":30,"stateNum":2,"skin":"gameResource/btn_add.png","label":"label","height":30}}]},{"type":"Box","props":{"y":100,"x":150,"var":"levelbox"},"child":[{"type":"Image","props":{"y":0,"x":0,"width":180,"skin":"gameResource/progress_lv.png","height":20}},{"type":"Image","props":{"skin":"gameResource/lv_pic.png"}},{"type":"Label","props":{"x":25,"width":40,"text":"100","height":20,"fontSize":18,"color":"#ffffff","align":"right"}}]},{"type":"Image","props":{"y":200,"x":0,"width":750,"skin":"gameResource/eq.png","height":600}},{"type":"Image","props":{"x":0,"width":750,"skin":"gameResource/eq_info_pic.png","height":375,"bottom":161}},{"type":"Image","props":{"y":213,"x":207,"skin":"gameResource/A游戏的主界面素材_520.png","height":76}},{"type":"Label","props":{"y":224,"x":359,"width":25,"text":"label","height":50}},{"type":"Image","props":{"y":210,"x":0,"width":750,"skin":"gameResource/eq.png","height":600}},{"type":"Image","props":{"x":0,"width":750,"skin":"gameResource/eq_info_pic.png","height":375,"bottom":171}},{"type":"Image","props":{"y":223,"x":207,"skin":"gameResource/A游戏的主界面素材_520.png","height":76}},{"type":"Label","props":{"y":234,"x":335,"text":"背包","height":50,"fontSize":40,"color":"#e87012","bold":true}},{"type":"Label","props":{"y":733,"x":582,"width":143,"text":"背包容量 10/40","height":30,"fontSize":20,"color":"#e87012"}},{"type":"Label","props":{"y":733,"x":72,"width":143,"text":"碎片数量：1000000","height":30,"fontSize":20,"color":"#e87012"}},{"type":"Image","props":{"y":726,"x":31,"skin":"gameResource/pieces.png"}},{"type":"List","props":{"y":311,"x":29,"width":674,"vScrollBarSkin":"comp/vscroll.png","height":390},"child":[{"type":"Box","props":{"renderType":"render"},"child":[{"type":"Image","props":{"skin":"gameResource/A游戏的主界面素材_331.png"}}]}]},{"type":"Label","props":{"y":803,"x":132,"width":143,"text":"当前装备","height":30,"fontSize":20,"color":"#e87012"}},{"type":"Label","props":{"y":803,"x":492,"width":143,"text":"身上装备","height":30,"fontSize":20,"color":"#e87012"}}]};
		return head1UI;
	})(View);
var consumableInfoUI=(function(_super){
		function consumableInfoUI(){
			

			consumableInfoUI.__super.call(this);
		}

		CLASS$(consumableInfoUI,'ui.show.consumableInfoUI',_super);
		var __proto__=consumableInfoUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(consumableInfoUI.uiView);

		}

		consumableInfoUI.uiView={"type":"View","props":{"width":750,"height":390,"centerX":0,"bottom":172},"child":[{"type":"Box","props":{"width":750,"height":390,"centerX":0},"child":[{"type":"Image","props":{"width":754,"skin":"gameResource/bag_info.png","name":"bg_img","height":390}},{"type":"List","props":{"y":95,"x":60,"width":275,"repeatY":8,"repeatX":1,"name":"eq_msg_attrs","height":234},"child":[{"type":"Box","props":{"y":0,"x":0,"renderType":"render"},"child":[{"type":"Label","props":{"y":0,"x":0,"width":275,"top":0,"name":"eq_msg_attrs_text","height":30,"fontSize":22,"color":"#bcafae","align":"left"}}]}]}]}]};
		return consumableInfoUI;
	})(View);
var equipmentInfoUI=(function(_super){
		function equipmentInfoUI(){
			
		    this.current_equipment=null;
		    this.wear_equipment=null;

			equipmentInfoUI.__super.call(this);
		}

		CLASS$(equipmentInfoUI,'ui.show.equipmentInfoUI',_super);
		var __proto__=equipmentInfoUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(equipmentInfoUI.uiView);

		}

		equipmentInfoUI.uiView={"type":"View","props":{"width":750,"height":390,"centerX":0,"bottom":172},"child":[{"type":"Box","props":{"width":750,"height":390,"centerX":0},"child":[{"type":"Image","props":{"width":754,"skin":"gameResource/bag_info.png","name":"bg_img","height":390}},{"type":"Box","props":{"width":375,"var":"current_equipment","name":"current_equipment","left":0,"height":390},"child":[{"type":"Label","props":{"top":16,"text":"当前装备","fontSize":26,"color":"#c3baba","centerX":0}},{"type":"Label","props":{"y":63,"x":50,"width":130,"text":"---","name":"eq_msg_name","height":22,"fontSize":22,"color":"#d9cbcb"}},{"type":"Label","props":{"y":63,"x":190,"width":130,"text":"---","name":"eq_msg_lv","height":22,"fontSize":22,"color":"#d9cbcb"}},{"type":"Label","props":{"y":92,"x":50,"width":130,"text":"---","name":"eq_msg_r_lv","height":22,"fontSize":22,"color":"#d9cbcb"}},{"type":"Label","props":{"y":92,"x":190,"width":130,"text":"---","name":"eq_msg_opt","height":22,"fontSize":22,"color":"#d9cbcb"}},{"type":"List","props":{"y":143,"x":50,"width":275,"repeatY":8,"repeatX":1,"name":"eq_msg_attrs","height":176},"child":[{"type":"Box","props":{"y":0,"x":0,"renderType":"render"},"child":[{"type":"Label","props":{"y":0,"x":0,"width":275,"top":0,"name":"eq_msg_attrs_text","height":30,"fontSize":22,"color":"#bcafae","align":"left"}}]}]}]},{"type":"Box","props":{"width":375,"var":"wear_equipment","right":0,"name":"wear_equipment","height":390},"child":[{"type":"Label","props":{"y":16,"x":-27,"text":"已装备","fontSize":26,"color":"#e04343","centerX":0}},{"type":"Label","props":{"y":63,"x":30,"width":130,"name":"eq_msg_name","height":22,"fontSize":22,"color":"#d9cbcb"}},{"type":"Label","props":{"y":63,"x":170,"width":130,"name":"eq_msg_lv","height":22,"fontSize":22,"color":"#d9cbcb"}},{"type":"Label","props":{"y":92,"x":30,"width":130,"name":"eq_msg_r_lv","height":22,"fontSize":22,"color":"#d9cbcb"}},{"type":"Label","props":{"y":92,"x":170,"width":130,"name":"eq_msg_opt","height":22,"fontSize":22,"color":"#d9cbcb"}},{"type":"List","props":{"y":143,"x":30,"width":275,"repeatY":8,"repeatX":1,"name":"eq_msg_attrs","height":176},"child":[{"type":"Box","props":{"y":0,"x":0,"renderType":"render"},"child":[{"type":"Label","props":{"y":0,"x":0,"width":275,"top":0,"name":"eq_msg_attrs_text","height":30,"fontSize":22,"color":"#bcafae","align":"left"}}]}]}]},{"type":"Image","props":{"width":5,"skin":"gameResource/split.png","height":314,"centerX":0,"bottom":20}}]}]};
		return equipmentInfoUI;
	})(View);
var test1UI=(function(_super){
		function test1UI(){
			
		    this.test1=null;

			test1UI.__super.call(this);
		}

		CLASS$(test1UI,'ui.test.test1UI',_super);
		var __proto__=test1UI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(test1UI.uiView);

		}

		test1UI.uiView={"type":"View","props":{"width":600,"height":400},"child":[{"type":"Button","props":{"y":166,"x":153,"label":"label"}},{"type":"Clip","props":{"y":128,"x":234,"var":"test1"}}]};
		return test1UI;
	})(View);
var test2UI=(function(_super){
		function test2UI(){
			

			test2UI.__super.call(this);
		}

		CLASS$(test2UI,'ui.test.test2UI',_super);
		var __proto__=test2UI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(test2UI.uiView);

		}

		test2UI.uiView={"type":"Dialog","props":{"width":600,"height":400}};
		return test2UI;
	})(Dialog);
var TestPageUI=(function(_super){
		function TestPageUI(){
			
		    this.btn=null;
		    this.clip=null;
		    this.combobox=null;
		    this.tab=null;
		    this.list=null;
		    this.btn2=null;
		    this.check=null;
		    this.radio=null;
		    this.box=null;

			TestPageUI.__super.call(this);
		}

		CLASS$(TestPageUI,'ui.test.TestPageUI',_super);
		var __proto__=TestPageUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(TestPageUI.uiView);

		}

		TestPageUI.uiView={"type":"View","props":{"width":600,"height":400},"child":[{"type":"Image","props":{"y":0,"x":0,"width":600,"skin":"comp/bg.png","sizeGrid":"30,4,4,4","height":400}},{"type":"Button","props":{"y":56,"x":41,"width":150,"var":"btn","skin":"comp/button.png","sizeGrid":"4,4,4,4","label":"点我赋值","height":37}},{"type":"Clip","props":{"y":56,"x":401,"var":"clip","skin":"comp/clip_num.png","clipX":10}},{"type":"ComboBox","props":{"y":143,"x":220,"width":200,"var":"combobox","skin":"comp/combobox.png","sizeGrid":"4,20,4,4","selectedIndex":1,"labels":"select1,select2,selecte3","height":23}},{"type":"Tab","props":{"y":96,"x":220,"var":"tab","skin":"comp/tab.png","labels":"tab1,tab2,tab3"}},{"type":"VScrollBar","props":{"y":223,"x":259,"skin":"comp/vscroll.png","height":150}},{"type":"VSlider","props":{"y":223,"x":224,"skin":"comp/vslider.png","height":150}},{"type":"List","props":{"y":68,"x":452,"width":128,"var":"list","vScrollBarSkin":"comp/vscroll.png","repeatX":1,"height":299},"child":[{"type":"Box","props":{"y":0,"x":0,"width":112,"name":"render","height":30},"child":[{"type":"Label","props":{"y":5,"x":26,"width":78,"text":"this is a list","skin":"comp/label.png","name":"label","height":20,"fontSize":14}},{"type":"Clip","props":{"y":2,"x":0,"skin":"comp/clip_num.png","name":"clip","clipX":10}}]}]},{"type":"Button","props":{"y":4,"x":563,"skin":"comp/btn_close.png","name":"close"}},{"type":"Button","props":{"y":112,"x":41,"width":150,"var":"btn2","skin":"comp/button.png","sizeGrid":"4,4,4,4","labelSize":30,"labelBold":true,"label":"点我赋值","height":66}},{"type":"CheckBox","props":{"y":188,"x":220,"var":"check","skin":"comp/checkbox.png","label":"checkBox1"}},{"type":"RadioGroup","props":{"y":61,"x":220,"var":"radio","skin":"comp/radiogroup.png","labels":"radio1,radio2,radio3"}},{"type":"Panel","props":{"y":223,"x":299,"width":127,"vScrollBarSkin":"comp/vscroll.png","height":150},"child":[{"type":"Image","props":{"skin":"comp/image.png"}}]},{"type":"CheckBox","props":{"y":188,"x":326,"skin":"comp/checkbox.png","labelColors":"#ff0000","label":"checkBox2"}},{"type":"Box","props":{"y":197,"x":41,"var":"box"},"child":[{"type":"ProgressBar","props":{"y":70,"width":150,"skin":"comp/progress.png","sizeGrid":"4,4,4,4","name":"progress","height":14}},{"type":"Label","props":{"y":103,"width":137,"text":"This is a Label","skin":"comp/label.png","name":"label","height":26,"fontSize":20}},{"type":"TextInput","props":{"y":148,"width":150,"text":"textinput","skin":"comp/textinput.png","name":"input"}},{"type":"HSlider","props":{"width":150,"skin":"comp/hslider.png","name":"slider"}},{"type":"HScrollBar","props":{"y":34,"width":150,"skin":"comp/hscroll.png","name":"scroll"}}]}]};
		return TestPageUI;
	})(View);
var tradeUI=(function(_super){
		function tradeUI(){
			
		    this.change=null;
		    this.标题栏=null;
		    this.trade=null;
		    this.my=null;

			tradeUI.__super.call(this);
		}

		CLASS$(tradeUI,'ui.tradeUI',_super);
		var __proto__=tradeUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(tradeUI.uiView);

		}

		tradeUI.uiView={"type":"View","props":{"y":0,"width":750,"top":200,"height":962},"child":[{"type":"Image","props":{"top":0,"skin":"tradeResource/clothCompositionNew0_12.png","right":0,"left":0,"bottom":0}},{"type":"Label","props":{"y":16,"x":305,"text":"寄售行","fontSize":50,"color":"#ccc"}},{"type":"Tab","props":{"width":439,"var":"change","top":102,"stateNum":3,"space":20,"skin":"bagResource/tab.png","selectedIndex":0,"mouseThrough":true,"mouseEnabled":true,"layoutEnabled":true,"labels":"全部,我的","labelStrokeColor":"#c88c8b","labelSize":38,"labelFont":"SimSun","labelColors":"#ccc,#cdad2e,#cdad2e","labelAlign":"center","height":60,"direction":"horizontal","centerX":0}},{"type":"Box","props":{"var":"标题栏","top":166,"centerX":0},"child":[{"type":"Image","props":{"skin":"tradeResource/kuang_2.png"}},{"type":"Label","props":{"y":13,"x":530,"width":70,"text":"时长","height":25,"fontSize":25,"color":"#FFFFFF","align":"center"}},{"type":"Label","props":{"y":13,"x":610,"width":70,"text":"操作","height":25,"fontSize":25,"color":"#FFFFFF","align":"center"}},{"type":"Label","props":{"y":13,"x":460,"text":"等级","height":25,"fontSize":25,"color":"#FFFFFF","align":"center"}},{"type":"Label","props":{"y":13,"x":370,"width":70,"text":"类型","height":25,"fontSize":25,"color":"#FFFFFF","align":"center"}},{"type":"Label","props":{"y":13,"x":250,"width":70,"text":"售价","height":25,"fontSize":25,"color":"#FFFFFF","align":"center"}},{"type":"Label","props":{"y":13,"x":70,"width":70,"text":"名称","height":25,"fontSize":25,"color":"#FFFFFF","align":"center"}}]},{"type":"List","props":{"y":216,"x":30,"width":685,"var":"trade","vScrollBarSkin":"comp/vscroll.png","repeatY":10,"repeatX":1,"height":655,"centerX":0},"child":[{"type":"Box","props":{"renderType":"render","name":"list"},"child":[{"type":"Image","props":{"y":0,"x":0,"width":684,"skin":"tradeResource/spr_sel_len.png","height":66}},{"type":"Image","props":{"y":20,"x":220,"width":36,"skin":"gameResource/diamond.png"}},{"type":"Label","props":{"y":23,"x":70,"width":120,"text":"一个手镯","fontSize":20,"color":"#FFFFFF"}},{"type":"Label","props":{"y":23,"x":270,"width":100,"text":"1000","fontSize":20,"color":"#FFFFFF"}},{"type":"Label","props":{"y":23,"x":370,"width":70,"text":"武器","fontSize":20,"color":"#FFFFFF","align":"center"}},{"type":"Image","props":{"y":24,"x":450,"width":27,"skin":"gameResource/lv_pic.png","height":18}},{"type":"Label","props":{"y":23,"x":480,"text":"50","fontSize":20,"color":"#FFFFFF","align":"left"}},{"type":"Label","props":{"y":23,"x":525,"width":70,"text":"48 h","fontSize":20,"color":"#FFFFFF","align":"center"}},{"type":"Button","props":{"y":13,"x":595,"width":90,"stateNum":2,"skin":"tradeResource/btn_buy.png","name":"buy","labelSize":25,"labelColors":"#ffffff,#ffffff,#ffffff,#ffffff","height":40}},{"type":"Box","props":{"y":0,"x":0},"child":[{"type":"Image","props":{"skin":"bagResource/img_bag_bg4.png"}},{"type":"Image","props":{"skin":"bagResource/img_bag_bg1.png","name":"click_show"}},{"type":"Image","props":{"y":20,"x":19,"skin":"gameResource/equipmentSkin/00214(已去底).png"}}]}]}]},{"type":"List","props":{"y":216,"x":30,"width":685,"visible":false,"var":"my","vScrollBarSkin":"comp/vscroll.png","repeatY":11,"repeatX":1,"height":655,"centerX":0},"child":[{"type":"Box","props":{"renderType":"render","name":"list"},"child":[{"type":"Image","props":{"y":0,"x":0,"width":684,"skin":"tradeResource/spr_sel_len.png","height":66}},{"type":"Image","props":{"y":20,"x":220,"width":36,"skin":"gameResource/diamond.png"}},{"type":"Label","props":{"y":23,"x":70,"width":120,"text":"一个手镯","fontSize":20,"color":"#FFFFFF"}},{"type":"Label","props":{"y":23,"x":270,"width":100,"text":"1000","fontSize":20,"color":"#FFFFFF"}},{"type":"Label","props":{"y":23,"x":370,"width":70,"text":"武器","fontSize":20,"color":"#FFFFFF","align":"center"}},{"type":"Image","props":{"y":24,"x":450,"width":27,"skin":"gameResource/lv_pic.png","height":18}},{"type":"Label","props":{"y":23,"x":480,"text":"50","fontSize":20,"color":"#FFFFFF","align":"left"}},{"type":"Label","props":{"y":23,"x":525,"width":70,"text":"48 h","fontSize":20,"color":"#FFFFFF","align":"center"}},{"type":"Button","props":{"y":13,"x":595,"width":90,"stateNum":2,"skin":"tradeResource/btn_buy.png","name":"buy","labelSize":25,"labelColors":"#ffffff,#ffffff,#ffffff,#ffffff","height":40}},{"type":"Box","props":{"y":0,"x":0},"child":[{"type":"Image","props":{"skin":"bagResource/img_bag_bg4.png"}},{"type":"Image","props":{"skin":"bagResource/img_bag_bg1.png","name":"click_show"}},{"type":"Image","props":{"y":20,"x":19,"skin":"gameResource/equipmentSkin/00214(已去底).png"}}]}]}]},{"type":"ComboBox","props":{"x":46,"skin":"tradeResource/combobox.png","selectedIndex":0,"scrollBarSkin":"bagResource/vscroll.png","name":"select_type","labels":"全部,武器,头盔,衣服,项链,手镯,戒指,腰带,鞋子","labelSize":20,"labelFont":"SimSun","itemSize":20,"height":24,"bottom":50}},{"type":"Button","props":{"x":625,"width":90,"visible":true,"toggle":false,"stateNum":2,"skin":"tradeResource/btn_001.png","selected":false,"name":"刷新","labelStrokeColor":"#f80a06","labelStroke":0,"labelSize":20,"labelColors":"#aeaeae,#cdad2e,#cdad2e","labelBold":true,"label":"刷新","height":36,"gray":false,"bottom":45}},{"type":"Box","props":{"y":225,"x":152,"visible":false,"name":"点击装备查看属性"},"child":[{"type":"Image","props":{"width":441,"skin":"tradeResource/trade_eq_info.png","height":599}},{"type":"Label","props":{"y":10,"x":155,"width":130,"text":"装备名称","name":"eq_msg_name","height":22,"fontSize":22,"color":"#d9cbcb","align":"center"}},{"type":"Label","props":{"y":50,"x":30,"width":130,"text":"需要等级：10","height":22,"fontSize":22,"color":"#d9cbcb"}},{"type":"Label","props":{"y":52,"x":285,"width":130,"text":"强化等级+1","name":"eq_msg_r_lv","height":22,"fontSize":22,"color":"#d9cbcb"}},{"type":"Label","props":{"y":92,"x":30,"width":130,"text":"幸运+1","name":"eq_msg_opt","height":22,"fontSize":22,"color":"#d9cbcb"}},{"type":"Label","props":{"y":132,"x":30,"width":130,"text":"基础属性","height":22,"fontSize":22,"color":"#f60d0d"}},{"type":"List","props":{"y":170,"x":30,"width":384,"repeatY":3,"repeatX":3,"name":"eq_msg_attrs","height":136},"child":[{"type":"Box","props":{"y":0,"x":0,"renderType":"render"},"child":[{"type":"Label","props":{"x":0,"width":128,"top":0,"text":"攻击：1-10","name":"eq_msg_attrs_text","height":30,"fontSize":20,"color":"#ffffff","align":"left"}}]}]},{"type":"List","props":{"y":360,"x":30,"width":384,"repeatY":3,"repeatX":3,"height":129},"child":[{"type":"Box","props":{"y":0,"x":0,"renderType":"render"},"child":[{"type":"Label","props":{"x":0,"width":128,"top":0,"text":"极品属性","name":"eq_msg_attrs_text","height":30,"fontSize":20,"color":"#ffffff","align":"left"}}]}]},{"type":"Label","props":{"y":322,"x":30,"width":130,"text":"基础属性","height":22,"fontSize":22,"color":"#23f606"}},{"type":"Label","props":{"y":522,"x":30,"width":130,"text":"XXX套装","height":22,"fontSize":22,"color":"#23f606"}}]}]};
		return tradeUI;
	})(View);