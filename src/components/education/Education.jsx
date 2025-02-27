import gift from "../../assets/gift.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Education() {
  const navigate = useNavigate();
  const [selectedLevel, setSelectedLevel] = useState("100");
  return (
    <div className="bg-lightGray1 min-h-screen flex items-center justify-center p-4">
      <div className="bg-white max-w-[500px] w-full p-6 sm:p-8 rounded-2xl shadow-lg">
        {/* Progress Bar */}
        <div className="h-1 w-full flex justify-between mb-6">
          <div className="w-[100px] h-full bg-darkBlue rounded-full"></div>
          <div className="w-[100px] h-full bg-lightBlue rounded-full"></div>
          <div className="w-[100px] h-full bg-lightBlue rounded-full"></div>
          <div className="w-[100px] h-full bg-lightBlue rounded-full"></div>
        </div>

        {/* Education background header */}
        <div className="h-[93px]">
        <h1 className="text-xl font-bold text-center text-black1">
          Your Education 🎓
        </h1>
        <p className="text-[16px] text-grey1 text-center font-normal">
          Tell us about your academic background
        </p>
        <p className="text-[16px] text-darkBlue font-semibold text-center">
          800 WESPoints remaining to unlock ESA
        </p>
        </div>

        {/* Reward Box */}
<div className="bg-lightBlue text-darkBlue text-[16px] font-extrabold sm:text-base py-2 px-3 sm:py-2 sm:px-4 rounded-md flex items-center mt-4">
  <img src={gift} alt="gift" className="w-5 h-5 sm:w-6 sm:h-6" />
  <span className="ml-2">Your Reward for this step is 200 WESPoints</span>
</div>


        {/* Form */}
        <form className="mt-6 space-y-4">
          <div>
            <label className="block text-sm text-black1 font-medium">
              Name of Institution <span className="text-red1">*</span>
            </label>
            <select className="w-full p-2 border rounded-md text-gray-500 outline-none">
              <option>WESOnline</option>
              <option>Other Institutions</option>
            </select>
          </div>

          <div>
      <label className="block text-sm text-black font-medium">
        Where are you on your journey?{" "}
        <span className="text-red-500">*</span>
      </label>
      <div className="flex items-center border rounded-md overflow-hidden">
        {/* Input with dynamic placeholder */}
        <input
          type="text"
          className="w-full p-2 border-none outline-none text-gray-500 placeholder-gray-400"
          placeholder={selectedLevel}
          readOnly
        />
        <div className="relative">
          <select
            className="bg-transparent p-2 pr-6 outline-none text-gray-500 cursor-pointer"
            onChange={(event) => setSelectedLevel(event.target.value)}
          >
            <option value="">Level</option>
            <option value="Level">Level</option>
            <option value="100">100</option>
            <option value="200">200</option>
            <option value="300">300</option>
            <option value="400">400</option>
          </select>
        </div>
      </div>
    </div>

    <div className="flex gap-4">
  {/* Field of Study */}
  <div className="w-1/2">
    <label className="block text-sm font-medium">
      Field Of Study <span className="text-red-500">*</span>
    </label>
    <input
      type="text"
      className="w-full p-3 border rounded-md text-gray-500 placeholder-gray-400 outline-none focus:ring focus:ring-gray-300"
      placeholder="Chemistry"
    />
  </div>

  {/* GPA */}
  <div className="w-1/2">
    <label className="block text-sm font-medium">
      GPA <span className="text-red-500">*</span>
    </label>
    <input
      type="text"
      className="w-full p-3 border rounded-md text-gray-500 placeholder-gray-400 outline-none focus:ring focus:ring-gray-300"
      placeholder="------"
    />
  </div>
</div>


          <div>
            <label className="block text-sm font-medium">
              What areas interest you most? <span className="text-red-500">*</span>
            </label>
            <select className="w-full p-2 border rounded-md text-gray-500">
              <option>Business & Management</option>
            </select>
          </div>

          {/* Buttons */}
          <div className="flex flex-row justify-between mt-4 space-y-3 sm:space-y-0">
  <button className="font-bold text-black1 text-base">Skip For Now</button>
  <button className="bg-darkBlue text-white font-bold px-4 py-2 rounded-lg w-1/2 sm:w-2/3 md:w-1/3" onClick={(e) => {
    e.preventDefault();
    navigate('/rewards');
  }}>
    Continue
</button>


</div>

        </form>
      </div>
    </div>
  );
}

export default Education;