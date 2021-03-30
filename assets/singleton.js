class SingleTon {
  static instance
  static getInstane(){
    // if(!this.instance){
      this.instance = new SingleTon();
    // }
    return this.instance;
  }
  getData(data){
    console.log(data)
  }
}

export default SingleTon;