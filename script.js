let search = document.querySelector('.search button')
let input = document.querySelector('.search input')

function cheakWheather(city){
    fetch('http://api.weatherapi.com/v1/current.json?key=d31d3c2e594240939d9160935232111&q='+city)
    .then(res=> res.json())
    // .then(data => console.log(data))
    .then(data => {
        
        document.querySelector(".city").innerHTML = data.location.name
        document.querySelector(".humidity").innerHTML = data.current.humidity+'km/h'
        document.querySelector(".windspeed").innerHTML = data.current.wind_kph+'km/h'
        document.querySelector(".temp").innerHTML = data.current.temp_c+'°C'


        
    })
    .catch(error => {
        document.querySelector(".city").innerHTML = "Kuch to Sharm Karo😂"
        document.querySelector(".humidity").innerHTML = '0 km/h'
        document.querySelector(".windspeed").innerHTML = '0 km/h'
        document.querySelector(".temp").innerHTML = 'Aabey Saale'

    })

    
    
}

search.addEventListener('click',()=>{
    cheakWheather(input.value)
})