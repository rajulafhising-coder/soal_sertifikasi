const QUIZ_COUNT = 50; // Jumlah soal yang diambil secara acak
const TIMER_DURATION = 70 * 60; // 70 menit dalam detik

// ── State ────────────────────────────────────────────────────────
let currentQuiz    = 0;
let participantName = "";
let participantNipp = "";
let quizPool       = [];
let userAnswers    = [];
let timeRemaining  = TIMER_DURATION;
let timerInterval  = null;

// ── DOM References ───────────────────────────────────────────────
const loginSection        = document.getElementById('login-section');
const quizSection         = document.getElementById('quiz-section');
const resultSection       = document.getElementById('result-section');
const participantNameInput = document.getElementById('participant-name');
const participantNippInput = document.getElementById('participant-nipp');
const startBtn            = document.getElementById('start-btn');
const displayName         = document.getElementById('display-name');
const answerEls           = document.querySelectorAll('.answer');
const questionEl          = document.getElementById('question');
const a_text              = document.getElementById('a_text');
const b_text              = document.getElementById('b_text');
const c_text              = document.getElementById('c_text');
const d_text              = document.getElementById('d_text');
const submitBtn           = document.getElementById('submit');
const backBtn             = document.getElementById('back-btn');
const progressBar         = document.getElementById('progress-bar');
const progressText        = document.getElementById('progress-text');
const timerEl             = document.getElementById('timer');

// ── Shuffle & Pick ───────────────────────────────────────────────
function shuffleAndPick(arr, n) {
    const shuffled = [...arr].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, n);
}

// ── Start ────────────────────────────────────────────────────────
startBtn.addEventListener('click', () => {
    participantName = participantNameInput.value.trim();
    participantNipp = participantNippInput.value.trim();

    if (participantName === "") {
        alert("Mohon masukkan nama Anda terlebih dahulu.");
        return;
    }
    if (participantNipp === "") {
        alert("Mohon masukkan NIPP Anda terlebih dahulu.");
        return;
    }

    quizPool    = shuffleAndPick(questions, Math.min(QUIZ_COUNT, questions.length));
    userAnswers = new Array(quizPool.length).fill(undefined);
    currentQuiz = 0;

    displayName.innerText = `${participantName} (${participantNipp})`;
    loginSection.classList.add('hidden');
    quizSection.classList.remove('hidden');

    loadQuiz();
    startTimer();
});

// ── Load Soal ────────────────────────────────────────────────────
function loadQuiz() {
    const data = quizPool[currentQuiz];

    questionEl.innerText  = `${currentQuiz + 1}. ${data.question}`;
    a_text.innerText      = data.options[0];
    b_text.innerText      = data.options[1];
    c_text.innerText      = data.options[2];
    d_text.innerText      = data.options[3];

    deselectAnswers();
    if (userAnswers[currentQuiz] !== undefined) {
        answerEls[userAnswers[currentQuiz]].checked = true;
    }

    const pct = ((currentQuiz + 1) / quizPool.length) * 100;
    progressBar.style.width = pct + '%';
    progressText.innerText  = `Soal ${currentQuiz + 1} / ${quizPool.length}`;

    backBtn.disabled   = currentQuiz === 0;
    submitBtn.innerText = currentQuiz === quizPool.length - 1 ? 'Selesai ✓' : 'Jawab →';
}

function deselectAnswers() {
    answerEls.forEach(el => (el.checked = false));
}

function getSelected() {
    let answer;
    answerEls.forEach((el, idx) => {
        if (el.checked) answer = idx;
    });
    return answer;
}

// ── Tombol Jawab / Selesai ───────────────────────────────────────
submitBtn.addEventListener('click', () => {
    const answer = getSelected();
    if (answer === undefined) {
        alert("Pilih jawaban terlebih dahulu!");
        return;
    }
    userAnswers[currentQuiz] = answer;

    if (currentQuiz < quizPool.length - 1) {
        currentQuiz++;
        loadQuiz();
    } else {
        showResult();
    }
});

// ── Tombol Kembali ───────────────────────────────────────────────
backBtn.addEventListener('click', () => {
    userAnswers[currentQuiz] = getSelected();
    if (currentQuiz > 0) {
        currentQuiz--;
        loadQuiz();
    }
});

