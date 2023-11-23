export default function ToggleCanvasGridExtension(editorActions, eventBus, grid) {
  eventBus.on('canvas.resized', () => {
    var gridEnabled = JSON.parse(window.localStorage.getItem('camundaModelerCanvasGridEnabled')) === true;
    grid.toggle(gridEnabled);
  });

  editorActions.register({
    toggleCanvasGrid: () => {
      window.localStorage.setItem('camundaModelerCanvasGridEnabled', !grid.isVisible());
      grid.toggle(!grid.isVisible());
    },
  });
}

ToggleCanvasGridExtension.$inject = [
  'editorActions',
  'eventBus',
  'grid'
];
