// 치킨 요리 방법
const cook = {
  grill: () => console.log('치킨을 굽는다'),
  fried: () => console.log('치킨을 튀긴다')
}

// 치킨 요리 방법 관리하는 class
class Chicken {
  cook;
  constructor(cook){
    this.cook = cook;
  }
  setCooking(cook){
    this.cook = cook;
  }
  cooking(){
    this.cook();
  }
}

class FriedChicken extends Chicken {
  constructor(){
    super(cook.fried)
  }
  display(){
    console.log('고소한 일반 후라이드 치킨맛')
  }
  flavor(){
    console.log('노란 튀김옷을 입은 김이 모락모락 나는 치킨');
  }
}

class OvenChicken extends Chicken {
  constructor(){
    super(cook.grill);
  }
  display(){
    console.log('격자 무늬로 구워진 자국이 보이는 먹음직스러운 모습');
  }
  flavor(){
    console.log('바베큐 향이 가득한 맛');
  }
}

class Main {
  chicken;
  constructor(chicken){
    switch(chicken){
    case 'fried': this.chicken = new FriedChicken();
    break;
    case 'oven': this.chicken = new OvenChicken();
    break;
    }
    
    this.chicken.setCooking(cook.fried)
    this.chicken.cooking();
    this.chicken.display();
    this.chicken.flavor();
  }
}

const oven = new Main('oven')
