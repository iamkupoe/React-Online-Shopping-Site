import React from 'react';
import BodyData from './BodyData';
import purse from '../../src/images/purse.jpg'
import hndbaggreen from '../../src/images/hndbaggreen.jpg'
import handbag from '../../src/images/handbag.jpg'
import backpack from '../../src/images/backpack.jpg'
import ladiesbag from '../../src/images/ladiesbag.jpg'
import laptopbagg from '../../src/images/laptopbagg.jpg'
import backpackg from '../../src/images/backpackg.jpg'
import walletmen from '../../src/images/walletmen.jpg'
import shoulder from '../../src/images/shoulder.jpg'
import laptopbag from '../../src/images/laptopbag.jpg'
import redpurse from '../../src/images/redpurse.jpg'
import strawhandbag from '../../src/images/strawhandbag.jpg'


const Body = () => {
   
    return(
       <div className="row">
           <div className="col-2">
           <BodyData item="Stylish Purse"
           image={purse}/>
           
           </div>
           
           <div className="col-2">
           <BodyData item="Green Hand Bag"
           image={hndbaggreen}/>
           </div>

           <div className="col-2">
           <BodyData item="Gray Hand Bag"
           image={handbag}/>
           </div>

           <div className="col-2">
           <BodyData item="Blue Backpack"
           image={backpack}/>
           </div> 

           <div className="col-2">
           <BodyData item=" Shoulder Bag"
           image={ladiesbag}/>
           </div> 

           <div className="col-2">
           <BodyData item="Brown Laptop Bag"
           image={laptopbagg}/>
           </div> 

           <div className="col-2">
           <BodyData item="Brown Backpack"
           image={backpackg}/>
           </div> 

           <div className="col-2">
           <BodyData item="Brown Men Wallet"
           image={walletmen}/>
           </div> 

           <div className="col-2">
           <BodyData item="Portable Bag"
           image={shoulder}/>
           </div> 

           <div className="col-2">
           <BodyData item="Gray Laptop Bag"
           image={laptopbag}/>
           </div> 

           <div className="col-2">
           <BodyData item="Red Ladies Purse"
           image={redpurse}/>
           </div> 

           <div className="col-2">
           <BodyData item="Straw Hand Bag"
           image={strawhandbag}/>
           </div> 
       </div>
       
    );

}

export default Body;
