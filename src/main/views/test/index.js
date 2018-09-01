//创建舞台，默认背景色是黑色的
// export default () => {
//
// }
var txt = new Laya.Text();
console.log(txt);
//设置文本内容
txt.text = "Hello Layabox";
//设置文本颜色
txt.color = "#FF0000";
//设置文本字体大小，单位是像素
txt.fontSize = 66;
//设置字体描边
txt.stroke = 5;//描边为5像素
txt.strokeColor = "#FFFF";
//设置为粗体
txt.bold = true;
//设置文本的显示起点位置X,Y
txt.pos(60,100);
//设置舞台背景色
Laya.stage.bgColor  = '#23238E';
//将文本内容添加到舞台
Laya.stage.addChild(txt);


 // let back = new backpackUI();
    // let trade = new tradeUI();
    // let menu1 = new menu1UI();
    // var menu1 = ne;
    // Laya.stage.addChild(new menu1UI());
   		 // var ani = new Animation();
		// ani.loadAtlas("res/atlas/tack.atlas"); // 加载图集动画
		// ani.interval = 200;			// 设置播放间隔（单位：毫秒）
		// ani.index = 1; 				// 当前播放索引
		// ani.play(); 				// 播放图集动画

		// // 获取动画的边界信息
		// var bounds = ani.getGraphicBounds();
		// ani.pivot(bounds.width / 5, bounds.height / 5);

		// ani.pos(Laya.stage.width / 3, Laya.stage.height / 3);

		// Laya.stage.addChild(trade);
    // Laya.stage.addChild(back);