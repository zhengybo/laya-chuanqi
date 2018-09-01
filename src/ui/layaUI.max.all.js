var CLASS$=Laya.class;
var STATICATTR$=Laya.static;
var View=laya.ui.View;
var Dialog=laya.ui.Dialog;
var backpackUI=(function(_super){
		function backpackUI(){
			
		    this.eq_info_box_0=null;
		    this.bag_eq_info_name=null;
		    this.bag_eq_info_add=null;
		    this.bag_eq_info_level=null;
		    this.bag_eq_info_sex=null;
		    this.bag_eq_info_0=null;
		    this.bag_eq_info_1=null;
		    this.eq_info_box_1=null;
		    this.role_eq_info=null;
		    this.role_eq_info_name=null;
		    this.role_eq_info_add=null;
		    this.role_eq_info_level=null;
		    this.role_eq_info_sex=null;
		    this.role_eq_info_0=null;
		    this.role_eq_info_2=null;
		    this.eq_info_close=null;
		    this.bag_list=null;
		    this.bag_box=null;
		    this.capacity=null;
		    this.equipment=null;
		    this.consumable=null;

			backpackUI.__super.call(this);
		}

		CLASS$(backpackUI,'ui.backpackUI',_super);
		var __proto__=backpackUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(backpackUI.uiView);

		}

		backpackUI.uiView={"type":"View","props":{"y":0,"x":0,"width":750,"top":200,"renderType":"mask","height":962,"centerX":0},"child":[{"type":"Image","props":{"x":10,"top":0,"skin":"gameResource/bag_bg.png","right":0,"left":0,"bottom":0}},{"type":"Box","props":{"width":700,"visible":false,"centerX":0,"bottom":0},"child":[{"type":"Image","props":{"y":0,"x":0,"width":700,"skin":"gameResource/eq_info_pic.png","height":360}},{"type":"Box","props":{"width":325,"var":"eq_info_box_0","top":5,"name":"eq_info_box_0","left":30,"bottom":105},"child":[{"type":"Label","props":{"width":325,"top":5,"text":"当前装备","name":"eq_info_bag","left":0,"height":40,"fontSize":40,"color":"#FFFFFF","bold":false,"align":"center"}},{"type":"Label","props":{"width":165,"var":"bag_eq_info_name","top":50,"text":"命运之刃","name":"bag_eq_info_name","left":0,"height":30,"fontSize":30,"color":"#cc6633","bold":true,"align":"left"}},{"type":"Label","props":{"width":160,"var":"bag_eq_info_add","top":50,"text":"+1","name":"bag_eq_info_add","left":165,"height":30,"fontSize":25,"color":"#FFFFFF","bold":true,"align":"center"}},{"type":"Label","props":{"width":165,"var":"bag_eq_info_level","top":100,"text":"需要等级35","name":"bag_eq_info_level","left":0,"height":30,"fontSize":25,"color":"#FFFFFF","bold":true,"align":"left"}},{"type":"Label","props":{"width":160,"var":"bag_eq_info_sex","top":100,"text":"性别：女","name":"bag_eq_info_sex","left":165,"height":30,"fontSize":25,"color":"#f60939","bold":true,"align":"center"}},{"type":"Label","props":{"wordWrap":true,"var":"bag_eq_info_0","top":150,"text":"一般属性\\n一般属性\\n一般属性\\n","right":0,"name":"bag_eq_info_0","left":2,"height":80,"fontSize":25,"color":"#FFFFFF","align":"left"}},{"type":"Label","props":{"wordWrap":true,"var":"bag_eq_info_1","top":240,"text":"一般属性\\n一般属性\\n一般属性\\n","right":0,"name":"bag_eq_info_1","left":0,"fontSize":25,"color":"#03f920","bottom":10,"align":"left"}}]},{"type":"Box","props":{"var":"eq_info_box_1","top":3,"name":"eq_info_box_1","left":350,"bottom":465},"child":[{"type":"Label","props":{"width":325,"var":"role_eq_info","top":5,"text":"已装备","name":"role_eq_info","left":0,"height":40,"fontSize":40,"color":"#f81906","align":"center"}},{"type":"Label","props":{"width":165,"var":"role_eq_info_name","top":50,"text":"命运之刃","name":"role_eq_info_name","left":0,"height":30,"fontSize":30,"color":"#cc6633","bold":true,"align":"left"}},{"type":"Label","props":{"width":160,"var":"role_eq_info_add","top":50,"text":"+10","name":"role_eq_info_add","left":165,"height":30,"fontSize":25,"color":"#FFFFFF","bold":true,"align":"center"}},{"type":"Label","props":{"width":165,"var":"role_eq_info_level","top":100,"text":"需要等级35","name":"role_eq_info_level","left":0,"height":30,"fontSize":25,"color":"#FFFFFF","bold":true,"align":"left"}},{"type":"Label","props":{"width":160,"var":"role_eq_info_sex","top":100,"text":"性别：男","name":"role_eq_info_sex","left":165,"height":30,"fontSize":25,"color":"#0610f6","bold":true,"align":"center"}},{"type":"Label","props":{"wordWrap":true,"width":325,"var":"role_eq_info_0","top":150,"text":"一般属性\\n一般属性\\n一般属性\\n","name":"role_eq_info_0","left":0,"height":80,"fontSize":25,"color":"#FFFFFF","align":"left"}},{"type":"Label","props":{"wordWrap":true,"width":325,"var":"role_eq_info_2","top":240,"text":"一般属性\\n一般属性\\n一般属性\\n","name":"role_eq_info_1","left":0,"fontSize":25,"color":"#03f920","bottom":10,"align":"left"}}]},{"type":"Image","props":{"x":50,"width":5,"top":-56,"skin":"gameResource/split.png","bottom":0}},{"type":"Button","props":{"var":"eq_info_close","top":10,"stateNum":1,"skin":"gameResource/btn_close.png","right":20,"name":"eq_info_close"}},{"type":"Button","props":{"width":80,"toggle":true,"stateNum":2,"skin":"gameResource/btn.png","left":60,"labelSize":25,"labelPadding":"5,0,5,0","labelColors":"#ffffff;#ffffff;#ffffff;#ffffff","labelBold":true,"labelAlign":"center","label":"装备","height":40,"bottom":10}},{"type":"Button","props":{"width":80,"toggle":true,"stateNum":2,"skin":"gameResource/btn.png","left":162,"labelSize":25,"labelPadding":"5,0,5,0","labelColors":"#ffffff;#ffffff;#ffffff;#ffffff","labelBold":true,"labelAlign":"center","label":"寄售","height":40,"bottom":10}},{"type":"Button","props":{"width":80,"toggle":true,"stateNum":2,"skin":"gameResource/btn.png","left":260,"labelSize":25,"labelPadding":"5,0,5,0","labelColors":"#ffffff;#ffffff;#ffffff;#ffffff","labelBold":true,"labelAlign":"center","label":"分解","height":40,"bottom":10}},{"type":"Button","props":{"width":80,"toggle":true,"stateNum":2,"skin":"gameResource/btn.png","left":360,"labelSize":25,"labelPadding":"5,0,5,0","labelColors":"#ffffff;#ffffff;#ffffff;#ffffff","labelBold":true,"labelAlign":"center","label":"锁定","height":40,"bottom":10}},{"type":"Button","props":{"width":80,"toggle":true,"stateNum":2,"skin":"gameResource/btn.png","left":460,"labelSize":25,"labelPadding":"5,0,5,0","labelColors":"#ffffff;#ffffff;#ffffff;#ffffff","labelBold":true,"labelAlign":"center","label":"洗练","height":40,"bottom":10}},{"type":"Button","props":{"width":80,"toggle":true,"stateNum":2,"skin":"gameResource/btn.png","left":560,"labelSize":25,"labelPadding":"5,0,5,0","labelColors":"#ffffff;#ffffff;#ffffff;#ffffff","labelBold":true,"labelAlign":"center","label":"null","height":40,"bottom":10}}]},{"type":"List","props":{"y":23,"x":25,"width":600,"var":"bag_list","vScrollBarSkin":"comp/vscroll.png","repeatY":9,"repeatX":7,"height":500},"child":[{"type":"Box","props":{"width":100,"var":"bag_box","renderType":"render","height":100},"child":[{"type":"Image","props":{"width":90,"visible":false,"skin":"gameResource/bag_pic.png","name":"equipment_selected","height":90,"centerY":0,"centerX":0}},{"type":"Image","props":{"width":90,"name":"equiment_skin","mouseEnabled":true,"height":90,"centerY":0,"centerX":0}},{"type":"Image","props":{"width":60,"skin":"gameResource/00197(已去底).png","name":"equiment_img","mouseEnabled":true,"height":60,"centerY":0,"centerX":0}},{"type":"Image","props":{"width":10,"skin":"gameResource/00197(已去底).png","right":10,"name":"加锁","mouseEnabled":true,"height":10,"bottom":10}}]}]},{"type":"Box","props":{"y":539,"width":200,"var":"capacity","right":60,"height":30},"child":[{"type":"Label","props":{"text":"背包容量","fontSize":30,"color":"#f6eaea"}},{"type":"Label","props":{"width":40,"text":"0","name":"occupy","left":125,"fontSize":30,"color":"#f6eaea","align":"right"}},{"type":"Label","props":{"text":"/","left":165,"fontSize":30,"color":"#f6eaea"}},{"type":"Label","props":{"width":40,"text":"60","name":"total","left":175,"fontSize":30,"color":"#f6eaea"}}]},{"type":"List","props":{"width":95,"top":25,"repeatY":8,"repeatX":1,"name":"filter","left":625,"height":500},"child":[{"type":"Box","props":{"width":95,"renderType":"render","height":62.5},"child":[{"type":"Button","props":{"y":0,"x":0,"width":95,"toggle":true,"strokeColors":"#aee,#aae,#eae,#aae","stateNum":2,"skin":"gameResource/btn.png","selected":true,"labelStrokeColor":"#aeaeae","labelStroke":0,"labelSize":24,"labelColors":"#aeaeae","labelBold":true,"label":"点我","height":62.5,"gray":false}}]}]},{"type":"Box","props":{"var":"equipment"}},{"type":"Box","props":{"var":"consumable"},"child":[{"type":"List","props":{"width":"100","name":"list","height":"100"}}]}]};
		return backpackUI;
	})(View);
