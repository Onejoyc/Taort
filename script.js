const tarotCards = [
    { 
        name: "The Fool", 
        meaning: "yes", 
        interpretation: "별빛이 흩뿌려진 밤하늘 아래, 끝없는 가능성의 문이 열립니다. 이 카드는 자유와 순수한 영혼의 여정을 속삭이며, 운명이 당신을 새로운 모험으로 이끌고 있음을 예언합니다.", 
        advice: "두려움을 버리고 내면의 목소리에 귀 기울이세요. 미지의 길이야말로 당신의 진정한 빛을 드러낼 수 있습니다."
    },
    { 
        name: "The Magician", 
        meaning: "yes", 
        interpretation: "별들의 힘을 손에 쥔 마법사가 나타났습니다. 이 카드는 창조와 의지의 신비로운 조화를 상징하며, 당신 안에 잠든 무한한 가능성을 깨우고 있습니다.", 
        advice: "자신의 능력을 믿고, 지금이야말로 행동으로 옮길 때입니다. 우주는 당신의 손끝에서 춤을 춥니다."
    },
    { 
        name: "The High Priestess", 
        meaning: "no", 
        interpretation: "달빛에 감싸인 여사제가 침묵 속에서 속삭입니다. 그녀는 깊은 내면의 비밀과 숨겨진 진실을 드러내며, 표면 너머의 그림자를 바라보라고 말합니다.", 
        advice: "서두르지 말고 직관을 따르세요. 답은 아직 안개 속에 숨어 있습니다."
    },
    { 
        name: "The Empress", 
        meaning: "yes", 
        interpretation: "황금빛 들판에 앉은 여왕이 당신을 포근히 감쌉니다. 이 카드는 풍요와 생명의 신비를 노래하며, 사랑과 창조의 기운이 당신을 둘러싸고 있음을 알려줍니다.", 
        advice: "자연의 흐름에 몸을 맡기고, 주변의 아름다움을 받아들이세요."
    },
    { 
        name: "The Emperor", 
        meaning: "no", 
        interpretation: "붉은 망토를 두른 왕이 단호한 시선으로 바라봅니다. 그는 질서와 권위의 상징이지만, 그 강인함 속에 유연성이 부족함을 암시합니다.", 
        advice: "통제하려는 욕망을 내려놓고, 변화에 적응하는 법을 배우세요."
    },
    { 
        name: "The Hierophant", 
        meaning: "no", 
        interpretation: "고대의 사원에서 성직자가 빛을 뿌립니다. 이 카드는 전통과 규범의 무게를 상기시키며, 익숙한 길이 당신을 묶고 있을지도 모른다고 경고합니다.", 
        advice: "관습을 의심하고, 당신만의 진리를 찾아보세요."
    },
    { 
        name: "The Lovers", 
        meaning: "yes", 
        interpretation: "황혼 속에서 손을 맞잡은 연인이 별빛 아래 서 있습니다. 이 카드는 사랑과 운명적인 선택의 신비를 속삭이며, 조화로운 결합이 다가옴을 예고합니다.", 
        advice: "마음을 열고, 진정한 연결을 믿으세요."
    },
    { 
        name: "The Chariot", 
        meaning: "yes", 
        interpretation: "별이 인도하는 전차가 힘차게 달립니다. 이 카드는 의지와 추진력의 춤을 그리며, 당신이 목표를 향해 돌진하고 있음을 보여줍니다.", 
        advice: "방향을 잃지 말고, 단호하게 나아가세요."
    },
    { 
        name: "Strength", 
        meaning: "yes", 
        interpretation: "사자와 함께 서 있는 여인이 부드럽게 빛납니다. 이 카드는 내면의 용기와 인내의 신비를 드러내며, 강함이 부드러움 속에 있음을 말해줍니다.", 
        advice: "감정을 다스리고, 온화한 힘을 발휘하세요."
    },
    { 
        name: "The Hermit", 
        meaning: "no", 
        interpretation: "등불을 든 은둔자가 어둠 속에서 길을 찾습니다. 이 카드는 고독과 내면의 탐구를 상징하며, 외부가 아닌 내부에서 답을 구하라고 속삭입니다.", 
        advice: "혼자만의 시간을 갖고, 침묵 속에서 깨달음을 찾아보세요."
    },
    { 
        name: "Wheel of Fortune", 
        meaning: "yes", 
        interpretation: "운명의 수레바퀴가 별빛 속에서 회전합니다. 이 카드는 우주의 흐름과 변화의 신비를 노래하며, 행운이 당신에게 손짓하고 있음을 알립니다.", 
        advice: "변화를 받아들이고, 운명의 손길을 믿으세요."
    },
    { 
        name: "Justice", 
        meaning: "no", 
        interpretation: "저울과 칼을 든 여신이 차가운 빛을 뿌립니다. 이 카드는 공정함과 균형의 필요성을 속삭이지만, 결과가 아직 멀리 있음을 암시합니다.", 
        advice: "인내심을 갖고, 진실이 드러날 때를 기다리세요."
    },
    { 
        name: "The Hanged Man", 
        meaning: "no", 
        interpretation: "거꾸로 매달린 자가 안개 속에서 빛납니다. 이 카드는 희생과 새로운 시각의 신비를 드러내며, 익숙한 것을 내려놓아야 함을 말합니다.", 
        advice: "執着을 버리고, 다른 각도에서 세상을 보세요."
    },
    { 
        name: "Death", 
        meaning: "yes", 
        interpretation: "해골 기사가 황야를 지나며 속삭입니다. 이 카드는 끝과 시작의 신비로운 순환을 상징하며, 변화가 새로운 문을 열 것임을 예고합니다.", 
        advice: "과거를 놓고, 새로움을 맞이할 준비를 하세요."
    },
    { 
        name: "Temperance", 
        meaning: "yes", 
        interpretation: "천사가 물을 조화롭게 섞으며 빛납니다. 이 카드는 균형과 인내의 신비를 그리며, 모든 것이 제자리를 찾아가고 있음을 알려줍니다.", 
        advice: "조급함을 버리고, 흐름에 몸을 맡기세요."
    },
    { 
        name: "The Devil", 
        meaning: "no", 
        interpretation: "불타는 횃불 아래 악마가 속삭입니다. 이 카드는 속박과 유혹의 그림자를 드리우며, 내면의 갈등에 주의를 기울이라고 경고합니다.", 
        advice: "자유를 위해 얽힌 사슬을 끊어보세요."
    },
    { 
        name: "The Tower", 
        meaning: "no", 
        interpretation: "번개에 무너지는 탑이 밤하늘을 흔듭니다. 이 카드는 갑작스러운 깨달음과 혼란의 신비를 상징하며, 변화가 불가피함을 예언합니다.", 
        advice: "무너짐을 두려워 말고, 새 기반을 다지세요."
    },
    { 
        name: "The Star", 
        meaning: "yes", 
        interpretation: "별빛 아래 물을 따르는 여인이 희망을 노래합니다. 이 카드는 치유와 영감의 신비로운 빛을 드리우며, 어둠 속에서 길을 밝혀줍니다.", 
        advice: "꿈을 좇고, 내면의 별을 믿으세요."
    },
    { 
        name: "The Moon", 
        meaning: "no", 
        interpretation: "달빛에 비친 늑대가 울부짖습니다. 이 카드는 불확실성과 환영의 신비를 속삭이며, 마음의 혼란이 당신을 감싸고 있음을 경고합니다.", 
        advice: "두려움에 맞서고, 진실의 빛을 찾아보세요."
    },
    { 
        name: "The Sun", 
        meaning: "yes", 
        interpretation: "태양 아래 해바라기가 활짝 폈습니다. 이 카드는 기쁨과 생명의 신비로운 따뜻함을 전하며, 밝은 미래가 당신을 기다리고 있음을 약속합니다.", 
        advice: "긍정의 힘을 받아들이고, 빛 속에서 춤추세요."
    }
];

