function test() {  // 함수 본문 블럭 시작
    var sum = 0; 
    for (var i = 1; i <= 10; ++i) {
       var s = "hello";
       sum = sum + i;
    }
    console.log(sum);  // 55 출력됨
    console.log(i);    // 11 출력됨
    console.log(s);    // "hello" 출력됨
  }  // 함수 본문 블럭 끝
  
  test();