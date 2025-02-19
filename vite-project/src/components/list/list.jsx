import './list.css'
import { Component } from 'react'

class List extends Component{
    constructor(props){
        super(props)
        this.state = {
            favourite : false,
            liked : false
        }
    }

    clickFav = ()=>{
        this.setState(({favourite})=>({    
            favourite : !favourite
    }))
    }
    clickLike = ()=>{
        this.setState(({liked})=>({    
            liked : !liked
    }))
    }


    render(){
        const {title, viewers} = this.props
        const {favourite, liked} = this.state
        return(
            <li className={`list-group-item d-flex justify-content-between p-4 list ${favourite && 'active'}`}>
                <span onClick={this.clickLike} className='list-group-item-label fw-bold'>{title}</span>
                <div className='d-flex gap-2'>
    
                
                <input type="number" className='list-group-item-input text-center valueinput' defaultValue={viewers} />
                <div className='d-flex justify-content-center align-items-center gap-1'>
                    <button onClick={this.clickFav} type='button' className='btn-cookie btn-sm'>
                        <i className='fas fa-cookie'></i>
                    </button>
                    <button type='button' className='btn btn-trash btn-sm'>
                        <i className="fas fa-trash"></i>
                     </button>
                     <i className={`fas fa-star ${liked && 'show'}`}></i>
                </div>
                </div>
            </li>
        )
    }
}

// function List({title, viewers, favourite}){    
   
// }

export default List