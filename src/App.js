import React from 'react';
import SearchField from './Components/SearchField'
import Table from './Components/Table'
import './style.css'

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
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

  getSearchResult=(keyword)=>{
    let data = this.state.meteoriteData;
    let filtered = data.filter(each=>{
      if(keyword){
        return each.name.toLowerCase().includes(keyword.toLowerCase())
      }else{
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
            <SearchField searchResultHandler={this.getSearchResult} enterListener = {this.enterHandler}></SearchField>
            <Table getData={this.state.filtered}></Table>
          </div>
      )
    }
  }

export default App;
