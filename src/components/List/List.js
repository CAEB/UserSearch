import React,{Component} from 'react';
import axios from 'axios';

class List extends Component{
    constructor(props){
        super(props);
        this.state={
            init:true,
            loading:false,
            user:null,
            error:null
        }
    }
    componentWillReceiveProps(nextProps){
        let url=`https://api.github.com/search/users?q=${nextProps.searchName}`;
        this.setState({
            init:false,
            loading:true
        });
        axios.get(url)
            .then((response)=>{
                this.setState({
                    loading:false,
                    user:response.data.items
                });
            })
            .catch((error)=>{
                this.setState({
                   error:error,
                    loading:false
                });
            })
    }
    render(){
        let {init,loading,user,error}=this.state;
        if(init){
            return <div>enter searchName to search</div>
        }else if(loading){
            return <div>loading......</div>
        }else if(user){
            return (
                <div className="row">
                    {
                        user.map((item,index)=>{
                            return (
                                <div key={index} className="card">
                                    <a href={item.html_url} target="_blank" rel="noopener noreferrer" >
                                        <img src={item.avatar_url} alt='' style={{width:'100px'}}/>
                                    </a>
                                    <p className="card-text">{item.login}</p>
                                </div>
                            )
                        })
                    }
                </div>
            )
        }else{
            console.log(error);
        }

    }
}
export default List