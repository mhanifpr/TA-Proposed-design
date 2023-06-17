import { FunctionComponent, useCallback } from "react";
import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

const ComponentLandingPage1: FunctionComponent = () => {
  const navigate = useNavigate();

  const onHomeButtonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="relative bg-white w-full h-[1322px] overflow-y-auto text-left text-29xl text-black font-poppins">
      <div className="absolute top-[201px] left-[75px] w-[593px] h-[220px]">
        <div className="absolute top-[0%] left-[0%] leading-[48px] font-black">
          <p className="[margin-block-start:0] [margin-block-end:10px]">
            Utopia-Game.
          </p>
          <p className="m-0">Start using our app today.</p>
        </div>
        <div className="absolute top-[172px] left-[165px] w-[110px] h-12 text-mini">
          <img
            className="absolute h-3/6 w-[21.82%] top-[35.42%] right-[0%] bottom-[14.58%] left-[78.18%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/tablerarrowsdiff.svg"
          />
          <div className="absolute top-[0%] left-[0%] leading-[48px] font-extrabold">{`Learn more `}</div>
        </div>
        <Button
          className="absolute top-[172px] left-[0px]"
          sx={{ width: 119 }}
          variant="contained"
          color="primary"
        >
          Get Started
        </Button>
      </div>
      <div className="absolute top-[616.5px] left-[-2.5px] box-border w-[1445px] h-[5px] border-t-[5px] border-solid border-black" />
      <div className="absolute top-[13px] left-[1369px] leading-[48px] font-black">{`#1 `}</div>
      <div className="absolute top-[637px] left-[16px] leading-[48px] font-black">
        #2
      </div>
      <div className="absolute top-[707px] left-[0px] w-[1440px] h-[633px] text-mini">
        <div className="absolute top-[197px] left-[759px] w-[639px] flex flex-col items-start justify-start gap-[26px]">
          <div className="self-stretch relative text-29xl leading-[48px] font-black">
            <p className="[margin-block-start:0] [margin-block-end:10px]">
              Utopia-Game.
            </p>
            <p className="m-0">Start using our app today.</p>
          </div>
          <div className="self-stretch relative tracking-[-0.02em] leading-[25px]">
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
          <div className="relative w-[107px] h-12">
            <div className="absolute h-[81.25%] w-full top-[8.33%] right-[0%] bottom-[10.42%] left-[0%] rounded-8xs bg-gainsboro-200" />
            <div className="absolute top-[0%] left-[18.69%] leading-[48px] font-extrabold">
              Visit Wiki
            </div>
          </div>
        </div>
        <div className="absolute top-[0px] left-[0px] w-[720px] h-[615px]">
          <img
            className="absolute h-[100.08%] w-[181.12%] top-[0%] right-[-81.12%] bottom-[-0.08%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/image-2@2x.png"
          />
        </div>
      </div>
      <Link
        className="cursor-pointer [text-decoration:none] absolute top-[0px] left-[0px] w-20 h-[73px] flex flex-col items-center justify-end"
        to="/"
        onClick={onHomeButtonClick}
      >
        <div className="relative bg-peru w-20 h-[73px]" />
        <img
          className="relative w-[60px] h-[60px] overflow-hidden shrink-0 mt-[-67px]"
          alt=""
          src="/bxhome3.svg"
        />
      </Link>
      <b className="absolute top-[20px] left-[calc(50%_-_108px)] text-13xl tracking-[-0.02em]">
        Landing Page
      </b>
    </div>
  );
};

export default ComponentLandingPage1;
