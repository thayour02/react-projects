import { useState } from "react"
import Modal from "."


export default function ModalTest(){
    const [showModalPopUp, setShowModalPopUp] = useState(false)

    function handleToggleModalPopUp(){
        setShowModalPopUp(!showModalPopUp)
    }
    return (
    <div>
        <button onClick={handleToggleModalPopUp}>Open Modal Popup</button>
        {showModalPopUp && <Modal 
        body={<div>
             <p style={{color:"Green"}}>hello</p>
             <p style={{color:"white"}}>hello</p>
             <p style={{color:"green"}}>hello</p>
             </div>}/>}
    </div>
    )
}