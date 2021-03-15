// Start Strategy 전략 패턴
interface PersonInterface {
  action() : void;
}

class Person {
  private person: PersonInterface;
  constructor(person: PersonInterface){
    this.person = person;
  }
  public action() : void {
    this.person.action();
  }
  public changeAction(person: PersonInterface) {
    this.person = person;
  }
}

class JumpPerson implements PersonInterface {
  public action() : void {
    console.log('Jump !!')
  }
}

class RunPerson implements PersonInterface {
  public action() : void {
    console.log('Run !!')
  }
}

class Strategy {
  person1: Person;
  person2: Person;
  constructor(){
    this.person1 = new Person(new JumpPerson());
    this.person2 = new Person(new RunPerson());

    this.person1.action();
    this.person2.action();

    // person1 객체에 대한 알고리즘을 쉽게 변경 할 수 있다.
    this.person1.changeAction(new RunPerson());
    this.person1.action();
  }
}

new Strategy();
// End Strategy 전략 패턴

// Start Singleton 싱글톤 패턴
class Singleton {
  private data : number = 10;
  private static instance: Singleton;
  public static getInstance() : Singleton {
    if(!Singleton.instance){
      Singleton.instance = new Singleton();
    }
    return this.instance;
  }
  public setData(data: number): void {
    this.data = data;
  }
  public getData() : number {
    return this.data;
  }
}

class SingletonUnique {
  private static instane : SingletonUnique = new SingletonUnique();
  public static getInstance() : SingletonUnique {
    return this.instane
  }
}

class SingletonMain {
  static instance1: Singleton;
  static instance2: Singleton;
  static instance3: Singleton;
  public static main(){
    this.instance1 = Singleton.getInstance();
    this.instance2 = Singleton.getInstance();
    this.instance3 = Singleton.getInstance();

    console.log('instance1: ' + this.instance1.getData())
    console.log('instance2: ' + this.instance2.getData())
    console.log('instance3: ' + this.instance3.getData())

    this.instance1.setData(50);

    console.log('instance1: ' + this.instance1.getData())
    console.log('instance2: ' + this.instance2.getData())
    console.log('instance3: ' + this.instance3.getData())
  }
}
SingletonMain.main()
// End Singleton 싱글톤 패턴