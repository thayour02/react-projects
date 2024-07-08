import { useEffect, useState } from "react"
import User from './user'


export default function GitHubProfileFinder(){
    const [userName, setUserName] = useState("sangammukherjee")
    const [userData, setUserData] = useState(null)
    const [loading, setLoading]= useState(true)

    function handleSubmit(){
        fetchGithubData()
    }
    async function fetchGithubData(){
        setLoading(true)

       try {
        let res = await fetch(`https://api.github.com/users/${userName}`)
        let data = await res.json()
            if(data){
                setUserData (data)
                setLoading(false)
                setUserName('')
            }
            console.log(data)
       } catch (error) {
            setLoading(false)
       }
        }
    useEffect(()=>{
        fetchGithubData()
    },[])

    if(loading){
        return <div>Loading Profile Please Wait</div>
    }
    return(
        <div className="profile-container">
            <div className="input-wrapper">
                <input 
                name="search-by-username"
                type="text" 
                placeholder="Search Username"
                value={userName}
                onChange={(event)=>setUserName(event.target.value)}
                />
            </div>

            <button onClick={handleSubmit}>Search</button>
            {
                userData !== null ? <User user={userData}/>:null
            }
        </div>
    )
}