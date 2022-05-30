const choosesArray = ['rock', 'paper', 'scissor'];
let computerChoose =
       choosesArray[Math.floor(Math.random() * choosesArray.length)];
let ourChooses = document.querySelectorAll('.choose div');
ourChooses.forEach((ele) => {
       ele.addEventListener('click', () => {
              computerChoose =
                     choosesArray[
                            Math.floor(Math.random() * choosesArray.length)
                     ];
              compareWithComputerChoose(ele.dataset.choose);
              createComputerChoose(computerChoose);
       });
});
let userResult = document.querySelector('.results .you');
let computerResult = document.querySelector('.results .computer');
let showMessage = document.querySelector('.controller .computer-choose');
let finalResult = document.querySelector('.controller .final-result');
let anotherChoose = document.querySelector('.another');
function compareWithComputerChoose(element) {
       if (computerChoose === element) {
              draw();
       } else {
              if (computerChoose === 'rock') {
                     if (element === 'paper') {
                            userWin();
                     } else if (element === 'scissor') {
                            computerWin();
                     }
              } else if (computerChoose === 'paper') {
                     if (element === 'scissor') {
                            userWin();
                     } else if (element === 'rock') {
                            computerWin();
                     }
              } else if (computerChoose === 'scissor') {
                     if (element === 'rock') {
                            userWin();
                     } else if (element === 'paper') {
                            computerWin();
                     }
              }
       }
}
function draw() {
       document.querySelector('.choose').classList.add('stop');
       showMessage.innerHTML = `Computer Choose <span class="final-computer-choose">${computerChoose}</span>`;
       finalResult.style.color = 'blue';
       finalResult.innerHTML = 'It Is Draw';
       setTimeout(clearChanges, 1200);
}
function userWin() {
       document.querySelector('.choose').classList.add('stop');
       userResult.innerHTML++;
       showMessage.innerHTML = `Computer Choose <span class="final-computer-choose">${computerChoose}</span>`;
       finalResult.style.color = 'green';
       finalResult.innerHTML = 'You Win';
       setTimeout(clearChanges, 1200);
}
function computerWin() {
       document.querySelector('.choose').classList.add('stop');
       computerResult.innerHTML++;
       showMessage.innerHTML = `Computer Choose <span class="final-computer-choose">${computerChoose}</span>`;
       finalResult.style.color = 'red';
       finalResult.innerHTML = 'Computer Win';
       setTimeout(clearChanges, 1200);
}
function clearChanges() {
       document.querySelector('.choose').classList.remove('stop');
       showMessage.innerHTML = '';
       finalResult.innerHTML = '';
}
function createComputerChoose(ele) {
       anotherChoose.classList.remove('hide');
       if (ele === 'rock') {
              anotherChoose.innerHTML = `<i class="fa-solid fa-hand-back-fist"></i>`;
       } else if (ele === 'paper') {
              anotherChoose.innerHTML = `<i class="fa-solid fa-hand"></i>`;
       } else {
              anotherChoose.innerHTML = `<i class="fa-solid fa-hand-scissors"></i>`;
       }
       setTimeout(hideAnother, 1200);
}
function hideAnother() {
       anotherChoose.classList.add('hide');
}
