import './App.css'
import Addlist from './components/AddList/addlist'
import Info from './components/Info/info'
import Search from './components/search-panel/search'
import Views from './components/Views/views'






function App(){
    const data = [
        {title : "Empire of Osman", viewers : 970, favourite: true, id : 1},
        {title : "Umar Ibn Hattob", viewers : 670,  favourite: false, id:2},
        {title : "Ertugrul", viewers : 989,  favourite: false, id:3},
    ]
    return(
        <div>
            <Info />
            <Search />
            <Views data={data} />
            <Addlist />
        </div>
    )
}

export default App