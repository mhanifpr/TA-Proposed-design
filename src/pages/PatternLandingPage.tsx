import { FunctionComponent, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import SearchAppBar from "./Searchbar";

const PatternLandingPage: FunctionComponent = () => {
  const navigate = useNavigate();

  const onHomeButtonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="relative bg-white w-full h-[1514px] overflow-y-auto text-left text-xl text-black font-poppins">
      <div className="absolute top-[727px] left-[0px] bg-white w-[1440px] h-[615px] overflow-hidden text-5xl">
        <div className="absolute top-[333px] left-[58px] w-[253px] h-[190px] flex flex-col items-center justify-center">
          <div className="relative leading-[48px] font-black inline-block w-[117px]">
            Heading 2
          </div>
          <div className="self-stretch relative text-mini leading-[25px] font-extrabold text-center">
            Commodo nec sagittis tortor mauris sed. Turpis tortor quis
            scelerisque diam id accumsan nullam tempus. Pulvinar etiam lacus
            volutpat eu. Phasellus praesent ligula sit faucibus.
          </div>
        </div>
        <div className="absolute top-[333px] left-[400px] flex flex-col items-center justify-center">
          <div className="relative leading-[48px] font-black">Heading 2</div>
          <div className="relative text-mini leading-[25px] font-extrabold inline-block w-[282px] h-[124px] shrink-0">
            Commodo nec sagittis tortor mauris sed. Turpis tortor quis
            scelerisque diam id accumsan nullam tempus. Pulvinar etiam lacus
            volutpat eu. Phasellus praesent ligula sit faucibus.
          </div>
        </div>
        <div className="absolute top-[333px] left-[742px] flex flex-col items-center justify-center">
          <div className="relative leading-[48px] font-black">Heading 2</div>
          <div className="relative text-mini leading-[25px] font-extrabold inline-block w-[282px] h-[124px] shrink-0">
            Commodo nec sagittis tortor mauris sed. Turpis tortor quis
            scelerisque diam id accumsan nullam tempus. Pulvinar etiam lacus
            volutpat eu. Phasellus praesent ligula sit faucibus.
          </div>
        </div>
        <div className="absolute top-[326px] left-[1084px] flex flex-col items-center justify-center">
          <div className="relative leading-[48px] font-black">Heading 2</div>
          <div className="relative text-mini leading-[25px] font-extrabold inline-block w-[282px] h-[124px] shrink-0">
            Commodo nec sagittis tortor mauris sed. Turpis tortor quis
            scelerisque diam id accumsan nullam tempus. Pulvinar etiam lacus
            volutpat eu. Phasellus praesent ligula sit faucibus.
          </div>
        </div>
        <div className="absolute top-[122px] left-[calc(50%_-_150px)] text-29xl leading-[48px] font-black">
          Utopia-Game
        </div>
        <div className="absolute top-[200px] left-[calc(50%_-_389px)] text-mini tracking-[-0.02em] font-extrabold text-center inline-block w-[777px] h-[61px]">
          <p className="m-0">{`Lörem ipsum jongen kvasipyrat, tills bioska dira innan bir och syspel. Epipod isk. Epiktig makronat och tira dekanera vide. Rende immersiv och nar delan nesa pretebel. Kogöl monovalens hisasade vanera. Multina ekogram, kostymrasist krod i megaspeskapet geona fast tranisade. Ulig fysisk cd, eftersom mijässade plaspev bende. Ågena katek eurobävning.. `}</p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">&nbsp;</p>
        </div>
        <div className="absolute top-[36px] left-[683px] text-base leading-[48px] font-black text-cornflowerblue-100 inline-block w-[74px] h-8">
          Overview
        </div>
      </div>
      <img
        className="absolute top-[1299px] left-[0px] w-[1440px] h-[215px] object-cover"
        alt=""
        src="/screen-shot-20230529-at-1504-1@2x.png"
      />
      <div className="absolute top-[0px] left-[0px] w-[1360px] h-73 bg-gray text-center border-1 ">
        <SearchAppBar />
      </div>
      {/* <div className="absolute top-[0px] left-[0px] bg-dodgerblue w-[1360px] h-[73px]" />
      <div className="absolute top-[5px] left-[247px] flex flex-row py-2.5 px-0 items-start justify-start text-white">
        <div className="relative leading-[48px] font-black">Tutorial</div>
      </div>
      <div className="absolute top-[5px] left-[143px] flex flex-row py-2.5 px-0 items-start justify-start text-white">
        <div className="relative leading-[48px] font-black">Home</div>
      </div> */}
      <Link
        className="cursor-pointer [text-decoration:none] absolute top-[0px] left-[1360px] bg-peru w-20 h-[65px]"
        to="/"
        onClick={onHomeButtonClick}
      >
        <img
          className="absolute top-[4px] left-[10px] w-[60px] h-[60px] overflow-hidden"
          alt=""
          src="/bxhome4.svg"
        />
      </Link>
      <div className="absolute top-[94px] left-[0px] w-[1440px] h-[633px] text-29xl">
        <div className="absolute top-[197px] left-[759px] w-[639px] flex flex-col items-start justify-start gap-[26px]">
          <div className="self-stretch relative leading-[48px] font-black">
            <p className="[margin-block-start:0] [margin-block-end:10px]">
              Utopia-Game.
            </p>
            <p className="m-0">Start using our app today.</p>
          </div>
          <div className="self-stretch relative text-mini tracking-[-0.02em] leading-[25px]">
            <span>
              Lörem ipsum jongen kvasipyrat, tills bioska dira innan bir och
              syspel. Epipod isk. Epiktig makronat och tira dekanera vide.
            </span>
            <span className="font-medium">{` `}</span>
            <span>
              skapet geona fast tranisade. Ulig fysisk cd, eftersom mijässade
              plaspev bende. Ågena katek eurobävning.
            </span>
          </div>
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[107px] h-12">
            <div className="absolute h-[81.25%] w-full top-[8.33%] right-[0%] bottom-[10.42%] left-[0%] rounded-8xs bg-gainsboro-200" />
            <div className="absolute top-[0%] left-[18.69%] text-mini leading-[48px] font-extrabold font-poppins text-black text-left">
              Visit Wiki
            </div>
          </button>
        </div>
        <div className="absolute top-[0px] left-[0px] w-[720px] h-[615px]">
          <img
            className="absolute h-[100.08%] w-[181.12%] top-[0%] right-[-81.12%] bottom-[-0.08%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/image-2@2x.png"
          />
        </div>
      </div>
      {/* <img
        className="absolute h-[2.68%] w-[2.81%] top-[1.06%] right-[6.91%] bottom-[96.27%] left-[90.28%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/vector2.svg"
      /> */}
    </div>
  );
};

export default PatternLandingPage;
