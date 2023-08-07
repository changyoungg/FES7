const text = 'hello';

console.log(text[0]);
console.log(text[1]);
console.log(text[2]);
console.log(text[3]);
console.log(text[4]);

// 문제5
// 1부터 100까지의 숫자 중 1이라는 숫자가 들어간 숫자는 모두 더해주세요.
// 더하는 숫자 : 1. 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 21
// 더하지 않는 숫자 : 2, 3, 4, 5, 6, 7, 8, 9, 20

function plusOne(number) {
    answer = 0;
    Array(100).fill(100).map((_, i) => i+1).filter(v => v.toString().includes(1)).reduce((a, c) => a + c, 0)
}
