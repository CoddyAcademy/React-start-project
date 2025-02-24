import './views.css'
import List from '../list/list'
function Views({data, onDelete}){
    return(
            <ul className='views'>
            {data.map(({title, viewers, favourite, id})=>{
                return(
                    <List onDelete={()=> onDelete(id)} key={id} favourite={favourite} title={title} viewers={viewers} />
                )
            })}
            </ul>
    )
}

export default Views