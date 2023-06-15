import { FunctionComponent, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";

const PagesGuide: FunctionComponent = () => {
  const navigate = useNavigate();

  const onHomeButtonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="relative bg-white w-full h-[1440px] overflow-y-auto text-left text-xl text-black font-poppins">
      <div className="absolute top-[73px] left-[0px] bg-lightcyan w-[270px] h-[1367px]" />
      <Link
        className="cursor-pointer [text-decoration:none] absolute top-[0px] left-[1360px] bg-peru w-20 h-[73px]"
        to="/"
        onClick={onHomeButtonClick}
      >
        <img
          className="absolute top-[6px] left-[10px] w-[60px] h-[60px] overflow-hidden"
          alt=""
          src="/bxhome6.svg"
        />
      </Link>
      <div className="absolute top-[129px] left-[309px] text-13xl [text-decoration:underline] tracking-[-0.02em] leading-[25px] font-semibold">
        How to Play
      </div>
      <div className="absolute top-[210px] left-[330px] text-5xl tracking-[-0.02em] leading-[25px] font-semibold">
        Choose Race and Personality
      </div>
      <div className="absolute top-[730px] left-[330px] text-5xl tracking-[-0.02em] leading-[25px] font-semibold">
        Atur Sumber Daya Kerajaanmu!
      </div>
      <div className="absolute top-[260px] left-[330px] tracking-[-0.02em] leading-[25px] text-[inherit] inline-block w-[891px]">
        {`Bagi para pemain baru, Langkah awal cepat untuk memainkan permainan utopia yaitu Untuk memulai permainan, pemain harus membuat kerajaannya dengan menentukan wilayah yang akan dikuasainya. Pemain juga harus `}
        <a
          className="text-[inherit]"
          href="https://www.notion.so/Personality-and-Races-297b7a258880469c808f22dbfdf509da?pvs=4"
          target="_blank"
        >
          <span className="[text-decoration:underline]">memilih ras</span>
        </a>{" "}
        yang akan dimainkan, yang akan menentukan karakteristik khusus dan
        kemampuan khusus kerajaan.
      </div>
      <div className="absolute top-[780px] left-[330px] tracking-[-0.02em] leading-[25px] text-[inherit] inline-block w-[891px]">
        {`Bagi para pemain baru, Langkah awal cepat untuk memainkan permainan utopia yaitu Untuk memulai permainan, pemain harus membuat kerajaannya dengan menentukan wilayah yang akan dikuasainya. Pemain juga harus `}
        <a
          className="text-[inherit]"
          href="https://www.notion.so/Personality-and-Races-297b7a258880469c808f22dbfdf509da?pvs=4"
          target="_blank"
        >
          <span className="[text-decoration:underline]">memilih ras</span>
        </a>{" "}
        yang akan dimainkan, yang akan menentukan karakteristik khusus dan
        kemampuan khusus kerajaan.
      </div>
      <div className="absolute top-[416px] left-[445px] w-[776px] h-48 text-mini text-white">
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
          Create an account
        </div>
        <div className="absolute top-[37.5%] left-[44.85%] tracking-[-0.02em] leading-[25px] font-medium text-black">
          Choose Personality
        </div>
        <div className="absolute top-[43.23%] left-[76.55%] tracking-[-0.02em] leading-[25px] font-medium text-black">
          Choose Race
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
      <div className="absolute top-[0px] left-[0px] bg-dodgerblue w-[1360px] h-[73px]" />
      <div className="absolute top-[943px] left-[658px] w-[400px] flex flex-col items-start justify-start text-mini">
        <div className="self-stretch relative h-[50px]">
          <div className="absolute top-[0px] left-[0px] bg-lightgray w-[400px] h-[50px]" />
          <div className="absolute top-[12px] left-[135px] tracking-[-0.02em] leading-[25px] font-medium">
            Build your Buildings
          </div>
        </div>
        <div className="self-stretch relative h-[259px]">
          <div className="absolute top-[0px] left-[0px] bg-gray-100 w-[400px] h-[259px]" />
          <div className="absolute top-[19px] left-[17px] tracking-[-0.02em] leading-[25px] font-medium inline-block w-[372px]">
            <p className="m-0">
              Bangunlah bangunan untuk meningkatkan ekonomi kerajaanmu! Baca lah
              detail kelebihan dan kekurangan setiap bangunan.
            </p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">{`Buka halaman Infrastructure and Growth > Build Your Province > Buildings `}</p>
          </div>
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
      <div className="absolute top-[5px] left-[247px] flex flex-row py-2.5 px-0 items-start justify-start text-white">
        <div className="relative leading-[48px] font-black">Tutorial</div>
      </div>
      <div className="absolute top-[5px] left-[143px] flex flex-row py-2.5 px-0 items-start justify-start text-white">
        <div className="relative leading-[48px] font-black">Home</div>
      </div>
      <img
        className="absolute top-[5px] left-[11px] rounded-11xl w-[60px] h-[60px] object-cover"
        alt=""
        src="/image-1@2x.png"
      />
      <img
        className="absolute top-[73px] left-[0px] w-[270px] h-[502px] object-cover"
        alt=""
        src="/screen-shot-20230614-at-1321-1@2x.png"
      />
      <img
        className="absolute top-[10px] left-[1286px] w-[54px] h-[54px] overflow-hidden"
        alt=""
        src="/materialsymbolssearch.svg"
      />
    </div>
  );
};

export default PagesGuide;
