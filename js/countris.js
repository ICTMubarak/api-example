const loadCountris = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountris(data))
}

const displayCountris = countris => {
    // for(const country of countris){
    //     console.log(country);
    // }
    const countrisContainer = document.getElementById('countris-container');
    countris.forEach(element => {
        // console.log(element);
        const countriesDiv = document.createElement('div');
        countriesDiv.classList.add('country');
        countriesDiv.innerHTML = `
        <h3>Name: ${element.name.common}</h3>
        <p>Capital: ${element.capital ? element.capital[0] : 'No Capital'}</p>
        <button onclick="countryDetail('${element.cca2}')">Details</button>
        `;
        countrisContainer.appendChild(countriesDiv);
        
    });
}



const countryDetail = (coad) => {
    const url = `https://restcountries.com/v3.1/alpha/${coad}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayCountryDetail(data[0]))
}

const displayCountryDetail = oneCountry => {
      const countryDetail = document.getElementById('country-detail');
      countryDetail.innerHTML = `
      <h3>Detail: ${oneCountry.name.common}</h3>
      <img src = ${oneCountry.flags.png}>
      `    
      console.log(oneCountry);
}

loadCountris();