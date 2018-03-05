import text from '../assets/input-text.png';
import password from '../assets/input-password.png';
import email from '../assets/input-email.png';
import search from '../assets/input-search.png';
import number from '../assets/input-number.png';
import color from '../assets/input-color.png';
import range from '../assets/input-range.png';
import file from '../assets/input-file.png';
import date from '../assets/input-date.png';
import radio from '../assets/input-radio.png';
import checkbox from '../assets/input-checkbox.png';
import submit from '../assets/input-submit.png';
import reset from '../assets/input-reset.png';
import button from '../assets/button.png';
import fieldset from '../assets/fieldset.png';
import iframe from '../assets/iframe.png';
import img from '../assets/img.png';
import link from '../assets/link.png';
import textarea from '../assets/textarea.png';
import select from '../assets/select.png';
import form from '../assets/form.png';

const ICONS = {
  text,
  password,
  email,
  search,
  number,
  color,
  range,
  file,
  date,
  radio,
  checkbox,
  submit,
  reset,
  button,
  fieldset,
  iframe,
  img,
  link,
  textarea,
  select,
  form,
}

var inputs01 = ['text', 'password', 'email', 'search', 'number', 'color', 'range', 'file', 'date'].map(function (type) {
  return {
    type: 'input-' + type,
    description: 'html input-' + type,
    group: 'form',
    icon: ICONS[type],
    model: {
      type: 'input-' + type,
      top: 100,
      left: 100,
      width: 280,
      height: 30,
      paddingLeft: type == 'search' ? 0 : 7,
      paddingRight: type == 'search' ? 0 : 7,
      fontSize: 14,
      fillStyle: 'white',
      fontColor: '#585858',
      strokeStyle: 'rgba(0,0,0,.4)',
      lineWidth: type == 'file' ? 0 : 1,
      lineDash: 'solid',
      textAlign: 'left'
    }
  }
});

var inputs02 = ['submit', 'reset'].map(function (type) {
  return {
    type: 'input-' + type,
    description: 'html input-' + type,
    group: 'form',
    icon: ICONS[type],
    model: {
      type: 'input-' + type,
      top: 100,
      left: 100,
      width: 280,
      height: 30,
      fontSize: 14,
      fillStyle: 'white',
      fontColor: '#585858',
      strokeStyle: 'rgba(0,0,0,.4)'
    }
  }
});

var button = ['button'].map(function (type) {
  return {
    type: type,
    description: 'html ' + type,
    group: 'form',
    icon: ICONS[type],
    model: {
      type: type,
      top: 100,
      left: 100,
      width: 280,
      height: 30,
      fontSize: 14,
      fillStyle: 'white',
      fontColor: '#585858',
      textAlign: 'center'
    }
  }
});

var textibles = ['input-radio', 'input-checkbox'].map(function (type) {
  return {
    type: type,
    description: 'html input-' + type,
    group: 'form',
    icon: ICONS[type],
    model: {
      type: type,
      top: 100,
      left: 100,
      width: 280,
      height: 30,
      text: 'noname',
      fontSize: 14,
      fontColor: '#585858',
      textAlign: 'left'
    }
  }
});

var fieldset = ['fieldset', 'iframe', 'img', 'link'].map(function (type) {
  return {
    type: type,
    description: 'html ' + type,
    group: 'form',
    icon: ICONS[type],
    model: {
      type: type,
      top: 100,
      left: 100,
      width: 280,
      height: 30,
      fontSize: 14,
      fillStyle: 'white',
      fontColor: '#585858',
      strokeStyle: 'rgba(0,0,0,.4)',
      lineWidth: 1,
      lineDash: 'solid',
      textAlign: 'left'
    }
  }
});

var others = ['textarea', 'select'].map(function (type) {
  return {
    type: type,
    description: 'html ' + type,
    group: 'form',
    icon: ICONS[type],
    model: {
      type: type,
      top: 100,
      left: 100,
      width: 280,
      height: type == 'textarea' ? 60 : 40,
      paddingLeft: type == 'select' ? 0 : 7,
      paddingRight: type == 'select' ? 0 : 7,
      fontSize: 14,
      fillStyle: 'white',
      fontColor: '#585858',
      strokeStyle: 'rgba(0,0,0,.4)',
      lineWidth: 1,
      lineDash: 'solid',
      textAlign: 'left'
    }
  }
});

var form = [{
  type: 'form',
  description: 'html form',
  group: 'form',
  icon: ICONS['form'],
  model: {
    type: 'form',
    top: 100,
    left: 100,
    width: 400,
    height: 200,
    fontColor: '#585858',
    strokeStyle: '#ccc',
    lineWidth: 1,
    method: 'GET',
    action: '',
    name: 'search',
    authorization: '',
    format: 'TEXT'
  }
}];

export default form.concat(inputs01, inputs02, button, textibles, fieldset, others);
