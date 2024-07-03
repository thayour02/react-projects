// single
// multiple

import { useState } from "react"
import data from "./data"
import './style.css'

export default function Accordian(){
    const [selected, setSelected]= useState(null);
    const [enableMultiSelction, setEnableMultiSelection] = useState(false);
    const [multiple, setMultiple] = useState([])

    function handleSingleSelection(getCurrentId){
            setSelected(getCurrentId === selected ? null : getCurrentId)
    }
    function handleMultiSelection(getCurrentId){
        let copyMultiple = [...multiple]
        const findIndexOfCurrentId = copyMultiple.indexOf(getCurrentId)
        if(findIndexOfCurrentId === -1) copyMultiple.push(getCurrentId)
            else(copyMultiple.splice(findIndexOfCurrentId, 1))
        setMultiple(copyMultiple)
    }
    console.log()
    return (
        <div className="wrapper">
            <button onClick={()=>setEnableMultiSelection(!enableMultiSelction)}>Enable Multiple selection</button>
            <div className="accordian">
            {data && data.length > 0 ? 
                data.map(dataItem => <div className="item">
                    <div onClick={enableMultiSelction
                    ? () => handleMultiSelection (dataItem.id)
                    :()=>handleSingleSelection(dataItem.id)}
                     className="title">
                    <h3>{dataItem.question}</h3>
                    <span>+</span>
                    </div>
                    {
                        multiple.indexOf(dataItem.id) !== -1 && (
                            <div>{dataItem.answer}</div>
                        )
                    }
                    {
                    selected === dataItem.id ? 
                        <div>{dataItem.answer}</div>
                    : null
                    }
                </div>)
                  
            
            : <div>No Item Found</div>}

            </div>
        </div>
    )
}

