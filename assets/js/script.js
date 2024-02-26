const headerTeams = document.querySelector('.header-teams')
const res = await fetch("../data/teams.json")
const data = await res.json();
const loaderScreen = document.querySelector('.loader-screen')
const page = document.querySelector('.container')
const logo = document.querySelector('.header-logo img');
const btnPrevious = document.querySelector('.btn-prev');
const btnNext = document.querySelector('.btn-next');
const roundText = document.querySelector('.round h2');
const contentMatches = document.querySelector('.matches')
const cardMatch = document.querySelectorAll('.card-match')
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
  console.log(dataMatches[numberOfRound].matches)
})
function cardFav(){
  
}
function loader(){
  setTimeout(()=>{
    loaderScreen.style.display = 'none'
    logo.classList.add('enter-logo')
    page.classList.add('enter-page')
  },5000)
}

loader()
data.map((team) => {
//  if(team.url === localStorage.fav){
//   team.sort(localStorage.fav)
//  }
    headerTeams.innerHTML += `
        <div class="keen-slider__slide team ${team.url}">
            <img src="./assets/img/${team.url}.svg" alt="escudo do ${team.name}">
        </div>
    `
});
const team = document.querySelectorAll('.team')

  team.forEach(equip =>{
  
    if(localStorage.fav === equip.classList[2]){
      equip.style.backgroundColor = "#ffffff"
    }
    equip.addEventListener('click', ()=>{
      equip.style.backgroundColor = "#ffffff"
      localStorage.fav = equip.classList[2]
    }
    
    )
    
  })
let render = (dataMatches)=>{
  const responseApi = dataMatches.map((match)=>{
    return `
    <div class="card-match ${localStorage.fav===match.principal || localStorage.fav===match.visitor?'team-fav':''}">
    <div class="card-team">
        <img src="./assets/img/${match.principal}.svg" alt="">
        <span>${match.principal}</span>
    </div>
    <div class="versus">
        <i class="fa-solid fa-x"></i>
    </div>
    <div class="card-team">
        <img src="./assets/img/${match.visitor}.svg" alt="">
        <span>${match.visitor}</span>
    </div>
    <div class="gradient-card"></div>
    </div>
    `
  }).join("")
  contentMatches.innerHTML = responseApi
}
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
      "(min-width: 320px)": {
        slides: { 
            perView: 4,
            spacing:1,
            origin:2
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
  
  
  api()