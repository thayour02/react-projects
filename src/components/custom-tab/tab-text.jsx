
import Tabs from "./index"
import './style.css'

function RandomText(){
    return  <div>random content</div>
  }
export default function TabText(){
        const tab = [
            {
                label:"tab 1",
                content:<RandomText/>
            },
            {
                    label:"tab 2",
                    content: <div>hello world</div>
            },
            {
                label:"tab 3",
                content: <div>hello Tayo</div>
        }
        ]
        function handleOnchange(){
            console.log(TabText)
        }

    return <Tabs tabsContent={tab} onChange={handleOnchange}/>
}