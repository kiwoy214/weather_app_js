const api_key = '0f47babbd417d190f39250634c32c3fc';

export const url = { 
    // endpoint urls
    currentWeather(lat, lon) {
        return `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric`;
    },
    
    geocode(loca) {
        return `https://api.openweathermap.org/geo/1.0/direct?q=${loca}&limit=5`;
    },
};

/**
 * 
 * @param {string} url 
 * @param {function} callback 
 */

export const fetchData = function(url, callback) {
    fetch(`${url}&appid=${api_key}`)
    .then((response) => response.json())
    .then((data) => callback(data))
    .catch((error) => console.log(error));
}