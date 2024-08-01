

const btnOne = document.getElementById("buttonOne");
const btnTwo = document.getElementById("buttonTwo");

const API_KEY = 'b842wUFvm5OiM83OfSytrIqkx30fwGi2NHmHFySabZ48MsxCqlgfPxmM';

const options = {
  method: 'GET',
  headers: {
    Authorization: API_KEY
  }
};

const fetchImages = (query) => {
  const url = `https://api.pexels.com/v1/search?query=${query}`;
  fetch(url, options)
    .then(response => response.json())
    .then(response => {
      console.log(response);
      document.getElementById("images").innerHTML = response.photos.map(elem => {
        return `
          <div class="card mx-auto m-2 bg-dark" style="width: 18rem">
            <img src="${elem.src.medium}" class="card-img-top w-100 h-50" alt="${elem.alt}">
            <div class="card-body mt-5 mt-5">
              <h5 class="card-title text-primary">${elem.alt}</h5>
              <h6 class="card-text text-light">${elem.photographer}</h6>
            </div>
          </div>
        `;
      }).join('');
    })
    .catch(error => {
      console.error('Errore:', error);
    });
};

btnOne.addEventListener("click", () => {
  document.getElementById("images").classList.remove('d-none');
  fetchImages('gatti');
});

btnTwo.addEventListener("click", () => {
  document.getElementById("images").classList.remove('d-none');
  fetchImages('cani');
});
  


 

 





