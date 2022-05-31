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
              creteUserChoose(ele.dataset.choose);
       });
});
let userResult = document.querySelector('.you');
let computerResult = document.querySelector('.computer');
let computerChooseSide = document.querySelector('.another-computer');
let userChooseSide = document.querySelector('.another-user');
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
       setTimeout(clearChanges, 1500);
}
function userWin() {
       document.querySelector('.choose').classList.add('stop');
       userResult.innerHTML++;
       setTimeout(clearChanges, 1500);
}
function computerWin() {
       document.querySelector('.choose').classList.add('stop');
       computerResult.innerHTML++;
       setTimeout(clearChanges, 1500);
}
function clearChanges() {
       document.querySelector('.choose').classList.remove('stop');
}
function createComputerChoose(ele) {
       computerChooseSide.classList.remove('hide');
       if (ele === 'rock') {
              computerChooseSide.innerHTML = `<i class="fa-solid fa-hand-back-fist"></i>`;
       } else if (ele === 'paper') {
              computerChooseSide.innerHTML = `<i class="fa-solid fa-hand"></i>`;
       } else {
              computerChooseSide.innerHTML = `<i class="fa-solid fa-hand-scissors"></i>`;
       }
       setTimeout(hideAnother, 1500);
}
function creteUserChoose(ele) {
       userChooseSide.classList.remove('hide');
       if (ele === 'rock') {
              userChooseSide.innerHTML = `<i class="fa-solid fa-hand-back-fist"></i>`;
       } else if (ele === 'paper') {
              userChooseSide.innerHTML = `<i class="fa-solid fa-hand"></i>`;
       } else {
              userChooseSide.innerHTML = `<i class="fa-solid fa-hand-scissors"></i>`;
       }
}
function hideAnother() {
       computerChooseSide.classList.add('hide');
       userChooseSide.classList.add('hide');
}
