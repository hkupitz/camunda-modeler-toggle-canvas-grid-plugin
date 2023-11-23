module.exports = function (electronApp, menuState) {
  return [{
    label: 'Toggle Canvas Grid',
    accelerator: 'CommandOrControl+G',
    enabled: true, 
    action: () => {
		electronApp.emit('menu:action', 'toggleCanvasGrid');
	}
  }]
}