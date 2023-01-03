import {React, useState, useEffect} from 'react';

import forebodingABI from "../contracts/ForebodingABI.json"
import NFTABI from '../contracts/NFTABI.json'
import {ethers} from "ethers"
import BadgeCard from './BadgeCard'
import Navbar from './Navbar';

import {Web3Storage} from 'web3.storage'

import { future_bg, skeleton, diary, opendiary, key, key_tag, openparchment, parchroll, paper_ball, open_paperball, hint, star } from "../assets";



const provider = new ethers.providers.Web3Provider(window.ethereum);



const MyBadges = () => {


    
    const [ipfsData, setIpfsData] = useState([])
    let subtitle;

    
    const [loading, setLoading] = useState(true)

    function check(x, y){
        for(var i = 0; i < 42; i++){
            if(x[i].toLowerCase() !== y[i].toLowerCase()){
                console.log('x is ', x[i])
                console.log('y is ', y[i])
                return false
            }
        }
        return true
    }
    

    


    

    useEffect( () => {


        

        async function getData(){
            const data = []
            await provider.send("eth_requestAccounts", []);
            var signer = await provider.getSigner();
            const contract = new ethers.Contract('0xABC3c9cC5A0B019fb42cd00e62693446D92FaEC8', NFTABI, signer);

            const accounts =await window.ethereum.request({
                method: "eth_requestAccounts",
              });
            

            const tx1 = await contract.getAll(accounts[0]);
            console.log(tx1)
            var x = 0

                 

            for(var i = 0; i < tx1.length; i++){


                if(parseInt(tx1[i]._hex, 16) !== 0){

                    var currData = await contract.tokenURI(i);
                   
                    console.log(currData)
                    var response = await fetch(currData);
                    if(!response.ok)
                        throw new Error(response.statusText);
                        //console.log(response)
                        
                    

                    var json = await response.json();
                    console.log(json)
                    
                    Object.assign(json, {key : i})
                    Object.assign(json, {tokenId : i})

                    data.push(json)
                }


                    
                    
                
                    
                
            }
            setIpfsData(data)
            setLoading(false)
            

        }
        getData()
        
        
    }, [])


  
  
  
  
  
  return(
    <>
    <Navbar />
            
            <div style={{ backgroundColor: 'black', color : 'white', height : '100%' }}>
            
          
            <div className="container">
            <div className="card-grid">

            {(loading === true) ? (<p>Loading</p>) : (

                <>

                

                {
                    
                    ipfsData.map(d => {
                                    
                        return(
                            
                          <BadgeCard  name={d.name} imageUrl={star} tokenId= {d.tokenId} key={d.key}  />
                       )

                      })
                }

                </>
               
            )
}


            
            
                
            </div>

            </div>
            </div>
        
            
        
        </>
  )}

export default MyBadges