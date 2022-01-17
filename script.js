const searchInput = document.querySelector('#search')
const searchResult = document.querySelector('.table-results')

let dataArray;
async function getUsers(){

    const res = await fetch("https://randomuser.me/api/?nat=fr&results=50")

    const {results}  = await res.json()
    
    dataArray = orderList(results)

}

getUsers();

function orderList(data){

    const orderedData = data.sort((a,b) => {
        if(a.name.last.toLowerCase() < b.name.last.toLowerCase()) {
            return -1; 
            }
        if(a.name.last.toLowerCase() > b.name.last.toLowerCase()) {
            return 1; 
            }
            return 0;
        })

    return orderedData;
}