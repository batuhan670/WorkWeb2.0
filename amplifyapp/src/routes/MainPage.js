import Overview from "../components/overview/Overview.js"
//import Newsslide from '../components/newsslide/Newsslide.js';
import Shiftshedule from '../components/shiftshedule/Shiftshedule.js';
import MiscMenues from '../components/miscmenu/MiscMenu.js';
import Login from "../logPortal/UserLogin.js";
import { useSelector, useDispatch } from 'react-redux'
import { login, logout } from "../stores/loginStore";

function MainPage() {
    const dispatch = useDispatch();
    if (useSelector((state) => state.isloggedin.value))
        return (
            <div>
                <Overview />
                <Shiftshedule />
                <MiscMenues />
            </div>
        );
    else
        return (
            <div>
                <Login />
                <button onClick={() => dispatch(login())}>Force Login</button>
                <button onClick={() => dispatch(logout())}>Logout</button>
            </div>
        );
}
export default MainPage;