var backpack1UI=(function(_super){
		function backpack1UI(){
			
		    this.equipments=null;
		    this.current_equipment=null;
		    this.wear_equipment=null;
		    this.consumables=null;
		    this.classify=null;

			backpack1UI.__super.call(this);
		}

		CLASS$(backpack1UI,'ui.backpack1UI',_super);
		var __proto__=backpack1UI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(backpack1UI.uiView);

		}

		backpack1UI.uiView={"type":"View","props":{"width":750,"top":200,"height":962},"child":[{"type":"Image","props":{"y":0,"x":0,"visible":false,"top":0,"skin":"gameResource/bag_bg.png","right":0,"left":0,"bottom":0}},{"type":"Image","props":{"x":0,"width":754,"skin":"gameResource/bag_info.png","height":390,"bottom":0}},{"type":"Box","props":{"y":0,"x":0,"width":750,"var":"equipments","height":962},"child":[{"type":"Image","props":{"y":0,"x":0,"width":750,"skin":"gameResource/eq.png","height":570}},{"type":"List","props":{"y":106,"x":55,"width":560,"vScrollBarSkin":"comp/vscroll.png","spaceX":4,"repeatY":9,"repeatX":6,"name":"list","height":350},"child":[{"type":"Box","props":{"width":90,"renderType":"render","height":87.5},"child":[{"type":"Image","props":{"width":85,"visible":false,"skin":"gameResource/24.png","name":"equipment_selected","height":85,"centerY":0,"centerX":0}},{"type":"Image","props":{"width":90,"name":"equiment_skin","mouseEnabled":true,"height":90,"centerY":0,"centerX":0}},{"type":"Image","props":{"width":60,"skin":"gameResource/A游戏的主界面素材_331.png","name":"equiment_img","mouseEnabled":true,"height":60,"centerY":0,"centerX":0}},{"type":"Image","props":{"width":10,"skin":"gameResource/00197(已去底).png","right":10,"name":"加锁","mouseEnabled":true,"height":10,"bottom":10}}]}]},{"type":"Box","props":{"y":488,"width":200,"right":82,"name":"capacity","height":30},"child":[{"type":"Label","props":{"text":"背包容量","fontSize":30,"color":"#f6eaea"}},{"type":"Label","props":{"width":40,"text":"0","name":"occupy","left":125,"fontSize":30,"color":"#f6eaea","align":"right"}},{"type":"Label","props":{"text":"/","left":165,"fontSize":30,"color":"#f6eaea"}},{"type":"Label","props":{"width":40,"text":"60","name":"total","left":175,"fontSize":30,"color":"#f6eaea"}}]},{"type":"List","props":{"y":106,"width":80,"repeatY":8,"repeatX":1,"name":"filter","left":618,"height":350,"dataSource":"123"},"child":[{"type":"Box","props":{"width":80,"renderType":"render","height":50},"child":[{"type":"Button","props":{"y":0,"x":0,"width":80,"visible":true,"toggle":false,"stateNum":2,"skin":"gameResource/btn.png","selected":false,"name":"filter_btn","labelStrokeColor":"#aeaeae","labelStroke":0,"labelSize":24,"labelColors":"#aeaeae,#cdad2e,#cdad2e","labelBold":true,"height":50,"gray":false}}]}]},{"type":"Box","props":{"x":0,"name":"show","bottom":0},"child":[{"type":"Box","props":{"x":0,"width":750,"height":390},"child":[{"type":"Image","props":{"width":754,"skin":"gameResource/bag_info.png","name":"bg_img","height":390}},{"type":"Box","props":{"width":375,"var":"current_equipment","name":"current_equipment","left":0,"height":390},"child":[{"type":"Label","props":{"top":16,"text":"当前装备","fontSize":26,"color":"#c3baba","centerX":0}},{"type":"Label","props":{"y":63,"x":50,"width":130,"name":"eq_msg_name","height":22,"fontSize":22,"color":"#d9cbcb"}},{"type":"Label","props":{"y":63,"x":190,"width":130,"name":"eq_msg_lv","height":22,"fontSize":22,"color":"#d9cbcb"}},{"type":"Label","props":{"y":92,"x":50,"width":130,"name":"eq_msg_r_lv","height":22,"fontSize":22,"color":"#d9cbcb"}},{"type":"Label","props":{"y":92,"x":190,"width":130,"name":"eq_msg_opt","height":22,"fontSize":22,"color":"#d9cbcb"}},{"type":"List","props":{"y":143,"x":50,"width":275,"repeatY":8,"repeatX":1,"name":"eq_msg_attrs","height":176},"child":[{"type":"Box","props":{"y":0,"x":0,"renderType":"render"},"child":[{"type":"Label","props":{"y":0,"x":0,"width":275,"top":0,"name":"eq_msg_attrs_text","height":30,"fontSize":22,"color":"#bcafae","align":"left"}}]}]}]},{"type":"Box","props":{"width":375,"var":"wear_equipment","right":0,"name":"wear_equipment","height":390},"child":[{"type":"Label","props":{"y":16,"x":-27,"text":"已装备","fontSize":26,"color":"#e04343","centerX":0}},{"type":"Label","props":{"y":63,"x":30,"width":130,"name":"eq_msg_name","height":22,"fontSize":22,"color":"#d9cbcb"}},{"type":"Label","props":{"y":63,"x":170,"width":130,"name":"eq_msg_lv","height":22,"fontSize":22,"color":"#d9cbcb"}},{"type":"Label","props":{"y":92,"x":30,"width":130,"name":"eq_msg_r_lv","height":22,"fontSize":22,"color":"#d9cbcb"}},{"type":"Label","props":{"y":92,"x":170,"width":130,"name":"eq_msg_opt","height":22,"fontSize":22,"color":"#d9cbcb"}},{"type":"List","props":{"y":143,"x":30,"width":275,"repeatY":8,"repeatX":1,"name":"eq_msg_attrs","height":176},"child":[{"type":"Box","props":{"y":0,"x":0,"renderType":"render"},"child":[{"type":"Label","props":{"y":0,"x":0,"width":275,"top":0,"name":"eq_msg_attrs_text","height":30,"fontSize":22,"color":"#bcafae","align":"left"}}]}]}]},{"type":"Image","props":{"width":5,"skin":"gameResource/split.png","height":314,"centerX":0,"bottom":20}}]},{"type":"List","props":{"y":74,"width":80,"right":4,"repeatY":5,"repeatX":1,"name":"action","height":252,"dataSource":"123"},"child":[{"type":"Box","props":{"width":80,"renderType":"render","height":50},"child":[{"type":"Button","props":{"y":0,"x":0,"width":80,"visible":true,"toggle":false,"stateNum":2,"skin":"gameResource/btn.png","selected":false,"name":"list_btn","labelStrokeColor":"#aeaeae","labelStroke":0,"labelSize":24,"labelColors":"#aeaeae,#cdad2e,#cdad2e","labelBold":true,"height":50,"gray":false}}]}]}]}]},{"type":"Box","props":{"width":750,"visible":false,"var":"consumables","height":962},"child":[{"type":"Image","props":{"y":0,"x":0,"width":750,"skin":"gameResource/eq.png","height":570}},{"type":"List","props":{"y":106,"x":55,"width":637,"vScrollBarSkin":"comp/vscroll.png","spaceX":4,"repeatY":9,"repeatX":7,"name":"list","height":350},"child":[{"type":"Box","props":{"width":90,"renderType":"render","height":87.5},"child":[{"type":"Image","props":{"width":85,"visible":false,"skin":"gameResource/24.png","name":"equipment_selected","height":85,"centerY":0,"centerX":0}},{"type":"Image","props":{"width":90,"name":"equiment_skin","mouseEnabled":true,"height":90,"centerY":0,"centerX":0}},{"type":"Image","props":{"width":60,"skin":"gameResource/A游戏的主界面素材_331.png","name":"equiment_img","mouseEnabled":true,"height":60,"centerY":0,"centerX":0}},{"type":"Image","props":{"width":10,"skin":"gameResource/00197(已去底).png","right":10,"name":"加锁","mouseEnabled":true,"height":10,"bottom":10}},{"type":"Label","props":{"visible":false,"right":18,"name":"equipment_number","height":12,"fontSize":16,"color":"#f3efef","bottom":14}}]}]},{"type":"Box","props":{"y":488,"width":200,"right":82,"name":"capacity","height":30},"child":[{"type":"Label","props":{"text":"背包容量","fontSize":30,"color":"#f6eaea"}},{"type":"Label","props":{"width":40,"text":"0","name":"occupy","left":125,"fontSize":30,"color":"#f6eaea","align":"right"}},{"type":"Label","props":{"text":"/","left":165,"fontSize":30,"color":"#f6eaea"}},{"type":"Label","props":{"width":40,"text":"60","name":"total","left":175,"fontSize":30,"color":"#f6eaea"}}]},{"type":"Box","props":{"name":"show","bottom":0},"child":[{"type":"Box","props":{"x":0,"width":750,"height":390},"child":[{"type":"Image","props":{"width":754,"skin":"gameResource/bag_info.png","name":"bg_img","height":390}},{"type":"Box","props":{"width":375,"name":"current_equipment","left":0,"height":390},"child":[{"type":"Label","props":{"top":16,"text":"当前装备","fontSize":26,"color":"#c3baba","centerX":0}},{"type":"Label","props":{"y":63,"x":50,"width":130,"name":"eq_msg_name","height":22,"fontSize":22,"color":"#d9cbcb"}},{"type":"Label","props":{"y":63,"x":190,"width":130,"name":"eq_msg_lv","height":22,"fontSize":22,"color":"#d9cbcb"}},{"type":"Label","props":{"y":92,"x":50,"width":130,"name":"eq_msg_r_lv","height":22,"fontSize":22,"color":"#d9cbcb"}},{"type":"Label","props":{"y":92,"x":190,"width":130,"name":"eq_msg_opt","height":22,"fontSize":22,"color":"#d9cbcb"}},{"type":"List","props":{"y":143,"x":50,"width":275,"repeatY":8,"repeatX":1,"name":"eq_msg_attrs","height":176},"child":[{"type":"Box","props":{"y":0,"x":0,"renderType":"render"},"child":[{"type":"Label","props":{"y":0,"x":0,"width":275,"top":0,"name":"eq_msg_attrs_text","height":30,"fontSize":22,"color":"#bcafae","align":"left"}}]}]}]},{"type":"Box","props":{"width":375,"right":0,"name":"wear_equipment","height":390},"child":[{"type":"Label","props":{"y":16,"x":-27,"text":"已装备","fontSize":26,"color":"#e04343","centerX":0}},{"type":"Label","props":{"y":63,"x":30,"width":130,"name":"eq_msg_name","height":22,"fontSize":22,"color":"#d9cbcb"}},{"type":"Label","props":{"y":63,"x":170,"width":130,"name":"eq_msg_lv","height":22,"fontSize":22,"color":"#d9cbcb"}},{"type":"Label","props":{"y":92,"x":30,"width":130,"name":"eq_msg_r_lv","height":22,"fontSize":22,"color":"#d9cbcb"}},{"type":"Label","props":{"y":92,"x":170,"width":130,"name":"eq_msg_opt","height":22,"fontSize":22,"color":"#d9cbcb"}},{"type":"List","props":{"y":143,"x":30,"width":275,"repeatY":8,"repeatX":1,"name":"eq_msg_attrs","height":176},"child":[{"type":"Box","props":{"y":0,"x":0,"renderType":"render"},"child":[{"type":"Label","props":{"y":0,"x":0,"width":275,"top":0,"name":"eq_msg_attrs_text","height":30,"fontSize":22,"color":"#bcafae","align":"left"}}]}]}]},{"type":"Image","props":{"width":5,"skin":"gameResource/split.png","height":314,"centerX":0,"bottom":20}}]},{"type":"List","props":{"y":74,"right":4,"repeatY":5,"repeatX":1,"name":"action","height":252,"dataSource":"123"},"child":[{"type":"Box","props":{"width":120,"renderType":"render","height":50},"child":[{"type":"Button","props":{"y":0,"x":0,"width":120,"visible":true,"toggle":false,"stateNum":2,"skin":"gameResource/btn.png","selected":false,"name":"list_btn","labelStrokeColor":"#aeaeae","labelStroke":0,"labelSize":24,"labelColors":"#aeaeae,#cdad2e,#cdad2e","labelBold":true,"height":50,"gray":false}}]}]}]}]},{"type":"Box","props":{"y":484,"x":81,"width":280,"visible":true,"top":484,"name":"pieces_box","left":81,"height":40},"child":[{"type":"Image","props":{"width":380,"top":0,"left":0,"height":40,"bottom":0}},{"type":"Image","props":{"y":0,"x":0,"width":50,"top":0,"skin":"gameResource/pieces.png","left":0,"bottom":0}},{"type":"Label","props":{"y":5,"x":55,"top":5,"text":"碎片数量:","overflow":"scroll","name":"pieces","left":55,"height":30,"fontSize":30,"color":"#cc6633","bottom":5,"align":"left"}},{"type":"Label","props":{"width":168,"top":4,"text":"0","overflow":"scroll","name":"pieces","left":198,"height":30,"fontSize":30,"color":"#cc6633","bottom":5,"align":"left"}}]},{"type":"Tab","props":{"width":331,"var":"classify","top":27,"stateNum":3,"space":20,"skin":"gameResource/tab1.png","selectedIndex":0,"mouseThrough":true,"mouseEnabled":true,"layoutEnabled":true,"labels":"装备,消耗品","labelStrokeColor":"#c88c8b","labelSize":40,"labelColors":"#ccc,#cdad2e,#cdad2e","height":60,"direction":"horizontal","centerX":0}}]};
		return backpack1UI;
	})(View);
