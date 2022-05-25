import React, { useEffect,useState, useRef  } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Packages from '../components/Packages'
import {getAllPackages} from '../actions/packageActions'
import Loading from './Loading'
import Error from '../components/Error'
import FilterPkg from '../components/FilterPkg'


function HomeScreenPkg() {

  const dispatch = useDispatch()

  const packagestate = useSelector(state=>state.getAllPackagesReducer)
  const {packages, error,loading} = packagestate


  useEffect(() => {
     dispatch(getAllPackages())

  },[])

  const divRef = useRef();
  
  
  


  return (
    <div 
    style={{  
      backgroundImage: "url(" + "https://res.cloudinary.com/vihanga/image/upload/v1651916442/ds/markus-spiske-g5ZIXjzRGds-unsplash_shvxqj.jpg" + ")",
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
    }}
    >
      


      
       <FilterPkg/>
     <button  style={{marginLeft:"90%"}} className="btn btn-primary"
        onClick={() => {
          divRef.current.scrollIntoView({ behavior: "smooth" });
        }}
      > Locate Us
        
      </button>  
      <div className="wrapper" >
    
      
     

        

        {loading && (<h1>Loading...</h1>)}
       
       <div>
    <div className="row justify-content-center">
      {loading ? (<Loading/>) : error ? (<Error error="something went wrong"/>) : (
          packages.map(pack => {

            return <div className="col-md-8 p-1"key={pack._id} >
              <div className="m-3" ref={divRef}>
                <Packages pack={pack}/>
            </div>
            </div >

          })


      )}



</div > 
    
    </div>
    </div >


    </div >
  )
}

export default HomeScreenPkg
