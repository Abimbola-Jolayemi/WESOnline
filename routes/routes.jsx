import Education from "../src/components/Education";
import RewardScreen from "../src/components/RewardScreen";

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