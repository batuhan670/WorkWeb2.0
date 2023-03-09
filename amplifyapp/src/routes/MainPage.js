import Overview from "../components/overview/Overview.js"

import Schiftshedule from '../components/shiftschedule/Shiftschedule.js';
import MiscMenues from '../components/miscmenu/MiscMenu.js';
import Login from "../logPortal/UserLogin.js";
import { useSelector } from 'react-redux'
import Newsslide from "../components/newsslide/Newsslide.js";


function MainPage() {
    const user = useSelector((state) => state.user.user);
    if (user != null)
        return (
            <div>
                <Overview />
                <Schiftshedule />
                <Newsslide />
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