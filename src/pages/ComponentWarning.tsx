import { FunctionComponent, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";

const ComponentWarning: FunctionComponent = () => {
  const navigate = useNavigate();

  const onHomeButtonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="relative bg-gainsboro-200 w-full h-[820px] overflow-hidden text-left text-base text-black font-poppins">
      <div className="absolute top-[155px] left-[381px] rounded-11xl bg-white w-[660px] h-[440px]" />
      <div className="absolute top-[279px] left-[427px] rounded bg-lavenderblush w-[585px] h-[61px] text-gray-200">
        <img
          className="absolute top-[6px] left-[10px] w-[25px] h-[25px] overflow-hidden"
          alt=""
          src="/clarityerrorline.svg"
        />
        <div className="absolute top-[6px] left-[38px] tracking-[-0.02em] leading-[25px] font-extrabold">
          Error
        </div>
        <div className="absolute top-[31px] left-[38px] text-smi tracking-[-0.02em] leading-[25px] text-dimgray-200">
          <span className="font-medium">{`This is an error alert - `}</span>
          <span className="font-black">check it out!</span>
        </div>
      </div>
      <div className="absolute top-[471px] left-[427px] rounded bg-oldlace w-[585px] h-[61px] text-saddlebrown-100">
        <img
          className="absolute top-[9px] left-[14px] w-[19px] h-[19px] overflow-hidden"
          alt=""
          src="/bxerror1.svg"
        />
        <div className="absolute top-[6px] left-[38px] tracking-[-0.02em] leading-[25px] font-extrabold">
          Warning
        </div>
        <div className="absolute top-[31px] left-[38px] text-smi tracking-[-0.02em] leading-[25px] text-saddlebrown-200">
          <span className="font-medium">{`This is an error alert - `}</span>
          <span className="font-black">check it out!</span>
        </div>
      </div>
      <div className="absolute top-[206px] left-[691px] text-29xl leading-[48px] font-black">{`#1 `}</div>
      <div className="absolute top-[399px] left-[699px] text-29xl leading-[48px] font-black">
        #2
      </div>
      <Link
        className="cursor-pointer [text-decoration:none] absolute top-[0px] left-[1px] bg-peru w-20 h-[73px]"
        to="/"
        onClick={onHomeButtonClick}
      >
        <img
          className="absolute top-[6px] left-[10px] w-[60px] h-[60px] overflow-hidden"
          alt=""
          src="/bxhome1.svg"
        />
      </Link>
      <b className="absolute top-[26px] left-[calc(50%_-_70px)] text-13xl tracking-[-0.02em]">
        Warning
      </b>
    </div>
  );
};

export default ComponentWarning;
