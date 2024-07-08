import UseLocalStorge from "./useLocalStorage"
import './theme.css'

export default function Theme(){

    const [theme, setTheme] = UseLocalStorge('theme', 'dark')

    function handleToggleTheme(){
        setTheme(theme === 'light' ? 'dark':'light')
    }
    console.log(theme)
    return(
        <div className="theme-container" data-theme={theme}>
            <div className="container">
                <h1>Hello world</h1>
                <button onClick={handleToggleTheme}>Dark/Light</button>
            </div>
        </div>
    )
}