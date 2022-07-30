import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";

import { Loader } from "./";

const Welcome = () => {
  const connectWallet = () => {};
  const handleSubmit = () => {};

  const Input = ({ placeholder, value, name, type }) => {
    return (
      <input
        placeholder={placeholder}
        name={name}
        type={type}
        step="0.00001"
        value={value}
        onChange={(e) => handleChange(e, name)}
        className="my-2 w-full rounded-sm p-2 outline-none bg-transparent border-none text-white text-sm white-glassmorphism "
      />
    );
  };

  const commonStyles =
    "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

  return (
    <div className="flex w-full justify-center items-center">
      <div className="flex mf:flex-row flex-col item-start justify-between md:p-20 py-12 px-4">
        <div className="flex flex-1 justify-start flex-col mf:mr-10">
          <div className="md:text-3xl text-5xl text-white text-gradient py-1">
            Send Crypto Across the World
          </div>
          <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base ">
            Explore the Crypto World. Buy and Sell Crypto on Krypto.
          </p>

          <button
            type="button"
            onClick={connectWallet}
            className="flex flow-row justify-center items-center my-5  bg-[#2952e3] p-3 rounded-xl cursor-pointer hover:bg-[#2946bd] text-white font-semibold text-base "
          >
            Connect Wallet
          </button>

          <div className="grid sm:grid-cols-3 grid-cols-2 w-full mt-10 ">
            <div className={`rounded-tl-2xl ${commonStyles} `}>Relaibilty</div>
            <div className={` ${commonStyles} `}>Ethereum</div>
            <div className={`rounded-tr-2xl ${commonStyles} `}>Security</div>
            <div className={`rounded-bl-2xl ${commonStyles} `}>Web3.0</div>
            <div className={` ${commonStyles} `}>Low Fees</div>
            <div className={`rounded-br-2xl ${commonStyles} `}>Blockchain</div>
          </div>
        </div>

        <div className="flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10  ">
          <div className="p-3 justify-end items-start flex flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card white-glassmorphism ">
            <div className="flex justify-between flex-col w-full h-full">
              <div className="flex justify-between item-start">
                <div className=" w-10 h-10 rounded-full border-2 border-white flex justify-center items-center ">
                  <SiEthereum fontSize={21} color="#fff" />
                </div>
                <BsInfoCircle fontSize={17} color="#fff" />
              </div>
              <div>
                <p className="text-white font-light text-sm">
                  0xliojdklfsjfhskjdsfh
                </p>
                <p className="text-white font-semibold text-lg">Ethereum</p>
              </div>
            </div>
          </div>

          <div className="p-5 sm:w-96 w-full flex flex-col justify-start blue-glassmorphism ">
            <Input
              placeholder="Address to"
              name="addressTo"
              type="text"
              handleChange={() => {}}
            />
            <Input
              placeholder="Amount (ETH) "
              name="amount"
              type="number"
              handleChange={() => {}}
            />
            <Input
              placeholder="KeyWord (GIF)"
              name="keyword"
              type="text"
              handleChange={() => {}}
            />
            <Input
              placeholder="Enter Message"
              name="message"
              type="text"
              handleChange={() => {}}
            />
            <div className="h-[1px] w-full bg-gray-400 my-2  " />

            {false ? (
              <Loader />
            ) : (
              <button
                type="button"
                className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] rounded-xl cursor-pointer "
                onClick={handleSubmit}
              >
                {" "}
                Send Now{" "}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
