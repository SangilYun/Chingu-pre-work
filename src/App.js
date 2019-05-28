import React from 'react';
import SearchField from './Components/SearchField'
import Table from './Components/Table'
import './style.css'

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      searchInput : "",
      meteoriteData: [],
      filtered: [],
    }
  }

  componentDidMount(){
    fetch('https://data.nasa.gov/resource/gh4g-9sfh.json')
    .then(resp => {
        return resp.json()
    })
    .then(data => this.setState({
      meteoriteData : data
    }, ()=>this.getSearchResult()))
    .catch(err=>console.log('err',err));
    
  }

  setSearchInput=(event)=>{
    this.setState({
        searchInput:event.target.value
    })
  }

  getSearchResult=()=>{
    
    let data = this.state.meteoriteData;
    let keyword = this.state.searchInput;

    let filtered = data.filter(each=>{
      if(each.name.toLowerCase().includes(keyword.toLowerCase())){
        return each;
      }
    })
    
    this.setState({filtered});
  }

  render(){
      return (
        <div id="mainContainer">
          <div id="header">
            <h2>Meteorite Explorer</h2>
          </div>
          
          <SearchField searchInputHandler = {this.setSearchInput} searchResultHandler={this.getSearchResult}></SearchField>
          
          <Table getData={this.state.filtered}></Table>
          </div>
      )
    }
  }

export default App;
