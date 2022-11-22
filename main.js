let first = document.getElementById('first')
let second = document.getElementById('second')
let result = document.getElementById('result')
let add = document.getElementById('add')
let puppy = document.getElementById('puppy')
const audio1 = new Audio('audio/click.mp3');
const audio2 = new Audio('audio/bark.mp3');





add.onclick = function () {

  if ((first.value == "") || (second.value == "")) {
    result.innerText = "Please Enter both numbers"
    puppy.classList.add("lessopacity")

  }
  else {

    puppy.classList.add("lessopacity")

    audio1.volume = 0.1;
    audio1.play();




    let n1 = parseFloat(first.value);
    let n2 = parseFloat(second.value);

    let myresult = n1 + n2;
    result.innerText = `${n1} + ${n2} = ${myresult}`;
  }
}

puppy.onmouseover, puppy.onclick = function () {
  audio2.volume = 0.05;
  audio2.play()
}



