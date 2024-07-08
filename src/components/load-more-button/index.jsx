import { useEffect, useState } from "react"

import './style.css'


export default function LoadMoreData(limit= 20) {
    const [loading, setLoading] = useState(false)
    const [products, setProducts] = useState([])
    const [count, setCount] = useState(0)
    const [errorMsg, setErrorMsg] = useState(null)
    const [disableButton, setDisableButton] = useState(false)
    const [scroll, setScroll] = useState(0)

    async function fetchProducts(products) {
        try {
            setLoading(true)

            const response = await fetch(
                `https://dummyjson.com/products?limit=20&skip=${
                 count === 0 ? 0 : count * 20}`)
                const result = await response.json()     
           

            if(result && result.products && result.products.length){
                setProducts([...products,...result.products])
                setLoading(false)
            }
        } catch (error) {
            setErrorMsg(error)
            setLoading(false)
        }
    }
    useEffect(() => {
        fetchProducts(products)
    }, [count])

    useEffect(()=>{
        if(products && products.length === 194) setDisableButton(true)
    },[products])

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
        return <div>Loading Products ! Please Wait</div>
    }
    if(errorMsg){
        return <div>Error loading Products {errorMsg.message}</div>
        
    }
    return <div>
        <div className="top-container">
            <h1>Custom Scroll indicator</h1>
            <div className="scroll-tracking"></div>
            <div className="current-bar" style={{width:`${scroll}%`}}></div>
        </div>
        <div className="load-container">
            <div className="product-Container">
                {products && products.length ? 
                    products.map((Item)=>(
                        <div className="product" key={Item.id}>
                            <img src={Item.thumbnail} alt={Item.title} />
                            <p>{Item.title}</p>
                        </div>
                    ))
                :null}
            </div>
            <div className="button-container">
                    <button disabled={disableButton} 
                    onClick={()=>setCount(count + 1)}>
                        Load More Product</button>        
                        {
                            disableButton ? <p className="limit">You've Reach limit of 194</p>:null
                        }
                </div>
            
    </div>
    </div>
    
}