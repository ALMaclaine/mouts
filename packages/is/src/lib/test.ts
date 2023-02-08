class Test {
  a = 'asd';
}

class Test3 extends Test {
  constructor() {
    super();
    console.log('supera', super.a);
    console.log('thisa', this.a);
  }
}

class Test2 extends Test {
  constructor() {
    super();
    super.a = 'asd11';
    const t = new Test3();
    console.log('test2', super.a);
    console.log('test2', this.a);
  }
}

const t2 = new Test2();
