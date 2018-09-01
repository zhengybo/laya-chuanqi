import Game from './views/game'
export default ( _l ) =>  {
  /**
   * 由于 ui视图由编辑器打包，手动引入无法在全局获取
   * 等待ui组件载入完成
   */
  window.onload = () => new Game(_l).start();
}
