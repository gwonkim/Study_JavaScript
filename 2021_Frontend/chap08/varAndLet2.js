function test() {
    let sum = 0; 
    for (let i = 1; i <= 10; ++i) {   // 블럭 시작
       let s = "hello";
       sum = sum + i;
    } // 블럭 끝
    console.log(sum);  // 55 출력됨
    console.log(i);    // 에러
    console.log(s);    // 에러
  }

  test();
  