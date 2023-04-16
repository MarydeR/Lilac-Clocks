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
presetupdates();
setInterval(presetupdates, 1000);
