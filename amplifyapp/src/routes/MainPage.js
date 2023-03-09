import Overview from "../components/overview/Overview.js"
//import Newsslide from '../components/newsslide/Newsslide.js';
import Schiftshedule from '../components/shiftschedule/Shiftschedule.js';
import MiscMenues from '../components/miscmenu/MiscMenu.js';
import Login from "../logPortal/UserLogin.js";
import { useSelector } from 'react-redux'


function MainPage() {
    const user = useSelector((state) => state.user.user);
    if (user != null)
        return (
            <div>
                <Overview />
                <Schiftshedule />

                <MiscMenues />
            </div>
        );
    else
        return (
            <Login />
        );
}

//

export default MainPage;