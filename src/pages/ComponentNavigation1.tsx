import { FunctionComponent } from "react";
import { Link } from "react-router-dom";

const ComponentNavigation1: FunctionComponent = () => {
  return (
    <div className="relative bg-white w-full h-[720px] overflow-hidden text-left text-xl text-black font-poppins">
      <Link
        className="cursor-pointer [text-decoration:none] absolute top-[121px] left-[1360px] bg-peru w-20 h-[73px]"
        to="/"
      >
        <img
          className="absolute top-[6px] left-[10px] w-[60px] h-[60px] overflow-hidden"
          alt=""
          src="/bxhome.svg"
        />
      </Link>
      <div className="absolute top-[0px] left-[0px] bg-gainsboro-100 w-[1440px] h-[93px]" />
      <div className="absolute top-[16px] left-[265px] flex flex-row py-2.5 px-0 items-start justify-start">
        <div className="relative leading-[48px] font-black">Tutorial</div>
      </div>
      <div className="absolute top-[16px] left-[383px] flex flex-row py-2.5 px-0 items-start justify-start">
        <div className="relative leading-[48px] font-black">Glossary</div>
      </div>
      <div className="absolute top-[16px] left-[161px] flex flex-row py-2.5 px-0 items-start justify-start">
        <div className="relative leading-[48px] font-black">Home</div>
      </div>
      <img
        className="absolute top-[16px] left-[29px] rounded-[30px] w-[60px] h-[60px] object-cover"
        alt=""
        src="/image-1@2x.png"
      />
    </div>
  );
};

export default ComponentNavigation1;
