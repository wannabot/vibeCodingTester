const catVariables = [
  {
    id: "sunbeam-nap",
    category: "Sun Mood",
    name: "햇살 낮잠 지수",
    value: "91%",
    description: "창가에 길게 누운 치즈냥 무드. 포근함이 페이지 전체 분위기를 잡아줍니다.",
    prompt: "A fluffy orange cat taking a luxurious nap in golden afternoon sunlight, cozy Korean home interior, soft editorial photography, warm cream and honey tones, high detail, dreamy atmosphere",
    image: "data:image/svg+xml;utf8," + encodeURIComponent(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
        <defs>
          <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#fff7d0"/>
            <stop offset="100%" stop-color="#f4b55f"/>
          </linearGradient>
        </defs>
        <rect width="640" height="640" rx="48" fill="url(#bg)"/>
        <circle cx="505" cy="132" r="78" fill="#fff3b0" opacity="0.8"/>
        <rect x="88" y="418" width="465" height="95" rx="45" fill="#f6ead2"/>
        <ellipse cx="326" cy="374" rx="168" ry="106" fill="#f0a44b"/>
        <ellipse cx="320" cy="392" rx="136" ry="84" fill="#ffd18b"/>
        <circle cx="460" cy="298" r="56" fill="#f0a44b"/>
        <path d="M428 259 L448 205 L468 252 Z" fill="#f0a44b"/>
        <path d="M466 252 L504 209 L509 264 Z" fill="#f0a44b"/>
        <circle cx="440" cy="302" r="5" fill="#4f3119"/>
        <circle cx="474" cy="302" r="5" fill="#4f3119"/>
        <ellipse cx="457" cy="322" rx="11" ry="8" fill="#cc7f43"/>
        <path d="M442 335 Q457 346 472 335" stroke="#4f3119" stroke-width="4" fill="none" stroke-linecap="round"/>
        <path d="M200 364 Q132 312 118 382" stroke="#f0a44b" stroke-width="28" fill="none" stroke-linecap="round"/>
      </svg>
    `)
  },
  {
    id: "curiosity-mode",
    category: "Curiosity",
    name: "호기심 레이더",
    value: "활성화",
    description: "새 장난감을 발견한 순간의 동그란 눈. 카드 전개에서 생기를 담당합니다.",
    prompt: "A tuxedo cat investigating a floating feather toy, playful motion, boutique editorial illustration, mint and coral accents, crisp lighting, charming and curious expression",
    image: "data:image/svg+xml;utf8," + encodeURIComponent(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
        <rect width="640" height="640" rx="48" fill="#d8f1ea"/>
        <circle cx="504" cy="144" r="42" fill="#ff8a5b"/>
        <circle cx="504" cy="144" r="24" fill="#ffe0d2"/>
        <ellipse cx="308" cy="380" rx="140" ry="120" fill="#1e1e1e"/>
        <circle cx="436" cy="272" r="82" fill="#1e1e1e"/>
        <path d="M372 226 L402 154 L431 224 Z" fill="#1e1e1e"/>
        <path d="M438 224 L504 167 L489 247 Z" fill="#1e1e1e"/>
        <ellipse cx="420" cy="292" rx="22" ry="28" fill="#f7d84b"/>
        <ellipse cx="468" cy="292" rx="22" ry="28" fill="#f7d84b"/>
        <circle cx="420" cy="294" r="10" fill="#111"/>
        <circle cx="468" cy="294" r="10" fill="#111"/>
        <ellipse cx="442" cy="325" rx="30" ry="18" fill="#fff7f2"/>
        <ellipse cx="310" cy="388" rx="72" ry="58" fill="#fff7f2"/>
        <path d="M208 424 Q108 402 115 515" stroke="#1e1e1e" stroke-width="24" fill="none" stroke-linecap="round"/>
        <path d="M516 96 Q548 82 564 116 Q540 122 516 96" fill="#5cc9b6"/>
        <path d="M506 122 Q530 145 502 173" stroke="#ff8a5b" stroke-width="4" fill="none" stroke-dasharray="10 8" stroke-linecap="round"/>
      </svg>
    `)
  },
  {
    id: "snack-sense",
    category: "Treat Signal",
    name: "간식 감지력",
    value: "참치 냄새 추적 중",
    description: "부엌 쪽을 향해 즉시 반응하는 집중력. 애호가 감성을 만드는 귀여운 생활감 포인트입니다.",
    prompt: "A silver tabby cat sniffing the air for tuna treats in a stylish kitchen, whimsical lifestyle scene, peach and sage palette, premium magazine cover look, expressive whiskers",
    image: "data:image/svg+xml;utf8," + encodeURIComponent(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
        <rect width="640" height="640" rx="48" fill="#f7e7dc"/>
        <rect x="74" y="404" width="492" height="126" rx="30" fill="#dae9d0"/>
        <ellipse cx="306" cy="370" rx="142" ry="112" fill="#b4b4b4"/>
        <ellipse cx="311" cy="395" rx="112" ry="78" fill="#e8e5de"/>
        <circle cx="432" cy="286" r="78" fill="#b4b4b4"/>
        <path d="M384 241 L409 171 L437 237 Z" fill="#9d9d9d"/>
        <path d="M444 235 L502 184 L492 256 Z" fill="#9d9d9d"/>
        <path d="M256 330 L362 330" stroke="#7f7f7f" stroke-width="10" stroke-linecap="round"/>
        <path d="M236 363 L350 363" stroke="#7f7f7f" stroke-width="10" stroke-linecap="round"/>
        <path d="M248 396 L344 396" stroke="#7f7f7f" stroke-width="10" stroke-linecap="round"/>
        <circle cx="414" cy="288" r="6" fill="#303030"/>
        <circle cx="458" cy="288" r="6" fill="#303030"/>
        <ellipse cx="438" cy="316" rx="12" ry="8" fill="#d28d7b"/>
        <path d="M422 330 Q438 342 454 330" stroke="#303030" stroke-width="4" fill="none" stroke-linecap="round"/>
        <path d="M500 148 Q531 134 553 160" stroke="#ff9f7f" stroke-width="6" fill="none" stroke-linecap="round"/>
        <path d="M523 137 Q556 131 572 162" stroke="#ff9f7f" stroke-width="6" fill="none" stroke-linecap="round"/>
      </svg>
    `)
  },
  {
    id: "night-watch",
    category: "Night Energy",
    name: "새벽 질주 모드",
    value: "03:17 AM 부스트",
    description: "밤이 되면 캣타워와 복도를 누비는 에너지. 페이지에 리듬감을 더하는 다이내믹 카드입니다.",
    prompt: "A sleek black cat sprinting through a moonlit living room and cat tower, cinematic action shot, deep teal and moon cream colors, stylish motion blur, high-end pet editorial",
    image: "data:image/svg+xml;utf8," + encodeURIComponent(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
        <rect width="640" height="640" rx="48" fill="#17313c"/>
        <circle cx="482" cy="136" r="74" fill="#f8f5dd"/>
        <rect x="106" y="400" width="432" height="96" rx="18" fill="#31535f"/>
        <path d="M154 430 Q286 280 460 360" stroke="#0b1114" stroke-width="56" fill="none" stroke-linecap="round"/>
        <circle cx="438" cy="272" r="58" fill="#0b1114"/>
        <path d="M398 242 L416 182 L450 234 Z" fill="#0b1114"/>
        <path d="M448 231 L496 184 L494 248 Z" fill="#0b1114"/>
        <circle cx="424" cy="278" r="5" fill="#f8f5dd"/>
        <circle cx="453" cy="278" r="5" fill="#f8f5dd"/>
        <path d="M148 434 Q92 446 90 516" stroke="#0b1114" stroke-width="20" fill="none" stroke-linecap="round"/>
        <path d="M490 146 Q532 174 568 160" stroke="#7ae6c7" stroke-width="6" fill="none" stroke-linecap="round" opacity="0.8"/>
      </svg>
    `)
  }
];

