import Education from "../components/education/Education";
import RewardScreen from "../components/reward/RewardScreen";

const routes = [
    {
        path: "/",
        element: <Education/>
    },
    {
        path: "/rewards",
        element: <RewardScreen/>
    }
]

export default routes;