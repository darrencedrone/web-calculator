function getResult() {
    var typeOfMath = document.getElementById("typeOfMath").value
    var numberA = document.getElementById("numberA").value
    var numberB = document.getElementById("numberB").value

    if (typeOfMath === 'addition') {
        alert(Number(numberA) + Number(numberB))
    } else if (typeOfMath === 'subtraction') {
        alert(numberA - numberB)
    } else if (typeOfMath === 'multiplication') {
        alert(numberA * numberB)
    } else if (typeOfMath === 'division') {
        alert(numberA / numberB)
    } else {
        alert("Error. Result is not certified funky.")
    }
}