var bagUI=(function(_super){
		function bagUI(){
			

			bagUI.__super.call(this);
		}

		CLASS$(bagUI,'ui.bagUI',_super);
		var __proto__=bagUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(bagUI.uiView);

		}

		bagUI.uiView={"type":"View","props":{"width":750,"height":1334},"child":[{"type":"Image","props":{"y":210,"x":0,"width":750,"skin":"gameResource/eq.png","height":600}},{"type":"Image","props":{"x":0,"width":750,"skin":"gameResource/eq_info_pic.png","height":375,"bottom":161}},{"type":"Image","props":{"y":223,"x":207,"skin":"gameResource/A游戏的主界面素材_520.png","height":76}},{"type":"Label","props":{"y":234,"x":335,"text":"背包","height":50,"fontSize":40,"color":"#e87012","bold":true}},{"type":"Label","props":{"y":733,"x":582,"width":143,"text":"背包容量 10/40","height":30,"fontSize":20,"color":"#e87012"}},{"type":"Label","props":{"y":733,"x":72,"width":143,"text":"碎片数量：1000000","height":30,"fontSize":20,"color":"#e87012"}},{"type":"Image","props":{"y":726,"x":31,"skin":"gameResource/pieces.png"}},{"type":"List","props":{"y":313,"x":31,"width":674,"vScrollBarSkin":"comp/vscroll.png","height":390},"child":[{"type":"Box","props":{"renderType":"render"},"child":[{"type":"Image","props":{"skin":"gameResource/A游戏的主界面素材_331.png"}}]}]},{"type":"Label","props":{"y":803,"x":132,"width":143,"text":"当前装备","height":30,"fontSize":20,"color":"#e87012"}},{"type":"Label","props":{"y":803,"x":492,"width":143,"text":"身上装备","height":30,"fontSize":20,"color":"#e87012"}}]};
		return bagUI;
	})(View);
