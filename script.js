function loadingData(searchKeyword){
    fetch('https://data.nasa.gov/resource/gh4g-9sfh.json')
    .then(resp => resp.json())
    .then(data => {
        deleteAllChildren(tbody);
        for(let i=0; i<100; i++){
            if(data[i].name.toLowerCase().includes(searchKeyword.toLowerCase())){
                addContents(data[i]);
            }
        }
    });
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

window.onscroll = function() {
    var d = document.documentElement;
    var offset = d.scrollTop + window.innerHeight;
    var height = d.offsetHeight;
  
    console.log('offset = ' + offset);
    console.log('height = ' + height);
  
    if (offset === height) {
      console.log('At the bottom');
    }
  };

let tbody = document.querySelector('#tbody');
loadingData("");
document.querySelector('button').addEventListener('click', ()=>loadingData(document.querySelector('input').value))