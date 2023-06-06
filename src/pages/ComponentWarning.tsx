import { FunctionComponent, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";

const ComponentWarning: FunctionComponent = () => {
  const navigate = useNavigate();

  const onHomeButtonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="relative bg-white w-full h-[720px] overflow-hidden text-left text-base text-black font-poppins">
      <div className="absolute top-[160px] left-[calc(50%_-_128px)] text-mini tracking-[-0.02em] leading-[25px] font-medium">
        https://mui.com/material-ui/react-alert/
      </div>
      <div className="absolute top-[234px] left-[67px] rounded bg-lavenderblush w-[585px] h-[61px] text-gray-200">
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
      <div className="absolute top-[234px] left-[745px] rounded bg-oldlace w-[585px] h-[61px] text-saddlebrown-100">
        <img
          className="absolute top-[9px] left-[14px] w-[19px] h-[19px] overflow-hidden"
          alt=""
          src="/bxerror.svg"
        />
        <div className="absolute top-[6px] left-[38px] tracking-[-0.02em] leading-[25px] font-extrabold">
          Warning
        </div>
        <div className="absolute top-[31px] left-[38px] text-smi tracking-[-0.02em] leading-[25px] text-saddlebrown-200">
          <span className="font-medium">{`This is an error alert - `}</span>
          <span className="font-black">check it out!</span>
        </div>
      </div>
      <div className="absolute top-[161px] left-[331px] text-29xl leading-[48px] font-black">{`#1 `}</div>
      <div className="absolute top-[162px] left-[1017px] text-29xl leading-[48px] font-black">
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
    </div>
  );
};

export default ComponentWarning;
