import React from 'react';

const TableRow = ({each}) =>{
    return (
        <tr>
            <td>{each.name}</td>
            <td>{each.id}</td>
            <td>{each.nametype}</td>
            <td>{each.recclass}</td>
            <td>{each.mass}</td>
            <td>{each.fall}</td>
            <td>{each.year}</td>
            <td></td>
            <td></td>
        </tr>
    )
}

const Table =({getData})=>{
    
    return(
        <div id="table">
            <table >
                <thead>
                  <tr id="thead">
                    <th data-type="name">Name</th>
                    <th data-type="id">Id</th>
                    <th data-type="nametype">Name Type</th>
                    <th data-type="recclass">Rec Class</th>
                    <th data-type="mass">Mass(g)</th>
                    <th data-type="fall">Fall</th>
                    <th>Year</th>
                    <th>Latitude</th>
                    <th>Longitude</th>
                  </tr>
                </thead>
                <tbody id="tbody">
                    {
                        getData.map(each=>{
                            return (
                            <TableRow key={each.id} each={each}></TableRow>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    );

    
}


export default Table;

