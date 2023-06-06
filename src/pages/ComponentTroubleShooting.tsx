import { FunctionComponent, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";

const ComponentTroubleShooting: FunctionComponent = () => {
  const navigate = useNavigate();

  const onHomeButtonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="relative bg-white w-full h-[720px] overflow-hidden text-left text-base text-black font-poppins">
      <div className="absolute top-[173px] left-[calc(50%_-_147px)] text-mini tracking-[-0.02em] leading-[25px] font-medium">
        https://mui.com/material-ui/react-alert/
      </div>
      <div className="absolute top-[234px] left-[53px] rounded bg-mintcream w-[585px] h-[61px] text-darkolivegreen">
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
      <div className="absolute top-[234px] left-[745px] rounded bg-aliceblue w-[585px] h-[61px] text-darkslategray-200">
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
      <div className="absolute top-[165px] left-[330px] text-29xl leading-[48px] font-black">{`#1 `}</div>
      <div className="absolute top-[166px] left-[1016px] text-29xl leading-[48px] font-black">
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
          src="/bxhome1.svg"
        />
      </Link>
    </div>
  );
};

export default ComponentTroubleShooting;
