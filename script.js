const searchInput = document.querySelector('#search')
const searchResult = document.querySelector('.table-results')

let dataArray;
async function getUsers(){

    const res = await fetch("https://randomuser.me/api/?nat=fr&results=50")

    const results  = await res.json()
    console.log(results);

}

getUsers();