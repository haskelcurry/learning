import './style.css';

const apiKey = `4d8fb5b93d4af21d66a2948710284366`;
const button = document.querySelector(`button`);
const input = document.querySelector(`input`);
const error = document.querySelector(`.error`);
const results = document.querySelector(`.results`);

button.addEventListener(`click`, (e) => {
  const city = input.value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=ua`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const iconCode = data.weather[0].icon;

      const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${iconCode}.svg`;

      results.innerHTML =
        results.innerHTML +
        `
        <div class="result">
          <div class="name">
            ${data.name}, ${data.sys.country}
          </div>
          <div class="temp">${Math.round(data.main.temp)} ¡C</div>
          <img src="${icon}">
          <div class="description">${data.weather[0].description}</div>
        </div>
      `;

      error.textContent = ``;
    })
    .catch(() => {
      error.textContent = `?????? ????? ?? ????? ??`;
    });
});
