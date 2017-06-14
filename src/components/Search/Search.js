import React,{Component} from 'react';
import '../../index.css';
class Search extends Component{
    constructor(props){
        super(props);
        this.getName=this.getName.bind(this);
    }
    getName(){
        let searchName=this.refs.searchName.value;
        this.props.getSearchName(searchName);
    }
    render(){
        return(
            <section className="jumbotron">
                <h3 className="jumbotron-heading">Search Github Users</h3>
                <div>
                    <input ref='searchName' type="text" placeholder="enter the name you search"/>
                    <button onClick={this.getName}>Search</button>
                </div>
            </section>
        )
    }
}
export default Search