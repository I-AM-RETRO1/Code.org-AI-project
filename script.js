const quiz = document.querySelector("fieldset")
const correct = new Audio("/audio/correct.mp3")
const incorrect = new Audio("/audio/incorrect.mp3")
const click = new Audio("/audio/click.mp3")


const answers = [
    document.getElementsByName('q1'), 
    document.getElementsByName('q2'), 
    document.getElementsByName('q3'), 
]

const resultText = document.getElementById('result')
const submitBtn = document.getElementById('submit')

const answerKey = [
    "a2",
    "a2",
    "a1",
]

if(window.location.pathname === "/quiz/q1.html") {
    submitBtn.addEventListener('click', function() {
        let score = 0

        quiz.disabled = true

        for (let qIndex = 0; qIndex < answers.length; qIndex++) {
            const radioGroup = answers[qIndex]
            let userAnswer = null

            for (let i = 0; i < radioGroup.length; i++) {
                if (radioGroup[i].checked) {
                    userAnswer = radioGroup[i].value
                    break
                }
            }

            if (userAnswer === answerKey[qIndex]) {
                score++;
            }
        }

        resultText.textContent = `Your score is: ${score} / ${answerKey.length}`
        if(score <= 1) incorrect.play(); else correct.play()
    })
}

document.getElementById("phone-frame").addEventListener('click', function() {
    click.play()
})