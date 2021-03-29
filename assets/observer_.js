class Company {
  url;
  content;
  static observers = new Set();
  
  static addObserver(observer){
    this.observers.add(observer)
  }
  static removeObserver(observer){
    this.observers.delete(observer);
  }
  static notifyObserver(){
    this.observers.forEach(observer => observer.update(this.url, this.content))
  }
  static setMessage(url, content){
    this.url = url;
    this.content = content;
    this.notifyObserver();
  }
}

class Observer {
  name;
  constructor(name){
    this.name = name;
    Company.addObserver(this);
  }
  update(url, content){
    console.log(this.name, url, content)
  }
}

const subscriber1 = new Observer('구독자1');
const subscriber2 = new Observer('구독자2');
const subscriber3 = new Observer('구독자3');

Company.setMessage('photo', '이벤트');
Company.removeObserver(subscriber2);
Company.setMessage('photo2', '이벤트2');
