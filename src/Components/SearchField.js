import React from 'react';

class SearchField extends React.Component{
    constructor(props){
        super(props);
        this.state={
            inputValue:''
        }
    }

    setInput=(event)=>{
        this.setState({inputValue:event.target.value})
    }

    enterHandler=(event)=>{
        if(event.key ==="Enter"){
          this.props.searchResultHandler(this.state.inputValue);
        }
    }

    render() {
        return (
            <div id="searchField">
                <input id="search" onChange={this.setInput} onKeyPress={this.enterHandler}></input>
                <button onClick={()=>this.props.searchResultHandler(this.state.inputValue)}>SEARCH</button>
            </div>
        );    
    }   
}

export default SearchField;
