import { FaSistrix } from "react-icons/fa";
import { GoX } from "react-icons/go";
import {useState} from "react";


export const HeaderInput = () => {
    const [value, setValue] = useState<string>("")

    return (
        <div className="input-wrapper">
            <input 
                value={value} 
                onChange={(e)=> {setValue(e.target.value) }} 
                placeholder="Type somethin to start search" className="header-input" />
            <FaSistrix className="input-icon"/>
            {value &&  <GoX className="input-cross" onClick={()=> setValue("")} /> }
            
        </div>
          
    )
}