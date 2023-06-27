import { FunctionComponent, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";

const ComponentTroubleShooting: FunctionComponent = () => {
  const navigate = useNavigate();

  const onHomeButtonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="relative bg-gainsboro-200 w-full h-[1280px] overflow-hidden text-left text-base text-black font-poppins">
      <div className="absolute top-[118px] left-[363px] rounded-11xl bg-white w-[683px] h-[451px]" />
      <div className="absolute top-[227px] left-[409px] rounded bg-mintcream w-[585px] h-[61px] text-darkolivegreen">
        <div className="absolute top-[6px] left-[38px] tracking-[-0.02em] leading-[25px] font-extrabold">
          Success
        </div>
        <div className="absolute top-[31px] left-[38px] text-smi tracking-[-0.02em] leading-[25px] text-dimgray-100">
          <span className="font-medium">{`This is an success alert - `}</span>
          <span className="font-black">check it out!</span>
        </div>
        <img
          className="absolute top-[9px] left-[9px] w-5 h-5 overflow-hidden"
          alt=""
          src="/claritysuccessstandardline.svg"
        />
      </div>
      <div className="absolute top-[413px] left-[409px] rounded bg-aliceblue w-[585px] h-[61px] text-darkslategray-200">
        <div className="absolute top-[6px] left-[38px] tracking-[-0.02em] leading-[25px] font-extrabold">
          Info
        </div>
        <div className="absolute top-[31px] left-[38px] text-smi tracking-[-0.02em] leading-[25px] text-darkslategray-100">
          <span className="font-medium">{`This is an info alert - `}</span>
          <span className="font-black">check it out!</span>
        </div>
        <img
          className="absolute top-[10px] left-[13px] w-[18px] h-[18px] overflow-hidden"
          alt=""
          src="/materialsymbolsinfooutline.svg"
        />
      </div>
      <div className="absolute top-[158px] left-[673px] text-29xl leading-[48px] font-black">{`#1 `}</div>
      <div className="absolute top-[345px] left-[673px] text-29xl leading-[48px] font-black">
        #2
      </div>
      <Link
        className="cursor-pointer [text-decoration:none] absolute top-[0px] left-[0px] bg-peru w-20 h-[73px]"
        to="/"
        onClick={onHomeButtonClick}
      >
        <img
          className="absolute top-[6px] left-[10px] w-[60px] h-[60px] overflow-hidden"
          alt=""
          src="/bxhome.svg"
        />
      </Link>
      <b className="absolute top-[25px] left-[calc(50%_-_133px)] text-13xl tracking-[-0.02em]">
        TroubleShooting
      </b>
    </div>
  );
};

export default ComponentTroubleShooting;
