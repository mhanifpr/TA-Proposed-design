import { FunctionComponent, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import TextMobileStepper from "./StepText";
import HorizontalLinearStepper from "./HorizontalStepper";

const ComponentProcedure1: FunctionComponent = () => {
  const navigate = useNavigate();

  const onHomeButtonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="relative bg-white w-full h-[1884px] overflow-y-auto text-left text-mini text-black font-poppins">
      <div className="absolute top-[152px] left-[calc(50%_-_103px)] w-[207px] h-[206px]">
        <div className="absolute top-[0px] left-[0px] w-[207px] h-[29px] flex flex-row items-center justify-start gap-[22px]">
          <div className="relative rounded-[50%] bg-gainsboro-200 w-[29px] h-[29px]" />
          <div className="relative tracking-[-0.02em] leading-[25px] font-medium">
            Build Farms and Homes
          </div>
        </div>
        <div className="absolute top-[88px] left-[0px] w-[190px] h-[118px]">
          <div className="absolute top-[1.69%] left-[26.84%] tracking-[-0.02em] leading-[25px] font-medium">
            Build Banks
          </div>
          <div className="absolute top-[77.12%] left-[26.84%] tracking-[-0.02em] leading-[25px] font-medium">
            Do some Exploration
          </div>
          <div className="absolute h-[24.58%] w-[15.26%] top-[0%] right-[84.74%] bottom-[75.42%] left-[0%] rounded-[50%] bg-gainsboro-200" />
          <div className="absolute h-[24.58%] w-[15.26%] top-[75.42%] right-[84.74%] bottom-[0%] left-[0%] rounded-[50%] bg-gainsboro-200" />
        </div>
        <div className="absolute h-[21.84%] w-[1.45%] top-[16.26%] right-[92.51%] bottom-[61.89%] left-[6.04%] box-border border-r-[3px] border-solid border-gainsboro-200" />
        <div className="absolute h-[21.84%] w-[1.45%] top-[61.41%] right-[92.51%] bottom-[16.75%] left-[6.04%] box-border border-r-[3px] border-solid border-gainsboro-200" />
      </div>
      <div className="absolute top-[578px] left-[35px] text-xl tracking-[-0.02em] font-roboto">
        https://mui.com/material-ui/react-timeline/
      </div>
      <div className="absolute top-[604.5px] left-[-2.5px] box-border w-[1445px] h-[5px] border-t-[5px] border-solid border-black" />
      <div className="absolute top-[1313.5px] left-[-2.5px] box-border w-[1445px] h-[5px] border-t-[5px] border-solid border-black" />

      <div className="absolute top-[29px] left-[1342px] text-29xl leading-[48px] font-black">{`#1 `}</div>
      <div className="absolute top-[664px] left-[18px] text-29xl leading-[48px] font-black">
        #2
      </div>
      <div className="absolute top-[1367px] left-[1342px] text-29xl leading-[48px] font-black">
        #3
      </div>
      <Link
        className="cursor-pointer [text-decoration:none] absolute top-[4px] left-[0px] bg-peru w-20 h-[73px]"
        to="/"
        onClick={onHomeButtonClick}
      >
        <img
          className="absolute top-[6px] left-[10px] w-[60px] h-[60px] overflow-hidden"
          alt=""
          src="/bxhome2.svg"
        />
      </Link>

      <div className="absolute top-[843px] left-[400px] w-[776px] h-48 bg-gray text-center">
        <HorizontalLinearStepper />
      </div>

      <div className="absolute top-[1429px] left-[550px] w-[776px] h-48 bg-gray text-center border-1 ">
        <TextMobileStepper />
      </div>
    </div>
  );
};

export default ComponentProcedure1;