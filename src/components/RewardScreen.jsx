import wowImg from '../assets/wow-img.png';
import gift from '../assets/gift.png';
import { useNavigate } from 'react-router-dom';

function RewardScreen() {
  const navigate = useNavigate();
    return (
      <div className="bg-lightGray1 h-screen flex justify-center items-center p-4">
        <div className="bg-white w-[400px] p-6 rounded-2xl shadow-lg text-center">
          {/* WOW Image/Icon */}
          <div className="flex justify-center mb-4">
            <img src={wowImg} alt="WOW!" className="w-[150px] h-[150px] sm:w-20 sm:h-20" />
          </div>
  
          {/* Congratulations Text */}
          <h2 className="text-successGreen text-lg sm:text-xl font-mono font-extrabold">Congratulations</h2>
          <p className="text-[16px] font-semibold text-grey1 sm:text-base">You’ve earned 1000 WESPoints</p>
  
          {/* Rewards Section */}
          <div className="bg-blue-100 text-darkBlue p-4 mt-4 rounded-lg">
            <h3 className="text-[18px] font-extrabold font-mono flex items-center justify-center">
              
              <img src={gift} alt="Gift" className="w-6 h-6 sm:w-12 sm:h-12 mr-2" />
              Your Rewards
            </h3>
            <p className="text-lg sm:text-xl font-semibold">2000 WESPoint Unlocked</p>
            <p className="text-base sm:text-sm mt-2">
              Want to know your employability status? Take the ESA with your 2000 WESPoints to get started!
            </p>

            {/* Take ESA Button */}
            <button className="bg-darkBlue text-white px-6 py-2 mt-4 rounded-md w-full hover:bg-blue-700 transition" onClick={()=>navigate("/")}>
              Take ESA
            </button>
          </div>
        </div>
      </div>
    );
}

export default RewardScreen;
