import React,{Component} from 'react';
import List from '../List/List';
import Search from '../Search/Search';


class App extends Component{
    constructor(props){
        super(props);
        this.state={
            searchName:''
        };
        this.getSearchName=this.getSearchName.bind(this);
    }
    getSearchName(searchName){
        this.setState({searchName});
    }
    render(){
        return(
            <div className="container">
               <Search getSearchName={this.getSearchName}/>
               <List searchName={this.state.searchName}/>
            </div>
        )
    }
}
export default App