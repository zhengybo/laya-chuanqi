import Biology from './biology'
import { Obj } from '@/main/unit/tool'
/**
 * 一个人具有属性
 * 血量、等级、等钱经验、攻击、物防、魔防
 */
const { Animation, Handler, Event, Sprite } = Laya;
export default class Player extends Biology{
    constructor(props){
        super(props);
        this.deaded = false;
        this.experience = 0;
        this.attackPower = 0;
        this.currentAttack = null;
        this.magicDefense = 0;
        this.physicalDefense = 0;
        this.attackList = []; // 当前被选中攻击目标列表
        this.deadFlash = null // 死亡动画
        this.attackFlash = null; // 攻击动画
        this.sprite = new Sprite();
        this.ani = new Animation();
        Laya.stage.addChild(this.sprite);
        Laya.stage.on(Event.KEY_DOWN,this,this.onKeyDown);//设置键盘监听事件
        this.init();
        return this;
    }

    init(){
        let ani = this.ani;
        // Laya.loader.load("res/atlas/tack.atlas");
        ani.on(Event.COMPLETE, this, this.attackCompleted);
		ani.loadAtlas("res/atlas/tack.atlas"); // 加载图集动画
		ani.interval = 100;			// 设置播放间隔（单位：毫秒）
		ani.index = 1; 				// 当前播放索引
        ani.zOrder = 2;
        
        Laya.stage.addChild(ani)
        
    }

    setPos(pos){
        this.ani.pos(...pos);
        return this;
    }

    attackCompleted(){
        console.log(this)
        this.attack();
    }

    onKeyDown(e){
        this.ani.play(0,false);
        
    }

    /* 攻击 */
    attack(){
        if(this.deaded) return;
        this.attackList = this.attackList.map(target => target.attacked(this)).filter(item => !item.deaded);
        return this;
    }

    addStatus(status = {}){
        if(this.status.includes(status)){

        }
        
    }

    /* 设置攻击列表 */
    setAttackList(attackList){
        this.attackList = attackList;
        return this;
    }
    
    /* 增加攻击目标 */
    addAttackList(news){
        this.attackList.push(...news);
        return this;
    }

    stopAttack(){

    }

    /* 被攻击 */
    attacked(target){
        // let hurt = compute(this, target.currentAttack);;
        this.boold -= target.attack;
        if(this.boold <= 0){
            target.dead();
            return this;
        }
        return this;
    }

    /* 死了 */
    dead(){
        this.deaded = true;
        this.stopAttack();
        // this.deadFlash.play();
        return this;
    }

    /* 添加攻击目标 */
    addAttackTarget(target){
        if(!this.attackList.includes(target)){
            this.attackList.push(target);
        }
    }


}