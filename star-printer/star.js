// 자바스크립트 별 찍기 프로그램 (기본 + 도전 과제)

// 최대 별 개수 상수 선언 (const)
const maxStars = 10;

// 별을 출력하는 함수 선언문 (기본 과제)
function printStars(count = 1) {
    // count가 0 이하일 경우 기본값 1 사용
    if (count <= 0) count = 1;
    var stars = "";
    for (let i = 0; i < count; i++) {
        stars += "*";
    }
    console.log(stars);
}

// 입력값 유효성 검사 함수
function isValidInput(input) {
    // 숫자이고 1~10 사이인지 확인
    return !isNaN(input) && input >= 1 && input <= maxStars;
}

// 사용자 입력 반복 (while)
let input;
console.log("[기본 과제] 사용자 입력값만큼 별 한 줄 출력");
while (true) {
    input = prompt("Enter the number of stars (1-10):");
    if (input === null) {
        // 사용자가 취소를 누르면 종료
        console.log("프로그램을 종료합니다.");
        break;
    }
    input = Number(input);
    if (!isValidInput(input)) {
        // 유효하지 않은 입력: continue로 반복
        console.log("Invalid input! Enter a number between 1 and 10.");
        continue;
    }
    // 유효한 입력: 별 출력 후 break로 반복 종료
    printStars(input);
    break;
}

// --- 도전 과제 ---
// 1. 함수 표현식: 역순 별 출력
const printReverseStars = function (count = 1) {
    // count가 0 이하일 경우 기본값 1 사용
    if (count <= 0) count = 1;
    for (let i = count; i >= 1; i--) {
        var stars = "";
        for (let j = 0; j < i; j++) {
            stars += "*";
        }
        console.log(stars);
    }
};

// 2. 화살표 함수: 사각형 패턴 출력
const printSquare = (count = 1) => {
    if (count <= 0) count = 1;
    for (let i = 0; i < count; i++) {
        var stars = "";
        for (let j = 0; j < count; j++) {
            stars += "*";
        }
        console.log(stars);
    }
};

// 3. for...in: 패턴 객체 순회 출력
const patterns = {
    pattern1: "*****",
    pattern2: "***",
    pattern3: "**",
};

function printPatternsFromObject(obj) {
    for (let key in obj) {
        console.log(obj[key]);
    }
}

// 4. ...rest: 여러 숫자에 대해 별 출력
function printMultipleStars(...counts) {
    for (let i = 0; i < counts.length; i++) {
        var stars = "";
        for (let j = 0; j < counts[i]; j++) {
            stars += "*";
        }
        console.log(`Stars for count ${counts[i]}: ${stars}`);
    }
}

// --- 도전 과제 함수 호출 ---
console.log("[도전1] 역순 별 출력");
printReverseStars(3); // 역순 별
console.log("[도전2] 사각형 패턴 출력");
printSquare(3); // 사각형 패턴
console.log("[도전3] 객체 패턴 출력");
printPatternsFromObject(patterns); // 객체 패턴
console.log("[도전4] 여러 숫자 별 출력");
printMultipleStars(2, 3); // 여러 숫자 별 출력
