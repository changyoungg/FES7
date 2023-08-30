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


function solution(s) {
    var answer = []; banana
    let n_s = ''
    for (let i = 0; i < s.length; i++){
        n_s = s.substring(0,i)

        if (n_s.lastIndexOf(s[i]) == -1){
            answer.push(-1)
        } 
        else{
            answer.push(n_s.length - n_s.lastIndexOf(s[i]))
        }
    }
    return answer
}

function solution(array, n) {
    var answer = 0;
    let num = 100;
    let arrSort = array.sort((a,b) => a-b); //오름차순
        
    for(i=0; i<arrSort.length; i++){
        let num2 = arrSort[i] - n >= 0 ? arrSort[i]-n : n-arrSort[i]
        if(num>num2){
            num = num2;
            answer = arrSort[i];
        }  
    }        
    return answer;
}

function solution(array, n) {
    var answer = 0;
    let a = []; 
    let arrSort = array.sort((a, b) => (a-b));
    if (array.length == 1) {
        return array[0]
    }
    for (let i=0; i<array.length; i++) {
        a.push(arrSort[i] - n >= 0 ? arrSort[i]-n : n-arrSort[i]);
    }
    console.log(a)
    for (let j=0; j<a.length-1; j++) {
        if (a[j] == 0 ) {
            answer = n;
            console.log("1",n,a[j])
            break;
        }
        else if (a[a.length-1] == 0 && j == a.length-1){
            answer = n;
            console.log("2",n,a[j])
            break;
        
        } else if (arrSort[j] <= n && a[j] <= a[j+1] ) {
            answer = -a[j] + n;
            console.log("3",n,a[j])
            break;
        } else if (arrSort[j] > n && a[j] <a[j+1]) {
            answer = a[j] + n;
            console.log("4",n,a[j])
            break;
        } else {
            answer = arrSort[arrSort.length-1];
            console.log("5",n,a[j])
        }
     } 
     return answer;
}