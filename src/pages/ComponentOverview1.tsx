import { FunctionComponent, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";

const ComponentOverview1: FunctionComponent = () => {
  const navigate = useNavigate();

  const onHomeButtonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="relative bg-white w-full h-[2011px] overflow-y-auto text-left text-29xl text-black font-poppins">
      <div className="absolute top-[616.5px] left-[-2.5px] box-border w-[1445px] h-[5px] border-t-[5px] border-solid border-black" />
      <div className="absolute top-[1315.5px] left-[-2.5px] box-border w-[1445px] h-[5px] border-t-[5px] border-solid border-black" />
      <div className="absolute top-[93px] left-[42px] w-[1398px] h-[489px] text-mini">
        <div className="absolute top-[5.52%] left-[0%] text-45xl leading-[48px] font-black">
          Heading
        </div>
        <div className="absolute h-[20.65%] w-[50.86%] top-[22.09%] left-[0%] tracking-[-0.02em] leading-[25px] font-medium inline-block">
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
        <div className="absolute h-[16.16%] w-[46.57%] top-[50.1%] left-[2.86%] tracking-[-0.02em] leading-[25px] inline-block">
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
        <div className="absolute h-[16.16%] w-[46.57%] top-[70.35%] left-[2.86%] tracking-[-0.02em] leading-[25px] inline-block">
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
          className="absolute h-[104.09%] w-[42.92%] top-[0%] right-[0%] bottom-[-4.09%] left-[57.08%] max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/mask-group@2x.png"
        />
      </div>
      <div className="absolute top-[722px] left-[66px] w-[1308px] h-[428px] text-5xl">
        <div className="absolute h-[46.26%] w-[16.97%] top-[62.38%] right-[79.13%] bottom-[-8.64%] left-[3.9%] flex flex-col items-center justify-center">
        <div className="relative leading-[48px] font-black">Heading 2</div>
          <div className="self-stretch relative text-mini leading-[25px] font-extrabold text-center">
            Tesstt nec sagittis tortor mauris sed. Turpis tortor quis
            scelerisque diam id accumsan nullam tempus. Pulvinar etiam lacus
            volutpat eu. Phasellus praesent ligula sit faucibus.
          </div>
        </div>
        <div className="absolute h-[46.26%] w-[17.2%] top-[63.32%] right-[54.82%] bottom-[-9.58%] left-[27.98%] flex flex-col items-center justify-center">
          <div className="relative leading-[48px] font-black">Heading 2</div>
          <div className="self-stretch relative text-mini leading-[25px] font-extrabold text-center">
            Commodo nec sagittis tortor mauris sed. Turpis tortor quis
            scelerisque diam id accumsan nullam tempus. Pulvinar etiam lacus
            volutpat eu. Phasellus praesent ligula sit faucibus.
          </div>
        </div>
        <div className="absolute h-[46.26%] w-[17.58%] top-[63.32%] right-[27.22%] bottom-[-9.58%] left-[55.2%] flex flex-col items-center justify-center">
          <div className="relative leading-[48px] font-black">Heading 2</div>
          <div className="self-stretch relative text-mini leading-[25px] font-extrabold text-center">
            Commodo nec sagittis tortor mauris sed. Turpis tortor quis
            scelerisque diam id accumsan nullam tempus. Pulvinar etiam lacus
            volutpat eu. Phasellus praesent ligula sit faucibus.
          </div>
        </div>
        <div className="absolute h-[46.26%] w-[17.51%] top-[63.32%] right-[-0.31%] bottom-[-9.58%] left-[82.8%] flex flex-col items-center justify-center">
          <div className="relative leading-[48px] font-black">Heading 2</div>
          <div className="self-stretch relative text-mini leading-[25px] font-extrabold text-center">
            Commodo nec sagittis tortor mauris sed. Turpis tortor quis
            scelerisque diam id accumsan nullam tempus. Pulvinar etiam lacus
            volutpat eu. Phasellus praesent ligula sit faucibus.
          </div>
        </div>
        <div className="absolute top-[10.51%] left-[39.14%] text-29xl leading-[48px] font-black">
          Utopia-Game
        </div>
        <div className="absolute h-[14.25%] w-[59.4%] top-[28.74%] left-[20.87%] text-mini tracking-[-0.02em] font-extrabold text-center inline-block">
          <p className="m-0">{`Lörem ipsum jongen kvasipyrat, tills bioska dira innan bir och syspel. Epipod isk. Epiktig makronat och tira dekanera vide. Rende immersiv och nar delan nesa pretebel. Kogöl monovalens hisasade vanera. Multina ekogram, kostymrasist krod i megaspeskapet geona fast tranisade. Ulig fysisk cd, eftersom mijässade plaspev bende. Ågena katek eurobävning.. `}</p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">&nbsp;</p>
        </div>
        <div className="absolute h-[7.48%] w-[5.66%] top-[0%] left-[47.78%] text-base leading-[48px] font-black text-cornflowerblue-100 inline-block">
          Overview
        </div>
      </div>
      <div className="absolute top-[1464px] left-[66px] w-[999px] flex flex-col items-start justify-start gap-[20px]">
        <div className="relative leading-[48px] font-black">Heading 1</div>
        <div className="self-stretch overflow-hidden flex flex-col items-center justify-start gap-[41px] text-center text-mini font-roboto">
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
          <div className="self-stretch overflow-hidden flex flex-col items-start justify-start gap-[20px] text-left text-17xl font-poppins">
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
      <div className="absolute top-[17px] left-[1361px] leading-[48px] font-black">{`#1 `}</div>
      <div className="absolute top-[652px] left-[37px] leading-[48px] font-black">
        #2
      </div>
      <div className="absolute top-[1355px] left-[1361px] leading-[48px] font-black">
        #3
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
    </div>
  );
};

export default ComponentOverview1;
