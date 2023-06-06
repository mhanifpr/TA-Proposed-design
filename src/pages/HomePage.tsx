import { FunctionComponent, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";

const HomePage: FunctionComponent = () => {
  const navigate = useNavigate();

  const onNavCompClick = useCallback(() => {
    navigate("/component-navigation1");
  }, [navigate]);

  const onProcedureCompClick = useCallback(() => {
    navigate("/component-procedure1");
  }, [navigate]);

  const onLPCompClick = useCallback(() => {
    navigate("/component-landing-page1");
  }, [navigate]);

  const onWarningCompClick = useCallback(() => {
    navigate("/component-warning");
  }, [navigate]);

  const onOverviewCompClick = useCallback(() => {
    navigate("/component-overview1");
  }, [navigate]);

  const onTroubleshootingCompClick = useCallback(() => {
    navigate("/component-troubleshooting");
  }, [navigate]);

  const onExplanationCompClick = useCallback(() => {
    navigate("/component-explanation1");
  }, [navigate]);

  const onLPComp1Click = useCallback(() => {
    navigate("/component-recipe");
  }, [navigate]);

  const onTableCompClick = useCallback(() => {
    navigate("/component-tabel");
  }, [navigate]);

  const onLPComp2Click = useCallback(() => {
    navigate("/component-important-facts");
  }, [navigate]);

  return (
    <div className="relative [background:linear-gradient(180.87deg,_#ffdead,_rgba(255,_222,_173,_0))] w-full h-[720px] overflow-hidden text-left text-mini text-black font-poppins">
      <div className="absolute top-[28px] left-[calc(50%_-_210px)] text-[32px] tracking-[-0.02em] font-black">
        Pattern Library for GameSim
      </div>
      <div className="absolute top-[112px] left-[45px] text-xl tracking-[-0.02em] font-black">{`Component list: `}</div>
      <Link
        className="cursor-pointer [text-decoration:none] absolute top-[155px] left-[45px] rounded-3xs bg-oldlace shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border w-60 h-40 flex flex-col py-5 px-[22px] items-start justify-end gap-[4px] text-[inherit] border-[1px] border-solid border-black"
        to="/component-navigation1"
        onClick={onNavCompClick}
      >
        <div className="relative tracking-[-0.02em] font-black">Navigation</div>
        <div className="relative text-xs tracking-[-0.02em]">1 component</div>
      </Link>
      <Link
        className="cursor-pointer [text-decoration:none] absolute top-[360px] left-[45px] rounded-3xs bg-oldlace shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border w-60 h-40 flex flex-col py-5 px-[22px] items-start justify-end gap-[4px] text-[inherit] border-[1px] border-solid border-black"
        to="/component-procedure1"
        onClick={onProcedureCompClick}
      >
        <div className="relative tracking-[-0.02em] font-black">Procedure</div>
        <div className="relative text-xs tracking-[-0.02em]">3 component</div>
      </Link>
      <Link
        className="cursor-pointer [text-decoration:none] absolute top-[155px] left-[316px] rounded-3xs bg-oldlace shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border w-60 h-40 flex flex-col py-5 px-[22px] items-start justify-end gap-[4px] text-[inherit] border-[1px] border-solid border-black"
        to="/component-landing-page1"
        onClick={onLPCompClick}
      >
        <div className="relative tracking-[-0.02em] font-black">
          Landing Page
        </div>
        <div className="relative text-xs tracking-[-0.02em]">2 component</div>
      </Link>
      <Link
        className="cursor-pointer [text-decoration:none] absolute top-[360px] left-[316px] rounded-3xs bg-oldlace shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border w-60 h-40 flex flex-col py-5 px-[22px] items-start justify-end gap-[4px] text-[inherit] border-[1px] border-solid border-black"
        to="/component-warning"
        onClick={onWarningCompClick}
      >
        <div className="relative tracking-[-0.02em] font-black">Warning</div>
        <div className="relative text-xs tracking-[-0.02em]">2 component</div>
      </Link>
      <Link
        className="cursor-pointer [text-decoration:none] absolute top-[155px] left-[587px] rounded-3xs bg-oldlace shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border w-60 h-40 flex flex-col py-5 px-[22px] items-start justify-end gap-[4px] text-[inherit] border-[1px] border-solid border-black"
        to="/component-overview1"
        onClick={onOverviewCompClick}
      >
        <div className="relative tracking-[-0.02em] font-black">Overview</div>
        <div className="relative text-xs tracking-[-0.02em]">2 component</div>
      </Link>
      <Link
        className="cursor-pointer [text-decoration:none] absolute top-[360px] left-[587px] rounded-3xs bg-oldlace shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border w-60 h-40 flex flex-col py-5 px-[22px] items-start justify-end gap-[4px] text-[inherit] border-[1px] border-solid border-black"
        to="/component-troubleshooting"
        onClick={onTroubleshootingCompClick}
      >
        <div className="relative tracking-[-0.02em] font-black">
          TroubleShooting
        </div>
        <div className="relative text-xs tracking-[-0.02em]">2 component</div>
      </Link>
      <Link
        className="cursor-pointer [text-decoration:none] absolute top-[155px] left-[858px] rounded-3xs bg-oldlace shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border w-60 h-40 flex flex-col py-5 px-[22px] items-start justify-end gap-[4px] text-[inherit] border-[1px] border-solid border-black"
        to="/component-explanation1"
        onClick={onExplanationCompClick}
      >
        <div className="relative tracking-[-0.02em] font-black">
          Explanation
        </div>
        <div className="relative text-xs tracking-[-0.02em]">1 component</div>
      </Link>
      <Link
        className="cursor-pointer [text-decoration:none] absolute top-[360px] left-[858px] rounded-3xs bg-oldlace shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border w-60 h-40 flex flex-col py-5 px-[22px] items-start justify-end gap-[4px] text-[inherit] border-[1px] border-solid border-black"
        to="/component-recipe"
        onClick={onLPComp1Click}
      >
        <div className="relative tracking-[-0.02em] font-black">Recipe</div>
        <div className="relative text-xs tracking-[-0.02em]">1 component</div>
      </Link>
      <Link
        className="cursor-pointer [text-decoration:none] absolute top-[155px] left-[1129px] rounded-3xs bg-oldlace shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border w-60 h-40 flex flex-col py-5 px-[22px] items-start justify-end gap-[4px] text-[inherit] border-[1px] border-solid border-black"
        to="/component-tabel"
        onClick={onTableCompClick}
      >
        <div className="relative tracking-[-0.02em] font-black">Table</div>
        <div className="relative text-xs tracking-[-0.02em]">1 component</div>
      </Link>
      <Link
        className="cursor-pointer [text-decoration:none] absolute top-[360px] left-[1129px] rounded-3xs bg-oldlace shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border w-60 h-40 flex flex-col py-5 px-[22px] items-start justify-end gap-[4px] text-[inherit] border-[1px] border-solid border-black"
        to="/component-important-facts"
        onClick={onLPComp2Click}
      >
        <div className="relative tracking-[-0.02em] font-black">
          Important Fact
        </div>
        <div className="relative text-xs tracking-[-0.02em]">1 component</div>
      </Link>
    </div>
  );
};

export default HomePage;
