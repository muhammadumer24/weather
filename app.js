let input = document.querySelector('input')
let city=document.querySelector('.hide')
// let lati=0
// let long=0
let prevInput=''

//getting geolocation when pressing enter
input.addEventListener('keypress', (e)=>{
  if(e.key==="Enter"){
    prevInput=input.value
        let p =fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${input.value}&limit=5&appid=8921e90e1f2b36e32fa457595dc36c70`)
p.then((response)=>{
  return response.json()
})
//inserting search data
.then((response)=>{
  let {lat,lon}=response[0]
  let pr=fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=8921e90e1f2b36e32fa457595dc36c70`)
  pr.then((response)=>{
    return response.json()
  }).then((response)=>{
    //displying weather data
    console.log(response)
    let weatherReport={
      cityName:response.name,
      temp:response.main.temp,
      feelLike:response.main.feels_like,
      sky:response.weather[0].main,
      humidity:response.main.humidity,
    }
    let div=document.getElementById('result').children
    div[0].innerHTML=""
    div[0].innerHTML=`City: ${weatherReport.cityName}`
    div[1].innerHTML=''
    div[1].innerHTML=`Temperature: ${weatherReport.temp}\u00B0C`
    div[2].innerHTML=''
    div[2].innerHTML=`Feels Like: ${weatherReport.feelLike}\u00B0C`
    div[3].innerHTML=''
    div[3].innerHTML=`Sky: ${weatherReport.sky}`
    div[4].innerHTML=''
    div[4].innerHTML=`Humidity: ${weatherReport.humidity}`
  })
})
}})
