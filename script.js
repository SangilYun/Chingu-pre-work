fetch('https://data.nasa.gov/resource/gh4g-9sfh.json')
.then(resp => resp.json())
.then(data => {
    console.log(data[0]);
    console.log(tbody);
    addContents(data[0])

});

function addContents(data){
    let tr = document.createElement('tr');
    let td = document.createElement('td');
    td.textContent = data.name

    tr.appendChild(td);
    tbody.appendChild(tr);

}

let tbody = document.querySelector('#tbody');