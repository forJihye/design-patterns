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

export default class Strategy {
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
// End Strategy 전략 패턴