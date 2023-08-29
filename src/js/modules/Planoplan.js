import {planInfo, h} from '../../pug/include/blocks/plans/plans.pug'
// const id = 'c340fb7b8ea2e1e3f75c84e5b93d3e57'
let a = planInfo

// let planoplan = document.querySelector('#pop-widget');
// let id = planoplan.getAttribute('data-id')

// Planoplan.init({
//   width: '400px',
//   height: '400px', 
//   primaryColor: '#81AEE3',
//   secondaryColor: '#F4F7F7',
//   textColor: '#4A4A4A',
//   backgroundColor: '#FFFFFF',
//   fontFamily: 'Open Sans, sans-serif',
//   activeTab: 'top',
//   activeFloor: '0',
//   activeDesign: '873032',
//   uid: id,
//   el: 'pop-widget',
//   lang: 'ru',
//  });

//  console.log(id)

// Нерабочий способ, но близкий к истине
// Проблема в чём, по консоли видно, что срабатывает только последний id из массива, а этозначит, что массив перебирается до конца
// и инициализируется поэтому только последний слайд.
// Тут я пытаюсь делать инициализацию для каждого элемента массива, только нихера не получается
let planoplan = document.querySelectorAll('#pop-widget');
  // Тут я понимаю, что мне надо в каждом виджете отловить значение дата атрибута, и вставить его в инициализацию
  // Теперь по консоли видно, что все id обрабатываются, но опять же поведение странное
  // во-первых, первым опять почему-то обрабатывается последний элемент массива,да и почему-то там два повтора
  // во-вторых, почему-то всё равно инициализируется всего один виджет
  // Очень странное поведение
planoplan.forEach((element) => {
  let id = element.getAttribute('data-id')
  console.log(id)
  Planoplan.init({
    width: '400px',
    height: '400px', 
    primaryColor: '#81AEE3',
    secondaryColor: '#F4F7F7',
    textColor: '#4A4A4A',
    backgroundColor: '#FFFFFF',
    fontFamily: 'Open Sans, sans-serif',
    activeTab: 'top',
    activeFloor: '0',
    activeDesign: '873032',
    uid: id,
    el: 'pop-widget',
    lang: 'ru',
  });
})

