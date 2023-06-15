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

  const onProcedureComp1Click = useCallback(() => {
    navigate("/pages-guide");
  }, [navigate]);

  const onProcedureComp2Click = useCallback(() => {
    navigate("/pages-formula");
  }, [navigate]);

  const onProcedureComp3Click = useCallback(() => {
    navigate("/pattern-landing-page");
  }, [navigate]);

  const onProcedureComp4Click = useCallback(() => {
    navigate("/pages-list");
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
    <div className="relative bg-white w-full h-[720px] overflow-hidden text-left text-mini text-black font-poppins">
      <div className="absolute top-[0px] left-[0px] w-[1440px] h-[83px] text-13xl text-white">
        <div className="absolute top-[0px] left-[0px] bg-dodgerblue w-[1440px] h-[83px]" />
        <b className="absolute top-[19px] left-[calc(50%_-_207px)] tracking-[-0.02em]">
          Pattern Library for GameSim
        </b>
      </div>
      <div className="absolute top-[139px] left-[1006px] w-[380px] h-[476px] text-xl">
        <div className="absolute top-[0px] left-[0px] rounded-11xl bg-lightcyan w-[380px] h-[476px]" />
        <div className="absolute top-[20.42px] left-[calc(50%_-_33px)] tracking-[-0.02em] font-semibold inline-block w-[66px] h-[47.13px]">{`Pages: `}</div>
      </div>
      <div className="absolute top-[139px] left-[71px] w-[883px] h-[476px] text-xl">
        <div className="absolute top-[0px] left-[0px] rounded-11xl bg-lightcyan w-[883px] h-[476px]" />
        <div className="absolute top-[20.42px] left-[calc(50%_-_61.5px)] tracking-[-0.02em] font-semibold inline-block w-[124px] h-[47.13px]">{`Component: `}</div>
      </div>
      <Link
        className="cursor-pointer [text-decoration:none] absolute top-[215px] left-[88px] rounded-3xs bg-oldlace shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border w-[153px] h-20 flex flex-col py-5 px-[22px] items-start justify-end gap-[4px] text-[inherit] border-[1px] border-solid border-black"
        to="/component-navigation1"
        onClick={onNavCompClick}
      >
        <div className="relative tracking-[-0.02em] font-black">Navigation</div>
        <div className="relative text-xs tracking-[-0.02em]">1 component</div>
      </Link>
      <Link
        className="cursor-pointer [text-decoration:none] absolute top-[327px] left-[88px] rounded-3xs bg-oldlace shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border w-[153px] h-20 flex flex-col py-5 px-[22px] items-start justify-end gap-[4px] text-[inherit] border-[1px] border-solid border-black"
        to="/component-procedure1"
        onClick={onProcedureCompClick}
      >
        <div className="relative tracking-[-0.02em] font-black">Procedure</div>
        <div className="relative text-xs tracking-[-0.02em]">3 component</div>
      </Link>
      <Link
        className="cursor-pointer [text-decoration:none] absolute top-[219px] left-[1019px] rounded-3xs bg-oldlace shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border w-[165px] h-[53px] flex flex-col py-5 px-[22px] items-center justify-center text-[inherit] border-[1px] border-solid border-black"
        to="/pages-guide"
        onClick={onProcedureComp1Click}
      >
        <div className="relative tracking-[-0.02em] font-black">Guidance</div>
      </Link>
      <Link
        className="cursor-pointer [text-decoration:none] absolute top-[218px] left-[1207px] rounded-3xs bg-oldlace shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border w-[165px] h-[53px] flex flex-col py-5 px-[22px] items-center justify-center text-[inherit] border-[1px] border-solid border-black"
        to="/pages-formula"
        onClick={onProcedureComp2Click}
      >
        <div className="relative tracking-[-0.02em] font-black">Formula</div>
      </Link>
      <Link
        className="cursor-pointer [text-decoration:none] absolute top-[345px] left-[1019px] rounded-3xs bg-oldlace shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border w-[165px] h-[53px] flex flex-col py-5 px-[22px] items-center justify-center text-[inherit] border-[1px] border-solid border-black"
        to="/pattern-landing-page"
        onClick={onProcedureComp3Click}
      >
        <div className="relative tracking-[-0.02em] font-black">HomeScreen</div>
      </Link>
      <Link
        className="cursor-pointer [text-decoration:none] absolute top-[345px] left-[1207px] rounded-3xs bg-oldlace shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border w-[165px] h-[53px] flex flex-col py-5 px-[22px] items-center justify-center text-[inherit] border-[1px] border-solid border-black"
        to="/pages-list"
        onClick={onProcedureComp4Click}
      >
        <div className="relative tracking-[-0.02em] font-black">List</div>
      </Link>
      <Link
        className="cursor-pointer [text-decoration:none] absolute top-[215px] left-[262px] rounded-3xs bg-oldlace shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border w-[153px] h-20 flex flex-col py-5 px-[22px] items-start justify-end gap-[4px] text-[inherit] border-[1px] border-solid border-black"
        to="/component-landing-page1"
        onClick={onLPCompClick}
      >
        <div className="relative tracking-[-0.02em] font-black">
          Landing Page
        </div>
        <div className="relative text-xs tracking-[-0.02em]">2 component</div>
      </Link>
      <Link
        className="cursor-pointer [text-decoration:none] absolute top-[327px] left-[262px] rounded-3xs bg-oldlace shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border w-[153px] h-20 flex flex-col py-5 px-[22px] items-start justify-end gap-[4px] text-[inherit] border-[1px] border-solid border-black"
        to="/component-warning"
        onClick={onWarningCompClick}
      >
        <div className="relative tracking-[-0.02em] font-black">Warning</div>
        <div className="relative text-xs tracking-[-0.02em]">2 component</div>
      </Link>
      <Link
        className="cursor-pointer [text-decoration:none] absolute top-[215px] left-[436px] rounded-3xs bg-oldlace shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border w-[153px] h-20 flex flex-col py-5 px-[22px] items-start justify-end gap-[4px] text-[inherit] border-[1px] border-solid border-black"
        to="/component-overview1"
        onClick={onOverviewCompClick}
      >
        <div className="relative tracking-[-0.02em] font-black">Overview</div>
        <div className="relative text-xs tracking-[-0.02em]">2 component</div>
      </Link>
      <Link
        className="cursor-pointer [text-decoration:none] absolute top-[331px] left-[436px] rounded-3xs bg-oldlace shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border w-[153px] h-20 flex flex-col py-5 px-[22px] items-start justify-end gap-[4px] text-[inherit] border-[1px] border-solid border-black"
        to="/component-troubleshooting"
        onClick={onTroubleshootingCompClick}
      >
        <div className="relative tracking-[-0.02em] font-black">
          TroubleShooting
        </div>
        <div className="relative text-xs tracking-[-0.02em]">2 component</div>
      </Link>
      <Link
        className="cursor-pointer [text-decoration:none] absolute top-[215px] left-[610px] rounded-3xs bg-oldlace shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border w-[153px] h-20 flex flex-col py-5 px-[22px] items-start justify-end gap-[4px] text-[inherit] border-[1px] border-solid border-black"
        to="/component-explanation1"
        onClick={onExplanationCompClick}
      >
        <div className="relative tracking-[-0.02em] font-black">
          Explanation
        </div>
        <div className="relative text-xs tracking-[-0.02em]">1 component</div>
      </Link>
      <Link
        className="cursor-pointer [text-decoration:none] absolute top-[331px] left-[610px] rounded-3xs bg-oldlace shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border w-[153px] h-20 flex flex-col py-5 px-[22px] items-start justify-end gap-[4px] text-[inherit] border-[1px] border-solid border-black"
        to="/component-recipe"
        onClick={onLPComp1Click}
      >
        <div className="relative tracking-[-0.02em] font-black">Recipe</div>
        <div className="relative text-xs tracking-[-0.02em]">1 component</div>
      </Link>
      <Link
        className="cursor-pointer [text-decoration:none] absolute top-[215px] left-[784px] rounded-3xs bg-oldlace shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border w-[153px] h-20 flex flex-col py-5 px-[22px] items-start justify-end gap-[4px] text-[inherit] border-[1px] border-solid border-black"
        to="/component-tabel"
        onClick={onTableCompClick}
      >
        <div className="relative tracking-[-0.02em] font-black">Table</div>
        <div className="relative text-xs tracking-[-0.02em]">1 component</div>
      </Link>
      <Link
        className="cursor-pointer [text-decoration:none] absolute top-[331px] left-[784px] rounded-3xs bg-oldlace shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border w-[153px] h-20 flex flex-col py-5 px-[22px] items-start justify-end gap-[4px] text-[inherit] border-[1px] border-solid border-black"
        to="/component-important-facts"
        onClick={onLPComp2Click}
      >
        <div className="relative tracking-[-0.12em] font-black">
          Important Fact
        </div>
        <div className="relative text-xs tracking-[-0.02em]">1 component</div>
      </Link>
      <div className="absolute top-[478px] left-[84px] text-sm tracking-[-0.02em] text-center inline-block w-[853px]">
        <p className="m-0">{`"Pustaka komponen — juga dikenal sebagai kit UI — berisi komponen antarmuka pengguna (UI) yang dapat digunakan kembali. Setiap komponen dalam sistem desain memenuhi kebutuhan interaksi atau UI tertentu, dan telah dibuat untuk bekerja sama guna memberikan pengalaman pengguna yang intuitif." `}</p>
        <p className="m-0">&nbsp;</p>
        <p className="m-0">
          Jika menurut Atomic Design, Komponen ini termasuk ke dalam tingkatan
          Molecule
        </p>
      </div>
      <div className="absolute top-[478px] left-[1075px] text-sm tracking-[-0.02em] text-center inline-block w-[242px]">
        Pages merupakan kumpulan dari komponen yang diajukan.
      </div>
    </div>
  );
};

export default HomePage;
