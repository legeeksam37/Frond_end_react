import React, { useState, useEffect } from 'react'
import './App.css';
import man from "./assets/man.svg";
import woman from "./assets/woman.svg";
import skin from "./assets/skin.svg";
import tshirt from "./assets/t-shirt.svg";
import color1 from "./assets/color-88C10F.svg"
import color2 from "./assets/color-533724.svg"
import color3  from "./assets/color-B2C7C7.svg"
import color4  from "./assets/color-E0A39A.svg"
import color5  from "./assets/color-FCCC84.svg"
import color6  from "./assets/color-FCD7B8.svg"
import color7  from "./assets/color-FF1414.svg"
import color8 from "./assets/color-striped.svg"






const App = () => {
     
    return(   
            <div class="profil">
                <legend>PROFIL</legend>
                    <div class="selection">
                        <h4>Lequel de ces deux avatars préférez-vous ?</h4>
                        <div class="row_avatar">
                                <div class="column">
                                    <img src={man} alt="avatar homme"/>
                                </div>
                                <div class="column">
                                    <img src={woman} alt="avatar femme"/>
                                </div>
                            </div>
                
                            <hr class="separator"/>
                
                        <div class="row_couleur_peau">
                            <div class="column_couleur_peau">
                                    <img src={skin} alt="visage"/>
                                </div>
                                <div class="column_couleur_peau">
                                    <img src={color6} alt="couleur de peau très claire"/>
                                </div>
                                <div class="column_couleur_peau">
                                    <img src={color4} alt="couleur de peau fond de tient"/>
                                </div>
                                <div class="column_couleur_peau">
                                    <img src={color5} alt="couleur de peau jaune"/>
                                </div>
                                <div class="column_couleur_peau">
                                    <img src={color2} alt="couleur de peau noir"/>
                                </div>
                            </div>
                
                
                        <div class="row_couleur_tshirt">
                            <div class="column_couleur_tshirt">
                                    <img src={tshirt} alt="t-shirt" />
                                </div>
                                <div class="column_couleur_tshirt">
                                    <img src={color3} alt="couleur bleu claire"/>
                                </div>
                                <div class="column_couleur_tshirt">
                                    <img src={color1} alt="couleur vert"/>
                                </div>
                                <div class="column_couleur_tshirt">
                                    <img src={color7} alt="couleur rouge"/>
                                </div>
                                <div class="column_couleur_tshirt">
                                    <img src={color8} alt="bleu claire avec rayures bleu foncées"/>
                                </div>
                            </div>
                            
                            <button class="button">VALIDER</button>
                            
                         </div>
                
            </div>)
            

}




export default App;