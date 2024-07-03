import { useEffect, useState } from "react"




export default function RandomColor(){
        const [typeOfColor, setTypeOfColor] = useState('hex');
        const [color, setColor] = useState("#000")

        function randomColorUtility(length){
            return Math.floor(Math.random() * length)
        }

        function handleCreateRandHexColor(){
            const hex = [0,1,2,3,4,5,6,7,8,9, 'A','B','C','D','E','F'];
            let hexColor = '#'
            for(let i = 0; i<6; i++){
                hexColor+= hex[randomColorUtility(hex.length)]
            }
            setColor(hexColor)
        }
        function handleCreateRandRgbColor(){
            const r = (randomColorUtility (256))
            const g = (randomColorUtility(256))
            const b = (randomColorUtility(256))

            setColor(`rgb(${r},${g},${b})`)

        }
        useEffect(()=>{
            if(typeOfColor === 'rgb') handleCreateRandRgbColor()
                else handleCreateRandHexColor()
        },[typeOfColor])

    return(
      <div 
      style={{
         with: "100vh",
        height:"100vh",
        background: color,
      }}>
          <button onClick={()=> setTypeOfColor("hex")}>Create Hex</button>
        <button  onClick={()=> setTypeOfColor("rgb")}>Create Rgb</button>


        <button onClick={typeOfColor === 'hex' 
            ? handleCreateRandHexColor 
            : handleCreateRandRgbColor}>
            Generate Random Color
            </button>
            <div style={{
                display:"flex",
                justifyContent:"center",
                alignItems:"center",
                color:"#fff",
                fontSize:"60px",
                marginTop:"50px",
                flexDirection:"column",
                gap:"20px"
            }}>
                <h3>{typeOfColor === 'rgb' ? 'RGB Color' :'hex Color'}</h3>
                <h2>{color}</h2>
            </div>
      </div>
    )

}