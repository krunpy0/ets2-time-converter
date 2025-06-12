let from = document.querySelector('.from').value;
let to = document.querySelector('.to').value;

updateValue();
function updateValue() {
  let from = document.querySelector('.from').value;
  let to = document.querySelector('.to').value;
  console.log(from, to);
}

function getTime() {
  let hours = document.querySelector('.hours').value;
  let minutes = document.querySelector('.minutes').value;
  console.log(hours, minutes);
}

function convertTime(hours, minutes, from, to) {
  hours = Number(hours);
  minutes = Number(minutes);

  let totalMinutes = minutes + hours * 60;
  let resultMinutes;


  if (from === to) {
    resultMinutes = totalMinutes;
  } else if (from === 'ets2' && to === 'IRL') {

    resultMinutes = totalMinutes * (3.5 / 60);
  } else if (from === 'IRL' && to === 'ets2') {

    resultMinutes = totalMinutes * (60 / 3.5);
  }

  let resultHours = Math.floor(resultMinutes / 60);
  let resultRemainingMinutes = Math.round(resultMinutes % 60);

  document.querySelector('.first').innerHTML = `${hours} часов и ${minutes} минут в ${from}= `;
  document.querySelector('.second').innerHTML = `${resultHours} часов и ${resultRemainingMinutes} минут в ${to}`;
}

function update() {
  let from = document.querySelector('.from').value;
  let to = document.querySelector('.to').value;
  let hours = document.querySelector('.hours').value || 0;
  let minutes = document.querySelector('.minutes').value || 0;
  convertTime(hours, minutes, from, to);

}

document.querySelector('.from').addEventListener('change', () => {
  update()
})
document.querySelector('.to').addEventListener('change', () => {
  update()
})
document.querySelector('.hours').addEventListener('input', () => {
  update()
})
document.querySelector('.minutes').addEventListener('input', () => {
  update()
})


