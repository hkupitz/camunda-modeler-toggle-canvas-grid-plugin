
import {
  registerBpmnJSPlugin,
  registerDmnJSPlugin
} from 'camunda-modeler-plugin-helpers';

import ToggleCanvasGridExtension from './toggle-canvas-grid-extension';

registerBpmnJSPlugin(ToggleCanvasGridExtension);
registerDmnJSPlugin(ToggleCanvasGridExtension, [ 'drd' ]);
