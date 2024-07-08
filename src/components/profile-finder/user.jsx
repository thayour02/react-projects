

export default function User({user}){
            <following_url/>
            const {avatar_url,followers,following,public_repos,name,login, created_at} = user;
   
   const createDate = new Date(created_at)
   
   return <div>
        <div>
            <img src={avatar_url} alt="user" className="avatar" />
        </div>
        <div>
            <a href={`https://api.github.com/${login}`}>{name || login}</a>
            <p>user joined on : {`${createDate.getDate({day:'2-digit'})} ${createDate.toLocaleString("en-us",{month:'short',})} ${createDate.getFullYear()}`}</p>
        </div>
        <div>
            <div>
                <p>followers</p>
                <p>{followers}</p>
            </div>
            <div>
                <p>following</p>
                <p>{following}</p>
            </div>
            <div>
                <p>repos</p>
                <p>{public_repos}</p>
            </div>
        </div>
   </div>
}