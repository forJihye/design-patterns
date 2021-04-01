# 싱글톤 패턴
하나의 인스턴스를 만들기 위해 사용하는 패턴
JAVA에서는 명시적으로 여러개의 인스턴스를 만들지 못하게 막기 위해 사용하는 패턴
그러나 자바스크립트에서는 인스턴스 생성을 막기보다 클래스를 노출하지 않는 방식으로 싱글톤을 구현함
이 경우에는 constructor 필드 접근으로 추가객체 생성이 가능(new singletonAligo.constructor)하지만 따로 패턴으로 막지는 않음.
대부분 constructor 필드를 사용해서 인스턴스를 생성하는 방식을 정상적으로 보지 않음 (할 수 없는 건 아니지만, 새 인스턴스를 생성해야한다면 클래스를 캡슐화 하지 않았을거라고 생각)

```js
const singletonAligo = new class {
  init() {

  }
  send() {

  }
}
```

자바스크립트의 경우 ES6이전에는 클래스가 없었고 함수로 클래스를 만들었음
자바스크립트에서 모든 선언한 함수는 호출가능한 객체 형태로 생성되기 때문에
해당 객체를 추가로 만들 필요가 없는 경우 함수 객체를 활용한 캡슐화도 많이 사용됨
싱글톤 패턴이 어떤 객체를 한번만 만든다고 할때 이와 같은 개념으로 볼 수 있음
생성한 함수객체는 그 자체로 호출이 가능하면서(like Kotlin's invoke) 메소드나 필드를 붙일수도 있음
```js
const funcitionObject = function axios(url, options) {
  return axios.get(url, options);
};
functionObject.defaultOptions = {};
functionObject.get = function (url, options) {
  ...
}
```

ES6이전 함수는 일반 오브젝트와 다른점이 없었음. 함수를 생성자로 사용해서 인스턴스를 만들더라도 선언으로 만들수있는 오브젝트와 다른점이 없었음. 만들어진 인스턴스 객체의 스코프체인의 부모는 인스턴스를 만든 함수가 아니라 Object임.
그래서 이때 싱글톤으로 만들어야한다면 그냥 객체를 만들기도 했음(class 문법이 나온 지금은 잘 쓰지 않음)
```js
const singleton = {
  field1: 10,
  field2: 20,
  field3: 30,
  methodA: function () {},
  methodB: function () {},
}
```
