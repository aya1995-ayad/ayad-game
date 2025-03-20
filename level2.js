const questions = [
    { question: "ما هو العنصر الأكثر وفرة في الكون؟", answer: "الهيدروجين" },
    { question: "من هو مكتشف قانون الجاذبية؟", answer: "نيوتن" },
    { question: "ما هو الحيوان الذي يُسمى بسفينة الصحراء؟", answer: "الجمل" },
    { question: "ما هي أول دولة استخدمت الطوابع البريدية؟", answer: "بريطانيا" },
    { question: "ما هو عدد ألوان قوس قزح؟", answer: "سبعة" }
];

let score = 0;
let currentQuestion = null;
let shuffledLetters = [];
let userAnswer = [];

// 🔹 عرض السؤال الجديد
function displayQuestion() {
    if (questions.length === 0) {
        endPhaseTwo();
        return;
    }

    let randomIndex = Math.floor(Math.random() * questions.length);
    currentQuestion = questions[randomIndex];

    document.getElementById("question").innerText = currentQuestion.question;
    document.getElementById("answerDisplay").innerText = "";
    userAnswer = [];

    shuffledLetters = shuffleArray(currentQuestion.answer.split(""));
    showLetters();
}

// 🔹 خلط الأحرف لعرضها بشكل عشوائي
function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
}

// 🔹 عرض الحروف في الأزرار
function showLetters() {
    let container = document.getElementById("lettersContainer");
    container.innerHTML = "";

    shuffledLetters.forEach((letter, index) => {
        let btn = document.createElement("button");
        btn.innerText = letter;
        btn.classList.add("letter");
        btn.onclick = () => selectLetter(index, letter);
        container.appendChild(btn);
    });
}

// 🔹 عند اختيار حرف
function selectLetter(index, letter) {
    userAnswer.push(letter);
    document.getElementById("answerDisplay").innerText = userAnswer.join("");
    document.getElementById("lettersContainer").children[index].style.visibility = "hidden";
}

// 🔹 مسح الإجابة الحالية
function clearAnswer() {
    userAnswer = [];
    document.getElementById("answerDisplay").innerText = "";
    showLetters();
}

// 🔹 التحقق من صحة الإجابة
function checkAnswer() {
    let userString = userAnswer.join("");

    if (userString === currentQuestion.answer) {
        document.getElementById("result").innerText = "إجابة صحيحة!";
        document.getElementById("result").style.color = "green";
        score += 2;
        document.getElementById("correctSound").play();
    } else {
        document.getElementById("result").innerText = "إجابة خاطئة! الإجابة الصحيحة هي: " + currentQuestion.answer;
        document.getElementById("result").style.color = "red";
        score -= 2;
        document.getElementById("wrongSound").play();
    }

    document.getElementById("score").innerText = "النقاط: " + score;

    // إزالة السؤال من القائمة
    let indexToRemove = questions.findIndex(q => q.answer === currentQuestion.answer);
    questions.splice(indexToRemove, 1);

    setTimeout(() => {
        document.getElementById("result").innerText = "";
        displayQuestion();
    }, 2000);
}

// 🔹 إنهاء المرحلة الثانية وتشغيل الفيديو
function endPhaseTwo() {
    // إخفاء عناصر اللعبة
    document.getElementById("question").style.display = "none";
    document.getElementById("lettersContainer").style.display = "none";
    document.getElementById("answerDisplay").style.display = "none";

    // عرض رسالة النهاية
    document.getElementById("result").innerText = "🎉 شاهد الفيديو حتى تنتقل للمرحلة التالية!";
    document.getElementById("result").style.color = "blue";

    // تشغيل الفيديو تلقائيًا
    let video = document.getElementById("endVideo");
    video.style.display = "block";
    video.style.visibility = "visible"; // لضمان الظهور
    video.play();

    // عند انتهاء الفيديو، أظهر زر إعادة التشغيل
    video.onended = function () {
        document.getElementById("restartBtn").style.display = "block";
    };
}

// 🔹 إعادة تشغيل اللعبة
function restartGame() {
    location.reload();
}

// 🔹 تشغيل اللعبة عند تحميل الصفحة
window.onload = () => {
    displayQuestion();
};
