export const createModel = initialModel => ({
  value: initialModel,
  render: () => {},

  update(action) {
    this.value = action(this.value);
    this.render();
    console.info('\x1b[32m%s\x1b[0m', '➤ Model updated and rendered: ', this.value);
  },
  renderWith(handler) {
    this.render = () => handler(this.value);
    this.render();
  }
});
