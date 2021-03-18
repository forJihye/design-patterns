// 구독자 인터페이스
interface Observer {
  update(url: string, content: string): void
}

// 플러스 친구 인터페이스
interface Subject {
  registerObserver(observer: Observer): void; 
  removeObserver(observer: Observer): void;
  notifyObserver(): void;
}

interface DisplayElement {
  display(): void;
}

// 플러스 친구 클래스
class Company implements Subject {
  observers: Set<Observer> = new Set();
  url: string;
  content: string;

  registerObserver(observer: Observer): void { // Observer 구독자를 리스트에 추가하여 소식을 받는 객체로 등록
    this.observers.add(observer);
  }
  removeObserver(observer: Observer): void { // Observer 구독자를 리스트에서 삭제하여 더이상 소식을 받지 못하도록
    this.observers.delete(observer)
  }
  notifyObserver(): void {
    this.observers.forEach((observer: Observer) => { // Observer 구독자들에게 새로운 소식을 전해주는 메소드
      observer.update(this.url, this.content);
    })
  }
  
  messageChanged(){ // 새로운 소식 (상태가 변함) 알려주는 메소드
    this.notifyObserver();
  }
  setMessage(url: string, content: string){ // 새로운 소식 알림 메소드
    this.url = url;
    this.content = content;
    this.messageChanged();
  }
}

class Subscriber implements Observer, DisplayElement {
  company: Subject;
  private url: string;
  private content: string;
  constructor(company: Subject){
    this.company = company;
    company.registerObserver(this);
  }
  display(): void { // 받은 소식을 화면에 보여주는 메소드
    console.log('1번째 구독자'+'\n'+'url: '+ this.url + 'content:' + this.content+'\n');
  } 
  update(url: string, content: string): void { // 새로운 소식을 받는 메소드
    this.url = url;
    this.content = content;
    this.display()
  } 
}

class Subscriber2 implements Observer, DisplayElement {
  company: Subject;
  private url: string;
  private content: string;
  constructor(company: Subject){
    this.company = company;
    company.registerObserver(this);
  }
  display(): void { // 받은 소식을 화면에 보여주는 메소드
    console.log('2번째 구독자'+'\n'+'url: '+ this.url + 'content:' + this.content+'\n');
  } 
  update(url: string, content: string): void { // 새로운 소식을 받는 메소드
    this.url = url;
    this.content = content;
    this.display()
  } 
}

export default class Messenger {
  company: Company;
  subscriber: Subscriber;
  subscriber2: Subscriber2;
  constructor(){
    this.company = new Company();
    this.subscriber = new Subscriber(this.company);
    this.subscriber2 = new Subscriber2(this.company);
    
    this.company.setMessage('photo', '이벤트')
    this.company.removeObserver(this.subscriber2);
    this.company.setMessage('photo2', '이벤트2')
  }
}
