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
        <div className="absolute top-[0px] left-[0px] rounded-tl-none bg-dodgerblue shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[1440px] h-[83px]" />
        <b className="absolute top-[19px] left-[calc(50%_-_187px)] tracking-[-0.02em] inline-block w-[374px]">
          UI Library for GameSim
        </b>
      </div>
      <div className="absolute top-[79px] left-[0px] bg-gainsboro-200 w-[1440px] h-[42px]" />
      <div className="absolute top-[519px] left-[0px] bg-gainsboro-200 w-[1440px] h-[42px]" />
      <div className="absolute top-[calc(50%_+_164px)] left-[calc(50%_-_614px)] text-xl tracking-[-0.02em] font-semibold inline-block w-[66px] h-[33.56px]">{`Pages: `}</div>
      <div className="absolute top-[calc(50%_-_275px)] left-[calc(50%_-_624px)] text-xl tracking-[-0.02em] font-semibold inline-block w-[124px] h-6">{`Component: `}</div>
      <Link
        className="cursor-pointer [text-decoration:none] absolute top-[155px] left-[88px] rounded-3xs bg-oldlace shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border w-[153px] h-20 flex flex-col py-5 px-[22px] items-start justify-end gap-[4px] text-[inherit] border-[1px] border-solid border-black"
        to="/component-navigation1"
        onClick={onNavCompClick}
      >
        <div className="relative tracking-[-0.02em] font-semibold">Navigation</div>
        <div className="relative text-xs tracking-[-0.02em]">1 component</div>
      </Link>
      <Link
        className="cursor-pointer [text-decoration:none] absolute top-[267px] left-[88px] rounded-3xs bg-oldlace shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border w-[153px] h-20 flex flex-col py-5 px-[22px] items-start justify-end gap-[4px] text-[inherit] border-[1px] border-solid border-black"
        to="/component-procedure1"
        onClick={onProcedureCompClick}
      >
        <div className="relative tracking-[-0.02em] font-semibold">Procedure</div>
        <div className="relative text-xs tracking-[-0.02em]">3 component</div>
      </Link>
      <Link
        className="cursor-pointer [text-decoration:none] absolute top-[594px] left-[268px] rounded-3xs bg-oldlace shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border w-[165px] h-[53px] flex flex-col py-5 px-[22px] items-center justify-center text-[inherit] border-[1px] border-solid border-black"
        to="/pages-guide"
        onClick={onProcedureComp1Click}
      >
        <div className="relative tracking-[-0.02em] font-semibold">Guidance</div>
      </Link>
      <Link
        className="cursor-pointer [text-decoration:none] absolute top-[594px] left-[448px] rounded-3xs bg-oldlace shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border w-[165px] h-[53px] flex flex-col py-5 px-[22px] items-center justify-center text-[inherit] border-[1px] border-solid border-black"
        to="/pages-formula"
        onClick={onProcedureComp2Click}
      >
        <div className="relative tracking-[-0.02em] font-semibold">Formula</div>
      </Link>
      <Link
        className="cursor-pointer [text-decoration:none] absolute top-[594px] left-[88px] rounded-3xs bg-oldlace shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border w-[165px] h-[53px] flex flex-col py-5 px-[22px] items-center justify-center text-[inherit] border-[1px] border-solid border-black"
        to="/pattern-landing-page"
        onClick={onProcedureComp3Click}
      >
        <div className="relative tracking-[-0.02em] font-semibold">HomeScreen</div>
      </Link>
      <Link
        className="cursor-pointer [text-decoration:none] absolute top-[594px] left-[631px] rounded-3xs bg-oldlace shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border w-[165px] h-[53px] flex flex-col py-5 px-[22px] items-center justify-center text-[inherit] border-[1px] border-solid border-black"
        to="/pages-list"
        onClick={onProcedureComp4Click}
      >
        <div className="relative tracking-[-0.02em] font-semibold">List</div>
      </Link>
      <Link
        className="cursor-pointer [text-decoration:none] absolute top-[155px] left-[262px] rounded-3xs bg-oldlace shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border w-[153px] h-20 flex flex-col py-5 px-[22px] items-start justify-end gap-[4px] text-[inherit] border-[1px] border-solid border-black"
        to="/component-landing-page1"
        onClick={onLPCompClick}
      >
        <div className="relative tracking-[-0.02em] font-semibold">
          Landing Page
        </div>
        <div className="relative text-xs tracking-[-0.02em]">2 component</div>
      </Link>
      <Link
        className="cursor-pointer [text-decoration:none] absolute top-[379px] left-[88px] rounded-3xs bg-oldlace shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border w-[153px] h-20 flex flex-col py-5 px-[22px] items-start justify-end gap-[4px] text-[inherit] border-[1px] border-solid border-black"
        to="/component-warning"
        onClick={onWarningCompClick}
      >
        <div className="relative tracking-[-0.02em] font-semibold">Warning</div>
        <div className="relative text-xs tracking-[-0.02em]">2 component</div>
      </Link>
      <Link
        className="cursor-pointer [text-decoration:none] absolute top-[155px] left-[436px] rounded-3xs bg-oldlace shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border w-[153px] h-20 flex flex-col py-5 px-[22px] items-start justify-end gap-[4px] text-[inherit] border-[1px] border-solid border-black"
        to="/component-overview1"
        onClick={onOverviewCompClick}
      >
        <div className="relative tracking-[-0.02em] font-semibold">Overview</div>
        <div className="relative text-xs tracking-[-0.02em]">2 component</div>
      </Link>
      <Link
        className="cursor-pointer [text-decoration:none] absolute top-[267px] left-[262px] rounded-3xs bg-oldlace shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border w-[153px] h-20 flex flex-col py-5 px-[22px] items-start justify-end gap-[4px] text-[inherit] border-[1px] border-solid border-black"
        to="/component-troubleshooting"
        onClick={onTroubleshootingCompClick}
      >
        <div className="relative tracking-[-0.02em] font-semibold">
          TroubleShooting
        </div>
        <div className="relative text-xs tracking-[-0.02em]">2 component</div>
      </Link>
      <Link
        className="cursor-pointer [text-decoration:none] absolute top-[267px] left-[610px] rounded-3xs bg-oldlace shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border w-[153px] h-20 flex flex-col py-5 px-[22px] items-start justify-end gap-[4px] text-[inherit] border-[1px] border-solid border-black"
        to="/component-explanation1"
        onClick={onExplanationCompClick}
      >
        <div className="relative tracking-[-0.02em] font-semibold">
          Explanation
        </div>
        <div className="relative text-xs tracking-[-0.02em]">1 component</div>
      </Link>
      <Link
        className="cursor-pointer [text-decoration:none] absolute top-[267px] left-[436px] rounded-3xs bg-oldlace shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border w-[153px] h-20 flex flex-col py-5 px-[22px] items-start justify-end gap-[4px] text-[inherit] border-[1px] border-solid border-black"
        to="/component-recipe"
        onClick={onLPComp1Click}
      >
        <div className="relative tracking-[-0.02em] font-semibold">Recipe</div>
        <div className="relative text-xs tracking-[-0.02em]">1 component</div>
      </Link>
      <Link
        className="cursor-pointer [text-decoration:none] absolute top-[155px] left-[610px] rounded-3xs bg-oldlace shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border w-[153px] h-20 flex flex-col py-5 px-[22px] items-start justify-end gap-[4px] text-[inherit] border-[1px] border-solid border-black"
        to="/component-tabel"
        onClick={onTableCompClick}
      >
        <div className="relative tracking-[-0.02em] font-semibold">Table</div>
        <div className="relative text-xs tracking-[-0.02em]">1 component</div>
      </Link>
      <Link
        className="cursor-pointer [text-decoration:none] absolute top-[379px] left-[262px] rounded-3xs bg-oldlace shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border w-[153px] h-20 flex flex-col py-5 px-[22px] items-start justify-end gap-[4px] text-[inherit] border-[1px] border-solid border-black"
        to="/component-important-facts"
        onClick={onLPComp2Click}
      >
        <div className="relative tracking-[-0.12em] font-semibold">
          Important  Fact
        </div>
        <div className="relative text-xs tracking-[-0.02em]">1 component</div>
      </Link>
      <div className="absolute top-[calc(50%_-_207px)] left-[calc(50%_+_125px)] w-[495px] h-[169px] text-sm">
        <div className="absolute top-[calc(50%_-_83.5px)] left-[calc(50%_-_235.5px)] tracking-[-0.02em] inline-block w-[483px]">
          <p className="m-0">{`"Pustaka komponen — juga dikenal sebagai kit UI — berisi komponen antarmuka pengguna (UI) yang dapat digunakan kembali. Setiap komponen dalam sistem desain memenuhi kebutuhan interaksi atau UI tertentu, dan telah dibuat untuk bekerja sama guna memberikan pengalaman pengguna yang intuitif." `}</p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">
            Jika menurut Atomic Design, Komponen ini termasuk ke dalam tingkatan
            Molecule
          </p>
        </div>
        <div className="absolute top-[-0.5px] left-[-0.5px] box-border w-px h-[167px] border-r-[1px] border-solid border-black" />
      </div>
      <div className="absolute top-[588px] left-[848px] w-[251px] h-[63px] text-sm">
        <div className="absolute top-[0px] left-[9px] tracking-[-0.02em] inline-block w-[242px]">
          Pages merupakan kumpulan dari komponen menjadi sebuah halaman yang
          diajukan.
        </div>
        <div className="absolute top-[3.5px] left-[-0.5px] box-border w-px h-14 border-r-[1px] border-solid border-black" />
      </div>
    </div>
  );
};

export default HomePage;
