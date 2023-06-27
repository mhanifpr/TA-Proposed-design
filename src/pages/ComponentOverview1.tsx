import { FunctionComponent, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";

const ComponentOverview1: FunctionComponent = () => {
  const navigate = useNavigate();

  const onHomeButtonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="relative bg-gainsboro-200 w-full h-[2011px] overflow-y-auto text-left text-29xl text-black font-poppins">
      <div className="absolute top-[618.5px] left-[-0.5px] box-border w-[1441px] h-px border-t-[1px] border-solid border-black" />
      <div className="absolute top-[1347px] left-[419px] rounded-11xl bg-white w-[679px] h-[617px]" />
      <div className="absolute top-[1379px] left-[352px] leading-[48px] font-semibold">
        #3
      </div>
      <div className="absolute top-[1317.5px] left-[-0.5px] box-border w-[1441px] h-px border-t-[1px] border-solid border-black" />
      <div className="absolute top-[93px] left-[82px] w-[1398px] h-[489px] text-mini">
        <div className="absolute top-[-58px] left-[42px] rounded-11xl bg-white w-[1238px] h-[556px]" />
        <div className="absolute top-[5.52%] left-[4.29%] text-45xl leading-[48px] font-bold">
          Heading 1
        </div>
        <div className="absolute h-[20.65%] w-[41.99%] top-[22.29%] left-[4.29%] tracking-[-0.02em] leading-[25px] font-medium inline-block">
          <p className="m-0">
            Lörem ipsum jongen kvasipyrat, tills bioska dira innan bir och
            syspel. Epipod isk. Epiktig makronat och tira dekanera vide. Rende
            immersiv och nar delan nesa pretebel. Kogöl monovalens hisasade
            vanera. Multina ekogram, kostymrasist krod i megaspeskapet geona
            fast tranisade. Ulig fysisk cd, eftersom mijässade plaspev bende.
            Ågena katek eurobävning.
          </p>
          <p className="m-0">{` `}</p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">&nbsp;</p>
        </div>
        <div className="absolute h-[16.16%] w-[38.48%] top-[50.31%] left-[6.65%] tracking-[-0.02em] leading-[25px] inline-block">
          <span className="font-black">{`Heading 2. `}</span>
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
        <div className="absolute h-[16.16%] w-[38.48%] top-[70.55%] left-[6.65%] tracking-[-0.02em] leading-[25px] inline-block">
          <span className="font-black">{`Heading 2. `}</span>
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
        <img
          className="absolute h-[104.09%] w-[43.63%] top-[-11.86%] right-[12.8%] bottom-[7.77%] left-[48.89%] max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/mask-group@2x.png"
        />
        <div className="absolute top-[0px] left-[-15px] text-29xl leading-[48px] font-semibold">{`#1 `}</div>
      </div>
      <div className="absolute top-[722px] left-[66px] w-[1308px] h-[428px] text-5xl">
        <div className="absolute h-[119.63%] w-[82.8%] top-[2.1%] right-[8.1%] bottom-[-21.73%] left-[9.1%] rounded-11xl bg-white" />
        <div className="absolute h-[46.26%] w-[16.97%] top-[62.38%] right-[69.95%] bottom-[-8.64%] left-[13.07%] flex flex-col items-center justify-center">
          <div className="relative leading-[48px] font-black inline-block w-[137px]">
            Heading 2
          </div>
          <div className="self-stretch relative text-mini leading-[25px] font-medium text-center">
            Commodo nec sagittis tortor mauris sed. Turpis tortor quis
            scelerisque diam id accumsan nullam tempus. Pulvinar etiam lacus
            volutpat eu. Phasellus praesent ligula sit faucibus.
          </div>
        </div>
        <div className="absolute h-[46.26%] w-[17.2%] top-[63.32%] right-[50.23%] bottom-[-9.58%] left-[32.57%] flex flex-col items-center justify-center">
          <div className="relative leading-[48px] font-black">Heading 2</div>
          <div className="self-stretch relative text-mini leading-[25px] font-medium text-center">
            Commodo nec sagittis tortor mauris sed. Turpis tortor quis
            scelerisque diam id accumsan nullam tempus. Pulvinar etiam lacus
            volutpat eu. Phasellus praesent ligula sit faucibus.
          </div>
        </div>
        <div className="absolute h-[46.26%] w-[17.58%] top-[63.32%] right-[30.12%] bottom-[-9.58%] left-[52.29%] flex flex-col items-center justify-center">
          <div className="relative leading-[48px] font-black">Heading 2</div>
          <div className="self-stretch relative text-mini leading-[25px] font-medium text-center">
            Commodo nec sagittis tortor mauris sed. Turpis tortor quis
            scelerisque diam id accumsan nullam tempus. Pulvinar etiam lacus
            volutpat eu. Phasellus praesent ligula sit faucibus.
          </div>
        </div>
        <div className="absolute h-[46.26%] w-[17.51%] top-[63.32%] right-[10.09%] bottom-[-9.58%] left-[72.4%] flex flex-col items-center justify-center">
          <div className="relative leading-[48px] font-black">Heading 2</div>
          <div className="self-stretch relative text-mini leading-[25px] font-medium text-center">
            Commodo nec sagittis tortor mauris sed. Turpis tortor quis
            scelerisque diam id accumsan nullam tempus. Pulvinar etiam lacus
            volutpat eu. Phasellus praesent ligula sit faucibus.
          </div>
        </div>
        <div className="absolute top-[19.86%] left-[39.14%] text-29xl leading-[48px] font-black">
          Utopia-Game
        </div>
        <div className="absolute h-[14.25%] w-[59.4%] top-[35.08%] left-[20.87%] text-mini tracking-[-0.02em] font-medium text-center inline-block">
          <p className="m-0">{`Utopia adalah sebuah permainan daring (online) yang dirancang untuk dimainkan oleh banyak pemain dalam satu waktu. Permainan ini berbasis browser dan berfokus pada simulasi kehidupan di dunia virtual. Dalam permainan ini, 
          pemain akan berperan sebagai seorang Raja atau Ratu yang bertanggung jawab untuk membangun dan mengelola kerajaannya. `}</p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">&nbsp;</p>
        </div>
        <div className="absolute h-[7.48%] w-[5.66%] top-[9.35%] left-[47.78%] text-base leading-[48px] font-medium text-cornflowerblue-100 inline-block">
          Overview
        </div>
        <div className="absolute top-[8.64%] left-[3.75%] text-29xl leading-[48px] font-semibold">
          #2
        </div>
      </div>
      <div className="absolute top-[1379px] left-[459px] w-[639px] flex flex-col py-0 pr-11 pl-0 box-border items-start justify-start gap-[20px]">
        <div className="relative leading-[48px] font-black">Heading 1</div>
        <div className="self-stretch overflow-hidden flex flex-col items-center justify-start text-mini font-roboto">
          <div className="self-stretch relative tracking-[-0.02em]">
            <p className="m-0">
              Lörem ipsum jongen kvasipyrat, tills bioska dira innan bir och
              syspel. Epipod isk. Epiktig makronat och tira dekanera vide. Rende
              immersiv och nar delan nesa pretebel. Kogöl monovalens hisasade
              vanera. Multina ekogram, kostymrasist krod i megaspeskapet geona
              fast tranisade. Ulig fysisk cd, eftersom mijässade plaspev bende.
              Ågena katek eurobävning.
            </p>
            <p className="m-0">{` `}</p>
            <p className="m-0">{`Plaktig geogt. Probyliga nera i intrahede, antropocism sisamma. Geohönade fånas hexask. Jimurade lagt. Migyssa onde, samt sår, fafäneska plabel ultrall i nånannanism. Tykysk exotygt revosm nynanat kahet om chippa pesm. Fäniren polyperade teletes der och portfoliometoden i unemusm bire. Reanar gyskap. Du kan vara drabbad. `}</p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">&nbsp;</p>
          </div>
          <div className="self-stretch overflow-hidden flex flex-col items-start justify-start gap-[20px] mt-[-1px] text-17xl font-poppins">
            <div className="relative leading-[48px] font-black">Heading 2</div>
            <div className="self-stretch relative text-mini tracking-[-0.02em] font-roboto">
              <p className="m-0">
                Lörem ipsum jongen kvasipyrat, tills bioska dira innan bir och
                syspel. Epipod isk. Epiktig makronat och tira dekanera vide.
                Rende immersiv och nar delan nesa pretebel. Kogöl monovalens
                hisasade vanera. Multina ekogram, kostymrasist krod i
                megaspeskapet geona fast tranisade. Ulig fysisk cd, eftersom
                mijässade plaspev bende. Ågena katek eurobävning.
              </p>
              <p className="m-0">{` `}</p>
              <p className="m-0">{`Plaktig geogt. Probyliga nera i intrahede, antropocism sisamma. Geohönade fånas hexask. Jimurade lagt. Migyssa onde, samt sår, fafäneska plabel ultrall i nånannanism. Tykysk exotygt revosm nynanat kahet om chippa pesm. Fäniren polyperade teletes der och portfoliometoden i unemusm bire. Reanar gyskap. Du kan vara drabbad. `}</p>
              <p className="m-0">&nbsp;</p>
              <p className="m-0">&nbsp;</p>
            </div>
          </div>
        </div>
      </div>
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
      <b className="absolute top-[55px] left-[calc(50%_-_76px)] text-13xl tracking-[-0.02em]">
        Overview
      </b>
    </div>
  );
};

export default ComponentOverview1;
