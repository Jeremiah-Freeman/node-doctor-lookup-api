var apiKey = "cb89914800cabcde62aea182bcad9347";
$(document).ready(function(){
  $("#finddoctors").click(function(){
    var  ailment = $("#ailment").val();
    console.log(ailment);
    $("#ailment").val("");
    $(".showdoctors").text("Here are some doctors that may be right for you:");
  });
});
