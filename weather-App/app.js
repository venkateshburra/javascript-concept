const cityForm = document.querySelector('.change-location');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img')
const cityName = document.querySelector('.h2CityName');

const updateUI = (data) => {

  // const cityDets = data.cityDets;
  // const weather = data.weather;

          // OR

  // destructure properties
  const { cityDets, weather } = data;
  console.log(data);

  // update details template
  details.innerHTML = `
    <h5 class="my-3">${cityDets.EnglishName}</h5>
    <div class="my-3">${weather.WeatherText}</div>
    <div class="display-4 my-4">
      <span>${weather.Temperature.Metric.Value}</span>
      <span>&deg;C</span>
    </div>
  `;

  // update thhe night/day & icon images
  const iconSrc = `img/icons/${weather.WeatherIcon}.svg`;
  icon.setAttribute('src', iconSrc);

  // let timeSrc = null;
  // if(weather.IsDatTime) {
  //   timeSrc = 'img/day.svg';
  // } else {
  //   timeSrc = 'img/night.svg';
  // }
          // OR
          // by using ternary oparator

  let timeSrc = (weather.IsDayTime) ? 'img/day.svg' : 'img/night.svg';

  time.setAttribute('src', timeSrc)


  // remove the d-none class if present
  if(card.classList.contains('d-none')) {
    card.classList.remove('d-none');
  }

}

const updateCity = async (city) => {
  
  const cityDets = await getCity(city);
  const weather = await getWeather(cityDets.Key)

  return {
    // cityDets : cityDets,
    // weather : weather,

    // OR
    cityDets,
    weather
  };

}

cityForm.addEventListener('submit', e => {
  // prevent default actions
  e.preventDefault();
  const city = cityForm.city.value.trim();
  cityForm.reset();
   cityName.innerHTML = `<h2>${city}</h2>`;
   cityName.style.margin = '10px';

  updateCity(city)
  .then(data => updateUI(data))
  .catch(err => console.log(err));

})



// const cityForm = document.querySelector('.change-location');
// const card = document.querySelector('.card');
// const details = document.querySelector('.details');
// const time = document.querySelector('img.time');
// const icon = document.querySelector('.icon img');
// const cityName = document.querySelector('.h2CityName');
// const key = 'FGBIj5d2zoHWZhfjlvqGXdGAlruGiJ8u';

// // Fetch weather information
// const getWeather = async (id) => {
//   const response = await fetch(`http://dataservice.accuweather.com/currentconditions/v1/${id}?apikey=${key}`);
//   const data = await response.json();
//   return data[0];
// };

// // Fetch city information
// const getCity = async (city) => {
//   const response = await fetch(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${key}&q=${city}`);
//   const data = await response.json();
//   return data[0];
// };

// // Update city and weather information
// const updateCity = async (city) => {
//   const cityDets = await getCity(city);
//   const weather = await getWeather(cityDets.Key);
//   return { cityDets, weather };
// };

// // Update the UI with city and weather details
// const updateUI = ({ cityDets, weather }) => {
//   details.innerHTML = `
//     <h5 class="my-3">${cityDets.EnglishName}</h5>
//     <div class="my-3">${weather.WeatherText}</div>
//     <div class="display-4 my-4">
//       <span>${weather.Temperature.Metric.Value}</span>
//       <span>&deg;C</span>
//     </div>
//   `;

//   const iconSrc = `img/icons/${weather.WeatherIcon}.svg`;
//   icon.setAttribute('src', iconSrc);

//   const timeSrc = weather.IsDayTime ? 'img/day.svg' : 'img/night.svg';
//   time.setAttribute('src', timeSrc);

//   if (card.classList.contains('d-none')) {
//     card.classList.remove('d-none');
//   }
// };

// // Form submit event listener
// cityForm.addEventListener('submit', (e) => {
//   e.preventDefault();
//   const city = cityForm.city.value.trim();
//   cityForm.reset();

//   cityName.innerHTML = `<h2>${city}</h2>`;
//   cityName.style.margin = '10px';

//   updateCity(city)
//     .then(updateUI)
//     .catch((err) => console.log(err));
// });
