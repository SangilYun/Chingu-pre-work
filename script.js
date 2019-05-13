fetch('https://data.nasa.gov/resource/gh4g-9sfh.json')
.then(resp => resp.json())
.then(data => {
    for(let i=0; i<20; i++){
        addContents(data[i]);
    }
});

function deleteAllChildren(tag){
    var child = tag.lastElementChild;  
        while (child) { 
            e.removeChild(child); 
            child = e.lastElementChild; 
        } 
}

function addContents(data){
    let tr = document.createElement('tr');
    let td;
    td = document.createElement('td');
    td.textContent = data.name;
    tr.appendChild(td);

    td = document.createElement('td');
    td.textContent = data.id;
    tr.appendChild(td);

    td = document.createElement('td');
    td.textContent = data.nametype;
    tr.appendChild(td);

    td = document.createElement('td');
    td.textContent = data.recclass;
    tr.appendChild(td);

    td = document.createElement('td');
    td.textContent = data.mass;
    tr.appendChild(td);

    td = document.createElement('td');
    td.textContent = data.fall;
    tr.appendChild(td);

    td = document.createElement('td');
    td.textContent = data.year.slice(0,4);
    tr.appendChild(td);

    td = document.createElement('td');
    td.textContent = data.geolocation.latitude;
    tr.appendChild(td);

    td = document.createElement('td');
    td.textContent = data.geolocation.longitude;
    tr.appendChild(td);

    console.log(tbody);
    tbody.appendChild(tr);

}
let tbody = document.querySelector('#tbody');
