import './views.css'
import List from '../list/list'
function Views({data}){
    return(
            <ul className='views'>
            {data.map(({title, viewers, favourite, id})=>{
                return(
                    <List key={id} favourite={favourite} title={title} viewers={viewers} />
                )
            })}
            </ul>
    )
}

export default Views