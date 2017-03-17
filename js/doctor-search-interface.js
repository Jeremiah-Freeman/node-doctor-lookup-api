var Doctor = require('./../js/doctor-search.js').doctorModule;

var displayDocs = function(ailment, docs) {
    $(".showdoctors").text("Here are some doctors that may be right for your:" + ailment + docs);
};

$(document).ready(function(){
  var  currectDoctor = new Doctor();
  $("#finddoctors").click(function(){
    var  ailment = $("#ailment").val();
    $("#ailment").val("");
    var doctorResponse = currectDoctor.getDoctor(ailment, displayDocs);
  });
});
