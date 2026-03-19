const messages = [
  "고양이 발견",
  "고양이가 접근 중",
  "고양이 모드 활성화",
  "고양이가 들어왔습니다",
  "여기는 고양이 구역",
  "고양이 확인 완료",
  "고양이 접속 성공",
  "방금 집사 호출",
  "냥냥 경보 발령",
  "고양이 에너지 충전 완료",
  "지금은 낮잠 시간",
  "고양이 기분 최고조",
  "집사 호출 중",
  "사료 게이지 가득",
  "캣닢 신호 감지",
  "고양이 집중 모드",
  "오늘의 특등석",
  "졸음 80% 충전",
  "창밖 감시 시작",
  "최신 털뭉치 정보",
  "간식 요청 접수",
  "꼬리 흔들림 감지",
  "매우 귀여운 상태",
  "고양이 우선 모드"
];

function changeMessage() {
  const msgBox = document.getElementById("msgBox");
  const randomIndex = Math.floor(Math.random() * messages.length);
  msgBox.textContent = messages[randomIndex];
}

const changeMessageButton = document.getElementById("changeMessageButton");
changeMessageButton.addEventListener("click", changeMessage);
