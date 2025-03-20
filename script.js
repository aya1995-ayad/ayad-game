const questions = [
    { question: "ما هي عاصمة مصر؟", answer: "القاهرة" },
    { question: "من هو مؤلف كتاب 'الأمير'؟", answer: "ميكافيلي" },
    { question: "ما هو أكبر كوكب في المجموعة الشمسية؟", answer: "المشتري" },
    { question: "ما هو أطول نهر في العالم؟", answer: "نهر النيل" },
    { question: "من هو مخترع الهاتف؟", answer: "بيل" },
    { question: "في اي سنة هجرية كانت معركة بدر؟", answer: "في السنة الثانية من الهجرة" },
    { question: "ماهو المعدن الذي يستخدم في صناعة الاسلاك الكهربائية؟", answer: "النحاس" },
    { question: "ماهي المدينة التي كانت مركز الامبراطورية البيزنطية؟", answer: "القسطنطينية" },
    { question: "في اي سنة وقعة الحرب العالمية الثانية؟", answer: "1939-1945" },
    { question: "من هو مخترع الطائرة؟", answer: "الأخوان رايت" },
    { question: "ماهي اول دولة استخدمت الطباعة ؟", answer: "الصين" },
    { question: "ماهو اسم اول هاتف ذكي؟", answer: "آيفون" },
    { question: "من هو صاحب النظرية النسبية؟", answer: "ألبرت أينشتاين" },
    { question: "من هو مخترع الانترنيت؟", answer: "تيم برنرزلي" },
    { question: "من هو مؤسس شركة أبل؟", answer: "ستيف جوبز" },
    { question: "ماهو الحيوان الذي يستطيع تغيير لونه؟", answer: "الحرباء" },
    { question: "ماهو اطول نهر في امريكا الجنوبية؟", answer: "نهر الامزون" },
    { question: "ماهو اسرع حيوان في العالم؟", answer: "الصقر الحر" },
    { question: "ماهي عاصمة كندا؟", answer: "أوتاوا" },
    { question: "من فاز بكأس امم افريقيا في 2019؟", answer: "الجزائر" },
    { question: "ماهي العبادات التي تكون فرضا على المسلم؟", answer: "الصلاة,الصوم,الزكاة,الحج" },
    { question: "من هو النبي الذي ابتلعه الحوت؟", answer: "النبي يونس عله السلام" },
    { question: "من كان اول رئيس للولايات المتحدة؟", answer: "جورج واشنطن" },
    { question: "في اي عام حدثت الهجرة النبوية؟", answer: "622م" },
    { question: "ماهو اصغر كوكب في النظام الشمسي؟", answer: "عطارد" },
    { question: "ماهي اكبر حيوانات على وجه الارض؟", answer: "الحوت الأزرق" },
    { question: "من هو مكتشف قانون الجاذبية؟", answer: "إسحاق نيوتن" },
    { question: "ماهو اطول جبل في العالم؟", answer: "جبل ايفرست" },
    { question: "في اي عام تأسست الأمم المتحدة؟", answer: "1945" },
    { question: "ماهي وحدة قياس شدة التيار الكهربائي؟", answer: "الامبير" },
    { question: "ماهي اللغة الاكثر تحدثا حول العالم؟", answer: "الأنجليزية" },
    { question: "من هو مخترع المصباح؟", answer: "توماس إديسون" },
    { question: "من هو اول انسان صعد للفضاء؟", answer: "يوري غاغارين" },
    { question: "ماهو اقدم شكل من اشكال الكتابة؟", answer: "الكتابة المسمارية" },
    { question: "ماهو اول جهاز كمبيوتر شخصي تم اختراعه؟", answer: "الكمبيوتر IBM PC" },
    { question: "ماهو اسرع حيوان بري؟", answer: "الفهد" },
    { question: "ما هو الحيوان الذي يعتبر رمزا لأستراليا؟", answer: "الكنغر" },
    { question: "ماهي اكبر صحراء في العالم؟", answer: "الصحراء الكبرى" },
    { question: "ماهي اللعبة التي يتسابق فيها اللاعبين على الجليد؟", answer: "هوكي الجليد" },
    { question: "ما هو اسم الكتاب المقدس الذي نزل على النبي موسى؟", answer: "التوراة" },
    { question: "ما هي اللعبة التي تلعب بالكرة والمضرب؟", answer: "التنس" },
    { question: "كم عدد سور القرآن الكريم؟", answer: "114 سورة" },
    { question: "ماهو العضو الذي يتحكم في تنفس الانسان؟", answer: "الرئتين" },
    { question: "في اي معركة هزم نابليون بونابرت؟", answer: "معركة واترلو" },
    { question: "من هو قائد معركة بدر؟", answer: "الرسول محمد صلى الله عليه وسلم" },
    { question: "من هو اول من وصل للقطب الجنوبي؟", answer: "روالد أموندسن" },
    { question: "من هو الذي انتصرة في معركة حطين؟", answer: "سيف الدين قطز" },
    { question: "ماهي عاصمة اليابان؟", answer: "طوكيو" },
    { question: "من هو مؤسس شركة مايكروسوفت؟", answer: "بيل جيتس" }
];

