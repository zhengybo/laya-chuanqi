import prLoadImg from '@/main/assets/prLoadImg'
/* 组件 */
import Show from './show'
import Tools from './tools'
import BackPack from './backpack'
import HeadMessage from './headMessage'
import Player from './role/player'
/* 其他 */
import NAME from '@/main/store/controllerName'
import Store from '@/main/store' 

const { Animation, Stage, Rectangle, Loader, WebGL, Handler, Browser, Event } = Laya;

export default class GameController {
  constructor(_laya){
    this._laya = _laya;
    this.initGameParams();
  }

  init(){
    this.initGameController();
    this.initGameEvents();
  }

  /* 初始化界面信息参数 */
  initGameParams(){
    this.game = null; // 游戏主对象(包含信息栏、人物、背包信息等)
    this.shows = null; // 显示框控制器
    this.tools = null; // 工具栏控制器
    this.toolsUI = null; // 工具栏UI对象
    this.headMessage = null; // 头部信息控制器
    this.headMessageUI = null; // 头部信息UI对象


    this.backpack = null; // 背包控制器
    this.backpackUI = null; //背包UI对象
    this.skill = null; // 技能栏控制器
    this.skillUI = null; // 技能栏UI对象
    this.roleMessage = null; // 角色信息栏
    this.roleMessageUI = null; // 角色信息UI对象
  }

  start(){
    Laya.init(750, 1334, Laya.WebGL); // 初始化画布
    // 适配
    Laya.stage.frameRate = Laya.Stage.FRAME_SLOW;
    Laya.stage.alignH = Laya.Stage.ALIGN_CENTER;
    Laya.stage.alignV = Laya.Stage.ALIGN_MIDDLE;
    Laya.stage.screenMode = Laya.Stage.SCREEN_NONE;
    Laya.stage.scaleMode = Laya.Stage.SCALE_EXACTFIT;
    //设置版本控制类型为使用文件名映射的方式
    // Laya.ResourceVersion.type = Laya.ResourceVersion.FILENAME_VERSION;
    // Laya.stage.scaleMode = Laya.Stage.SCALE_FULL;
    //屏幕适配，横屏还是竖屏，默认不改变
    // Laya.stage.screenMode = Laya.Stage.ALIGN_BOTTOM;
    Laya.loader.load(prLoadImg,Handler.create(this, this.init));
    
    // Laya.loader.load("res/atlas/tack.atlas", Handler.create(this, this.createAnimation));
  }

  createAnimation(){
    let Game = new gameFrameUI();
    Game.headImg.on(Event.CLICK, this,this.showBack);
    Laya.stage.addChild(Game);
   
  }

  /* 初始化游戏相关控制器 */
  initGameController(){
    /* 创建游戏基础 */
    this.gameUI = new gameFrameUI(); // 创建主界面
    Laya.stage.addChild(this.gameUI);
    Store.setController(NAME.GAME, this); 

    /* 创建头部信息控制器 */
    this.headMessageUI = this.gameUI.head_message; // 创建头部信息
    this.headMessage = new HeadMessage(this.headMessageUI);
    Store.setController(NAME.HEAD_MESSAGE, this.headMessage); 

    /* 创建工具栏控制器 */
    this.toolsUI = this.gameUI.tools; // 创建工具栏
    this.tools = new Tools(this.toolsUI);
    Store.setController(NAME.TOOLS, this.tools); 

    /* 创建公用显示框信息 */
    this.shows = new Show();
    Store.setController(NAME.SHOWS, this.shows); 

    /* 创建游戏背包 */
    this.backpackUI = new backpack1UI(); // 创建背包
    this.backpack = new BackPack(this.backpackUI,{ // 创建一个背包控制器
      pos : [0, this.gameUI.head_message._height]
    });
    Store.setController(NAME.BAGPACK, this.backpack); 
    Laya.stage.addChild(this.backpackUI); // 装载一个背包到游戏

    
    // new Player().setAttrs({
    //   blood : 100,
    //   attack : 10
    // }).setPos([100,100]);
    // new Player({
    //   blood : 100,
    //   attack : 10
    // }).setPos([300,100]);
  }
  
  /* 注册游戏相关事件 */
  initGameEvents(){
    // this.gameUI.headImg.on(Event.CLICK, this.backpack,this.backpack.toggle);
  }
}
