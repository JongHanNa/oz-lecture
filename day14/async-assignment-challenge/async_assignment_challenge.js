// 상수 선언 (const)
const API_URL = "https://jsonplaceholder.typicode.com/posts/";

// fetchMultiplePosts: 화살표 함수, ...rest 사용
const fetchMultiplePosts = async (...ids) => {
    let results = {}; // 결과 저장 객체 (let)
    for (let id of ids) {
        // for...of 사용
        try {
            const response = await fetch(API_URL + id);
            if (!response.ok) throw new Error("데이터 없음");
            const data = await response.json();
            results[id] = data.title;
        } catch (error) {
            results[id] = "에러: " + error.message;
        }
    }
    return results;
};

// runChallenge: 함수 표현식
var runChallenge = function () {
    // 입력값 가져오기
    const inputValue = document.getElementById("postIds").value;
    // 쉼표로 분리, 숫자로 변환
    let idArr = inputValue
        .split(",")
        .map((v) => Number(v.trim()))
        .filter((v) => !isNaN(v) && v >= 1 && v <= 100);

    // 유효성 검사
    if (idArr.length === 0) {
        document.getElementById("output").innerHTML =
            "유효한 ID(1-100)를 입력하세요!";
        document.getElementById("output").classList.add("error");
        return;
    }
    document.getElementById("output").classList.remove("error");
    document.getElementById("fetchPosts").disabled = true;

    // 데이터 가져오기
    fetchMultiplePosts(...idArr).then((results) => {
        let html = "";
        for (let key in results) {
            // for...in 사용
            html += `<div class="post">post${key}: ${results[key]}</div>`;
        }
        document.getElementById("output").innerHTML = html;
        document.getElementById("fetchPosts").disabled = false;
    });
};

// 버튼 클릭 이벤트 리스너 등록
document.getElementById("fetchPosts").addEventListener("click", runChallenge);
