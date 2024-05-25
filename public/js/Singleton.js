class Singleton {
  constructor() {
   // ...
  }

  method1() {
    console.log("holaa")
  }


}

const singletonInstance = new Singleton();

Object.freeze(singletonInstance);
export default singletonInstance;
