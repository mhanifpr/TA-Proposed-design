import { FunctionComponent, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";

const ComponentExplanation1: FunctionComponent = () => {
  const navigate = useNavigate();

  const onHomeButtonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="relative bg-white w-full h-[720px] overflow-hidden text-left text-mini text-black font-poppins">
      <div className="absolute top-[105px] left-[42px] text-45xl leading-[48px] font-bold">
      Constructions
      </div>
      <div className="absolute top-[191px] left-[42px] tracking-[-0.02em] leading-[25px] font-medium inline-block w-[711px] h-[101px]">
        <p className="m-0">
        Construction dalam Utopia adalah proses membangun bangunan untuk meningkatkan infrastruktur kerajaan, seperti rumah, benteng, 
        tempat pelatihan pasukan, tambang, dan sebagainya. Setiap bangunan memiliki manfaat yang berbeda, dan memerlukan waktu dan sumber daya untuk dibangun. 
        Pemain dapat meningkatkan level bangunan mereka untuk mendapatkan manfaat yang lebih besar. Namun, setiap bangunan juga memerlukan biaya pemeliharaan, 
        jadi pemain harus mempertimbangkan keuangan mereka sebelum membangun lebih banyak bangunan.
        </p>
        <p className="m-0">{` `}</p>
        <p className="m-0">&nbsp;</p>
        <p className="m-0">&nbsp;</p>
      </div>
      <div className="absolute top-[430px] left-[169px] text-17xl leading-[48px] font-bold">
      Employment
      </div>
      <div className="absolute top-[498px] left-[169px] tracking-[-0.02em] font-medium inline-block w-[999px] h-[137px]">
        <p className="m-0">
        Jadi, dalam game Utopia, kita harus memastikan bahwa penduduk desa kita memiliki pekerjaan agar bisa mendapatkan uang. 
        Setelah kita membangun tanah kita, penduduk desa akan bisa mencari pekerjaan. Kita bisa melihat jumlah pekerjaan yang tersedia, jumlah pekerja yang tersedia, dan jumlah pekerja yang dibutuhkan untuk memaksimalkan efisiensi bangunan dengan menggunakan Building Advisor.
        Dengan begitu, kita bisa mengatur pekerjaan dengan baik dan memastikan perekonomian desa kita sehat.
        </p>
        {/* <p className="m-0">{` `}</p>
        <p className="m-0">{`Plaktig geogt. Probyliga nera i intrahede, antropocism sisamma. Geohönade fånas hexask. Jimurade lagt. Migyssa onde, samt sår, fafäneska plabel ultrall i nånannanism. Tykysk exotygt revosm nynanat kahet om chippa pesm. Fäniren polyperade teletes der och portfoliometoden i unemusm bire. Reanar gyskap. Du kan vara drabbad. `}</p>
        <p className="m-0">&nbsp;</p>
        <p className="m-0">&nbsp;</p> */}
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

export default ComponentExplanation1;
