// Component - 인터페이스 정의
abstract class Beverage {
  name: string
  public getName(): string{
    return this.name;
  }
  public abstract cost(): number;
}

// Decorator - Component를 상속받으며 ConcreteDecorator 의 Component 역할 수행
abstract class Decorator extends Beverage {
  public abstract getName(): string
}

class Americano extends Beverage {
  constructor(){
    super();
    this.name = '아메리카노'
  }
  public cost(): number {
    return 4000;
  }
}

class CaffeLatte extends Beverage {
  constructor(){
    super();
    this.name = '카페라떼'
  }
  public cost(): number {
    return 5000;
  }
}

// ConcreteDecorator - Decorator 상속받아서 내용 정의
class Hazelnut extends Decorator {
  beverage: Beverage;
  constructor(beverage: Beverage){
    super();
    this.beverage = beverage;
  }
  public getName(): string {
    return `${this.beverage.getName()} - 헤이즐넛 시럽 추가`
  }
  public cost(): number{
    return this.beverage.cost() + 500;
  }
}
class Milk extends Decorator {
  beverage: Beverage;
  constructor(beverage: Beverage){
    super();
    this.beverage = beverage
  }
  public getName(): string {
    return `${this.beverage.getName()} - 우유 추가`
  }
  public cost(): number{
    return this.beverage.cost() + 400;
  }
}

class Shot extends Decorator {
  beverage: Beverage;
  constructor(beverage: Beverage){
    super();
    this.beverage = beverage
  }
  public getName(): string {
    return `${this.beverage.getName()} - 샷 추가`
  }
  public cost(): number{
    return this.beverage.cost() + 300;
  }
}

class Customer {
  beverage: Beverage;
  constructor(){
    this.beverage = new Americano();
    this.beverage = new Shot(this.beverage);
    this.beverage = new Hazelnut(this.beverage);

    console.log('메뉴: ', this.beverage.getName());
    console.log('가격: ', this.beverage.cost());
  }
}

export default new Customer();