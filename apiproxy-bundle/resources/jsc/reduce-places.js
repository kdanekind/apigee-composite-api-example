var restaurants = JSON.parse(context.getVariable('localRestaurants'));

for(i=0; i < restaurants.length; i++) {
  
  // delete unneeded values
  delete restaurants[i].icon;
  delete restaurants[i].id;
  delete restaurants[i].opening_hours;
  delete restaurants[i].photos;
  delete restaurants[i].place_id;
  delete restaurants[i].reference;
  delete restaurants[i].scope;
  delete restaurants[i].types;
  
  // reassign location
  restaurants[i].location = restaurants[i].geometry.location;
  
  delete restaurants[i].geometry;
}

context.setVariable('localRestaurants', JSON.stringify(restaurants));