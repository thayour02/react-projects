import { useEffect, useState } from "react"
import './style.css'
export default function ScrollIndicator({url}){
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false)
    const [errorMsg, setErrorMsg] = useState("")
    const [scroll, setScroll] = useState(0)
   
    async function fetchData(getUrl){
        try {
            setLoading(true)

            let response = await fetch(getUrl)
            let data= await response.json()

            if(data && data.products && data.products.length){
                setData(data.products)
                setLoading(false)
            }
        }catch (error){
            setErrorMsg(error.message)
            setLoading(false)
        }
        
    }

    useEffect(()=>{
       fetchData(url)
    },[url])

    function handleScroll(){
        console.log(document.body.scrollTop, document.documentElement.scrollTop, document.documentElement.scrollHeight,document.documentElement.clientHeight)


        const howMuchScrolled = document.body.scrollTop || 
        document.documentElement.scrollTop;

        const height = document.documentElement.scrollHeight -
         document.documentElement.clientHeight;


         setScroll((howMuchScrolled/height)*100)
    }

    useEffect(()=>{
        window.addEventListener('scroll', handleScroll)
        return()=>{
            window.removeEventListener('scroll', ()=>{})
        }
    },[])
    if(loading){
        return <div>Loading Please wait</div>
    }    
    if(errorMsg){
        return <div>error{errorMsg}</div>
    }
    return <div>
        <div className="top-container">
            <h1>Custom Scroll indicator</h1>
            <div className="scroll-tracking"></div>
            <div className="current-bar" style={{width:`${scroll}%`}}></div>
        </div>
      
            <div className="data-container" style={{marginTop:"120px", position:"relative"}}>
                {/* { 
                data && data.length > 0  ?
                data.map(dataItem=><p>{dataItem.title}</p>)
                :null} */}
                <p>heloo</p>
                <p>heloo</p>
                <p>heloo</p>
                <p>heloo</p>
                <p>heloo</p>
                <p>heloo</p>
                <p>heloo</p>
                <p>heloo</p>
                <p>heloo</p>
                <p>heloo</p>
                <p>heloo</p>
                <p>heloo</p>
                <p>heloo</p>
                <p>heloo</p>
                <p>heloo</p>
                <p>heloo</p>
                <p>heloo</p>
                <p>heloo</p>
                <p>heloo</p>


            </div>
    </div>
}