// data in people
// no 17 is undefined
// goes upto 89

//var peopleCounter = 1;

$("#btn").on("click", function(){

  var randNum0and89 = Math.floor(Math.random() * 89);

    var peopleRequest = new XMLHttpRequest();
    peopleRequest.open('GET', 'http://swapi.co/api/people/' + randNum0and89 + '/');

    peopleRequest.onload = function () {
      var peopleData = JSON.parse(peopleRequest.responseText);
      var peopleName = peopleData.name
      var peopleDOB = peopleData.birth_year;

      var planetRequest = new XMLHttpRequest();
      planetRequest.open('GET', peopleData.homeworld);

      planetRequest.onload = function () {
        var planetData = JSON.parse(planetRequest.responseText);
        var planetName = planetData.name;

        renderHTML(peopleName, peopleDOB, planetName);
      };
      planetRequest.send();

    };
    peopleRequest.send();

  // peopleCounter++;
});

function renderHTML(peopleName, peopleDOB, planetName) {
  if (peopleDOB != "unknown") {
    $("#msg").html(peopleName + " was born on planet " + planetName + " in the year " + peopleDOB + ".");
  }
  else {
    $("#msg").html(peopleName + "was born on planet " + planetName + ".");
  }
}
