class Helper {
  constructor() {
    this.cfdjsModule = require('cfd-js-wasm');
  }

  getResponse(result) {
    return Promise.resolve(result);
  }

  getCfdjs() {
    return this.cfdjsModule.getCfd();
  }

  initialized(func) {
    this.cfdjsModule.addInitializedListener(func);
  }
}

export default new Helper();
