export default class ElementWrapper {
  element: HTMLElement
  constructor(element) {
    this.element = element
  }

  sayHello = () :void => {
    console.log('coucou');
  }
}