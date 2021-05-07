function test() {
    for (var i = 1; i <= 10; ++i)
       var sum = (sum + i) || i;
    console.log(sum);   // 55 출력됨
  }

  test();
  