import React, { useState, useEffect } from 'react'
import './Loader.css';
import SyncLoader from "react-spinners/SyncLoader";

const Test = () => {
    //initlialisation de loading à l'etat false
    const  [loading, setLoading] = useState(false);
    
    

    //loading à true pour afficher la page de chargement
    useEffect(() => {
        setLoading(true)
        //La valeur passe à false au bout de X millsecondes pour ne plus afficher le laoder"
        setTimeout(() => {
            setLoading(false)
        }, 2000)//temps en millisecondes pour le timer
        
    },[])
     
     
    return    (<div class="loader">
                {
                    loading ? //récupère l'etat de loading et affihce le loader si true ou affiche le code de l'application si false
                    
                    <loader>
                        <SyncLoader
                         color={"#36D7B7"} 
                         loading={loading}
                          size={150} />
                     </loader>
                    :


                         <null>
                    
                        </null>
                }
               
                
                </div>)
            

}



export default Test;