
const comp = [
  'vscroll$bar.png',
  'vscroll$bar.up',
  'vscroll$bar.down',
  'vscroll$up.png',
  'vscroll$down.png'
].map(v => `comp/${v}`);
const gameResource = [
  'btn_add.png',
  'btn_close.png',
  'btn.png',
  'split.png',
  'tab1.png',
  'equipmentSkin/00214(已去底).png',
  'equipmentSkin/00215(已去底).png',
  'equipmentSkin/00219(已去底).png',
  'equipmentSkin/魔法杖.png',
  'equipmentSkin/男布衣.png',
  'equipmentSkin/噬魂杖.png'
].map(v => `gameResource/${v}`)
export default [...comp,...gameResource]
