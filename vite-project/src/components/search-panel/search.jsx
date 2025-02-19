import './search.css'
import Input from '../input/input'
import Btns from '../btns/btn'

function Search(){
    return(
        <div className='search p-5'>
            <Input />
            <div className='d-flex gap-1'>
            <Btns classes='btn btn-dark rounded-0' title='Barcha kinolar' />
            <Btns classes='btn btn-outline-dark rounded-0' title="Mashxur kinolar" />
            <Btns classes='btn btn-outline-dark rounded-0' title="Eng ko'p ko'rilgan kinolar" />
            </div>
        </div>
    )
}

export default Search