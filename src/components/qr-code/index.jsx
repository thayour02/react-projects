import { useState } from "react";
import QRCode from "react-qr-code";


export default function QrcodeGenerator (){
    const [input, setInput] = useState('')
    const [qrCode, setQrCode]= useState('')

    function handleGenerateCode(){
        setQrCode(input)
    }

   return(
    <div>
        <h1>Thayour QR Code Generator</h1>
        <div>
            <input type="text" name="qr-code" value={input} placeholder="input your value here" onChange={(e)=>setInput(e.target.value)}/>
            <button disabled={input && input.trim() !== "" ? false:true} onClick={handleGenerateCode}>GeneratE Code dude</button>
        </div>
        <div>
            <QRCode
            id="qr-code-value"
            value={qrCode} size={400} bgColor="#fff"
            />
        </div>
    </div>
   )

}