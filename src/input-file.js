/*
 * Copyright © HatioLab Inc. All rights reserved.
 */

const NATURE = {
  mutable: false,
  resizable: true,
  rotatable: true,
  properties: [{
    type: 'string',
    label: 'name',
    name: 'name',
    property: 'name'
  }, {
    type: 'string',
    label: 'value',
    name: 'value',
    property: 'value'
  }, {
    type: 'checkbox',
    label: 'multiple',
    name: 'multiple',
    property: 'multiple'
  }],
  'value-property': 'value'
}

import Input from './input'

export default class InputFile extends Input {

  get nature() {
    return NATURE;
  }

  setElementProperties(element) {
    super.setElementProperties(element)

    element.multiple = !!this.state.multiple
  }
}

scene.Component.register('input-file', InputFile);
