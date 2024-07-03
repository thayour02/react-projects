import MenuList from "./menu-list";
import "./style.css"



export default function TreeView({menus = {}}){
    return <ul className="tree-view-container">
        <MenuList list={menus}/>
    </ul>
}