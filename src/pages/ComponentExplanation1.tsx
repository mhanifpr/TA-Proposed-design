import { FunctionComponent, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";

const ComponentExplanation1: FunctionComponent = () => {
  const navigate = useNavigate();

  const onHomeButtonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="relative bg-gainsboro-200 w-full h-[820px] overflow-hidden text-left text-mini text-black font-poppins">
      <div className="absolute top-[117px] left-[calc(50%_-_505px)] rounded-11xl bg-white w-[1010px] h-[510px]" />
      <div className="absolute top-[145px] left-[240px] text-45xl leading-[48px] font-black">
        Heading
      </div>
      <div className="absolute top-[231px] left-[240px] tracking-[-0.02em] leading-[25px] font-medium inline-block w-[711px] h-[101px]">
        <p className="m-0">
          Lörem ipsum jongen kvasipyrat, tills bioska dira innan bir och syspel.
          Epipod isk. Epiktig makronat och tira dekanera vide. Rende immersiv
          och nar delan nesa pretebel. Kogöl monovalens hisasade vanera. Multina
          ekogram, kostymrasist krod i megaspeskapet geona fast tranisade. Ulig
          fysisk cd, eftersom mijässade plaspev bende. Ågena katek eurobävning.
        </p>
        <p className="m-0">{` `}</p>
        <p className="m-0">&nbsp;</p>
        <p className="m-0">&nbsp;</p>
      </div>
      <div className="absolute top-[370px] left-[367px] text-17xl leading-[48px] font-black">
        Heading 2
      </div>
      <div className="absolute top-[438px] left-[367px] tracking-[-0.02em] font-roboto inline-block w-[837px] h-[137px]">
        <p className="m-0">
          Lörem ipsum jongen kvasipyrat, tills bioska dira innan bir och syspel.
          Epipod isk. Epiktig makronat och tira dekanera vide. Rende immersiv
          och nar delan nesa pretebel. Kogöl monovalens hisasade vanera. Multina
          ekogram, kostymrasist krod i megaspeskapet geona fast tranisade. Ulig
          fysisk cd, eftersom mijässade plaspev bende. Ågena katek eurobävning.
        </p>
        <p className="m-0">{` `}</p>
        <p className="m-0">{`Plaktig geogt. Probyliga nera i intrahede, antropocism sisamma. Geohönade fånas hexask. Jimurade lagt. Migyssa onde, samt sår, fafäneska plabel ultrall i nånannanism. Tykysk exotygt revosm nynanat kahet om chippa pesm. Fäniren polyperade teletes der och portfoliometoden i unemusm bire. Reanar gyskap. Du kan vara drabbad. `}</p>
        <p className="m-0">&nbsp;</p>
        <p className="m-0">&nbsp;</p>
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
      <b className="absolute top-[18px] left-[calc(50%_-_96px)] text-13xl tracking-[-0.02em]">
        Explanation
      </b>
    </div>
  );
};

export default ComponentExplanation1;
