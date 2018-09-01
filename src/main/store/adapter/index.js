import Params from  './params'
import { Obj } from '@/main/unit/tool'

const ITF = (data , params, key) => data[params[key]];

const IT = (data , params) => (key) => data[params[key]];

const Formatter = (o = {}) => Obj.isDef(o.v) ? `${o.p || ''}${o.v}${o.n || ''}` : o.d || '';

export {  Params, ITF, IT, Formatter };