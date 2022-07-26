import { useState } from "react"
import React from "react";

import babyNamesData from './babyNamesData.json';


function BabyNames(): JSX.Element {
    const [storedFavoriteBabyName, setstoredFavoriteBabyName] = useState<string[]>([]);


   
    const [typedName, setTypedName] =   useState("")
    const addFavoriteTyped = () => {
        babyNamesSorted.filter(babyNamesSorted => babyNamesSorted.includes(typedName)).map((filteredName,index) => (
            <li key={index}>
                {filteredName}
            </li>
        ))
        //confused about props still and if I need one 
    }

 

    const addFavoriteStored = (babyData: string) => {
        setstoredFavoriteBabyName([...storedFavoriteBabyName, `  ${babyData}`]);
    
      };
     

  
    const babyNamesArray = babyNamesData.map((individualNames) => (individualNames.name))
    const babyNamesSorted = babyNamesArray.sort()
    const babyGender = babyNamesData.map((individualNames) => (individualNames.sex))

       
    return(
        
        <>
        
        <input value={typedName} 
         onChange={(event) => {
            setTypedName(event.target.value)
        
          }}
        />        
         {/* <button  
          onClick={() => {
            babyNamesSorted.filter(babyNamesSorted => babyNamesSorted.includes(typedName)).map((filteredName) => (
            `${filteredName} |` 
              
            ))
        }}>Search</button> */}

        <h2>Favorites: {storedFavoriteBabyName}</h2>
        
        <hr/>
        {babyNamesSorted.filter(babyNamesSorted  => babyNamesSorted.includes(typedName)).map((babyData, index) => (<button key={index} 
        style={{
      backgroundColor:  babyGender[ babyNamesData.map(babyNamesData => babyNamesData.name).indexOf(babyData)] === 'f' ? 'pink' : '#ADD8E6'
        }}
        onClick={() => addFavoriteStored(babyData)}> {babyData}  </button> )) 
}
{/* style={{ display: "flex", justifyContent: "space-between" }} */}
    </>
    
    )
}



export default BabyNames;


