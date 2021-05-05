const request = require('request')
// //Getting the wather report using the map box lat, log
// //const url = 'http://api.openweathermap.org/data/2.5/weather?q=New%20Delhi&appid=82fc1a9156d61d44a238f9b477867790'
// //const url = "api.openweathermap.org/data/2.5/weather?lat="+ MapLog.toString() +"&lon="+ MapLat.toString() + "&appid=82fc1a9156d61d44a238f9b477867790";

//getting wather by Nam eof the city 
//  http://api.openweathermap.org/data/2.5/weather?q=sangli&appid=82fc1a9156d61d44a238f9b477867790
//const url = "https://api.openweathermap.org/data/2.5/weather?lat="+Latitude+"&lon="+logitude+"&appid=82fc1a9156d61d44a238f9b477867790"

const forcast = (adress, callback) =>{
    const url =   'https://api.openweathermap.org/data/2.5/weather?q='+adress+'&appid=82fc1a9156d61d44a238f9b477867790'
  
    request({ url, json: true }, (error, {body}) =>{
            if (error){
                callback('unable to cnect to wather server', undefined);
            }else if(body.massage ){
                callback('unable to find location ', undefined);
            }else{
                callback(undefined, body);
            }
     })
}

module.exports = forcast