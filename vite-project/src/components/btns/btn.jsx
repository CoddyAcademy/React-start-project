import './btn'

function Btns({title, classes}){
    return(
        <div className='mt-2'>
            <button className={classes} >{title}</button>
        </div>
    )
}

export default Btns