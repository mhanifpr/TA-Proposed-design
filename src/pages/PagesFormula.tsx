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
    <div className="relative bg-gainsboro-200 w-full h-[1878px] overflow-hidden text-left text-5xl text-black font-poppins">
      <Link
        className="cursor-pointer [text-decoration:none] fixed top-[0px] left-[0px] bg-white w-20 h-[73px]"
        to="/"
        onClick={onHomeButtonClick}
      >
        <img
          className="absolute top-[6px] left-[10px] w-[60px] h-[60px] overflow-hidden"
          alt=""
          src="/bxhome4.svg"
        />
        
      
      </Link>
      <img
        className="fixed top-[360px] left-[342px] w-6 h-6 overflow-hidden"
        alt=""
        src="/materialsymbolsinfooutline1.svg"
      />
      <div className="absolute top-[0px] left-[125px] w-[1189px] h-[1878px] text-lg">
        <div className="absolute top-[0px] left-[0px] bg-white w-[1189px] h-[1878px]" />
        <div className="absolute top-[1521px] left-[330px] text-m font-semibold tracking-[-0.02em] leading-[25px] text-center inline-block w-[336px] h-[52px]">{`Perhitungan mengenai efisiensi Militer untuk penyerangan `}</div>
        <div className="absolute top-[1263px] left-[790px] text-m font-semibold tracking-[-0.02em] leading-[25px] text-center inline-block w-[326px] h-[52px]">{`Perhitungan mengenai efisiensi Militer untuk Bertahan `}</div>
        <b className="absolute top-[96.92px] left-[292px] text-13xl tracking-[-0.02em] leading-[25px] inline-block w-[164px] h-[26.05px]">
          Eksplorasi
        </b>
        <div className="absolute top-[744.11px] left-[292px] rounded bg-mintcream w-[734px] h-[268.88px] text-[inherit] text-dimgray-100 font-inherit">
          <div className="absolute top-[42px] left-[38px] tracking-[-0.02em] leading-[25px] font-medium inline-block w-[676px]">
            <p className="m-0">{`Tinjau kembali ke halaman Bangunan untuk membangun pasukan militer Anda! Berikut adalah bangunan yang memiliki keterkaitan dengan militer. `}</p>
            <p className="m-0">&nbsp;</p>
            <ul className="m-0 pl-[21px]">
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
          <div className="absolute top-[11px] left-[46px] text-3xl tracking-[-0.02em] leading-[25px] font-extrabold font-poppins text-darkolivegreen">
            Tips
          </div>
        </div>
        <div className="absolute top-[1263px] left-[301px] text-m font-semibold tracking-[-0.02em] leading-[25px] text-center inline-block w-[394px] h-[26.05px]">
          Perhitungan mengenai efisiensi Militer
        </div>
        <Accordion
          className="absolute top-[1318.35px] left-[753px]"
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
        {/* <div className="absolute top-[0px] left-[0px] bg-dodgerblue w-[1189px] h-[76.08px]" /> */}
        <div className="absolute top-[177.17px] left-[292px] text-5xl tracking-[-0.02em] leading-[25px] font-semibold inline-block w-[223px] h-[26.05px]">
          Kebutuhan Explore
        </div>
        <div className="absolute top-[225.11px] left-[292px] text-sm tracking-[-0.02em] leading-[25px] inline-block w-[786px] h-[52.11px]">{`Salah satu opsi yang tersedia bagi kami untuk meningkatkan ukuran tanah kami adalah menjelajah dengan melengkapi ekspedisi dengan tentara dan emas. Tanah dari perjalanan ini akan tersedia selama 24 detik. `}</div>
        <Accordion
          className="absolute top-[1318.35px] left-[298px]"
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
        
        <div className="absolute top-[74.54px] left-[268.5px] box-border w-px h-[1803.96px] border-r-[1px] border-solid border-gainsboro-200" />
      </div>
      <Accordion
        className="absolute top-[1581px] left-[423px]"
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
      <div className="absolute top-[626px] left-[418px] tracking-[-0.02em] leading-[25px] font-semibold">
        Produksi Militermu!
      </div>
      <div className="absolute top-[1037px] left-[417px] tracking-[-0.02em] leading-[25px] font-semibold">
        Formula
      </div>
      <div className="absolute top-[672px] left-[418px] text-sm tracking-[-0.02em] leading-[25px] inline-block w-[766px]">
        Pada saat akan melakukan serangan ke lawan, pemain harus
        mempertimbangkan efisiensi militer dasar untuk mengoptimalkan kekuatan
        pasukan yang dimiliki dan meminimalkan kerugian dalam pertempuran.
      </div>
      <div className="absolute top-[1083px] left-[417px] text-sm tracking-[-0.02em] leading-[25px] inline-block w-[751px]">
        Penting bagi Anda untuk menghitung perhitungan defensive ataupun
        offensive Militer. Selain menjadi syarat untuk melakukan eksplorasi,
        Militer juga berguna untuk menjaga dan menyerang provinsi. Aturlah
        strategi kalian untuk menyesuaikan produksi militer dan juga eksplorasi
        yang akan dilakukan. Variabel yang ada pada rumus dibawah merupakan
        hal-hal yang mempengaruhi rumus tersebut.
      </div>
      
      <div className="absolute top-[490px] left-[417px] rounded bg-oldlace w-[740px] h-[115px] text-3xl text-saddlebrown-100">
        <img
          className="absolute top-[9px] left-[12px] w-[26px] h-[26px] overflow-hidden"
          alt=""
          src="/bxerror.svg"
        />
        <div className="absolute top-[12px] left-[48px] tracking-[-0.02em] leading-[25px] font-extrabold">
          Warning
        </div>
        <div className="absolute top-[46px] left-[38px] text-base tracking-[-0.02em] leading-[25px] font-medium text-saddlebrown-200 inline-block w-[689px]">{`Pastikan untuk tidak terlalu memaksakan diri sehingga Anda memiliki cukup militer untuk melindungi tanah Anda! `}</div>
      </div>
      <div className="absolute top-[323px] left-[417px] rounded bg-aliceblue w-[740px] h-[125px] text-3xl text-darkolivegreen">
        <div className="absolute top-[11px] left-[46px] tracking-[-0.02em] leading-[25px] font-extrabold">
          Info
        </div>
        <div className="absolute top-[42px] left-[38px] text-base tracking-[-0.02em] leading-[25px] font-medium text-dimgray-100 inline-block w-[686px]">
          Untuk menjelajah, kita harus memiliki setidaknya setengah hektar yang
          ada saat ini yang dibangun atau sedang dibangun dan kolam penjelajahan
          kita harus memiliki cukup lahan di dalamnya.
        </div>
        <img
          className="absolute top-[11px] left-[14px] w-6 h-6 overflow-hidden"
          alt=""
          src="/materialsymbolsinfooutline1.svg"
        />
      </div>
      <div className="fixed top-[0px] left-[125px] w-[1189px] h-[80.08px] bg-gray text-center border-1 ">
        <SearchAppBar/>
      </div>
      {/* sidebar */}
      <img
        className="fixed top-[70px] left-[125px] w-[271px] h-[699px] object-cover"
        alt=""
        src="/screen-shot-20230614-at-1324-1@2x.png"
      />
    </div>
  );
};

export default PagesFormula;
