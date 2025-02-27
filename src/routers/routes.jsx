import Education from "../components/Education"
import RewardScreen from "../components/RewardScreen"

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