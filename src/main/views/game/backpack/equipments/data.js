/**
 * 装备列表分类
 */

const filter = [
    { id : 0, type : '', label : '全部' },
    { id : 1, type : 'helmet', label : '头盔' },
    { id : 2, type : 'clothe', label : '衣服' },
    { id : 3, type : 'weapon', label : '武器' },
    { id : 4, type : 'necklace', label : '项链' },
    { id : 5, type : 'bracelet', label : '手镯' },
    { id : 6, type : 'ring', label : '戒指' },
    { id : 7, type : 'belt', label : '腰带' },
    { id : 8, type : 'shoe', label : '鞋子' },
    // { id : 9, type : 'shoe', label : '鞋子' },
    // { id : 10, type : 'shoe', label : '鞋子' }
]

const action = [
    { id : 0, type : '', label : '装备' },
    { id : 1, type : 'helmet', label : '寄售' },
    { id : 2, type : 'clothe', label : '锁定' },
    { id : 3, type : 'weapon', label : '先练' },
    { id : 4, type : 'necklace', label : '分解' },
    // { id : 9, type : 'shoe', label : '鞋子' },
    // { id : 10, type : 'shoe', label : '鞋子' }
]
export {
    filter,
    action
} 