import { FunctionComponent, useCallback } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Icon,
  Typography,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import SearchAppBar from "./Searchbar";

const PagesFormula: FunctionComponent = () => {
  const navigate = useNavigate();

  const onHomeButtonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="relative bg-white w-full h-[1733px] overflow-hidden text-left text-xl text-black font-poppins">
      <div className="absolute top-[73px] left-[0px] bg-lightcyan w-[270px] h-[1660px]" />
      <Link
        className="cursor-pointer [text-decoration:none] absolute top-[0px] left-[1360px] bg-peru w-20 h-[65px]"
        to="/"
        onClick={onHomeButtonClick}
      >
        <img
          className="absolute top-[4px] left-[10px] w-[60px] h-[60px] overflow-hidden"
          alt=""
          src="/bxhome6.svg"
        />
      </Link>
      <div className="absolute top-[0px] left-[0px] w-[1360px] h-73 bg-gray text-center border-1 ">
        <SearchAppBar />
      </div>
      <div className="absolute top-[129px] left-[309px] text-13xl [text-decoration:underline] tracking-[-0.02em] leading-[25px] font-semibold">
        Explore
      </div>
      <img
        className="absolute top-[73px] left-[0px] w-[271px] h-[699px] object-cover"
        alt=""
        src="/screen-shot-20230614-at-1324-1@2x.png"
      />
      <div className="absolute top-[210px] left-[330px] text-5xl tracking-[-0.02em] leading-[25px] font-semibold">
        Kebutuhan Explore
      </div>
      <div className="absolute top-[642px] left-[330px] text-5xl tracking-[-0.02em] leading-[25px] font-semibold">
        Produksi Militermu!
      </div>
      <div className="absolute top-[1071px] left-[330px] text-5xl tracking-[-0.02em] leading-[25px] font-semibold">
        Formula
      </div>
      <div className="absolute top-[688px] left-[330px] text-sm tracking-[-0.02em] leading-[25px] inline-block w-[891px]">
        Pada saat akan melakukan serangan ke lawan, pemain harus
        mempertimbangkan efisiensi militer dasar untuk mengoptimalkan kekuatan
        pasukan yang dimiliki dan meminimalkan kerugian dalam pertempuran.
      </div>
      <div className="absolute top-[1117px] left-[330px] text-sm tracking-[-0.02em] leading-[25px] inline-block w-[891px]">
        Penting bagi Anda untuk menghitung perhitungan defensive ataupun
        offensive Militer. Selain menjadi syarat untuk melakukan eksplorasi,
        Militer juga berguna untuk menjaga dan menyerang provinsi. Aturlah
        strategi kalian untuk menyesuaikan produksi militer dan juga eksplorasi
        yang akan dilakukan. Variabel yang ada pada rumus dibawah merupakan
        hal-hal yang mempengaruhi rumus tersebut.
      </div>
      <div className="absolute top-[1296px] left-[776px] tracking-[-0.02em] leading-[25px] inline-block w-[394px]">
        Perhitungan mengenai efisiensi Militer
      </div>
      <div className="absolute top-[1440px] left-[776px] tracking-[-0.02em] leading-[25px] inline-block w-[394px]">{`Perhitungan mengenai efisiensi Militer untuk penyerangan `}</div>
      <div className="absolute top-[1592px] left-[776px] tracking-[-0.02em] leading-[25px] inline-block w-[394px]">{`Perhitungan mengenai efisiensi Militer untuk Bertahan `}</div>
      <div className="absolute top-[256px] left-[330px] text-sm tracking-[-0.02em] leading-[25px] inline-block w-[891px]">{`Salah satu opsi yang tersedia bagi kami untuk meningkatkan ukuran tanah kami adalah menjelajah dengan melengkapi ekspedisi dengan tentara dan emas. Tanah dari perjalanan ini akan tersedia selama 24 detik. `}</div>
      {/* <div className="absolute top-[0px] left-[0px] bg-dodgerblue w-[1360px] h-[73px]" />
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
      /> */}
      <div className="absolute top-[499px] left-[330px] rounded bg-oldlace w-[891px] h-[115px] text-3xl text-saddlebrown-100">
        <img
          className="absolute top-[9px] left-[12px] w-[26px] h-[26px] overflow-hidden"
          alt=""
          src="/bxerror1.svg"
        />
        <div className="absolute top-[12px] left-[48px] tracking-[-0.02em] leading-[25px] font-extrabold">
          Warning
        </div>
        <div className="absolute top-[46px] left-[38px] text-base tracking-[-0.02em] leading-[25px] font-medium text-saddlebrown-200 inline-block w-[837px]">{`Pastikan untuk tidak terlalu memaksakan diri sehingga Anda memiliki cukup militer untuk melindungi tanah Anda! `}</div>
      </div>
      <Accordion
        className="absolute top-[1263px] left-[330px]"
        sx={{ width: 400 }}
      >
        <AccordionSummary expandIcon={<Icon>expand_more</Icon>}>
          <Typography>BME(Base Miltary Efficiency)</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{`( 33 + 67 * ( Effective Wage Rate / 100 ) 0.25 )* Ruby Dragon * Multi-Attack Protection Bonus
`}</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        className="absolute top-[1417px] left-[330px]"
        sx={{ width: 400 }}
      >
        <AccordionSummary expandIcon={<Icon>expand_more</Icon>}>
          <Typography>OFFENSIVE MILITARY EFFICIENCY (OME)</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            (Base Military Efficiency + Training Grounds Bonus + Honor Bonus) *
            Science Bonus * Race Bonus * Personality Bonus * Fanaticism *
            Bloodlust * Onslaught Ritual
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        className="absolute top-[1571px] left-[330px]"
        sx={{ width: 400 }}
      >
        <AccordionSummary expandIcon={<Icon>expand_more</Icon>}>
          <Typography>Defensiv Military Efficiency (DME)</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{`(Base Military Efficiency + Forts Bonus + Honor Bonus) * Science Bonus * Race Bonus * Personality Bonus * Minor Protection * Greater Protection * Fanaticism * Plague * Barrier Ritual


`}</Typography>
        </AccordionDetails>
      </Accordion>
      {/* <img
        className="absolute top-[10px] left-[1292px] w-[54px] h-[54px] overflow-hidden"
        alt=""
        src="/materialsymbolssearch.svg"
      /> */}
      <div className="absolute top-[770px] left-[330px] rounded bg-mintcream w-[891px] h-[258px] text-3xl text-darkolivegreen">
        <div className="absolute top-[11px] left-[46px] tracking-[-0.02em] leading-[25px] font-extrabold">
          Tips
        </div>
        <div className="absolute top-[42px] left-[38px] text-[inherit] tracking-[-0.02em] leading-[25px] font-medium font-inherit text-dimgray-100 inline-block w-[800px]">
          <p className="m-0">{`Tinjau kembali ke halaman Bangunan untuk membangun pasukan militer Anda! Berikut adalah bangunan yang memiliki keterkaitan dengan militer. `}</p>
          <p className="m-0">&nbsp;</p>
          <ul className="m-0 pl-[10px]">
            <li className="mb-0">Armouries</li>
            <li className="mb-0">Forts</li>
            <li className="mb-0">Guard Station</li>
            <li className="mb-0">Military Barracks</li>
            <li>Training Grounds</li>
          </ul>
        </div>
        <img
          className="absolute top-[9px] left-[9px] w-[26px] h-[26px] overflow-hidden"
          alt=""
          src="/claritysuccessstandardline1.svg"
        />
      </div>
      <div className="absolute top-[350px] left-[330px] rounded bg-aliceblue w-[891px] h-[120px] text-3xl text-darkolivegreen">
        <div className="absolute top-[11px] left-[46px] tracking-[-0.02em] leading-[25px] font-extrabold">
          Info
        </div>
        <div className="absolute top-[42px] left-[38px] text-base tracking-[-0.02em] leading-[25px] font-medium text-dimgray-100 inline-block w-[820px]">
          Untuk menjelajah, kita harus memiliki setidaknya setengah hektar yang
          ada saat ini yang dibangun atau sedang dibangun dan kolam penjelajahan
          kita harus memiliki cukup lahan di dalamnya.
        </div>
      </div>
      <img
        className="absolute top-[360px] left-[342px] w-6 h-6 overflow-hidden"
        alt=""
        src="/materialsymbolsinfooutline1.svg"
      />
    </div>
  );
};

export default PagesFormula;
