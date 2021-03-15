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
export default SingletonMain;
// End Singleton 싱글톤 패턴