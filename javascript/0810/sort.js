// let val = [1, 3, 5, 4]

//  val.sort(a, b) {
//     return a - b
//  }


avengers.sort(function (a, b) {
    // return a - b
    console.log(a, b);
    if (a < b) {
        return -1;
    } else if (b < a) {
        return 1;
    } else {
        return 0;
    }
});
// a가 b보다 크면(return 1) 그대로
// a가 b보다 작으면(return -1) a가 앞으로 b가 뒤로
const student = [
    {
        id: 1, product: '연필', stock: 10
    },
    {
        id: 2, product: '지우개', stock: 33
    },
    {
        id: 3, product: '체육복', stock: 2
    },
    {
        id: 4, product: '만연필', stock: 5
    },
    {
        id: 5, product: '책받침', stock: 100
    }
];



const studentList = [
    {
        id: 1, name: '원범', score: 'great'
    },
    {
        id: 2, name: '김진', score: 'so cute'
    },
    {
        id: 3, name: '혜원', score: 'good good'
    },
    {
        id: 4, name: '재현', score: 'too cool for school'
    }
]

const arr = studentList.map(function (item){
    return item.score+'💖';
})

