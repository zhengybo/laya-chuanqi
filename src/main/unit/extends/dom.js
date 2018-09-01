export default class Dom {
    /**
     * 寻找父节点名字为name的元素
     * @param {Object} dom 
     * @param {String} name 
     */
    parent(dom = {}, fn = () => {}){
        let parentNode = dom.parent;
        if(parentNode){
            if(fn(parentNode)){
                return parentNode;
            }
          return this.parent.call(this, parentNode, name);
        }
        return null;
    }
}