let selectedCards = [];
let resultShown = false;

function renderCards() {
    const deck = document.getElementById("card-deck");
    deck.innerHTML = '';
    tarotCards.forEach((card, index) => {
        const cardElement = document.createElement("div");
        cardElement.classList.add("card");
        cardElement.dataset.index = index;
        cardElement.innerHTML = `
            <div class="front"></div>
            <div class="back">${card.name}</div>
        `;
        cardElement.addEventListener("click", () => handleCardClick(index, cardElement));
        deck.appendChild(cardElement);
    });
}

function handleCardClick(index, cardElement) {
    if (resultShown) {
        showInterpretation(index, cardElement);
        return;
    }

    if (selectedCards.length >= 3 && !cardElement.classList.contains("selected")) return;

    if (cardElement.classList.contains("selected")) {
        cardElement.classList.remove("selected");
        selectedCards = selectedCards.filter(card => card.index !== index);
    } else if (selectedCards.length < 3) {
        cardElement.classList.add("selected");
        selectedCards.push({ index, ...tarotCards[index] });
    }

    document.getElementById("show-result").disabled = selectedCards.length !== 3;
}

function showResult() {
    const question = document.getElementById("question").value;
    if (!question) {
        alert("질문을 속삭여 주세요...");
        return;
    }

    const cards = document.querySelectorAll(".card");
    selectedCards.forEach((card) => {
        const cardElement = cards[card.index];
        cardElement.classList.add("revealed");
    });

    let yesCount = selectedCards.filter(card => card.meaning === "yes").length;
    let result = yesCount >= 2 ? "YES" : "NO";
    document.getElementById("result").innerText = `운명의 속삭임: ${result}`;

    resultShown = true;
    document.getElementById("show-result").disabled = true;
    document.getElementById("reset").disabled = false;
}

function showInterpretation(index, cardElement) {
    const interpretationDiv = document.getElementById("interpretation");
    const card = tarotCards[index];

    if (cardElement.classList.contains("expanded")) {
        cardElement.classList.remove("expanded");
        interpretationDiv.style.display = "none";
    } else {
        document.querySelectorAll(".card").forEach(card => card.classList.remove("expanded"));
        cardElement.classList.add("expanded");
        interpretationDiv.innerHTML = `
            <strong>${card.name}</strong><br>
            ${card.interpretation}<br><br>
            <em>조언: ${card.advice}</em>
        `;
        interpretationDiv.style.display = "block";
    }
}

function resetGame() {
    selectedCards = [];
    resultShown = false;
    document.getElementById("question").value = '';
    document.getElementById("result").innerText = '';
    document.getElementById("interpretation").style.display = "none";
    document.getElementById("show-result").disabled = true;
    document.getInputElementById("reset").disabled = true;
    renderCards();
}

window.onload = renderCards;