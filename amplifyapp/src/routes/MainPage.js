import Overview from "../components/overview/Overview.js"
//import Newsslide from '../components/newsslide/Newsslide.js';
import Shiftshedule from '../components/shiftshedule/Shiftshedule.js';
import MiscMenues from '../components/miscmenu/MiscMenu.js';
import Login from "../logPortal/UserLogin.js";
import { useSelector, useDispatch } from 'react-redux'
import { setUser } from "../stores/userStore";

function MainPage() {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.user);
    const forcedUser = {
        id: 3, email: "Mc@Test.net", password: "3",
        name: "McTest", phone: "0815 4711", department: "IT",
        position: "Dummy", manager_IDemployees: 1, created_at: "2023-03-03T09:42:45.000Z"
    }
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
                <button onClick={() => dispatch(setUser(forcedUser))}>Force Login</button>
            </div>
        );
}
export default MainPage;