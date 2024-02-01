const headerTeams = document.querySelector('.header-teams')
const res = await fetch("../data/teams.json")
const data = await res.json();
data.forEach(team => {
    headerTeams.innerHTML += `
        <div class="keen-slider__slide team">
            <img src="./assets/img/${team.url}" alt="">
        </div>
    `
});
var slider = new KeenSlider("#my-keen-slider", {
    
    breakpoints: {
      "(min-width: 320px)": {
        slides: { perView: 3},
      },
      "(min-width: 600px)": {
        slides: { perView: 5},
      },
      "(min-width: 768px)": {
        slides: { perView: 10},
      },
      "(min-width: 1000px)": {
        slides: { perView: 20},
      },
    },
    slides: {
        perView: 1,
        
    },
  })

