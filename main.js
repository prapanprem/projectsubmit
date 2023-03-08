//fuction ทอยลูกเต๋า
function dice() {
    return Math.floor(Math.random()*10)
 
}
//fuction คำนวณเป็นหัวหรือก้อย
function diceResult() {
    if (dice() <=4) {
        var resultDice = "หัว"
    } else {
        var resultDice = "ก้อย"
    } return resultDice
}

//fuction แสดงผล
function diceStart() {
    checkWord()
    validateAndProcess()
    }
  
  function submitForm(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      diceStart();
    }
  }
  //
function process() {
  var disResult = diceResult()
  var guess = document.getElementById("inputValue").value
  if (disResult == guess){
      document.getElementById("resultShow1").innerHTML = "คุณตอบถูกต้อง"
      document.getElementById("resultShow2").innerHTML = "คุณเดา :"+ guess + "        ผลการทอย :" + disResult
      } else {
      document.getElementById("resultShow1").innerHTML = "คุณตอบไม่ถูกต้อง"
      document.getElementById("resultShow2").innerHTML = "คุณเดา :"+ guess + "        ผลการทอย :" + disResult}
  document.getElementById("inputValue").value = ""
}

  //function ตรวจข้อความ
  function checkWord() {
    var guess = document.getElementById("inputValue").value
    if (guess === "หัว" || guess === "ก้อย") {
    return true;
    } else { 
    alert("กรุณาระบุค่าให้ถูกต้อง (หัว หรือ ก้อยเท่านั้น)")
    return false; }
    }

function validateAndProcess() {
    if (checkWord()) {
        dice();
        process();
    }

}
