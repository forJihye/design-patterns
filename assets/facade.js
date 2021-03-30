class Remote {
  turnOn(){
    console.log('TV를 켜다')
  }
  turnOff(){
    console.log('TV를 끄다')
  }
}

class Beverage {
  drinking
  constructor(beverage){
    this.drinking = beverage;
  }
  setBeverage(){
    console.log(this.drinking+ '음료 준비')
  }
}

class Movie {
  movie
  constructor(name){
    this.movie = name
  }
  search(){
    console.log(this.movie+ '영화를 찾다')
  }
  charge(){
    console.log(this.movie+ '영화를 결제하다')
  }
  play(){
    console.log('영화 재생')
  }
}

class App {
  movie
  beverage
  remote
  constructor(movieName, beverageName){
    this.movie = new Movie(movieName);
    this.beverage = new Beverage(beverageName);
    this.remote = new Remote();
    this.view();
  }
  view(){
    this.beverage.setBeverage(this.beverage);
    this.remote.turnOn();
    this.movie.search(this.movie);
    this.movie.charge();
    this.movie.play();
  }
  turnOff(){
    this.remote.turnOff();
  }
}

export default new App('미나리', '콜라')