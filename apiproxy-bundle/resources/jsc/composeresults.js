// Parse response content from target
var restaurants = JSON.parse(context.getVariable('localRestaurants'));
var weather = JSON.parse(context.getVariable('currentWeather'));

var newResult = {"weather": weather, "restaurants": restaurants};

// set the response content to the new data, weather and restaurants
response.content = JSON.stringify(newResult);
