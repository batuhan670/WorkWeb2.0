import Overview from "../components/overview/Overview.js"
//import Newsslide from '../components/newsslide/Newsslide.js';
import Shiftshedule from '../components/shiftshedule/Shiftshedule.js';
import MiscMenues from '../components/miscmenu/MiscMenu.js';
import Login from "../logPortal/UserLogin.js";
import { useSelector } from 'react-redux'

function MainPage() {
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
            <Login />
        );
}
export default MainPage;