const headerTeams = document.querySelector('.keen-slider')
const res = await fetch("../data/teams.json")
const data = await res.json();
const loaderScreen = document.querySelector('.loader-screen')
const page = document.querySelector('.container')
const logo = document.querySelector('.header-logo img');
const btnPrevious = document.querySelector('.btn-prev');
const btnNext = document.querySelector('.btn-next');
const roundText = document.querySelector('.round h2');
const contentMatches = document.querySelector('.matches')
const iconDrag = document.querySelector('.icon-drag')
let dataMatches = [];
let roundNumber = 1;
let numberOfRound = 0;
async function api(){
  const res = await fetch("../data/matches.json")
  dataMatches = await res.json();
  render(dataMatches[numberOfRound].matches)
}
btnPrevious.addEventListener('click', ()=>{
  roundNumber--
  numberOfRound--
  render(dataMatches[numberOfRound].matches)
  btnVisible(roundNumber)
  roundText.innerText = `${roundNumber}ª rodada`
})
btnNext.addEventListener('click', ()=>{
  roundNumber++
  numberOfRound++
  render(dataMatches[numberOfRound].matches)
  btnVisible(roundNumber)
  roundText.innerText = `${roundNumber}ª rodada`
})
headerTeams.addEventListener('touchstart', ()=>{
  iconDrag.style.display = 'none'
})
function loader(displayState, time){
  setTimeout(()=>{
    loaderScreen.style.display = displayState
    logo.classList.add('enter-logo')
    page.classList.add('enter-page')
    contentMatches.classList.add('enter-cards')
  },time)
}

loader('none', 500)
function renderHeader(){
  data.map((team) => {
      headerTeams.innerHTML += `
          <div class="keen-slider__slide team ${team.url}">
              <img src="./assets/img/${team.url}.svg" alt="escudo do ${team.name}">
          </div>
      `
  });
}

let render = (dataMatches)=>{
  const responseApi = dataMatches.map((match)=>{
    return `
    <div class="card-match ${localStorage.fav===match.principal || localStorage.fav===match.visitor?`team-fav ${localStorage.fav}`:''}">
    <div class="card-team principal">
        <img src="./assets/img/${match.principal}.svg" alt="">
        <span>${match.principal.replace("-", " ")}</span>
    </div>
    <div class="versus">
        <i class="fa-solid fa-x"></i>
    </div>
    <div class="card-team visitor">
        <img src="./assets/img/${match.visitor}.svg" alt="">
        <span>${match.visitor.replace("-", " ")}</span>
    </div>
    <div class="gradient-card"></div>
    </div>
    `
  }).join("")
  contentMatches.innerHTML = responseApi
}
api()
renderHeader()
const team = document.querySelectorAll('.team')

function btnClick(btn){
  btn.addEventListener('click', ()=>{
    team.forEach(equip=>{
        equip.classList.remove('fav')
    })
    localStorage.fav = btn.classList[2]
    btn.classList.add("fav")
    location.reload()
  })
}
  team.forEach(equip =>{
    if(localStorage.fav === equip.classList[2]){
      equip.classList.add('fav')
    }
    btnClick(equip)
  })
function btnVisible(valueRound){
    switch(valueRound){
      case 1:
        btnPrevious.style.visibility = 'hidden';
        break;
      case 38:
        btnNext.style.visibility = 'hidden';
        break;
      default:
        btnPrevious.style.visibility = 'visible';
        btnNext.style.visibility = 'visible';
    }
}


var slider = new KeenSlider("#my-keen-slider", {
    breakpoints: {
      "(max-width: 320px)": {
        slides: { 
            perView:3,
            spacing:1,
            origin:1
          },
      },
      "(min-width: 320px)": {
        slides: { 
            perView: 4,
            spacing:1,
            origin:1
          },
      },
      "(min-width: 768px)": {
        slides: { 
          perView: 8,
          spacing:1,
          origin:1
          },
      },
      "(min-width: 1100px)": {
        disabled: true,
        slides: { 
          perView:20
        },
      },
    },
    slides: {
        perView: 1
    },
  })
  
  
  