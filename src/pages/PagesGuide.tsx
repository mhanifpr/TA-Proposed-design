import { FunctionComponent, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import SearchAppBar from "./Searchbar";
import HorizontalLinearStepper from "./HorizontalStepper";
import TextMobileStepper from "./StepText";

const PagesGuide: FunctionComponent = () => {
  const navigate = useNavigate();

  const onHomeButtonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="relative bg-lightgray-200 w-full h-[1878px]  overflow-y-auto text-left text-5xl text-black font-poppins">
      <Link
        className="cursor-pointer [text-decoration:none] fixed top-[0px] left-[0px] bg-white w-20 h-[73px] "
        to="/"
        onClick={onHomeButtonClick}
      >
        <img
          className="fixed top-[6px] left-[10px] w-[60px] h-[60px] overflow-hidden"
          alt=""
          src="/bxhome4.svg"
        />
      </Link>
      <div className="absolute top-[0px] left-[125px] w-[1189px] h-[1878px]">
        <div className="absolute top-[0px] left-[0px] bg-white w-[1189px] h-[1878px]" />
        <b className="absolute top-[96.92px] left-[292px] text-13xl tracking-[-0.02em] leading-[25px] inline-block w-[391px] h-[26.05px]">
          Mengelola Sumber Daya
        </b>
        <div className="absolute top-[178.86px]  left-[293px] tracking-[-0.02em] leading-[25px] font-semibold inline-block w-[263px] h-[26.05px]">
          Uang dan Pemasukan
        </div>
        <div className="absolute top-[648.06px] left-[297px] tracking-[-0.02em] leading-[25px] font-semibold inline-block w-[389px] h-[26.05px]">{`Makanan `}</div>
        {/* <div className="absolute top-[0px] left-[0px] bg-dodgerblue w-[1189px] h-[76.08px]" /> */}
        <div className="absolute top-[1302.54px] left-[297px] tracking-[-0.02em] leading-[25px] font-semibold inline-block w-[74px] h-[26.05px]">
          Runes
        </div>
        <div className="absolute top-[230.97px] left-[297px] text-sm tracking-[-0.02em] leading-[25px] inline-block w-[776px] h-[104.22px]">
          Uang sangat penting di permainan Utopia karena dibutuhkan untuk
          membangun berbagai bangunan dan tentara. Uang juga digunakan untuk
          membayar gaji pekerja, pasukan, dan pelayan. Jika kamu tidak memiliki
          cukup uang, kamu akan kesulitan untuk mempertahankan kerajaanmu.
          Satuan Uang dalam game yaitu gc (gold coin). Berikut adalah dari mana
          saja uang dibuat dalam game Utopia.
        </div>
        <div className="absolute top-[687.66px] left-[297px] text-sm tracking-[-0.02em] leading-[25px] inline-block w-[792px] h-[182.38px]">
          <p className="m-0">
            Food sangat penting untuk pertumbuhan kota dan pasukan Anda di
            Utopia. Anda memerlukan jumlah Food yang cukup untuk menjaga
            kestabilan populasi kota, membangun bangunan, dan melatih pasukan.
            Jika pasokan Food Anda menipis, kesehatan dan kekuatan pasukan akan
            menurun, sehingga membuat Anda lebih rentan terhadap serangan musuh.
            Pastikan untuk mempertahankan produksi makanan yang cukup agar kota
            Anda selalu berkembang dengan baik. Satuan Food adalah bushels.
            Berikut adalah hal yang harus diperhatikan dalam mengelola Food
          </p>
        </div>
        <div className="absolute top-[1354.65px] left-[297px] text-sm tracking-[-0.02em] leading-[25px] inline-block w-[769px] h-[78.16px]">
          Jika Provinsi sudah lama ditinggalkan, maka provinsi tersebut akan
          mengalami keruntuhan atau Collapse karena kelaparan. Selain akan
          runtuh sendiri jika lama tidak dimainkan, Provinsi juga dapat diserang
          atau dicuri musuh. Oleh karena itu ada beberapa hal yang harus Anda
          lakukan sebelum meninggalkan provinsimu!
        </div>
        
        {/* sidebar */}
        <img
          className="fixed top-[69.75px] left-[125px] w-[270px] h-[523.17px] object-cover"
          alt=""
          src="/screen-shot-20230614-at-1321-1@2x.png"
        />
        {/* timeline */}
        <div className="absolute top-[1515px] left-[calc(50%_-_19px)] w-[207px] h-[206px] text-mini">
        <div className="absolute top-[0px] left-[0px] w-[450px] h-[29px] flex flex-row items-center justify-start gap-[22px]">
          <div className="relative rounded-[50%] bg-gainsboro-200 w-[39px] h-[29px]" />
          <div className="relative tracking-[-0.02em] leading-[25px] font-medium">
            Setelah setiap tick, 1,2% dari total rune yang disimpan akan membusuk.
          </div>
        </div>
        <div className="absolute top-[88px] left-[0px] w-[190px] h-[118px]">
          <div className="absolute top-[1.69%] left-[26.84%] w-[280px] tracking-[-0.02em] leading-[25px] font-medium">
          Membuat bangunan Towers dan Watch Tower 
          </div>
          <div className="absolute top-[77.12%] left-[26.84%] w-[280px] tracking-[-0.02em] leading-[25px] font-medium">
            Sisakan Pasukan Militer untuk bertahan.
          </div>
          <div className="absolute h-[24.58%] w-[15.26%] top-[0%] right-[84.74%] bottom-[75.42%] left-[0%] rounded-[50%] bg-gainsboro-200" />
          <div className="absolute h-[24.58%] w-[15.26%] top-[75.42%] right-[84.74%] bottom-[0%] left-[0%] rounded-[50%] bg-gainsboro-200" />
        </div>
        <div className="absolute h-[21.84%] w-[1.45%] top-[16.26%] right-[92.51%] bottom-[61.89%] left-[6.04%] box-border border-r-[3px] border-solid border-gainsboro-200" />
        <div className="absolute h-[21.84%] w-[1.45%] top-[61.41%] right-[92.51%] bottom-[16.75%] left-[6.04%] box-border border-r-[3px] border-solid border-gainsboro-200" />
      </div>
     
      
      {/* horizontal step */}
      <div className="absolute top-[380px] left-[295px] w-[789px] h-[80.08px] bg-gray text-center border-1 ">
        <HorizontalLinearStepper />
      </div>

      {/* stepper text */}
      <div className="absolute top-[880px] left-[495px] w-[789px] h-[80.08px] bg-gray text-sm ">
        <TextMobileStepper />
      </div>

      {/* logo */}
        {/* <img
          className="absolute top-[5.21px] left-[22px] rounded-11xl w-[60px] h-[62.53px] object-cover"
          alt=""
          src="/image-21@2x.png"
        /> */}
        <div className="absolute top-[74.54px] left-[268.5px] box-border w-px h-[1803.96px] border-r-[1px] border-solid border-gainsboro-200" />
      </div>
      <div className="fixed top-[0px] left-[125px] w-[1189px] h-[80.08px] bg-gray text-center border-1 ">
        <SearchAppBar />
      </div>
    </div>
  );
};

export default PagesGuide;
