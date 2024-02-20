const headerTeams = document.querySelector('.header-teams')
const res = await fetch("../data/teams.json")
const data = await res.json();
data.forEach(team => {
    headerTeams.innerHTML += `
        <div class="keen-slider__slide team ${team.url}">
            <img src="./assets/img/${team.url}.svg" alt="escudo do ${team.name}">
        </div>
    `
});
var slider = new KeenSlider("#my-keen-slider", {
    initial:1,
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
        slides: { 
          perView: 20
        },
      },
    },
    slides: {
        perView: 1
    },
  })
  const team = document.querySelectorAll('.team')

  team.forEach(equip =>{
    console.log(equip.before)
   
    if(localStorage.fav == equip.classList[2]){
      equip.style.backgroundColor = "#ffffff"
    }
    equip.addEventListener('click', ()=>{
      equip.style.backgroundColor = "#ffffff"
      localStorage.fav = equip.classList[2]
      
    }
    
    )
    
  })
// const beforeCard = document.styleSheets[1].cssRules[7]
// beforeCard.style.backgroundColor = "#000"
// console.log(document.styleSheets[1].cssRules[7])