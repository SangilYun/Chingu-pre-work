//global variables
const dataPerPage = 100;
let currPage =0;
let tbody = document.querySelector('#tbody');
let searchInput="";
let searchResult = false;


loadingData(searchInput); //load initial data

document.querySelector('button').addEventListener('click', ()=>{
    initialize();
    searchInput = document.querySelector('input').value;
    loadingData(searchInput)
})

//search input enter listener----------
var input = document.getElementById("searchInput");

// Execute a function when the user releases a key on the keyboard
input.addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("searchButton").click();
  }
});
//---------------------------------------


function initialize(){
    currPage=0;
    searchResult=false;
    deleteAllChildren(tbody);
}

function loadingData(searchKeyword){
    fetch('https://data.nasa.gov/resource/gh4g-9sfh.json')
    .then(resp => resp.json())
    .then(data => {
        for(let i=currPage; i<currPage+dataPerPage; i++){
            if(data[i].name.toLowerCase().includes(searchKeyword.toLowerCase())){
                addContents(data[i]);
                searchResult=true;
            }
        }
        if(!searchResult){
            let tr = document.createElement('tr');
            let td = document.createElement('td');
            td.textContent='no search result'
            td.setAttribute('colspan',9)
            tr.appendChild(td);
            tbody.appendChild(tr);
            return ;
        }
        currPage += dataPerPage;
    })
    .catch(err=>console.log('err',err));
}

function deleteAllChildren(tag){
    var child = tag.lastElementChild;  
        while (child) { 
            tag.removeChild(child); 
            child = tag.lastElementChild; 
        } 
}

function addContents(data){
    let getColumnNames = Array.from(document.querySelectorAll('[data-type]'));
    let tr = document.createElement('tr');
    getColumnNames.map(each=>{
        let key = each.dataset.type;
        let td = document.createElement('td');
        td.textContent = data[key];
        tr.appendChild(td);
        tbody.appendChild(tr);
    });
    //year
    let td = document.createElement('td');
    if(data.year){
        td.textContent = data.year.slice(0,4);
    }
    tr.appendChild(td);

    //latitude
    td = document.createElement('td');
    if(data.geolocation){
        td.textContent = data.geolocation.latitude;
    }
    tr.appendChild(td);

    //longitude
    td = document.createElement('td');
    if(data.geolocation){
        td.textContent = data.geolocation.longitude;
    }
    tr.appendChild(td);

}

const scrollableDiv = document.querySelector('#table');
scrollableDiv.onscroll = function() {
    
    var offset = scrollableDiv.scrollHeight- scrollableDiv.scrollTop;
    var height = scrollableDiv.clientHeight;
  
    if (offset === height) {
        loadingData(searchInput);
    }
};

