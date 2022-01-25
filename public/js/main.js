const log = console.log;
const cityName = document.getElementById("cityName");
const submitBtn = document.getElementById("submitBtn");
const city_name = document.getElementById("city_name");
const tempParameter = document.getElementById("tempParameter");
// const temp = document.getElementById("temp");
const temp_status = document.getElementById("temp_status");

const middle_layer = document.querySelector(".middle_layer");

const getInfo = async (e) => {
  e.preventDefault();
  // alert("Working");

  let cityVal = cityName.value;
  // log("cityVal : ", cityVal);
  // let cityNameVal = city_name.value;
  let cityNameText = city_name.innerText;
  // log("cityNameVal : ", cityNameVal);
  // log("cityNameText : ", cityNameText);

  if (cityVal === "") {
    city_name.innerText = `Please write city name before search`;
    middle_layer.classList.add("data-hide");
  } else {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=23f472659d2fd48eb6a8419ffd485080`;

      // call API asynchronouse way
      const response = await fetch(url);
      // log("response : ", response);
      const jsonResponse = await response.json(); // convert it in json
      const arrOfJson = [jsonResponse];
      log("arrOfJson : ", arrOfJson);
      // log("arrOfJson[0].name : ",arrOfJson[0].name);
      city_name.innerText = `${arrOfJson[0].name} , ${arrOfJson[0].sys.country}`;
      // log("arrOfJson[0].main.temp : ",arrOfJson[0].main.temp);
      tempParameter.innerText = arrOfJson[0].main.temp; // temperature
      // log("arrOfJson[0].weather[0].main : ",arrOfJson[0].weather[0].main);
      // temp_status.innerText = arrOfJson[0].weather[0].main;
      const tempMood = arrOfJson[0].weather[0].main;
      log("tempMood : ", tempMood);
      if (tempMood == "Clear") {
        temp_status.innerHTML =
          "<i class='fa fa-sun' style='color:#eccc68;' aria-hidden='true'></i>";
      } else if (tempMood == "Clouds") {
        temp_status.innerHTML =
          "<i class='fa fa-cloud' aria-hidden='true'></i>";
      } else if (tempMood == "Rain") {
        temp_status.innerHTML =
          "<i class='fa fa-cloud-rain' aria-hidden='true'></i>";
      } else if (tempMood == "Smoke") {
        temp_status.innerHTML =
          "<i class='fa fa-cloud' aria-hidden='true'></i>";
      } else {
        temp_status.innerHTML =
          "<i class='fa fa-sun' style='color:#eccc68;' aria-hidden='true'></i>";
      }
      middle_layer.classList.remove("data-hide");
      log("Try block");
    } catch {
      log("Catch block");
      city_name.innerText = `Please enter the city name properly`;
      middle_layer.classList.add("data-hide");
    }
  }
};

submitBtn.addEventListener("click", getInfo);
