import './addinputs.css'

function AddInputs(){
    return(
        <div className='d-flex'>
            <input type="text" placeholder='Qanday Kino ?' className='form-control p-2' />
            <input type="text" placeholder="Necha marotaba ko'rilgan ?" className='form-control p-2' />
            <button className='btn btn-outline-dark'>Qo'shish</button>
        </div>
    )
}

export default AddInputs