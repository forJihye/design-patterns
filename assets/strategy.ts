interface CookInterface {
  cooking() : void
}

// implements 오버라이딩 부모 클래스로부터 상속받은 메소드를 자식 클래스에서 재정의하여 사용하는 것이다.
class CookFried implements CookInterface {
  cooking(): void {
    console.log('치킨을 튀김')
  }
}

class CookGrill implements CookInterface {
  cooking(): void {
    console.log('치킨을 구움')
  }
}

abstract class Chicken {
  cook: CookInterface = null;
  
  constructor(cook: CookInterface){
    this.cook = cook;
  }
  cooking(): void {
    this.cook.cooking();
  }
  setCooking(cook: CookInterface): void {
    this.cook = cook;
  }
  // abstract (추상 메서드) 
  abstract display(): void
  // {
  //   throw new Error('display() must be implement')
  // }
  abstract flavor(): void
  // {
  //   throw new Error('flavor() must be implement')
  // }
}

class FriedChick extends Chicken {
  constructor(){
    super(new CookFried());
  }
  flavor(): void {
    console.log('맛: 고소한 일반 후라이드 치킨맛')
  }
  display(): void {
    console.log('모습: 노란 튀김옷을 입은 김이 모락모락 나는 치킨')
  }
}

class SpicyChicken extends Chicken {
  constructor(){
    super(new CookFried());
  }
  flavor(): void {
    console.log('맛: 매콤하면서 달콤한 맛')
  }
  display(): void {
    console.log('모습: 빨갛고 매워보이는 모습')
  }
}

class OvenChicken extends Chicken {
  constructor(){
    super(new CookGrill())
  }
  flavor(): void {
    console.log('맛: 바베큐 향이 가득한 맛')
  }
  display(): void {
    console.log('모습: 격자 무늬로 구워진 자국이 보이는 먹음직스러운 모습')
  }
}

class ChickenEngine {
  chicken: Chicken;
  main(chicken: string): void{
    switch(chicken){
    case 'fried': this.chicken = new FriedChick();
    break;
    case 'spicy': this.chicken = new SpicyChicken();
    break;
    case 'oven': this.chicken = new OvenChicken();
    break;
    }

    // this.chicken.setCooking(new CookGrill())
    this.chicken.cooking();
    this.chicken.flavor();
    this.chicken.display();
  }
}

export default new ChickenEngine();