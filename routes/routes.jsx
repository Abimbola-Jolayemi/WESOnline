import Education from "../src/components/education/Education";
import RewardScreen from "../src/components/reward/RewardScreen";

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