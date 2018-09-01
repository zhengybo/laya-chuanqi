export default class Functioned {

    /**
     * 继承目标对象的原型上的方法
     * @param {Object} sounce 继承者
     */
    static extends(sounce) {
        let targets = [...arguments].slice(1);
        targets.forEach(target => {
            let srcProto = target.prototype;
            for (let method in srcProto){
                if (!sounce[method]){
                    sounce[method] = srcProto[method];
                }
            }
        })
    }

    /**
     * 类的注入(用于类的相互调用)
     */
    static injection(target,obj = {}){
        if(!target._c_) target._c_ = {};
        Object.keys(obj).forEach(key => target._c_[key] = obj[key]);
    }

   
    /**
     * 缓冲器
     * @param {Number} during  缓冲时间
     * @param {Function} duringFn  缓冲中回调函数
     * @param {Function} endFn  缓冲结束中回调函数
     * @param {Function} immediate  是否立即执行缓冲中回调
     * @return {Function} 执行函数
     *          @return {Boolean} 是否处在缓存中
     */
    static buffer(during = 100,duringFn, endFn, immediate = false){
        let timer = null;
        return function() {
            if(timer){
                duringFn && duringFn.call(this, ...arguments);
                return true;
            }
            if(immediate){
                duringFn && duringFn.call(this, ...arguments);
            }
            timer = setTimeout(() => {
                clearTimeout(timer);
                timer = null;
                endFn && endFn.call(this, ...arguments);
            }, during);
            return false;
        }
    }

    /**
     * 数据缓存器
     * @param {Array} buffer 缓冲数据源 
     * @param {Number} during 缓冲时间
     * @param {Function} clk 缓冲回调 
     *         @param {Array} tepmpBuffer 间断性的缓存数据
     * @return {Function} 返回执行者
     *          @param {*} 注入每一项数据源
     */
    static dataBuffer(buffer = [], during, clk){
        const temp = Functioned.buffer(during, (data) => buffer.push(data), data => {
            clk.call(this, [...buffer]);
            buffer.length = 0; // 制空缓存
        }, true);
        return data => temp(data);
    }
}
/*
    ex : 缓存器调用
    var a = []
    const t = dataBuffer(a,2000,() => {
     console.log(a)
    })
    t(123);
    t({});
*/

