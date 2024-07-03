import { useState } from "react";
import MenuList from "./menu-list";
import {FaPlus, FaMinus} from "react-icons/fa"

export default function MenuItem({item = {}}){
    const [displayCurrentChildren, setDisplayCurrentChildren]= useState({})


    function handleToggleChildren(getCurrentlabel){
       setDisplayCurrentChildren({
        ...displayCurrentChildren,
        [getCurrentlabel]: !displayCurrentChildren[getCurrentlabel],
       })
    }
    return(
        <ul>
            <div style={{display:"flex", gap:"20px", cursor:"pointer",bottom:"20px"}}>
                    <button style={{background:"none", border:"none", fontSize:"30px", display:'flex', gap:"30px"}}>{item.label}</button>
                    {
                        item && item.children && item.children.length ? <span onClick={()=>handleToggleChildren(item.label)}>
                            {
                                displayCurrentChildren[item.label] ? <FaMinus color="#fff" size={25}/> : <FaPlus color="#fff" size={25}/>
                        }
                        </span>
                        :null
                    }
            </div>
                {
                    item && item.children && item.children.length > 0 && displayCurrentChildren[item.label] ? 
                        <MenuList list={item.children}/>
                    :null
                }
        </ul>
    )
}