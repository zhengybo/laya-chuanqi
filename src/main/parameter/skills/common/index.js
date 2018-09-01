/**
 * 通用技能
 */
export default [
  {
    key : 'power'
    desc : '力量',
  }
].map((item, index) => Object.assign(item, {
  level : 0,
  id : index
}))
