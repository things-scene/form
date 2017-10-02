/*
 * Copyright © HatioLab Inc. All rights reserved.
 */

import reposition from './reposition'

/**
 * Mixin HTMLElement
 */
export default (superclass) => {
  var A = class extends superclass {
    isHTMLElement() {
      return true
    }
  
    get element() {
      return this._element
    }

    set element(element) {
      this._element = element
    }
  
    // Overidable
    get tagName() {
      return this.get('type')
    }
  
    // Overidable
    setElementProperties(element) {
      throw new Error('Not Implemented Yet')    
    }
  
    // Overidable
    createElement() {
      this.element = document.createElement(this.tagName)
      if(!this.element)
        return;
  
      this.setElementProperties(this.element);
      
      if(this.parent.isHTMLElement && this.parent.isHTMLElement())
        this.parent.element.appendChild(this.element)
      else
        this.root.model_layer.overlay.appendChild(this.element);

      reposition(this);

      this.oncreate_element && this.oncreate_element(this.element)
    }
  
    // Overidable
    disposeElement() {
      var element = this.element
      element && element.parentElement && element.parentElement.removeChild(element);
      this.element = null
    }
  
    ready() {
      !this.element && this.createElement();
    }
  
    added() {
      if(!this.element) {
        return
      }
  
      if(this.parent.isHTMLElement && this.parent.isHTMLElement())
        this.parent.element.appendChild(this.element)
      else
        this.root.model_layer.overlay.appendChild(this.element);

      reposition(this);
    }
  
    dispose() {
      this.disposeElement(this);
      super.dispose()
    }

    get hasTextProperty() {
      return true
    }

    get textHidden() {
      return true
    }
  
    onchange(after, before) {
      this.element && this.setElementProperties(this.element)

      this.element && reposition(this);
    }

    _draw(context) {
      // Draw nothing..
    }
  }

  return A
}
