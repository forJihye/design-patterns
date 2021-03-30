// import './assets/strategy'
// import './assets/observer_'
// import './assets/observer'
// import './assets/facade'
import SingleTon from './assets/singleton';

const first = SingleTon.getInstane();
first.getData(5);
const second = SingleTon.getInstane();
second.getData(10);
console.log(first === second)
