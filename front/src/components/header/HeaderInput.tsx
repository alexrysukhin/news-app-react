import { FaSistrix } from "react-icons/fa";
import { GoX } from "react-icons/go";
import {useState} from "react";

interface IHeaderInputProps {
    searchValue: string;
    setSearchValue:(arg: string) => void
}

export const HeaderInput:React.FC<IHeaderInputProps> = ({searchValue,setSearchValue}) => {

    return (
        <div className="input-wrapper">
            <input 
                value={searchValue} 
                onChange={(e)=> {setSearchValue(e.target.value) }} 
                placeholder="Type somethin to start search" className="header-input" />
            <FaSistrix className="input-icon"/>
            {searchValue &&  <GoX className="input-cross" onClick={()=> setSearchValue("")} /> }
            
        </div>
          
    )
}