let score = 0;
let currentQuestion = null;
let shuffledLetters = [];
let userAnswer = [];

function displayQuestion() {
    if (questions.length === 0) {
        document.getElementById("question").innerText = "لقد أكملت جميع الأسئلة!";
        document.getElementById("lettersContainer").style.display = "none";
        document.querySelectorAll("button").forEach(btn => btn.style.display = "none");
        return;
    }

    let randomIndex = Math.floor(Math.random() * questions.length);
    currentQuestion = questions[randomIndex];

    document.getElementById("question").innerText = currentQuestion.question;
    document.getElementById("answerDisplay").innerText = "";
    userAnswer = [];

    // خلط الحروف
    shuffledLetters = shuffleArray(currentQuestion.answer.split(""));
    showLetters();
}

// دالة لخلط الحروف
function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
}

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

function selectLetter(index, letter) {
    userAnswer.push(letter);
    document.getElementById("answerDisplay").innerText = userAnswer.join("");

    // إخفاء الحرف بعد اختياره
    document.getElementById("lettersContainer").children[index].style.visibility = "hidden";
}

function clearAnswer() {
    userAnswer = [];
    document.getElementById("answerDisplay").innerText = "";
    showLetters();
}

function checkAnswer() {
    let userString = userAnswer.join("");

    if (userString === currentQuestion.answer) {
        document.getElementById("result").innerText = "✅ إجابة صحيحة!";
        document.getElementById("result").style.color = "green";
        score += 2;
        document.getElementById("correctSound").play();

        // إزالة السؤال من القائمة حتى لا يتكرر
        let indexToRemove = questions.findIndex(q => q.answer === currentQuestion.answer);
        questions.splice(indexToRemove, 1);

        // تحديث النقاط
        document.getElementById("score").innerText = "النقاط: " + score;

        // الانتقال إلى السؤال التالي بعد ثانيتين
        setTimeout(() => {
            document.getElementById("result").innerText = "";
            displayQuestion();  // فقط إذا كانت الإجابة صحيحة
        }, 2000);
        
    } else {
        document.getElementById("result").innerText = "❌ إجابة خاطئة! حاول مرة أخرى.";
        document.getElementById("result").style.color = "red";
        score -= 2;
        document.getElementById("wrongSound").play();

        // تحديث النقاط
        document.getElementById("score").innerText = "النقاط: " + score;
    }
}

window.onload = displayQuestion;
function displayQuestion() {
    if (questions.length === 0) {
        document.getElementById("question").innerText = "🎉 مبروك! لقد أكملت جميع الأسئلة!";
        document.getElementById("lettersContainer").style.display = "none";
        document.querySelectorAll("button").forEach(btn => btn.style.display = "none");

        // عرض الفيديو بعد الانتهاء
        let video = document.getElementById("endVideo");
        video.style.display = "block";
        video.play();

        // إظهار زر إعادة اللعب
        document.getElementById("restartBtn").style.display = "block";
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

// دالة إعادة تشغيل اللعبة
function restartGame() {
    location.reload();  // إعادة تحميل الصفحة
}
function displayQuestion() {
    if (questions.length === 0) {
        document.getElementById("question").innerText = "شاهد الفديو للاخير حتى تنتقل للمرحلة التالية 🎉 مبروك! لقد أكملت جميع الأسئلة!";
        document.getElementById("lettersContainer").style.display = "none";
        document.querySelectorAll("button").forEach(btn => btn.style.display = "none");

        // عرض الفيديو عند نهاية المرحلة
        let video = document.getElementById("endVideo");
        video.style.display = "block";
        video.play();

        // عند انتهاء الفيديو، الانتقال تلقائيًا إلى المرحلة الثانية
        video.onended = function () {
            console.log("🎬 الفيديو انتهى - الانتقال إلى المرحلة الثانية");
            window.location.href = "level2.html";  // الانتقال إلى المرحلة الثانية
        };

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
function skipQuestion() {
    if (score >= 10) {  
        score -= 10; // خصم 10 نقاط
        updateScore(); // تحديث عرض النقاط
        currentQuestionIndex++; // الانتقال للسؤال التالي

        if (currentQuestionIndex < questions.length) {
            showQuestion(); // استدعاء مباشر بدون تأخير
        } else {
            alert("لقد انتهت جميع الأسئلة!");
            endGame(); // يمكنك استدعاء دالة لإنهاء اللعبة أو عرض النتيجة
        }
    } else {
        alert("ليس لديك نقاط كافية لتخطي السؤال!");
    }
}

function showQuestion() {
    let questionElement = document.getElementById("question");
    let answersElement = document.getElementById("answers");

    if (currentQuestionIndex < questions.length) {
        let currentQuestion = questions[currentQuestionIndex];
        questionElement.innerText = currentQuestion.question;

        // تحديث الأجوبة إذا كانت موجودة
        answersElement.innerHTML = "";
        currentQuestion.answers.forEach(answer => {
            let button = document.createElement("button");
            button.innerText = answer;
            button.onclick = () => checkAnswer(answer);
            answersElement.appendChild(button);
        });
    } else {
        alert("تم الانتهاء من جميع الأسئلة!");
    }
}


