import { FaSistrix } from "react-icons/fa";
import { GoX } from "react-icons/go";
import {useEffect, useState} from "react";

import { setSearchValue } from '../../store/newsSlice';
import { useAppDispatch } from "../../hook";



export const HeaderInput= () => {
    const [searchValue, setValue] = useState("");
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(setSearchValue(searchValue))
    }, [searchValue])


    return (
        <div className="input-wrapper">
            <input 
                value={searchValue} 
                onChange={(e)=> {setValue(e.target.value) }} 
                placeholder="Type somethin to start search" className="header-input" />
            <FaSistrix className="input-icon"/>
            {searchValue &&  <GoX className="input-cross" onClick={()=> setValue("")} /> }
            
        </div>
          
    )
}