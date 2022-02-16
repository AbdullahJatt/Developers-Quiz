// list of answers

const correctAnswers = ['A' , 'B' , 'A' , 'B' , 'A'];

// Result
const result = document.querySelector('.result')

// Form

const form = document.querySelector('.quiz-form')

form.addEventListener('submit', e=>{
    e.preventDefault()
    const userAnswer = [form.q1.value,form.q2.value,form.q3.value,form.q4.value,form.q5.value,]
    
    let score = 0;

    userAnswer.forEach((answer,index)=>{
        if (answer == correctAnswers[index]){
            score += 20;
        }

        result.classList.remove('d-none');

        scrollTo(0,0);

        let output = 0;
        const timer = setInterval(() => {
            
            result.querySelector('span').textContent = `${output}%`;
            if(output===score){
                clearInterval(timer)
            }
            else{
                output++
            }

        }, 15);
    })
})