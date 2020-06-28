import React from 'react'



const BodyData = ({item, image}) =>{

  

    return(
        
        <div class="card" style={{width:'9rem', height:'18rem', marginTop:'50px', marginRight:'5rem'}}>
          <img src={image} class="card-img-top" alt="" style={{height:"8rem"}}/>
        <div class="card-body" style={{textAlign:'center'}}>
          <h6 class="card-title" style={{fontFamily:'Montserrat'}}>{item}</h6>
          <h6 style={{textAlign:'center'}}><small>1pc</small></h6>
          <a href="#" class="btn btn-primary" style={{width:'100px', borderRadius:'20px', color:'red', fontFamily:'Montserrat', fontStyle:'bold'}}>Cart</a>
        </div>
      </div>
    );
}

export default BodyData;