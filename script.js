 const questions = [
            { question: "Who built the ark?", answer: "Noah" },
            { question: "What is the first book of the Bible?", answer: "Genesis" },
            { question: "Who was the mother of Jesus?", answer: "Mary" },
            { question: "What is the last book of the Bible?", answer: "Revelation" },
            { question: "Who was swallowed by a big fish?", answer: "Jonah" },
            { question: "Who is Jesus", answer: "The Son of God"},
            { question: "What is the shortest verse in the Bible", answer: "Jesus Wept"}
        ];

        let currentQuestionIndex = 0;

        function startQuiz() {
            document.getElementById('quizContainer').style.display = 'block';
            showQuestion();
        }

        function showQuestion() {
            if (currentQuestionIndex < questions.length) {
                document.getElementById('question').textContent = questions[currentQuestionIndex].question;
                document.getElementById('answerInput').value = '';
                document.getElementById('feedback').textContent = '';
            } else {
                document.getElementById('question').textContent = 'Quiz completed! Well done!';
                document.getElementById('answerInput').style.display = 'none';
                document.querySelector('#quizContainer button').style.display = 'none';
            }
        }

        function submitAnswer() {
            const userAnswer = document.getElementById('answerInput').value.trim();
            const correctAnswer = questions[currentQuestionIndex].answer;

            if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
                document.getElementById('feedback').textContent = 'Correct!';
            } else {
                document.getElementById('feedback').textContent = `Wrong! The correct answer is ${correctAnswer}.`;
            }
            currentQuestionIndex++;
            setTimeout(showQuestion, 2000);
        }  