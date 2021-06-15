

function Calc() {
    
    var weight = document.getElementById("weight").value;
    var height = document.getElementById("height").value;

    if (weight == "" || height == "") {
        alert("Please do not leave any blanks!");
        return;
    }

    var bmi = weight / (height ^ 2);
    console.log(bmi);
    if (bmi <= 18.5) {
        document.getElementById("result").value = "You are underweight!";
    } else if (bmi > 18.5 && bmi <= 25.0) {
        document.getElementById("result").value = "You are of normal range.";
    } else {
        document.getElementById("result").value = "You are overweight!";
    }

    if (bmi != Infinity) {
        document.getElementById("bmi").value = bmi.toFixed(2);
    } else {
        document.getElementById("bmi").value = 0.00;
    }
}

function Reset() {
    document.getElementById("weight").value = null;
    document.getElementById("height").value = null;
    document.getElementById("bmi").value = null;
    document.getElementById("result").value = null;
}