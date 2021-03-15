# Design Patterns

> 인터페이스란?     
인터페이스는 객체 간 의사소통하는 근본적인 방법을 정의한다.     
서로 다른 클래스들이 상호작용하기 위해 외부로 노출되어 다른 클래스에게 제공될 수 있는 기능을 명세한것이 인터페이스이다.     
즉 인터페이스만으로 해당 클래스가 어떤 기능을 제공하는지 알 수 있다.     
인터페이스는 기능 명세만 하고, 이에 대한 구현은 인터페이스를 구현한 클래스에서 하기 때문에, 기능 명세와 구현을 분리 할 수 있다.

-----

> class 개념
```js
// 클래스 선언문
class Person {
  x = 1; // 클래스 필드
  #y = 0; // Private 필드
  static x1 = 20; // Static public field
  static #y1 = 20;  // Static private field
  // constructor(생성자)
  constructor(name){ 
    this.name = name;
  }
  print(){
    console.log(`Hi ${this.name}`);
  }
  call(){
    this.#y = 10;
    return this.#y;
  }
}
// 인스턴스 생성
const person = new Person('Park');
person.print(); // Hi Park
console.log(person instanceof Person) // true;

console.log(person.x) // 1
console.log(person.#y) // SyntaxError: Undefined private field #y: must be declared in an enclosing class
console.log(person.x1) // 20;
console.log(person.#y1) // SyntaxError: Undefined private field #y1: must be declared in an enclosing class
console.log(person.call()) // 10;
```

-----

> 알고리즘이란?
"주어진 문제를 해결하기 위한 단게, 절차 또는 여러 동작의 모임"     
어떠한 문제를 해결하기 위해 정해진 일련의 절차나 방법을 공식화한 형태로 표현한 것, 계산을 실행하기 위한 단계적 절차를 의미한다.     
절차에는 입력값과 출력값이 존재해야하며, 유한한 단계를 거쳐서 반드시 종료되어야한다.


## 1. Strategy Pattern 전략패턴
알고리즘의 인터페이스를 정의하고, 각각의 알고리즘은 캡슐화하여 동적으로 교체사용 가능하도록 구현하는 디자인 패턴이다.     
클라이언트와의 독립적으로 구현되기 때문에 새로운 알고리즘을 추가하거나 기존의 알고리즘을 쉽게 변경이 가능하다.     

<img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=http%3A%2F%2Fcfile26.uf.tistory.com%2Fimage%2F99FE5F3359ACC29E3120C2" width="500" />     

* Context - 실제 각각의 알고리즘에 대한 인스턴스를 가짐
* Interface - 각각의 알고리즘이 가져야 할 공통인터페이스를 가짐
* Algorithm1, Algorithm2 - 실제 인터페이스 구현, 각각의 알고리즘을 프로그래밍 (전략개체)

1. Interface
```ts
interface PersonInterface {
  action() : void;
}
```

`PersonInterface`는 전략구조 중에서 `Interface`에 해당된다. 알고리즘들의 공통적으로 정의해야 할 인터페이스를 정의한다.    
즉 각각의 알고리즘은 `action()` 메서드에 대해서 구현을 해야한다.

2. Context
```ts
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
```
`Person`은 `Context`에 해당된다.     
실제로 각각 알고리즘의 인스턴스를 가지며 인터페이스와 동일한 메서드를 호출한다.

3. Algorithm
```ts
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
```
인터페이스를 상속받아 실제로 알고리즘 내용을 구현한다.     
`implements` 인터페이스 구현 / 부모 (PersonInterface) 객체는 선언만 하며 정의(내용)은 자식(JumpPerson, RunPerson) 에서 오버라이딩(재정의)해서 사용해야함

4. Strategy
```ts
class Memory {
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
```

## 2. Singleton Patterns 싱글톤 패턴
특정 클래스에 대해 new 연산자로 생성되는 인스턴스를 Stack 스택 메모리에 한 번만 할당하여     
이후에 new 연산자를 통한 객체 생성 요구에 대해서는 최초에 생성되었던 객체를 반환하는 디자인 패턴입니다.     
즉 특정 클래스에 대한 유일 객체를 보장하는 패턴이라고 볼 수 있다.     
싱글톤 패턴으로 적용된 경우 new 사용을 통한 무분별한 인스턴스 생성을 막기 때문에 메모리 낭비를 방지 할 수 있다.     
     
인스턴스가 오직 하나만 생성되어야 하는 케이스에 사용되는 패턴이다.

```ts
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
```

인스턴스를 처음부터 생성하는 방법
```ts
class Singleton {
  private static instance : Singleton = new Singleton();
  public static getInstance() : Singleton {
    return this.instance
  }
}
```

`private static instance: Singleton;` 생성자의 경우 private로 선언 하면서 외부에서는 new 사용을 막고있다.     
인스턴스를 생성하기 위해서는 `getInstance()`를 사용하여 `instance`가 null일 경우에만 new 연산자로 인스턴스를 생성하게 됩니다. 즉, 한번 인스턴스가 생성 된 후에는 계속해서 같은 인스턴스만 반환하게 되는 겁니다.

```ts

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
SingletonMain.main();
```

`getInstance()`를 통해 3개의 인스턴스를 생성하고 있다.     
싱글톤 패턴이 제대로 적용되었다면 3개의 인스턴스가 모두 같은 *인스턴스* 일 것이다.

## Template Method Pattern
