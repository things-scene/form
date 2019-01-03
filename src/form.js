/*
 * Copyright � HatioLab Inc. All rights reserved.
 */

const NATURE = {
  mutable: false,
  resizable: true,
  rotatable: true,
  properties: [
    {
      type: 'select',
      label: 'method',
      name: 'method',
      property: {
        options: [
          {
            display: 'GET',
            value: 'GET'
          },
          {
            display: 'POST',
            value: 'POST'
          }
        ]
      }
    },
    {
      type: 'string',
      label: 'action',
      name: 'action'
    },
    {
      type: 'number',
      label: 'period',
      name: 'period'
    },
    {
      type: 'string',
      label: 'name',
      name: 'name'
    },
    {
      type: 'string',
      label: 'authorization',
      name: 'authorization'
    },
    {
      type: 'select',
      label: 'format',
      name: 'format',
      property: {
        options: [
          {
            display: 'JSON',
            value: 'JSON'
          },
          {
            display: 'TEXT',
            value: 'TEXT'
          }
        ]
      }
    },
    {
      type: 'checkbox',
      label: 'with-credentials',
      name: 'withCredentials'
    },
    {
      type: 'checkbox',
      label: 'submit-on-load',
      name: 'submitOnLoad'
    }
  ],
  'value-property': 'action'
}

import { Component, HTMLOverlayContainer, warn } from '@hatiolab/things-scene'

export default class Form extends HTMLOverlayContainer {
  dispose() {
    super.dispose()
    this._stopRepeater()
  }

  dispose() {
    super.dispose()
    this._stopRepeater()
  }

  setElementProperties(form) {
    var { action = '', method = 'POST', name = '' } = this.state

    form.action = action
    form.method = method
    form.name = name
  }

  get action() {
    return this.state.action
  }

  set action(action) {
    this.setState('action', action)
    this._startRepeater()
  }

  get period() {
    return this.state.period * 1000
  }

  set period(period) {
    this.setState('period', period)
    this._startRepeater()
  }

  _startRepeater() {
    this._stopRepeater()

    if (!this.app.isViewMode) return

    if (this.period) {
      this._repeatInterval = setInterval(this._submit.bind(this), this.period)
    }
  }

  _stopRepeater() {
    if (this._repeatInterval) clearInterval(this._repeatInterval)
  }

  _onload(e) {
    var result = e.target.response
    try {
      this.setState('data', this.get('format') == 'JSON' ? JSON.parse(result) : result)
    } catch (e) {
      console.error(e)
    }
  }

  oncreate_element(form) {
    if (!this.app.isViewMode) return

    var _ = e => {
      var url = form.action
      var xhr = new XMLHttpRequest()

      var params = [].filter
        .call(form.elements, function(el) {
          if (el.type == 'radio' || el.type == 'checkbox') return el.checked
          return true
        })
        .filter(function(el) {
          return !!el.name
        })
        .filter(function(el) {
          return !el.disabled
        })
        .map(function(el) {
          return encodeURIComponent(el.name) + '=' + encodeURIComponent(el.value)
        })
        .join('&')

      xhr.onloadend = this._onload.bind(this)

      if (form.method == 'get') xhr.open(form.method, url + '?' + params)
      else xhr.open(form.method, url)

      xhr.setRequestHeader(
        'Content-Type',
        ['x-www-form-urlencoded', 'json']
          .map(type => {
            return 'application/' + type
          })
          .concat('text/plain')
          .join(';')
      )

      if (this.get('authorization')) xhr.setRequestHeader('Authorization', this.get('authorization'))

      if (this.get('withCredentials')) xhr.withCredentials = true

      if (form.method == 'get') xhr.send()
      else xhr.send(params)

      e.preventDefault()

      return false
    }

    form.onsubmit = _

    if (this.getState('submitOnLoad')) {
      setTimeout(this._submit.bind(this), 100)
    }

    this._startRepeater()
  }

  _submit() {
    this.element.dispatchEvent(
      new Event('submit', {
        cancelable: true
      })
    )
  }

  get nature() {
    return NATURE
  }
}

Component.register('form', Form)