var bag2UI=(function(_super){
		function bag2UI(){
			

			bag2UI.__super.call(this);
		}

		CLASS$(bag2UI,'ui.bag2UI',_super);
		var __proto__=bag2UI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(bag2UI.uiView);

		}

		bag2UI.uiView={"type":"View","props":{"width":750,"height":1334}};
		return bag2UI;
	})(View);
var equipmentUI=(function(_super){
		function equipmentUI(){
			

			equipmentUI.__super.call(this);
		}

		CLASS$(equipmentUI,'ui.equipmentUI',_super);
		var __proto__=equipmentUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(equipmentUI.uiView);

		}

		equipmentUI.uiView={"type":"View","props":{"width":750,"height":1334},"child":[{"type":"Image","props":{"y":20,"x":20,"top":200,"skin":"gameResource/titlebg.png","right":0,"left":0,"bottom":172}}]};
		return equipmentUI;
	})(View);
var gamebgUI=(function(_super){
		function gamebgUI(){
			

			gamebgUI.__super.call(this);
		}

		CLASS$(gamebgUI,'ui.gamebgUI',_super);
		var __proto__=gamebgUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(gamebgUI.uiView);

		}

		gamebgUI.uiView={"type":"View","props":{"width":750,"height":1334},"child":[{"type":"Image","props":{"top":14,"skin":"gameResource/bg_pic.png","right":0,"left":1,"bottom":0}}]};
		return gamebgUI;
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
			

			guildUI.__super.call(this);
		}

		CLASS$(guildUI,'ui.guildUI',_super);
		var __proto__=guildUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(guildUI.uiView);

		}

		guildUI.uiView={"type":"View","props":{"width":750,"height":1334},"child":[{"type":"Image","props":{"y":30,"x":30,"top":200,"skin":"gameResource/titlebg.png","right":0,"left":0,"bottom":172}}]};
		return guildUI;
	})(View);
