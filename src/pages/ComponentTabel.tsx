import { FunctionComponent, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import StickyHeadTable from "./Tabelfunc";

const ComponentTabel: FunctionComponent = () => {
  const navigate = useNavigate();

  const onHomeButtonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="relative rounded-3xs bg-gainsboro-200 w-full h-[820px] overflow-hidden text-left text-lg text-black font-poppins">
      <div className="absolute top-[634px] left-[1148px] w-3 h-3 overflow-hidden" />
      <div className="absolute top-[634px] left-[1136px] w-3 h-3 overflow-hidden" />
      <div className="absolute top-[592px] left-[724px] w-[490px] flex flex-row items-center justify-between text-mini"/>
        <div className="w-[489.8px] overflow-hidden shrink-0 flex flex-row items-start justify-between"/>
          <div className="w-[185.24px] h-[25px] overflow-hidden shrink-0 flex flex-row items-center justify-start gap-[5px]"/>
            
      <div className="absolute top-[686px] left-[12px] text-mini tracking-[-0.02em] leading-[25px] font-medium">
        https://mui.com/material-ui/react-table/
      </div>

      <div className="absolute top-[90px] left-[200px] w-[1000px] h-[160px]"><StickyHeadTable/></div>
      <Link
        className="cursor-pointer [text-decoration:none] absolute top-[0px] left-[0px] bg-peru w-20 h-[73px]"
        to="/"
        onClick={onHomeButtonClick}
      >
        <img
          className="absolute top-[6px] left-[10px] w-[60px] h-[60px] overflow-hidden"
          alt=""
          src="/bxhome2.svg"
        />
      </Link>
      <b className="absolute top-[18px] left-[638px] text-13xl tracking-[-0.02em]">
        Tabel
      </b>
    </div>
  );
};

{/* <div className="relative tracking-[-0.02em] leading-[25px] font-medium inline-block w-[130.27px] shrink-0">
              Rows per page:
            </div>
            <div className="rounded-3xs bg-white box-border w-[49px] h-[23px] flex flex-row py-0 px-[9.56076717376709px] items-center justify-start gap-[7px] border-[1px] border-solid border-gray-300">
              <div className="relative tracking-[-0.02em] leading-[25px] font-medium inline-block w-[10.76px] shrink-0">
                3
              </div>
              <img
                className="relative w-[10.13px] h-[6.09px]"
                alt=""
                src="/vector2.svg"
              />
            </div>
          </div>
          <div className="w-[205.56px] h-[26px] overflow-hidden shrink-0 flex flex-row items-center justify-start gap-[5px]">
            <div className="relative tracking-[-0.02em] leading-[25px] font-medium inline-block w-[69.32px] shrink-0">
              1-3 of 30
            </div>
            <img
              className="relative w-[130.27px] h-[23px]"
              alt=""
              src="/group-1.svg"
            />
          </div>
        </div>
      </div>
      <div className="absolute top-[173px] left-[272px] w-[942px] h-[88px] font-inter">
        <div className="absolute top-[calc(50%_-_33px)] left-[calc(50%_-_471px)] mix-blend-normal">
          Lorem
        </div>
        <div className="absolute top-[calc(50%_-_33px)] left-[calc(50%_-_300px)] mix-blend-normal">
          Lorem
        </div>
        <div className="absolute top-[calc(50%_-_33px)] left-[calc(50%_-_81px)] mix-blend-normal">
          0.0724
        </div>
        <div className="absolute top-[calc(50%_-_44px)] left-[calc(50%_+_100px)] inline-block w-[371px] mix-blend-normal">
          Lorem ipsum dolor sit amet consectetur. Bibendum viverra amet sed at
          sagittis. Et augue sit rhoncus orci lobortis mi tincidunt. Ultrices
          blandit suscipit.
        </div>
      </div>
      <div className="absolute top-[444px] left-[272px] w-[935px] h-[88px] font-inter">
        <div className="absolute top-[calc(50%_-_4px)] left-[calc(50%_-_77.5px)] mix-blend-normal">
          0.0262
        </div>
        <div className="absolute top-[calc(50%_-_44px)] left-[calc(50%_+_104.5px)] inline-block w-[363px] mix-blend-normal">
          Lorem ipsum dolor sit amet consectetur. Morbi tristique nunc fringilla
          eleifend porta. In massa ac turpis elementum pretium. Pulvinar
          pharetra nibh.
        </div>
        <div className="absolute top-[calc(50%_-_4px)] left-[calc(50%_-_467.5px)] mix-blend-normal">
          Lorem
        </div>
        <div className="absolute top-[calc(50%_-_4px)] left-[calc(50%_-_296.5px)] mix-blend-normal">
          Lorem
        </div>
      </div>
      <div className="absolute top-[300px] left-[272px] w-[935px] h-[88px] font-inter">
        <div className="absolute top-[calc(50%_-_4px)] left-[calc(50%_-_77.5px)] mix-blend-normal">
          0.0262
        </div>
        <div className="absolute top-[calc(50%_-_44px)] left-[calc(50%_+_104.5px)] inline-block w-[363px] mix-blend-normal">
          Lorem ipsum dolor sit amet consectetur. Morbi tristique nunc fringilla
          eleifend porta. In massa ac turpis elementum pretium. Pulvinar
          pharetra nibh.
        </div>
        <div className="absolute top-[calc(50%_-_4px)] left-[calc(50%_-_467.5px)] mix-blend-normal">
          Lorem
        </div>
        <div className="absolute top-[calc(50%_-_4px)] left-[calc(50%_-_296.5px)] mix-blend-normal">
          Lorem
        </div>
      </div>
      <div className="absolute top-[115px] left-[250px] w-[964px] h-[35px] text-xl">
        <div className="absolute top-[calc(50%_-_17.5px)] left-[calc(50%_-_460px)] font-black mix-blend-normal">
          Type
        </div>
        <div className="absolute top-[calc(50%_-_17.5px)] left-[calc(50%_-_289px)] font-black mix-blend-normal">
          Effect
        </div>
        <div className="absolute top-[calc(50%_-_17.5px)] left-[calc(50%_-_70px)] font-black mix-blend-normal">
          Multiplier
        </div>
        <div className="absolute top-[calc(50%_-_17.5px)] left-[calc(50%_+_140px)] font-black mix-blend-normal">
          Explanation
        </div>
        <div className="absolute top-[34px] left-[-1px] box-border w-[966px] h-0.5 border-t-[2px] border-solid border-silver" />
      </div> */}
      
export default ComponentTabel;
