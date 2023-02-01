let round1 = document.querySelector('#round1-img');
let round2 = document.querySelector('#round2-img');
let round3 = document.querySelector('#round3-img');
let round4 = document.querySelector('#round4-img');
let grids = document.querySelector('.grids');
let formControl = document.querySelector('.form-control');

round2.style.pointerEvents = 'none';
round2.style.opacity = '0.5';
round2.parentElement.classList.add('disable');
round3.style.pointerEvents = 'none';
round3.style.opacity = '0.5';
round3.parentElement.classList.add('disable');
round4.style.pointerEvents = 'none';
round4.style.opacity = '0.5';
round4.parentElement.classList.add('disable');


// Round 1
round1.addEventListener('click', form)
function form(e) {
    e.preventDefault();
    grids.classList.add('hide')
    round2.style.pointerEvents = 'none';
    round2.style.opacity = '0.5';
    formControl.classList.remove('hide');

}

// Round 1 Form

let formName = document.querySelector('#name');
let formEmail = document.querySelector('#email');
let formUsername = document.querySelector('#username');
let registerForm = document.querySelector('#register');
const userData = {};
registerForm.addEventListener('submit', formData);
function formData(e) {
    e.preventDefault();
    let name = formName.value;
    let email = formEmail.value;
    let username = formUsername.value;
    userData.name = name;
    userData.email = email;
    userData.username = username;
    if (name !== "" && email !== "" && username !== "") {
        grids.classList.remove("hide");
        round1.style.pointerEvents = 'none';
        round1.style.opacity = '0.5';
        round1.parentElement.classList.add('disable');
        round2.style.pointerEvents = "auto";
        round2.style.opacity = '1';
        round2.parentElement.classList.remove('disable');
        formControl.classList.add('hide');
    }
    else {
        alert("Please fill in all fields");
    }
}

// Round 2
let round2User = document.querySelector('.user-data-show');
round2.addEventListener('click', showUserData)
function showUserData(e) {
    e.preventDefault();
    grids.classList.add('hide')
    round3.style.pointerEvents = 'none';
    round3.style.opacity = '0.5';
    round2User.classList.remove('hide');
    let showName = document.querySelector('#show-name');
    let showUsername = document.querySelector('#show-username');
    showName.innerHTML = userData.name;
    showUsername.innerHTML = userData.username;
}

// Round 2 user data

let userButton = document.querySelector('.user-button');
userButton.addEventListener('click', moveToRound3);
function moveToRound3(e) {
    e.preventDefault();
    grids.classList.remove("hide");
    round2.style.pointerEvents = 'none';
    round2.style.opacity = '0.5';
    round2.parentElement.classList.add('disable');
    round3.style.pointerEvents = "auto";
    round3.style.opacity = '1';
    round2.parentElement.classList.remove('disable');
    round2User.classList.add('hide');
}

// Round 3
let round3Game = document.querySelector('.round3-game');
round3.addEventListener('click', openDiceGame);
function openDiceGame(e) {
    e.preventDefault();

    round3Game.classList.remove('hide');
    grids.classList.add('hide');
}
const dice = document.querySelector('.dice-game');
const roll = document.querySelector('.roll');
let count = 0;
let rollDiceCount = 0;
let sum = 0;
let attempt = 2;
let lives = 3;
document.querySelector('#attempt').innerHTML = attempt;
document.querySelector('#lives').innerHTML = lives;
let firstAttempt = document.querySelector('#first-attempt');
let secondAttempt = document.querySelector('#second-attempt');
let totalSum1 = document.querySelector('#sum1');
function randomDice() {
    let random = Math.floor(Math.random() * 10);

    if (attempt > 0) {
        if (random >= 1 && random <= 6) {

            rollDice(random);
            sum += random;
            firstAttempt.innerHTML += random + ", "
            totalSum1.innerHTML = Number(sum);
            rollDiceCount++;
            lives--;
            console.log(lives)
            document.querySelector('#lives').innerHTML = lives;
            if ((rollDiceCount === 3 && (attempt === 2 || attempt === 1) && lives === 0 && sum > 10)) {
                alert(`Congratulations! You won the game! You scored ${sum}`);
                round3.style.pointerEvents = 'none';
                round3.style.opacity = '0.5';
                round3Game.classList.add('hide')
                grids.classList.remove("hide");
                round4.style.pointerEvents = 'auto';
                round4.style.opacity = '1';
                round4.parentElement.classList.remove('disable');
            }

            if (rollDiceCount === 3 && (attempt === 2 || attempt === 1) && sum <= 10) {

                attempt--;
                if (attempt == 1) {
                    round3Game.classList.add('hide')
                    grids.classList.remove("hide");
                }
                lives = 3;
                sum = 0;
                rollDiceCount = 0;
                firstAttempt.innerHTML = '';
                totalSum1.innerHTML = '';
                document.querySelector('#lives').innerHTML = lives;
                document.querySelector('#attempt').innerHTML = attempt;
                alert(`You scored ${sum}!!!! You have ${attempt} more attempt left!!!`);
                if (attempt === 0) {
                    document.querySelector('.warning').classList.remove('hide');
                    alert('Better luck next time');
                    location.reload();
                }
            }
        }
        else {
            randomDice();
        }
    }
    else {
        alert('Better luck next time');
    }


}



function rollDice(random) {
    setTimeout(function () {
        switch (random) {
            case 1:
                dice.style.transform = " rotateX(0deg) rotateY(0deg)";
                break;
            case 6:
                dice.style.transform = " rotateX(180deg) rotateY(0deg)";
                break;
            case 2:
                dice.style.transform = " rotateX(-90deg) rotateY(0deg)";
                break;
            case 5:
                dice.style.transform = " rotateX(90deg) rotateY(0deg)";
                break;
            case 3:
                dice.style.transform = " rotateX(0deg) rotateY(90deg)";
                break;
            case 4:
                dice.style.transform = " rotateX(0deg) rotateY(-90deg)";
                break;
            default:
                break;
        }
        dice.style.animation = "rolling 1s";
    }, 4050)
}
roll.addEventListener('click', randomDice);

// Round 4 congratulations
let lastPage = document.querySelector('.complete');

round4.addEventListener('click', finalPage);
function finalPage(e) {
    e.preventDefault();
    grids.classList.add("hide");
    lastPage.classList.remove("hide");
    round4.style.pointerEvents = 'none';
    round4.style.opacity = '0.5';
}
let finalForm = document.querySelector('.final-form')
finalForm.addEventListener('submit', submitForm);
let randomDigit = Math.floor(Math.random() * 1000000000000).toString().padStart(12, '0');
document.querySelector('#coupon').innerHTML = randomDigit;
function submitForm(e) {
    e.preventDefault();

    if (document.querySelector('.your-coupon').innerHTML == document.querySelector('.your-coupon').innerHTML) {
        document.querySelector('.congratulations').classList.remove('hide');
    }
}