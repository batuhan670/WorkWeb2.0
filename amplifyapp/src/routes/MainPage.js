import Overview from "../components/overview/Overview.js"
//import Newsslide from '../components/newsslide/Newsslide.js';
import Shiftshedule from '../components/shiftshedule/Shiftshedule.js';
import MiscMenues from '../components/miscmenu/MiscMenu.js';
import Login from "../logPortal/UserLogin.js";
import { useSelector, useDispatch } from 'react-redux'
import { setUser, clearUser } from "../stores/userStore";

function MainPage() {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.user);
    if (user != null)
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
                <button onClick={() => dispatch(setUser({}))}>Force Login</button>
                <button onClick={() => dispatch(clearUser())}>Logout</button>
            </div>
        );
}
export default MainPage;