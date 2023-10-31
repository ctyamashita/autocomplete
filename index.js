// TODO: Autocomplete the input with AJAX calls.
let previousSearch = '';
let index;

document.addEventListener('keyup', (e) => {
  const text = document.querySelector('#search');
  const results = document.querySelector('#results');
  const keyword = text.value;
  const url = `https://wagon-dictionary.herokuapp.com/autocomplete/${keyword}`;

  fetch(url)
    .then(response => response.json())
    .then((data) => {
      results.innerHTML = '';
      if (previousSearch !== results) index = 0;
      if (data.words && data.count !== 0) {
        results.classList.remove('hidden');
        data.words.forEach((word) => {
          const matchLetter = word.replace(keyword, `<strong style="color: firebrick">${keyword}</strong>`);
          results.insertAdjacentHTML('beforeend', `<li><a href="https://www.google.com/search?q=${word}" target="_blank">${matchLetter}</a></li>`);
          previousSearch = results;
        });
      } else if (data.count === 0) {
        results.classList.remove('hidden');
        results.insertAdjacentHTML('beforeend', `<li>No results</li>`);
      } else {
        results.classList.add('hidden');
      }
    });
});

const results = document.querySelector('#results');
// document.addEventListener('click');
