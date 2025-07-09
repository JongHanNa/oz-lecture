// 점수 입력 받기 (prompt는 문자열 반환)
let input = prompt("점수를 입력하세요.");

// 입력값을 숫자로 변환
let score = Number(input); // let 사용
const maxScore = 100; // const 사용
var grade; // var 사용
let message; // 등급별 메시지 저장

// 입력 유효성 검사 (도전과제)
if (isNaN(score) || score < 0 || score > 100) {
    console.log("Invalid score! Please enter a number between 0 and 100.");
} else {
    // 단항 산술 연산자: 1점 증가
    score++;
    // 복합 대입 연산자: 10% 가산
    score *= 1.1;
    // 보너스 5점 추가 (복합 대입)
    score += 5;
    // 점수가 100 초과 시 100으로 제한 (연산자 우선순위)
    if (score > maxScore) score = maxScore;
    // 소수점 버림
    score = Math.floor(score);

    // 등급 부여 (if, else if, else)
    if (score >= 100) {
        grade = "S";
    } else if (score >= 90) {
        grade = "A";
    } else if (score >= 80) {
        grade = "B";
    } else if (score >= 70) {
        grade = "C";
    } else if (score >= 60) {
        grade = "D";
    } else {
        grade = "F";
    }

    // 삼항 연산자: 합격/불합격
    const status = score >= 60 ? "Pass" : "Fail";

    // 등급별 메시지 (switch)
    switch (true) {
        case score === 100:
            message = "Perfect Score!";
            break;
        case grade === "S":
            message = "Super!!";
            break;
        case grade === "A":
            message = "Excellent work!";
            break;
        case grade === "B":
            message = "Good job!";
            break;
        case grade === "C":
            message = "Satisfactory performance.";
            break;
        case grade === "D":
            message = "Needs improvement.";
            break;
        case grade === "F":
            message = "Please try harder!";
            break;
        default:
            message = "";
    }

    // 결과 출력
    console.log(
        "Final Score: " +
            score +
            " Grade: " +
            grade +
            " Status: " +
            status +
            " Message: " +
            message
    );
}