var headUI=(function(_super){
		function headUI(){
			
		    this.role_head=null;
		    this.pieces_box=null;
		    this.pieces=null;
		    this.diamond_box=null;
		    this.diamond=null;
		    this.gold_box=null;
		    this.gold=null;
		    this.namebox=null;
		    this.game_name=null;
		    this.exp_box=null;
		    this.experience=null;
		    this.level_box=null;
		    this.leve_percent=null;
		    this.level=null;
		    this.bottom_box=null;

			headUI.__super.call(this);
		}

		CLASS$(headUI,'ui.headUI',_super);
		var __proto__=headUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(headUI.uiView);

		}

		headUI.uiView={"type":"View","props":{"width":750,"height":1334},"child":[{"type":"Box","props":{"y":0,"x":0,"visible":true,"top":0,"right":0,"name":"head_box","left":0,"height":200},"child":[{"type":"Image","props":{"top":0,"skin":"gameResource/titlebg.png","right":0,"left":0,"bottom":0}},{"type":"Image","props":{"width":120,"var":"role_head","top":30,"skin":"gameResource/head_girl.png","name":"role_head","left":15,"height":120}},{"type":"Box","props":{"width":280,"visible":true,"var":"pieces_box","top":130,"name":"pieces_box","left":440,"height":40},"child":[{"type":"Image","props":{"top":0,"skin":"gameResource/titlebg.png","right":0,"left":0,"bottom":0}},{"type":"Image","props":{"y":0,"x":0,"width":50,"top":0,"skin":"gameResource/pieces.png","left":0,"bottom":0}},{"type":"Label","props":{"width":280,"var":"pieces","top":5,"text":"碎片数量","right":0,"name":"pieces","left":0,"height":30,"fontSize":30,"color":"#cc6633","bottom":5,"align":"center"}}]},{"type":"Box","props":{"width":280,"visible":true,"var":"diamond_box","top":30,"name":"diamond_box","left":440,"height":40},"child":[{"type":"Image","props":{"y":0,"x":0,"top":0,"skin":"gameResource/titlebg.png","right":0,"left":0,"bottom":0}},{"type":"Image","props":{"width":50,"top":0,"skin":"gameResource/diamond.png","left":0,"bottom":0}},{"type":"Label","props":{"width":200,"var":"diamond","top":5,"text":"砖石数量","name":"diamond","left":40,"fontSize":30,"color":"#cc6633","bottom":5,"align":"center"}},{"type":"Button","props":{"y":0,"x":240,"top":0,"stateNum":2,"skin":"gameResource/btn_add.png","right":0,"left":240,"bottom":0}}]},{"type":"Box","props":{"width":280,"visible":true,"var":"gold_box","top":80,"name":"gold_box","left":440,"height":40},"child":[{"type":"Image","props":{"top":0,"skin":"gameResource/titlebg.png","right":0,"left":0,"bottom":0}},{"type":"Image","props":{"width":50,"top":0,"skin":"gameResource/glod.png","left":0,"bottom":0}},{"type":"Label","props":{"width":200,"var":"gold","top":5,"text":"金币数量","name":"gold","left":40,"fontSize":30,"color":"#cc6633","bottom":5,"align":"center"}},{"type":"Button","props":{"top":0,"stateNum":2,"skin":"gameResource/btn_add.png","right":0,"left":240,"bottom":0}}]},{"type":"Box","props":{"width":280,"visible":true,"var":"namebox","top":30,"name":"namebox","left":150,"height":40},"child":[{"type":"Image","props":{"top":0,"skin":"gameResource/titlebg.png","right":0,"left":0,"bottom":0}},{"type":"Label","props":{"var":"game_name","top":5,"text":"【测试名字】7","right":0,"name":"game_name","left":0,"fontSize":30,"color":"#ffffff","bottom":0,"align":"center"}}]},{"type":"Box","props":{"x":149,"width":280,"visible":true,"var":"exp_box","top":80,"name":"exp_box","height":40},"child":[{"type":"Image","props":{"y":0,"x":0,"top":0,"skin":"gameResource/titlebg.png","right":0,"left":0,"bottom":0}},{"type":"ProgressBar","props":{"width":235,"var":"experience","top":5,"skin":"gameResource/progress.png","name":"experience","left":45,"bottom":5}},{"type":"Image","props":{"width":45,"top":5,"skin":"gameResource/exp.png","left":0,"bottom":5}}]},{"type":"Box","props":{"width":280,"visible":true,"var":"level_box","top":130,"name":"level_box","left":150,"height":40},"child":[{"type":"Image","props":{"top":0,"skin":"gameResource/titlebg.png","right":0,"left":0,"bottom":0}},{"type":"Label","props":{"var":"leve_percent","top":5,"text":"89%","right":0,"name":"leve_percent","left":70,"fontSize":30,"color":"#23f606","bottom":0,"align":"center"}},{"type":"Label","props":{"width":40,"var":"level","top":5,"text":"100","name":"level","left":35,"fontSize":30,"color":"#cc6633","bottom":5}},{"type":"Image","props":{"width":30,"top":5,"skin":"gameResource/level.png","left":5,"bottom":5}}]}]},{"type":"Box","props":{"visible":true,"var":"bottom_box","top":1162,"right":0,"name":"bottom_box","left":0,"bottom":0},"child":[{"type":"Image","props":{"top":0,"skin":"gameResource/titlebg.png","right":0,"left":0,"bottom":0}}]}]};
		return headUI;
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
var menu1UI=(function(_super){
		function menu1UI(){
			
		    this.test=null;

			menu1UI.__super.call(this);
		}

		CLASS$(menu1UI,'ui.menu1UI',_super);
		var __proto__=menu1UI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(menu1UI.uiView);

		}

		menu1UI.uiView={"type":"View","props":{"y":17,"x":-6,"width":750,"height":1334},"child":[{"type":"Image","props":{"y":57,"x":93,"width":302,"var":"test","skin":"comp/97542a01213fb80e22e02c1233d12f2eb838947b.jpg","height":248}}]};
		return menu1UI;
	})(View);
