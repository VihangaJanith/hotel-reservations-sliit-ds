import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {addPackage} from '../actions/packageActions'
import Loading from '../components/Loading'
import Error from '../components/Error'
import Success from '../components/Success'
import Swal from 'sweetalert2'

export default function Addpackage() {
  const [name, setname] = useState('')
  const [smallprice, setsmallprice] = useState('')
  const [mediumprice, setmediumprice] = useState('')
  const [largeprice, setlargeprice] = useState('')
  const [image, setimage] = useState('')
  const [description, setdescription] = useState('')
  const [category, setcategory] = useState('')

  const dispatch = useDispatch()
  const addpackagestate = useSelector(state => state.addPackageReducer)
  const {success, error, loading} = addpackagestate

function formHandler(e){
  e.preventDefault()

  const pack ={
    name,
    image,
    description,
    category,
    prices:{
      TwoPerson: smallprice,
      FourPerson: mediumprice,
      Family: largeprice
    }
  }
  console.log(pack)

  dispatch(addPackage(pack));

}


  return (
    <div >
      
      <div className='justify-content-center'  style={{textAlign: 'center', backgroundColor: '#FFF'}}>
      <div  >
        <h2>Add Package</h2>
        {loading && <Loading/>}
       
{success && (<div class="alert alert-success alert-dismissible fade show" role="alert">
<strong>Hotel Package Added Success</strong> 

</div>)}

        <div >
        <form onSubmit={formHandler} 
         className='col-md-7 p-3 m-3 text-left'  style={{display: 'inline-block'}}>
          <input  id="form12" className="form-control" type="text" value={name} placeholder="Name" 
          onChange={(e) =>{setname(e.target.value)} }/>

<input type="text"  className="form-control mt-2 " value={smallprice} placeholder="Two Person Price" 
          onChange={(e) =>{setsmallprice(e.target.value)} }/>

<input type="text"  className="form-control mt-2" value={mediumprice} placeholder="Four Person Price" 
          onChange={(e) =>{setmediumprice(e.target.value)} }/>

<input type="text"  className="form-control mt-2" value={largeprice} placeholder="Family Price" 
          onChange={(e) =>{setlargeprice(e.target.value)} }/>

<input type="text"  className="form-control mt-2" value={image} placeholder="Image" 
          onChange={(e) =>{setimage(e.target.value)} }/>

<input type="text"  className="form-control mt-2" value={description} placeholder="Description" 
          onChange={(e) =>{setdescription(e.target.value)} }/>

<input type="text"  className="form-control mt-2" value={category} placeholder="Category" 
          onChange={(e) =>{setcategory(e.target.value)} }/>

          <br/>

<button type="submit" className="btn btn-success" >
  Add package
</button>


        </form>

      </div>
      </div>
      </div>
      
    </div>
  )
}
