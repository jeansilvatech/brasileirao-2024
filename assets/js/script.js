const headerTeams = document.querySelector('.header-teams')
const res = await fetch("../data/teams.json")
const data = await res.json();
data.forEach(team => {
    headerTeams.innerHTML += `
        <div class="team keen-slider__slide">
                    <img src="./assets/img/${team.url}" alt="">
        </div>
    `
});