var palyerUI=(function(_super){
		function palyerUI(){
			

			palyerUI.__super.call(this);
		}

		CLASS$(palyerUI,'ui.palyerUI',_super);
		var __proto__=palyerUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(palyerUI.uiView);

		}

		palyerUI.uiView={"type":"View","props":{"width":750,"height":1334},"child":[{"type":"Image","props":{"y":40,"x":40,"top":200,"skin":"gameResource/titlebg.png","right":0,"left":0,"bottom":172}}]};
		return palyerUI;
	})(View);
var pkUI=(function(_super){
		function pkUI(){
			

			pkUI.__super.call(this);
		}

		CLASS$(pkUI,'ui.pkUI',_super);
		var __proto__=pkUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(pkUI.uiView);

		}

		pkUI.uiView={"type":"View","props":{"width":750,"height":1334},"child":[{"type":"Image","props":{"y":50,"x":50,"top":200,"skin":"gameResource/titlebg.png","right":0,"left":0,"bottom":172}}]};
		return pkUI;
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
			
		    this.trade_tab=null;
		    this.btn_all_trade=null;
		    this.btn_my_trade=null;
		    this.trade_list_view=null;
		    this.list_trade_all=null;
		    this.box_trade_all=null;
		    this.list_trade_my=null;
		    this.box_trade_my=null;

			tradeUI.__super.call(this);
		}

		CLASS$(tradeUI,'ui.tradeUI',_super);
		var __proto__=tradeUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(tradeUI.uiView);

		}

		tradeUI.uiView={"type":"View","props":{"width":750,"height":1334},"child":[{"type":"Image","props":{"y":60,"x":60,"top":200,"skin":"gameResource/bag_bg.png","right":0,"left":0,"bottom":172}},{"type":"Tab","props":{"y":250,"var":"trade_tab","selectedIndex":0,"right":100,"name":"trade_tab","left":100},"child":[{"type":"Button","props":{"width":200,"var":"btn_all_trade","stateNum":2,"skin":"gameResource/btn.png","name":"item0","left":0,"label":"label","height":50}},{"type":"Button","props":{"width":200,"var":"btn_my_trade","stateNum":2,"skin":"gameResource/btn.png","right":0,"name":"item1","label":"label","height":50}}]},{"type":"ViewStack","props":{"var":"trade_list_view","top":330,"selectedIndex":0,"right":30,"name":"trade_list_view","left":30,"bottom":210},"child":[{"type":"List","props":{"var":"list_trade_all","vScrollBarSkin":"comp/vscroll.png","right":0,"repeatY":200,"repeatX":1,"name":"item0","left":0,"height":811},"child":[{"type":"Box","props":{"y":0,"var":"box_trade_all","right":10,"renderType":"render","name":"box_trade_all","left":10,"height":40},"child":[{"type":"Image","props":{"top":10,"skin":"gameResource/00197(已去底).png","left":10}},{"type":"Label","props":{"width":120,"top":10,"text":"男天尊法袍","left":60,"fontSize":20,"color":"#FFFFFF"}},{"type":"Label","props":{"width":60,"top":10,"text":"100级","left":200,"fontSize":20,"color":"#FFFFFF"}},{"type":"Label","props":{"width":20,"top":10,"text":"男","left":280,"fontSize":20,"color":"#FFFFFF"}},{"type":"Label","props":{"width":100,"top":10,"text":"剩余48小时","left":320,"fontSize":20,"color":"#FFFFFF"}},{"type":"Label","props":{"width":50,"top":10,"text":"9999","left":460,"fontSize":20,"color":"#FFFFFF"}},{"type":"Image","props":{"width":36,"top":10,"skin":"gameResource/diamond.png","left":510}},{"type":"Button","props":{"top":10,"stateNum":2,"skin":"gameResource/btn.png","right":20,"label":"购买"}}]}]},{"type":"List","props":{"var":"list_trade_my","vScrollBarSkin":"comp/vscroll.png","right":0,"repeatY":200,"repeatX":1,"name":"item1","left":0,"height":811},"child":[{"type":"Box","props":{"y":0,"var":"box_trade_my","right":10,"renderType":"render","name":"box_trade_my","left":10,"height":40},"child":[{"type":"Image","props":{"top":10,"skin":"gameResource/00197(已去底).png","left":10}},{"type":"Label","props":{"width":120,"top":10,"text":"男天尊法袍","left":60,"fontSize":20,"color":"#FFFFFF"}},{"type":"Label","props":{"width":60,"top":10,"text":"100级","left":200,"fontSize":20,"color":"#FFFFFF"}},{"type":"Label","props":{"width":20,"top":10,"text":"男","left":280,"fontSize":20,"color":"#FFFFFF"}},{"type":"Label","props":{"width":100,"top":10,"text":"剩余48小时","left":320,"fontSize":20,"color":"#FFFFFF"}},{"type":"Label","props":{"width":50,"top":10,"text":"9999","left":460,"fontSize":20,"color":"#FFFFFF"}},{"type":"Image","props":{"width":36,"top":10,"skin":"gameResource/diamond.png","left":510}},{"type":"Button","props":{"top":10,"stateNum":2,"skin":"gameResource/btn.png","right":20,"label":"购买"}}]}]}]},{"type":"Box","props":{"y":770,"x":25,"width":700,"height":360},"child":[{"type":"Image","props":{"y":0,"x":0,"width":700,"skin":"gameResource/bag_info.png","height":360}},{"type":"Box","props":{"width":325,"top":5,"name":"eq_info_box_0","left":25,"bottom":105},"child":[{"type":"Label","props":{"width":325,"top":5,"text":"当前装备","name":"eq_info_bag","left":0,"height":40,"fontSize":40,"color":"#FFFFFF","bold":false,"align":"center"}},{"type":"Label","props":{"width":165,"top":50,"text":"命运之刃","name":"bag_eq_info_name","left":0,"height":30,"fontSize":30,"color":"#cc6633","bold":true,"align":"left"}},{"type":"Label","props":{"width":160,"top":50,"text":"+1","name":"bag_eq_info_add","left":165,"height":30,"fontSize":25,"color":"#FFFFFF","bold":true,"align":"center"}},{"type":"Label","props":{"width":165,"top":100,"text":"需要等级35","name":"bag_eq_info_level","left":0,"height":30,"fontSize":25,"color":"#FFFFFF","bold":true,"align":"left"}},{"type":"Label","props":{"width":160,"top":100,"text":"性别：女","name":"bag_eq_info_sex","left":165,"height":30,"fontSize":25,"color":"#f60939","bold":true,"align":"center"}},{"type":"Label","props":{"wordWrap":true,"top":150,"text":"一般属性\\n一般属性\\n一般属性\\n","right":0,"name":"bag_eq_info_0","left":0,"height":80,"fontSize":25,"color":"#FFFFFF","align":"left"}},{"type":"Label","props":{"wordWrap":true,"top":240,"text":"一般属性\\n一般属性\\n一般属性\\n","right":0,"name":"bag_eq_info_1","left":0,"fontSize":25,"color":"#03f920","bottom":10,"align":"left"}}]},{"type":"Box","props":{"top":5,"name":"eq_info_box_1","left":350,"bottom":105},"child":[{"type":"Label","props":{"width":325,"top":5,"text":"已装备","name":"role_eq_info","left":0,"height":40,"fontSize":40,"color":"#f81906","align":"center"}},{"type":"Label","props":{"width":165,"top":50,"text":"命运之刃","name":"role_eq_info_name","left":0,"height":30,"fontSize":30,"color":"#cc6633","bold":true,"align":"left"}},{"type":"Label","props":{"width":160,"top":50,"text":"+10","name":"role_eq_info_add","left":165,"height":30,"fontSize":25,"color":"#FFFFFF","bold":true,"align":"center"}},{"type":"Label","props":{"width":165,"top":100,"text":"需要等级35","name":"role_eq_info_level","left":0,"height":30,"fontSize":25,"color":"#FFFFFF","bold":true,"align":"left"}},{"type":"Label","props":{"width":160,"top":100,"text":"性别：男","name":"role_eq_info_sex","left":165,"height":30,"fontSize":25,"color":"#0610f6","bold":true,"align":"center"}},{"type":"Label","props":{"wordWrap":true,"width":325,"top":150,"text":"一般属性\\n一般属性\\n一般属性\\n","name":"role_eq_info_0","left":0,"height":80,"fontSize":25,"color":"#FFFFFF","align":"left"}},{"type":"Label","props":{"wordWrap":true,"width":325,"top":240,"text":"一般属性\\n一般属性\\n一般属性\\n","name":"role_eq_info_1","left":0,"fontSize":25,"color":"#03f920","bottom":10,"align":"left"}}]},{"type":"Image","props":{"width":5,"top":5,"skin":"gameResource/split.png","left":345,"bottom":15}},{"type":"Button","props":{"top":10,"stateNum":1,"skin":"gameResource/btn_close.png","right":20,"name":"eq_info_close"}}]}]};
		return tradeUI;
	})(View);