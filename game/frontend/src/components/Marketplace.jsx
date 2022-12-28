
import React from 'react';

import {useState, useEffect} from 'react'
import Modal from 'react-modal';
import Navbar from './Navbar';

import { future_bg, skeleton, diary, opendiary, key, key_tag, openparchment, parchroll, paper_ball, open_paperball, hint } from "../assets";

import Card from './Card';
import {Web3Storage} from 'web3.storage'

import forebodingABI from "../contracts/ForebodingABI.json"
import {ethers} from "ethers"
Modal.setAppElement('#root');



const provider = new ethers.providers.Web3Provider(window.ethereum);



function Marketplace () {

    const [modalIsOpen, setIsOpen] = React.useState(false);
    
    const [ipfsData, setIpfsData] = useState([])
    let subtitle;

    const client = new Web3Storage({ token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweGFBOEQ0QzMwNmI4ZjhjNjZCMTQyN2Y3NEIzZjlDNTI2YzE0RTFDRWEiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NjkwOTc5NDk3MjksIm5hbWUiOiJ5dXUifQ.t8HIerpToxPT9zgQzsZlAJeCWIBnZqlAaSOoZVkVUnw" })
    const [loading, setLoading] = useState(true)



   

      

    function openModal(e) {
      e.preventDefault()
      console.log("hello")
        setIsOpen(true);
    }
    function afterOpenModal1() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
    }
  
    function closeModal() {
  
        setIsOpen(false);
    }
    

    useEffect( () => {


        

        async function getData(){
            const data = []
            await provider.send("eth_requestAccounts", []);
            var signer = await provider.getSigner();
            const contract = new ethers.Contract('0x9eeF83ebA708c760b9D8f761835a47B9ff200722', forebodingABI, signer);
            
            const market = await contract.getAll()
            console.log(parseInt(market[0]._hex, 16))

            for(var i = 0; i < market.length; i++){
                if(parseInt(market[i]._hex, 16) === 1){
                    var currData = await contract.tokenURI(i);
                    var p = await contract._tokenIdToPrice(i)
                    console.log(currData)
                    var response = await fetch(currData);
                    if(!response.ok)
                        throw new Error(response.statusText);
                        //console.log(response)
                        
                    

                    var json = await response.json();
                    Object.assign(json, {price : p})
                    Object.assign(json, {key : i})
                    Object.assign(json, {tokenId : i})
                    data.push(json)

                    // eslint-disable-next-line no-loop-func
                    //setIpfsData(prevState => [...prevState, json])
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
                            
                          <Card  title={d.title} description={d.description} imageUrl={hint} price={d.price} tokenId= {d.tokenId} key={d.key}  />
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
    )

}

export default Marketplace