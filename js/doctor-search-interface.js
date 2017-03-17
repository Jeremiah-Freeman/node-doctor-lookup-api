var apiKey = "cb89914800cabcde62aea182bcad9347";

$(document).ready(function(){
  $("#finddoctors").click(function(){
    var  ailment = $("#ailment").val();
    console.log(ailment);
    $("#ailment").val("");
    $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ ailment+'&location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=' + apiKey).
    then(function(response) {
      console.log(response.data[0].practices[0].name);
      $(".showdoctors").text("Here are some doctors that may be right for you:" + ailment + response.data[0].practices[0].name + response.data[1].practices[0].name + response.data[2].practices[0].name + response.data[3].practices[0].name + response.data[4].practices[0].name + response.data[5].practices[0].name +
      response.data[6].practices[0].name +
      response.data[7].practices[0].name + response.data[8].practices[0].name + response.data[9].practices[0].name);
    });
  });
});


// cb89914800cabcde62aea182bcad9347
