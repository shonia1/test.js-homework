function calculateBMI(){
    let weight = parseFloat(document.getElementById("weight").value)
    let height = parseFloat(document.getElementById("height").value)
    let result = document.getElementById("result")

    if (isNaN(weight) || isNaN(height) || weight<=0 || height<=0){
        result.innerText="გთხოვთ შეიყვანოთ რეალური მონაცემები!"
        return
    } 
    let bmi = weight/((height/100)*(height/100)) //აქვე სანტიმეტრებს გადაიყვანს მეტრებში
    let roundedBMI = bmi.toFixed(1) //ამრგვალებს წერტილის მერე 1 ციფრზე

    //გამოვთვალოთ ნორმალური წონა
    let heightSq = (height/100)*(height/100)
    let minWeight = (18.5*heightSq).toFixed(1)
    let maxWeight = (24.9*heightSq).toFixed(1)
    let advice = `თქვენი სიმაღლისთვის რეკომენდირებული წონა: ${minWeight}კგ-${maxWeight}კგ`

    let status = ""

    if(roundedBMI<18.5){
        status = "წონის დეფიციტი"
    }else if(roundedBMI>=18.5 && roundedBMI<=24.9){
        status = "ნორმალური წონა"
    }else if(roundedBMI>24.9 && roundedBMI<=29.9){
        status = "ზედმეტი წონა"
    }else{
        status = "სიმსუქნე"
    }


    result.innerHTML = `თქვენი BMI არის ${roundedBMI} (${status}) <br> <small>${advice}</small>`
}

function resetCalculator(){
    let heightInput = document.getElementById("height")
    let weightInput = document.getElementById("weight")
    let resultArea = document.getElementById("result")

    heightInput.value = ""  //ვასუფთავებთ მნიშვნელობებს
    weightInput.value = ""

    resultArea.innerHTML = ""   //ვასუფთავებთ შედეგის არეს

    heightInput.focus()
}

// ვპოულობთ ინპუტებს
const inputs = document.querySelectorAll('input');

// თითოეულ ინპუტს ვამატებთ "მოსმენას" კლავიატურაზე
inputs.forEach(input => {
    input.addEventListener('keypress', function (e) {
        // თუ დააჭირეს Enter-ს (კოდი 13)
        if (e.key === 'Enter') {
            calculateBMI(); 
        }
    });
});