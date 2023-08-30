function solution(prices) {
    var answer = [];
    let a = 0;
    for(let i=0; i<prices.length-1; i++) {
        a = 1;
        console.log(a)
        for(let j=i+1; j<prices.length; j++) {
            if(prices[i] <= prices[j]) {
                a += 1;
                break;
            } else if(prices[i] > prices[j]) {
                answer.push(a);
            }
            answer.push(a);
        }
    }
    return answer;
}

function solution(prices) {
    var answer = [];
    let num = 0;
    for(let i =0;i<prices.length;i++){
        num = 0;
        for(let j = i;j<prices.length;j++){
            if(prices[i]>prices[j]){
                num=j-i;
                break;
            }
        }
        if(num == 0){num = prices.length-i-1};
        answer.push(num);
    }
    return answer;
}