// ── Timer ────────────────────────────────────────────────────────
function startTimer() {
    // Hentikan timer lama jika ada
    if (timerInterval) clearInterval(timerInterval);

    timeRemaining = TIMER_DURATION;
    renderTimer();

    timerInterval = setInterval(() => {
        timeRemaining--;
        renderTimer();

        if (timeRemaining <= 0) {
            clearInterval(timerInterval);
            timerInterval = null;
            alert("⏰ Waktu habis! Jawaban Anda akan dikumpulkan secara otomatis.");
            showResult();
        }
    }, 1000);
}

function renderTimer() {
    const m = Math.floor(timeRemaining / 60);
    const s = timeRemaining % 60;
    timerEl.innerText = `⏱ ${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;

    if (timeRemaining <= 300) {
        timerEl.classList.add('timer-warning');
    } else {
        timerEl.classList.remove('timer-warning');
    }
}

// ── Hasil Nilai ──────────────────────────────────────────────────
function showResult() {
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }

    quizSection.classList.add('hidden');
    resultSection.classList.remove('hidden');

    let score = 0;
    quizPool.forEach((q, i) => {
        if (userAnswers[i] === q.answer) score++;
    });

    const finalScore = Math.round((score / quizPool.length) * 100);

    let grade, gradeColor;
    if      (finalScore >= 90) { grade = "Sangat Baik 🏆";          gradeColor = "#16a34a"; }
    else if (finalScore >= 75) { grade = "Baik 👍";                  gradeColor = "#2563eb"; }
    else if (finalScore >= 60) { grade = "Cukup 📝";                 gradeColor = "#d97706"; }
    else                       { grade = "Perlu Belajar Lagi 💪";    gradeColor = "#dc2626"; }

    resultSection.innerHTML = `
        <div class="result-content">
            <h2>Kuis Selesai! 🎉</h2>
            <p>Terima kasih atas partisipasinya,</p>
            <p><strong>${participantName}</strong></p>
            <p class="nipp-display">NIPP: ${participantNipp}</p>
            <p>Nilai Akhir Anda:</p>
            <div class="score" style="color:${gradeColor}">${finalScore}</div>
            <p style="color:${gradeColor}; font-weight:600;">${grade}</p>
            <p>Menjawab benar <strong>${score}</strong> dari <strong>${quizPool.length}</strong> soal</p>
        </div>
        <div class="btn-group">
            <button class="btn-secondary" onclick="location.reload()">Mulai Kembali</button>
            <button onclick="showReview()">Lihat Review Jawaban 📋</button>
        </div>
    `;
}

// ── Review Jawaban ───────────────────────────────────────────────
function showReview() {
    resultSection.classList.add('hidden');
    const reviewSection = document.getElementById('review-section');
    reviewSection.classList.remove('hidden');

    const labels = ['A', 'B', 'C', 'D'];

    let html = `<div class="review-header">
        <h2>Review Jawaban 📋</h2>
        <p><strong>${participantName}</strong></p>
        <p class="nipp-display">NIPP: ${participantNipp}</p>
    </div><div class="review-list">`;

    quizPool.forEach((q, i) => {
        const isCorrect  = userAnswers[i] === q.answer;
        const statusClass = isCorrect ? 'correct' : 'wrong';
        const statusIcon  = isCorrect ? '✅' : '❌';

        html += `<div class="review-item ${statusClass}">
            <div class="review-question">
                <span class="review-num">${i + 1}</span>
                <span class="review-status">${statusIcon}</span>
                <p>${q.question}</p>
            </div>
            <div class="review-options">`;

        q.options.forEach((opt, j) => {
            let optClass = '';
            if (j === q.answer)                       optClass = 'opt-correct';
            else if (j === userAnswers[i] && !isCorrect) optClass = 'opt-wrong';

            const mark = j === q.answer
                ? ' ✓ Kunci Jawaban'
                : (j === userAnswers[i] && !isCorrect ? ' ✗ Jawaban Anda' : '');

            html += `<div class="review-opt ${optClass}">
                <strong>${labels[j]}.</strong> ${opt}<span class="opt-mark">${mark}</span>
            </div>`;
        });

        if (userAnswers[i] === undefined) {
            html += `<div class="review-skipped">⚠️ Soal ini tidak dijawab</div>`;
        }

        html += `</div></div>`;
    });

    html += `</div>
    <div class="btn-group review-actions">
        <button class="btn-secondary" onclick="showResultBack()">&#8592; Kembali ke Hasil</button>
        <button onclick="location.reload()">Mulai Kembali</button>
    </div>`;

    reviewSection.innerHTML = html;
}

function showResultBack() {
    document.getElementById('review-section').classList.add('hidden');
    resultSection.classList.remove('hidden');
}
