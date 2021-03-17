// 퍼사드패턴으로 전자레인지 만들기
/**
 * 만약 퍼사드패턴을 쓰지 않는다면, 우리는 직접 전원 스위치를 on 시켜야 합니다.
 * 먼저 쿨러를 작동시키고.. 마그네트론을 작동시키고.. 턴테이블을 돌린 다음에 타이머를 원하는 시간만큼 작동시킵니다.
 * 또 만약 정지시키려면 하나하나씩 모두 손수 스위치를 내려 줘야하죠.
 */

interface Switch {
  on(): void,
  off(): void
}

class Cooler implements Switch {
  on(): void {
    console.log('쿨러 작동 시작!')
  }
  off(): void {
    console.log('쿨러 작동 종료!')
  }
}

class Magnetron implements Switch {
  on(): void {
    console.log('마이크로파 발생기 켜짐.. 작동 중 !')
  }
  off(): void {
    console.log('마이크로파 발생기 꺼짐')
  }
}

class Turntable implements Switch {
  on(): void {
    console.log('턴테이블이 움직입니다.')
  }
  off(): void {
    console.log('턴테이블이 멈췄습니다.')
  }
}

class TimerChecker implements Switch {
  static TIME_INTERVAL: number = 1000;
  private EXPIRED_TIME: number;

  microwave: MicrowaveFacade;
  count: number = 0;
  timer: any;

  constructor(milsec: number, microwave: MicrowaveFacade){
    this.EXPIRED_TIME = milsec;
    this.count = this.EXPIRED_TIME/1000;
    this.microwave = microwave;

    this.timer = setInterval(() => {
      if(this.count > 0){
        console.log('Timer...' + this.count-- + "초")
      }else{
        clearInterval(this.timer);
        this.off();
        this.microwave.off();
      }
    }, 1000);
  }
  on(): void {
    console.log('조리 시작!')
  }
  off(): void {
    console.log('조리가 완료!');
  }
}

export default class MicrowaveFacade {
  cooler: Cooler;
  magentron: Magnetron;
  turntable: Turntable;
  timerCheck: TimerChecker;

  switchs: Set<any> = new Set();
  isActive: Boolean = false;

  constructor(milsec: number){
    this.cooler = new Cooler();
    this.magentron = new Magnetron();
    this.turntable = new Turntable();
    this.timerCheck = new TimerChecker(milsec, this);
    this.switchs = new Set([this.cooler, this.magentron, this.timerCheck, this.turntable]);

    this.on();
  }
  on(): void {
    for (let item of this.switchs) item.on()
    this.isActive = true;
  }
  off(): void {
    for (let item of this.switchs) item.off();
    this.isActive = false;
  }
}
