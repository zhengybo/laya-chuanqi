/**
 * 基础UI组件类
 */
export default class UI {
    
    constructor(ui){
        this.ui = ui;
    }
    
    displayBox(target,status = true){
        if(!target) return;
        target.visible = status;
    }

    then(fn){
        fn.call(this,this);
        return this;
    }

    show(){
        this.ui.visible = true;
        return this;
    }

    hide(){
        this.ui.visible = false;
        return this;
    }

    toggle(){
        this.ui.visible = !this.ui.visible;
        return this;
    }
    
    setAttrs(obj = {}){
        Object.assign(this.ui, obj);
        return this;
    }

    /* 深度查找第一个后代节点 （层级越低优先级越高） */
    queryTagName(name, ui){
        const dfs = (node) => {
            let target = node.getChildByName(name);
            if(!target){
                let child = node._childs;
                if(child && child.length ){
                    for(let i = 0,l = child.length; i < l; i ++){
                        let r = dfs(child[i]);
                        if(r) return r;
                    }
                }
                return null;
            }
            return target;
        }
        return dfs(ui || this.ui);
    }

    /* 深度查找所有个后代节点 (层级越低越靠前) */
    queryTagsName(name, ui){
        let lists = [];
        const dfs = (node) => {
            let target = node.getChildByName(name);
            target && lists.push(target);
            let child = node._childs;
            if(child && child.length ){
                for(let i = 0,l = child.length; i < l; i ++){
                    let r = dfs(child[i]);
                    if(r) lists.push(r);
                }
            }
        }
        dfs(ui || this.ui);
        return lists;
    }
}