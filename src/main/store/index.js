/**
 * 全局控制器 储存器（储存游戏中拥有唯一性的控制器）
 * 每个控制器 只存一次
 */
import { Obj } from '@/main/unit/tool'
/* 控制器集合 */
const controllers = {};

class Store {

    /** 获取指定控制器
     * @param {String} name 控制器名称(唯一)
     */
    getController(name){
        return controllers[name] || null;
    }

    /** 设置控制器
     * @param {String} name 控制器名称(唯一)
     */
    setController(name, controller){
        if(this.has(name)){
            return this;
        }
        if(Obj.isObject(name)){
            Object.keys(name).forEach(key => (controllers[key] = name[key]));
        }
        controllers[name] = controller;
    }

    has(name){
        return !!controllers[name];
    }

    gets(){
        return controllers;
    }
}
export default new Store();