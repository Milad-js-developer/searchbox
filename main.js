const input = document.querySelector("form input");
const searchBtn = document.querySelector("form button").addEventListener("click", search);

function search(event) {
    event.preventDefault();
    let keySearch = input.value;
    window.open('http://google.com/search?q='+keySearch);
}