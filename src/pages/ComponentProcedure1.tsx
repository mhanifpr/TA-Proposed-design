import { FunctionComponent, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";

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
      <div className="absolute top-[1102px] left-[calc(50%_-_121px)] tracking-[-0.02em] leading-[25px] font-medium">
        https://mui.com/material-ui/react-stepper/
      </div>
      <div className="absolute top-[1884px] left-[calc(50%_-_100px)] tracking-[-0.02em] leading-[25px] font-medium">
        https://mui.com/material-ui/react-stepper/
      </div>
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
      <div className="absolute top-[1429px] left-[538px] w-[400px] flex flex-col items-start justify-start">
        <div className="self-stretch relative h-[50px]">
          <div className="absolute top-[0px] left-[0px] bg-lightgray w-[400px] h-[50px]" />
          <div className="absolute top-[12px] left-[135px] tracking-[-0.02em] leading-[25px] font-medium">
            Build your Buildings
          </div>
        </div>
        <div className="self-stretch relative h-[259px]">
          <div className="absolute top-[0px] left-[0px] bg-gray-100 w-[400px] h-[259px]" />
          <div className="absolute top-[19px] left-[17px] tracking-[-0.02em] leading-[25px] font-medium inline-block w-[372px]">{`Lörem ipsum veheten hexabel, ipp självradikalisering erivis hypohet eurosona. Nun kåde nysk kroska beviledes ifall vana. `}</div>
        </div>
        <div className="self-stretch relative h-[50px]">
          <div className="absolute top-[0px] left-[0px] bg-lightgray w-[400px] h-[50px]" />
          <div className="absolute top-[13px] left-[189px] tracking-[-0.02em] leading-[25px] font-medium">
            1/3
          </div>
          <div className="absolute h-3/6 w-[13%] top-[26%] right-[5.25%] bottom-[24%] left-[81.75%] text-cornflowerblue-200">
            <img
              className="absolute h-[56%] w-[19.23%] top-[20%] right-[0%] bottom-[24%] left-[80.77%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/vector.svg"
            />
            <div className="absolute top-[0px] left-[0px] tracking-[-0.02em] leading-[25px] font-medium">{`Next `}</div>
          </div>
          <div className="absolute h-3/6 w-[12.5%] top-[26%] right-[81.75%] bottom-[24%] left-[5.75%] text-darkgray">
            <img
              className="absolute h-[56%] w-1/5 top-[20%] right-[80%] bottom-[24%] left-[0%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/vector1.svg"
            />
            <div className="absolute top-[0px] left-[18px] tracking-[-0.02em] leading-[25px] font-medium">
              Back
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[843px] left-[352px] w-[776px] h-48 text-white">
        <div className="absolute h-[15.1%] w-[3.74%] top-[42.19%] right-[86.47%] bottom-[42.71%] left-[9.79%]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] bg-cornflowerblue-200" />
          <div className="absolute top-[10.34%] left-[34.48%] tracking-[-0.02em] leading-[25px] font-medium">
            1
          </div>
        </div>
        <div className="absolute h-[15.1%] w-[3.74%] top-[42.19%] right-[56.06%] bottom-[42.71%] left-[40.21%]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] bg-gainsboro-200" />
          <div className="absolute top-[10.34%] left-[34.48%] tracking-[-0.02em] leading-[25px] font-medium">
            2
          </div>
        </div>
        <div className="absolute h-[15.1%] w-[3.74%] top-[42.19%] right-[25.13%] bottom-[42.71%] left-[71.13%]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] bg-gainsboro-200" />
          <div className="absolute top-[10.34%] left-[34.48%] tracking-[-0.02em] leading-[25px] font-medium">
            3
          </div>
        </div>
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-8xs box-border border-[1px] border-solid border-black" />
        <div className="absolute top-[43.23%] left-[14.56%] tracking-[-0.02em] leading-[25px] font-extrabold text-black">
          Build your Buildings
        </div>
        <div className="absolute top-[37.5%] left-[44.85%] tracking-[-0.02em] leading-[25px] font-medium text-black">
          Create Banks
        </div>
        <div className="absolute top-[43.23%] left-[76.55%] tracking-[-0.02em] leading-[25px] font-medium text-black">
          Expand the Land
        </div>
        <div className="absolute top-[50.52%] left-[46.78%] text-smi tracking-[-0.02em] leading-[25px] font-medium text-darkgray">
          Optional
        </div>
        <div className="absolute h-[1.56%] w-[5.8%] top-[49.22%] right-[61.4%] bottom-[49.22%] left-[32.8%] box-border border-t-[3px] border-solid border-gainsboro-200" />
        <div className="absolute h-[1.56%] w-[13.02%] top-[49.22%] right-[29.7%] bottom-[49.22%] left-[57.28%] box-border border-t-[3px] border-solid border-gainsboro-200" />
        <div className="absolute top-[79.69%] left-[86.6%] tracking-[-0.02em] leading-[25px] font-extrabold text-cornflowerblue-200">
          Next
        </div>
        <div className="absolute top-[79.69%] left-[9.79%] tracking-[-0.02em] leading-[25px] font-medium text-darkgray">
          Back
        </div>
      </div>
    </div>
  );
};

export default ComponentProcedure1;
