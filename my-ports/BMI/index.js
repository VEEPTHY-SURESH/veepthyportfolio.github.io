document.querySelector("#btn").addEventListener("click",calculateBMI);
function calculateBMI(){
    var height=parseFloat(document.querySelector("#height").value);
    var weight=parseFloat(document.querySelector("#weight").value);
    if(height==="" || isNaN(height) || weight==="" || isNaN(weight)){
        document.querySelector("#output").innerHTML="Enter a valid height or weight";
    }else{
        var bmi=(weight/Math.pow(height,2)).toFixed(3);
        var output=document.querySelector("#output");
            if (bmi < 18.5) {
                output.innerHTML = "Your BMI is " + bmi + ", so you are underweight.";
                }
            
            else if (bmi >= 18.5 && bmi <= 24.9) {
                output.innerHTML ="Your BMI is " + bmi + ", so you have a normal weight.";
            }
            
            else if (bmi >= 25 && bmi<=29.9) {
                output.innerHTML ="Your BMI is " + bmi + ", so you are overweight.";
            }
            else{
                output.innerHTML="Your BMI is "+bmi+", so you have obesity";
            }

    }
}