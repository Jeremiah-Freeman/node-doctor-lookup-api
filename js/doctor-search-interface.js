var apiKey = "cb89914800cabcde62aea182bcad9347";
$(document).ready(function(){
  $("#finddoctors").click(function(){
    var  ailment = $("#ailment").val();
    console.log(ailment);
    $("#ailment").val("");
    $(".showdoctors").text("Here are some doctors that may be right for you:" + ailment);
    $.get('https://api.betterdoctor.com/2016-03-01/doctors?query=toothache&location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=cb89914800cabcde62aea182bcad9347', function(response) {
      console.log(response.data.insurances);
    });
  });
});


// cb89914800cabcde62aea182bcad9347
