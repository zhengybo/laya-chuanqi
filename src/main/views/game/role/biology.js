/**
 * 生物类 , 基础的属性
 */
import { Obj } from '@/main/unit/tool'
const { isDef } = Obj;
export default class Biology {
    constructor(options = {}){
        this.blood = options.blood || 0; // 血量
        this.status = []; // 人物状态
        this.level = options.blood || 0; // 等级
        this.skills = options.blood || []; // 技能
    }

    setAttrs(options = {}){
        Object.keys(this).forEach(key =>  (isDef(options[key]) && (this[key] = options[key])));
        return this;
    }

    getAttr(name = ''){
        return this[name] || null;
    }
}