/**
 * 技能表
 */
export default [
  {
    key : 'generalSwordplay'
    desc : '普通剑术',
  },
  {
    key : 'assassination'
    desc : '刺杀',
  },
  {
    key : 'attackAndmassacre'
    desc : '攻杀',
  },
  {
    key : 'barbarism'
    desc : '野蛮',
  },
  {
    key : 'barbarism'
    desc : '野蛮',
  },
].map((item, index) => Object.assign(item, {
  level : 0,
  id : index
}))
