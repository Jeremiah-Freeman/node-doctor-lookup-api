var apiKey = require('./../.env').apiKey;

function Doctor() {
}


Doctor.prototype.getDoctor = function(ailment, displayFunction) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ ailment+'&location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=' + apiKey).
  then(function(response) {
    var test = (response.data[0].practices[0].name);
      console.log(test);
    displayFunction(ailment,response.data[0].practices[0].name);
  }).fail(function(error) {
    $('.showdoctors').text(error.responseJSON.message);
  });
};

exports.doctorModule = Doctor;
