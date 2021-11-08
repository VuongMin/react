
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Category from "./pages/Category";
import Home from './pages/Home'
import ProductDetail from "./pages/ProductDetail";
import { StateProvider } from './provides/StateProvider'
import {initialstate,reducer} from './provides/Reducer'
import Navbar from "./components/navbar/Navbar";
import Checkout from "./pages/Checkout";
import Search from "./components/search/Search";
import NavMoibile from "./components/navbar/NavMoibile";
import {useEffect,useState} from 'react'
function App() {
  const [activeMobile, setactiveMobile] = useState(false)
  useEffect(() => {
    //check size screen of desktop
    window.addEventListener('resize',(e)=>{
      const width = e.target.innerWidth
      if(width<1024){
        setactiveMobile(true)
      }else{
        setactiveMobile(false)
      }
    })
    return () => {
      window.removeEventListener('resize',()=>null)
    }
  }, [activeMobile])
  return (
    <StateProvider reducer={reducer} initialstate={initialstate}>
      <Router>
        <div className={activeMobile?"main-wapper mobile":"main-wapper "}>
          <NavMoibile/>
          <Navbar/>
          <Switch>
           
            <Route path="/checkout/" ><Checkout /></Route>
            <Route path="/search/:id" ><Search /></Route>
            <Route path="/category/:id" ><Category /></Route>
            <Route path="/product/:id" ><ProductDetail /></Route>
            <Route exact path="/" ><Home /></Route>
          </Switch>
        </div>

      </Router>
    </StateProvider>
  );
}

export default App;
