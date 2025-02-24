import { Component } from 'react'
import './App.css'
import Addlist from './components/AddList/addlist'
import Info from './components/Info/info'
import Search from './components/search-panel/search'
import Views from './components/Views/views'



class App extends Component{
    constructor(props){
        super(props)
        this.state = {
            data : [
               {title : "Empire of Osman", viewers : 970, favourite: true, id : 1},
               {title : "Umar Ibn Hattob", viewers : 670,  favourite: false, id:2},
               {title : "Ertugrul", viewers : 989,  favourite: false, id:3},
           ]
        }
    }
    
    onDelete = (id)=>{
        console.log(id);
        
       this.setState(({data})=>{
        return {
            data : data.filter((c)=> c.id !== id)
        }
       })
    }

    addForm = (item)=>{
        this.setState(({data})=>({
            data : [...data, item]
        }))
    }
    render(){
        const {data} = this.state
      return(
        <div>
            <Info />
            <Search />
            <Views data={data} onDelete={this.onDelete} />
            <Addlist addForm={this.addForm} />
        </div>
    )
    }
}

export default App