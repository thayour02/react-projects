import { useEffect, useState } from "react"
import { Suggestion } from "./sugestion"



export default function SearchAuto(){
    const [loading, setLoading] = useState(false)
    const [users, setUsers] = useState([])
    const [error, setError] = useState(null)
    const [searchParam, setSearchParam] = useState('')
    const [ showDropdown, setShowDropdown] = useState(false)
    const [ filtered, setFiltered] = useState([])

   
//    autocomplete search by filtering the data
    function handleChange(event){
        const query = event.target.value.toLowerCase()
        setSearchParam(query);
        if(query.length > 1){
            const filteredData = 
            users && users.length ? 
            users.filter((item) => item.toLowerCase().indexOf(query) > -1)
            :[];
            setFiltered(filteredData)
            setShowDropdown(true);
        }else{
            setShowDropdown(false)
        }
    }

    // display search in the input
        function handleClick(event){
            setShowDropdown(false)
            setSearchParam(event.target.innerText)
            setFiltered([])
        }

        // fetching data start
    async function fetchUser(){
        setLoading(true)
        try {
            let repo = await fetch(`https://dummyjson.com/users`)
            let data = await repo.json()
            if(data && data.users && data.users.length){
                setUsers(data.users.map(userItem => userItem.firstName))
                setLoading(false)
                setError(null)
            }
        } catch (error) {
            setError(error)
            setLoading(false)
        }
    }

    useEffect(()=>{
        fetchUser()
    },[])
// fetching data ends

    return <div className="search-auto-container">
       {loading ? (
        <h1>Loading Data ! please wait</h1>
       ):(
        <input 
        type="text"
         value={searchParam} 
         name="search-users" 
         placeholder="search users here" 
         onChange={handleChange}/>
       )}
         { 
            showDropdown && <Suggestion handleClick={handleClick} data={filtered}/>
         }
    </div>
}