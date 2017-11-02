$(document).ready(function() {

  var lat;
  var long;

  $.getJSON("http://ip-api.com/json", function(data2){
    lat = data2.lat;
    long = data2.lon;

    console.log(lat);
    console.log(long);

    var api = "http://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+long+"&appid=d0064873bcf68585ef7a273db284d12c";

  $.getJSON(api, function(data){

    var weatherType = data.weather[0].description;
      var kTemp = data.main.temp;
      var windSpeed = data.wind.speed;
    var city = data.name;

    cTemp = (kTemp-273).toFixed(2);

            console.log(city);
            $("#city").html(city);
            $("#weatherType").html(weatherType);
            $("#cTemp").html(cTemp + " &#8451");
            $("#windSpeed").html(windSpeed + " m/s");

            if(cTemp>20) {
              $(".content").css("background-image", "url('https://images.unsplash.com/photo-1431882697221-ccdceda3a7d7?dpr=1&auto=compress,format&fit=crop&w=1567&h=&q=80&cs=tinysrgb&crop=')");
            } else if (cTemp > 10) {
              $(".content").css("background-image", "url('https://images.unsplash.com/uploads/14122598319144c6eac10/5f8e7ade?dpr=1&auto=compress,format&fit=crop&w=1514&h=&q=80&cs=tinysrgb&crop=')");
            }
    });
  });
});