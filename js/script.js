/*var argComputerMove, argMoveId, argPlayerMove, computerMove, playerInput, playerMove, randomNumber;

function getMoveName(argMoveId) {
  console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
  if (argMoveId == 1) {
    return 'kamień';
  } else if (argMoveId == 2) {
    return 'nożyce';
  } else if (argMoveId == 3) {
    return 'papier';
  } else {
    printMessage('Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodziło o "kamień".');
    return 'kamień';
  }
}

function displayResult(argPlayerMove, argComputerMove) {
  console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
  if (argPlayerMove == 'papier' && argComputerMove == 'kamień') {
    printMessage('Wygrywasz!');
  } else if (argPlayerMove == 'kamień' && argComputerMove == 'nożyce') {
    printMessage('Wygrywasz!');
  } else if (argPlayerMove == 'nożyce' && argComputerMove == 'papier') {
    printMessage('Wygrywasz!');
  } else if (argPlayerMove == argComputerMove) {
    printMessage('remis');
  } else {
    printMessage('Przegrywasz :(');
  }
  printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
}
playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
console.log('wybór ruchu gracza to: ' + playerInput);
playerMove = getMoveName(playerInput);
console.log('ruch gracza to: ' + playerMove);
randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('wylosowana liczba to: ' + randomNumber);
computerMove = getMoveName(randomNumber);
console.log('ruch komputera to: ' + computerMove);
displayResult(playerMove, computerMove);





/* to też z neta */
var  buttonTest, argButtonName, button_paper, button_rock, button_scissors;
buttonTest = document.getElementById('button-test');
/*buttonTest.addEventListener('click', function(){ buttonClicked('Guzik TEST'); }); */
button_scissors = document.getElementById('button-scissors');
/* button_scissors.addEventListener('click', function(){ buttonClicked('Guzik Nożyce'); }); */
button_rock = document.getElementById('button-rock');
/*button_rock.addEventListener('click', function(){ buttonClicked('Guzik Kamień'); }); */
button_paper = document.getElementById('button-paper');
/*button_paper.addEventListener('click', function(){ buttonClicked('Guzik Papier'); }); */

/**
 * kopia z neta
 */
function buttonClicked(argButtonName) {
  clearMessages();
  console.log(argButtonName + ' został kliknięty');


  var argComputerMove, argMoveId, argPlayerMove, computerMove, playerInput, playerMove, randomNumber;
    function getMoveName(argMoveId) {
    console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
    if (argMoveId == 1) {
      return 'kamień';
    } else if (argMoveId == 2) {
      return 'nożyce';
    } else if (argMoveId == 3) {
      return 'papier';
    } else {
      printMessage('Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodziło o "kamień".');
      return 'kamień';
    }
  }

  function displayResult(argPlayerMove, argComputerMove) {
    console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
    if (argPlayerMove == 'papier' && argComputerMove == 'kamień') {
      printMessage('Wygrywasz!');
    } else if (argPlayerMove == 'kamień' && argComputerMove == 'nożyce') {
      printMessage('Wygrywasz!');
    } else if (argPlayerMove == 'nożyce' && argComputerMove == 'papier') {
      printMessage('Wygrywasz!');
    } else if (argPlayerMove == argComputerMove) {
      printMessage('remis');
    } else {
      printMessage('Przegrywasz :(');
    }
    printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
  }
  playerMove = argButtonName;
  randomNumber = Math.floor(Math.random() * 3 + 1);
  console.log('wylosowana liczba to: ' + randomNumber);
  computerMove = getMoveName(randomNumber);
  console.log('ruch komputera to: ' + computerMove);
  displayResult(playerMove, computerMove);
}
/*buttonTest.addEventListener('click', function(){ buttonClicked('Guzik TEST'); }); */
button_scissors.addEventListener('click', function(){ buttonClicked(' Nożyce'); });
button_rock.addEventListener('click', function(){ buttonClicked(' Kamień'); });
button_paper.addEventListener('click', function(){ buttonClicked(' Papier'); });
