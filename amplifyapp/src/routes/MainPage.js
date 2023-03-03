import Overview from "../components/overview/Overview.js"
//import Newsslide from '../components/newsslide/Newsslide.js';
import Shiftshedule from '../components/shiftshedule/Shiftshedule.js';
import MiscMenues from '../components/miscmenu/MiscMenu.js';

function MainPage() {
    return (
        <div>
            <Overview />
            <Shiftshedule />
            <MiscMenues />
        </div>
    );
}
export default MainPage;