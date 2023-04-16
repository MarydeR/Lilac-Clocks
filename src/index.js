function presetupdates() {
  // tokyo
  let tokyocity = document.querySelector("#tokyo");
  let tokyodate = tokyocity.querySelector(".date");
  let tokyotime = tokyocity.querySelector(".time");
  tokyodate.innerHTML = moment().tz("Asia/Tokyo").format("dddd, MMM D, YYYY");
  tokyotime.innerHTML = moment().tz("Asia/Tokyo").format("HH:mm:ss");

  //paris
  let pariscity = document.querySelector("#paris");
  let parisdate = pariscity.querySelector(".date");
  let paristime = pariscity.querySelector(".time");
  parisdate.innerHTML = moment().tz("Europe/Paris").format("dddd, MMM D, YYYY");
  paristime.innerHTML = moment().tz("Europe/Paris").format("HH:mm:ss");

  //london
  let londoncity = document.querySelector("#london");
  let londondate = londoncity.querySelector(".date");
  let londontime = londoncity.querySelector(".time");
  londondate.innerHTML = moment()
    .tz("Europe/London")
    .format("dddd, MMM D, YYYY");
  londontime.innerHTML = moment().tz("Europe/London").format("HH:mm:ss");

  //newyork
  let nycity = document.querySelector("#newyork");
  let nydate = nycity.querySelector(".date");
  let nytime = nycity.querySelector(".time");
  nydate.innerHTML = moment()
    .tz("America/New_York")
    .format("dddd, MMM D, YYYY");
  nytime.innerHTML = moment().tz("America/New_York").format("HH:mm:ss");
}

function updatecity(event) {
  let timezone = event.target.value;
  if (event.target.value.length > 0) {
    if (timezone === "current") {
      timezone = moment.tz.guess();
    }
    let cityname = timezone.replace("_", " ").split("/")[1];
    let citydate = moment().tz(timezone).format("dddd, MMMM D, YYYY");
    let citytime = moment().tz(timezone).format("HH:mm:ss");
    let citychange = document.querySelector("#presetcity");
    citychange.innerHTML = `
    <div class="row setcity">
            <div class="col">
              <h2>${cityname}</h2>
              <small class="date">${citydate}</small>
            </div>
            <div class="col time">${citytime}</div>
          </div>
          `;
  }
}

presetupdates();
setInterval(presetupdates, 1000);

let citychoice = document.querySelector("#citychange");
citychoice.addEventListener("change", updatecity);
