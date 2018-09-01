/**
 * 接口参数适配
 */
export default {
    /** 
     * 装备基本信息
     * eq_msg_name 名称
     * eq_msg_r_lv 需要等级
     * quality_id 品质
     * eq_msg_lv 强化等级
     * eq_msg_opt 职业
     * attrs 属性
     */

    equipmentBasisMessage : {
        eq_msg_name : 'name', 
        eq_msg_r_lv : 'requireLevel', 
        quality_id : 'qualityId',
        eq_msg_lv : 'level',
        eq_msg_opt : 'occupation',
        attrs : 'attrs'
    },
    // 装备属性信息
    equipmentAttrsMessage : {
        attback : 'attback',
        agile : 'agile',
        power : 'power',
        mana : 'mana'
    }
}