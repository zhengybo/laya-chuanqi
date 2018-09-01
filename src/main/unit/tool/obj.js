/**
 * 扩展Object 函数 继承Object
 *
 */

export default class Obj extends Object{
  /**
   * 兼容性 Object assign
   */
  static assign(){
    function _merge(target,obj){
      for (var attr in obj) {
        target[attr] = obj[attr]
      }
      return target;
    }
    var result = arguments[0];
    Array.prototype.slice.call(arguments).splice(1).forEach(function(obj){
      _merge(result , obj);
    });
    return result;
  }

  static isUndef (v) {
    return v === undefined || v === null
  }
  
  static isDef (v) {
    return v !== undefined && v !== null
  }

  static isTrue (v) {
    return v === true
  }

  static isFalse (v) {
    return v === false
  }

  /**
   * 判断一个对象类型
   */
  static type(obj){
    return Object.prototype.toString.call(obj).slice(8,-1).toLowerCase();
  }
  /**
   * 判断是不是一个 普通对象({}) 对象
   */
  static isObject(obj){
    return Obj.type(obj) === 'object'
  }

  /**
   * 深度遍历对象并合并 merge(obj1 , obj2 , obj3 ....) (数组等会直接覆盖)(右->左)
   */
  static merge(){

    const _merge_ = (target,obj) => { //单独合并方法
      Object.keys(obj).forEach(key => {

        if(Obj.isObject(obj[key]) && Obj.isObject(target[key])){ //两个都是对象
          Obj.merge(target[key],obj[key]);
          return ;
        }
        if(Obj.isObject(obj) || Obj.isObject(target)){ //其中一个是对象
          target[key] = obj[key];
          return;
        }
      })
      return target;
    }

    let result = arguments[0];
    [...arguments].splice(1).forEach((obj) => _merge_(result , Obj.isObject(obj) ? obj : {}));
    return result;
  }

  /**
   * 清理为空的项
   * @param {Boolean} self 表示是否是操作自身
   */

  static clear(obj,self){
    obj = !self ? JSON.parse(JSON.stringify(obj)) : obj;
    Object.keys(obj).forEach(key => {
      obj[key] === '' && delete obj[key];
      if(typeof obj[key] == 'string') obj[key] = obj[key].trim();
    })
    return obj;
  }

  /**
   * 清空指定key值指定的属性属性并替换
   */
  static clearAttrs(obj = {}, target, replace = {}){
    let keys = Object.keys(obj);
    if(Array.isArray(target)){
      keys.forEach(key => !!~target.indexOf(key) && delete obj[key] );
    }else {
      keys.forEach(key => delete obj[key] );
    }
    Obj.isObject(replace) && Object.assign(obj, replace);
    return obj;
  }

  /**
   * 合并一个目标到指定目标里 并保存 自身引用 自身属性的优先级最高
   */
  static cover(deep){
    return Object.assign(arguments[0],Object.assign({},...[...arguments].splice(1),arguments[0]))
  }

  static deepCover(deep){
    return Obj.merge(arguments[0],Obj.merge({},...[...arguments].splice(1),arguments[0]))
  }

  /**
   * 从target里面选取obj的属性进行深度拷贝
   */

  static selectMerge(obj , target){
    Object.keys(obj).forEach(key => {
      if(target[key] === void 0)return;
      if(Obj.isObject(target[key]) && Obj.isObject(obj[key])){
        Obj.merge(obj[key],target[key]);
        return;
      }
      obj[key] = target[key];
    })
    return obj;
  }

  /**
   * 安全的设置对象属性
   */

  static  parsePath (path) {
    if (/[^\w.$]/.test(path)) {
      return
    }
    var segments = path.split('.');
    return function (obj) {
      for (var i = 0; i < segments.length; i++) {
        if (!obj) { return }
        obj = obj[segments[i]];
      }
      return obj
    }
  }

  static  setObjValue (path,value) {
    var segments = path.split('.');
    return function (obj) {
      for (var i = 0; i < segments.length-1; i++) {

        if(obj[segments[i]] === void 0){
          obj[segments[i]] = {};
        }
        if(!Obj.isObject(obj))return ;
        obj = obj[segments[i]];
      }
      obj[segments[segments.length-1]] = value;
    }
  }

  static clone(obj, deep = true){
    if(!deep){
      return JSON.parse(JSON.stringify(obj));
    }
    let newObj= Array.isArray(obj) ? [] : {};
    for(let i in obj){
       newObj[i] = (Array.isArray(obj[i]) || Obj.isObject(obj[i]))?
       Obj.clone(obj[i],deep) : obj[i];
    }
    return newObj;
  }
}