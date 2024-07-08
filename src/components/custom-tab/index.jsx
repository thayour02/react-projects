import { useState } from "react"
import './style.css'


export default function Tabs({tabsContent, onChange}){
const [currentTab, setCurrentTab] = useState(0)

function handleOnclick(getCurrentIndex){
    setCurrentTab(getCurrentIndex)
    onChange(getCurrentIndex)
}
    return <div className="wrapper">
        <div className="heading">
            {
                tabsContent.map((tabItem,index) => <div 
                
                onClick={()=>handleOnclick(index)} key={tabItem.label}>
                    <span className={`tab-item ${currentTab === index ? "active" : ""}`} >{tabItem.label}</span>
                </div>)
            }
       
        </div>
        <div style={{color:"red"}}>
            {tabsContent[currentTab] && tabsContent[currentTab].content}
        </div>
       
    </div>
}