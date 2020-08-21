class Helper {
  constructor() {
    this.cfddlcjsModule = require('cfd-dlc-js-wasm');
  }

  getResponse(result) {
    return Promise.resolve(result);
  }

  getCfddlcjs() {
    return this.cfddlcjsModule.getCfddlc();
  }

  initialized(func) {
    this.cfddlcjsModule.addInitializedListener(func);
  }
}

export default new Helper();
