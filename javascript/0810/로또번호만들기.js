let lotto = [];

for (i=0; lotto.length<6; i++) {
    let num = parseInt(Math.random() * 45 + 1)
    if (lotto.includes[num] !== true){
    lotto.push(num);
    }
}


var num = Math.floor(Math.random() * 45) + 1;
let num = parseInt(Math.random() * 45 + 1)


function lottoGenerator() {
    const lottoSet = new Set();

    while (lottoSet.size < 6) {
        const result = parseInt(Math.random() * 45 + 1);
        lottoSet.add(result);
    }
    return lottoSet;
}