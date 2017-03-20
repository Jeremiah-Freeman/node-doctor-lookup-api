var apiKey = require('./../.env').apiKey;

function Doctor() {
}

Doctor.prototype.getDoctor = function(ailment, displayFunction) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ ailment+'&location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&skip=0&limit=20&user_key=' + apiKey).
  then(function(response) {
    for(var i = 0; i < response.data.length; i++){
      var obj = response.data[i].practices[0].name;
      displayFunction(ailment,obj);
    }
  }).fail(function(error) {
    $('.showdoctors').text(error.responseJSON.message);
  });
};

exports.doctorModule = Doctor;
