// 54321
// 5432
// 543
// 54
// 5

for (let row = 1; row <= 5; row++) {
    for (let number = 5; number >= row; number--) {
        document.write(number);
    }
    document.write("<br/>");
}

// 1
// 12
// 123
// 1234
// 12345

for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= i; j++) {
    document.write(j);
  }
  document.write("<br/>");
}
