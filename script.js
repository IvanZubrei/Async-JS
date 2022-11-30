
const container = document.querySelector('.container')

const btn = document.querySelector('button')

const countries__input = document.querySelector('.countries__input')

const errorCountry = document.querySelector('.errorCountry')

const btnEerrorInfo = document.querySelector('.errorInfo')




const baseURL = 'https://api.sampleapis.com/countries/countries';
fetch(baseURL)
  .then(resp => resp.json())
  .then(data => displayData(data))  

function displayData(data) {

  // const json = JSON.stringify(data, null, 2);
  // console.log(JSON.stringify(data, null, 2));
  // console.log(JSON.parse(json));
  
  console.log(data);
  btn.addEventListener('click', (e) => {
    e.preventDefault()
  const countriesName = countries__input.value;  
      let search = countriesName; 
      console.log(search);     
      var i;
     
     for (i = 0; i < data.length; i++) {
         if (data[i].name == search) {
          console.log(data[i].name);
        
         console.log(i);        
         
         container.innerHTML = ` 
         <article class="country">
         <img class="country__img" src=${data[i].media.flag} />         
         <div class="country__data">
           <h3 class="country__name">${data[i].name}</h3>
           <h4 class="country__region">Сокращенное название страны: ${data[i].abbreviation}</h4>
           <p class="country__row">НАСЕЛЕНИЕ: ${(data[i].population / 1000000).toFixed(2)} </p>
           <p class="country__row">ВАЛЮТА: ${data[i].currency}</p>
         </div>
         </article>`
         
         }    
      }                 
         countries__input.value = ''
      })     
}

btnEerrorInfo.addEventListener('click', () => {
  errorCountry.classList.remove('modalOpen');

})