const spotlightImage = document.getElementById("spotlightImage");
const spotlightName = document.getElementById("spotlightName");
const spotlightValue = document.getElementById("spotlightValue");
const spotlightDescription = document.getElementById("spotlightDescription");
const spotlightPrompt = document.getElementById("spotlightPrompt");
const variableGrid = document.getElementById("variableGrid");
const cardTemplate = document.getElementById("cardTemplate");
const shuffleButton = document.getElementById("shuffleButton");

function renderCards() {
  const fragment = document.createDocumentFragment();

  catVariables.forEach((item) => {
    const card = cardTemplate.content.firstElementChild.cloneNode(true);
    const image = card.querySelector(".card-image");
    const kicker = card.querySelector(".card-kicker");
    const title = card.querySelector(".card-title");
    const value = card.querySelector(".card-value");
    const description = card.querySelector(".card-description");
    const prompt = card.querySelector(".card-prompt p");

    card.dataset.id = item.id;
    image.src = item.image;
    image.alt = `${item.name}을 표현한 고양이 일러스트`;
    kicker.textContent = item.category;
    title.textContent = item.name;
    value.textContent = item.value;
    description.textContent = item.description;
    prompt.textContent = item.prompt;

    fragment.appendChild(card);
  });

  variableGrid.appendChild(fragment);
}

function setSpotlight(item) {
  spotlightImage.src = item.image;
  spotlightImage.alt = `${item.name} 스포트라이트 이미지`;
  spotlightName.textContent = item.name;
  spotlightValue.textContent = item.value;
  spotlightDescription.textContent = item.description;
  spotlightPrompt.textContent = item.prompt;

  document.querySelectorAll(".cat-card").forEach((card) => {
    card.classList.toggle("is-active", card.dataset.id === item.id);
  });
}

function pickRandomVariable() {
  const randomIndex = Math.floor(Math.random() * catVariables.length);
  setSpotlight(catVariables[randomIndex]);
}

renderCards();
setSpotlight(catVariables[0]);
shuffleButton.addEventListener("click", pickRandomVariable);
