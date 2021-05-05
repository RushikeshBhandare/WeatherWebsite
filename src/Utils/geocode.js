const request = require('request')

const geocode = (adress, callback)=>{
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(adress) + 'Los%20Angeles.json?access_token=pk.eyJ1IjoicnVzaGlrZXNoYmhhbmRhcmUiLCJhIjoiY2tvNnd2aXJpMWozZzJ1bHJva2s5bDkydyJ9.C_Bal2pCU44BOhbjMID7XQ&limit=1'
    request({url, json: true}, (error, {body})=>{
        if(error){
            callback('Unable to connect to location Sevices !', undefined)
        }else if(body.features.length === 0){
            callback('unable to find the location search another search ', undefined)
        } else{
            callback(undefined, {
                Latitude : body.features[0].center[1],
                Logitude : body.features[0].center[0],
                Location : body.features[0].place_name
            })
        }
    })
}



module.exports = geocode