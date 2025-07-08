// 변수 선언 및 데이터 타입 예시
var myAge = 36; // number 타입
let myName = "나종한"; // string 타입
const isStudent = true; // boolean 타입

// null, undefined, Symbol, BigInt 예시 (도전과제 포함)
let myNull = null; // null 타입
let myUndefined = undefined; // undefined 타입
const mySymbol = Symbol("id"); // Symbol 타입
const myBigInt = 1234567890123456789012345678901234567890n; // BigInt 타입

// 이스케이프 문자와 문자열 연결
let intro =
    "이름: " + myName + "\n\t나이: " + myAge + "\n\t학생 여부: " + isStudent;
console.log(intro);

// 배열 리터럴 (취미)
let hobbies = ["독서", "게임", null, "코딩"];
console.log("My hobbies: " + hobbies.join(", "));

// 배열 요소의 데이터 타입 출력 (도전과제)
console.log("\n[배열 요소별 데이터 타입]");
console.log("hobbies[0] 타입:", typeof hobbies[0]);
console.log("hobbies[2] 타입:", typeof hobbies[2]);

// 객체 리터럴 (개인 정보)
let profile = {
    name: myName,
    age: myAge,
    isStudent: isStudent,
    email: null, // 도전과제: null 값 속성
};

// 객체 속성을 활용한 프로필 문장
console.log(
    "\n프로필: " +
        profile.name +
        "은(는) " +
        profile.age +
        "세이고 학생 여부는 " +
        profile.isStudent +
        "입니다."
);

// typeof 연산자 사용
console.log("\n[typeof 연산자 결과]");
console.log("myAge 타입:", typeof myAge);
console.log("hobbies 타입:", typeof hobbies);
console.log("profile 타입:", typeof profile);
console.log("mySymbol 타입:", typeof mySymbol);
console.log("myBigInt 타입:", typeof myBigInt);

// null과 undefined 구분 및 비교 (도전과제)
console.log("\n[null과 undefined 구분 및 비교]");
console.log("myNull 타입:", typeof myNull); // object
console.log("myUndefined 타입:", typeof myUndefined); // undefined
console.log("null === undefined:", myNull === myUndefined); // false

// 템플릿 문자열 활용 (도전과제)
let template = `\n[템플릿 문자열 프로필]\n이름: ${profile.name}\n나이: ${profile.age}\n학생 여부: ${profile.isStudent}\n이메일: ${profile.email}`;
console.log(template);

// 객체의 email 속성이 null인지 확인 (도전과제)
if (profile.email === null) {
    console.log("이메일 정보가 없습니다.");
}
