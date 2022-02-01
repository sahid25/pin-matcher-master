console.log('welcome to ');

function getPin() {
    let random = Math.random() * 10000;
    let pin = (random + '').split('.')[0];
    let output = document.getElementById('pinOutput');
    output.value = pin;
    if (pin.length === 4) {
        return pin;
    }
    else {
        return getPin();
    };

};

// Parent Button set
const parentButton = document.getElementById('btnParent').addEventListener('click', function (event) {
    let number = event.target.innerText;
    let calcuInput = document.getElementById('calculatorInput');
    if (isNaN(number)) {

        if (number === 'C') {
            calcuInput.value = '';

        }
    }
    else {
        let preivousNumber = calcuInput.value;
        let newNumber = preivousNumber + number;
        calcuInput.value = newNumber;
    }

});

//
const submitBtn = document.getElementById('pinSubmit').addEventListener('click',function(){
   let pin = document.getElementById('pinOutput').value;
   let typeCalcu = document.getElementById('calculatorInput').value;
   if (pin === typeCalcu) {
       verifyDispay('block','none')
   }
   else{
       verifyDispay('none','block')
   }
});

function verifyDispay(correctStatus, incorrectStatus) {
    let correct = document.getElementById('correct').style.display = correctStatus;
    let incorrect = document.getElementById('incorrect').style.display = incorrectStatus;
    
}