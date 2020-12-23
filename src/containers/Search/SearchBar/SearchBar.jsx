import React,{useState, useEffect} from 'react';

const SearchBar = ({input,updateInput}) => {
  
    
  const BarStyling = {width:"20rem",background:"#F2F1F9", border:"none", padding:"0.5rem", height: '3.5rem', borderRadius: '10px',fontSize: '1.5em'};
  
  return (
      <div >
    <input 
     style={BarStyling}
     key="random1"
     value={input}
     placeholder={"search product"}
     onChange={(e) => updateInput(e.target.value)}
    />
    </div>
  );
}

export default SearchBar