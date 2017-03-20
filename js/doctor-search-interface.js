
var Doctor = require('./../js/doctor-search.js').doctorModule;

var displayDocs = function(ailment, allDocs) {
  var capturedDoctors = [];
  capturedDoctors.push(allDocs);
  capturedDoctors.forEach(function(diplayAll) {
    $(".showdoctors").append("<li>" + capturedDoctors+ "</li>");
  });
};

$(document).ready(function(){
  var  currectDoctor = new Doctor();
  $("#finddoctors").click(function(){
    var  ailment = $("#ailment").val();
    $("#ailment").val("");
    $(".showdoctors").text("Here are some doctors and facilities that may help you:");
    var doctorResponse = currectDoctor.getDoctor(ailment,displayDocs);
  });
});
