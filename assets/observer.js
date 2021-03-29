class Company {
  url;
  content;
  observers = new Set();
  
  addObserver(observer){
    this.observers.add(observer)
  }
  removeObserver(observer){
    this.observers.delete(observer);
  }
  notifyObserver(){
    this.observers.forEach(observer => observer.update(this.url, this.content))
  }
  setMessage(url, content){
    this.url = url;
    this.content = content;
    this.notifyObserver();
  }
}

class Observer {
  name;
  company
  constructor(name, company){
    this.name = name;
    this.company = company;
  }
  update(url, content){
    console.log(this.name, url, content)
  }
}

const company = new Company();
const subscriber1 = new Observer('구독자1', company);
const subscriber2 = new Observer('구독자2', company);
const subscriber3 = new Observer('구독자3', company);

company.addObserver(subscriber1);
company.addObserver(subscriber2);
company.addObserver(subscriber3);
company.setMessage('photo', '이벤트');
company.removeObserver(subscriber2);
company.setMessage('photo2', '이벤트2');
