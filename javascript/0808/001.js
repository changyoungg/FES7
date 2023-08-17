// 사용자로부터 입력받은 나이에 따라 다른 인사말을 콘솔로 출력하는 프로그램을 작성하세요. 

// 나이가 18세 이상이면 "안녕하세요!"를 출력하고, 10세 이상이면 "안녕! 반가워 꼬마친구! ” 를 출력하며, 10세 미만이면 “부럽다…” 를 출력합니다.

// prompt("나이를 입력 해 주세요/")

// let age = prompt;

// if (age >= 18) {
//     document.write("안녕하세요!")
// } else if (age >= 10) {
//     document.write("안녕! 반가워 꼬마친구!")
// } else {
//     document.write("부럽다...")
// }


// 사용자로부터 입력받은 성적에 따라 등급을 출력하는 프로그램을 작성하세요. 

// 성적이 90점 이상이면 "A", 80점 이상이면 "B", 70점 이상이면 "C", 60점 이상이면 "D", 그 외에는 “강해져서 돌아와라”를 출력합니다.

// let price = parseInt(prompt("성적을 입력해주세요"));
// let grade = (price >= 90) ? "A" : (price >= 80) ? "B" : (price >= 70) ? "C" : (price >= 60) ? "D" : "강해져서 돌아와라";

const score = parseInt(prompt('점수를 입력하세요.'))

switch (true){
    case score>=90 :
    console.log("A");
    break;
    case score>=80 :
    console.log("B");
    break;
    case score>=70 :
    console.log("C");
    break;
    case score>=60 :
    console.log("D");
    break;
    default :
    console.log("강해져서 돌아와라");
}

// if (price >= 90) {
//     console.log("A");
// } else if (price >= 80) {
//     console.log("B");
// } else if (price >= 70) {
//     console.log("C");
// } else if (price >= 60) {
//     console.log("D");
// } else {
//     console.log("강해져서 돌아와라");
// }



// let price = 0;
// let menu = '카페라떼'; // 메뉴를 바꿔보세요!
// // break;를 안걸어줘서 결국 마지막 값ㅇ ㅣ할당됨
// switch (menu) {
// 		case '아메리카노':
// 				price = 4000;
// 	    case '카페라떼':
// 				price = 5000;
// 		case '바닐라라떼':
// 				price = 6000;
// 	    case '콜드브루':
// 				price = 5500;
// 		case '딸기라떼':
// 				price = 7000;
//         case '레몬에이드':
// 				price = 6500;
// 		case '에스프레소':
// 				price = 3500;
// 	    case '루이보스':
// 				price = 4500;
//         default:
//                 console.log('메뉴를 정확히 입력하세요.');
//     }
// }

