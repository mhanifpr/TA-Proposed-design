import { FunctionComponent, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import StickyHeadTable from "./Tabelfunc";
import SearchAppBar from "./Searchbar";

const PagesList: FunctionComponent = () => {
  const navigate = useNavigate();

  const onHomeButtonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="relative bg-white w-full h-[1519px] overflow-hidden text-left text-5xl text-black font-poppins">
      <div className="absolute top-[73px] left-[0px] bg-lightcyan w-[270px] h-[1446px]" />
      <Link
        className="cursor-pointer [text-decoration:none] absolute top-[0px] left-[1360px] bg-peru w-20 h-[65px]"
        to="/"
        onClick={onHomeButtonClick}
      >
        <img
          className="absolute top-[4px] left-[10px] w-[60px] h-[60px] overflow-hidden"
          alt=""
          src="/bxhome5.svg"
        />
      </Link>

      <div className="absolute top-[129px] left-[309px] text-13xl [text-decoration:underline] tracking-[-0.02em] leading-[25px] font-semibold">
        Personality
      </div>
      <img
        className="absolute top-[73px] left-[0px] w-[273px] h-[750px] object-cover"
        alt=""
        src="/screen-shot-20230614-at-1846-1@2x.png"
      />
      <div className="absolute top-[210px] left-[330px] tracking-[-0.02em] leading-[25px] font-semibold">
        Personlity list:
      </div>
      <div className="absolute top-[871px] left-[330px] tracking-[-0.02em] leading-[25px] font-semibold">
        Personlity Details:
      </div>
      {/* <div className="absolute top-[0px] left-[0px] bg-dodgerblue w-[1360px] h-[73px]" /> */}
      <div className="absolute top-[0px] left-[0px] w-[1360px] h-73 bg-gray text-center border-1 ">
        <SearchAppBar />
      </div>
      {/* <div className="absolute top-[5px] left-[247px] flex flex-row py-2.5 px-0 items-start justify-start text-xl text-white">
        <div className="relative leading-[48px] font-black">Tutorial</div>
      </div>
      <div className="absolute top-[5px] left-[143px] flex flex-row py-2.5 px-0 items-start justify-start text-xl text-white">
        <div className="relative leading-[48px] font-black">Home</div>
      </div>
      <img
        className="absolute top-[5px] left-[11px] rounded-11xl w-[60px] h-[60px] object-cover"
        alt=""
        src="/image-1@2x.png"
      />
      <img
        className="absolute top-[10px] left-[1292px] w-[54px] h-[54px] overflow-hidden"
        alt=""
        src="/materialsymbolssearch1.svg"
      /> */}
      <div className="absolute top-[245px] left-[330px] w-[993px] h-[783px]">
        {/* <img
          className="absolute top-[0px] left-[0px] w-[993px] h-[744px] object-cover"
          alt=""
          src="/screen-shot-20230614-at-1849-1@2x.png"
        /> */}
        {/* <img
          className="absolute top-[744px] left-[539px] w-[454px] h-[39px] object-cover"
          alt=""
          src="/screen-shot-20230614-at-1850-1@2x.png"
        /> */}
          <div className="absolute top-[0px] left-[0px] w-[900px] h-[160px]"><StickyHeadTable/></div>
      </div>
      <div className="absolute top-[906px] left-[331px] bg-white box-border w-[349px] h-[375px] text-base font-roboto border-[1px] border-solid border-black">
        <div className="absolute top-[23px] left-[calc(50%_-_63.5px)] tracking-[0.15px] leading-[150%]">
          Personality Cleric
        </div>
        <div className="absolute top-[0px] left-[0px] bg-gainsboro-300 box-border w-[349px] h-[61px] border-[1px] border-solid border-black" />
        <div className="absolute top-[123.66px] left-[30.91px] text-[inherit] tracking-[0.15px] leading-[150%] font-inherit inline-block w-[303.13px] h-[187.99px]">
          <ul className="m-0 pl-[19px]">
            <li className="mb-0">-20% Military Offensive</li>
            <li className="mb-0">Can Cast Support Spells on Kingdom Members</li>
            <li className="mb-0">
              {`Access to `}
              <a
                className="text-[inherit]"
                href="http://wiki.utopia-game.com/index.php?title=Mystics#Divine_Shield"
                target="_blank"
              >
                <span className="[text-decoration:underline]">
                  Divine Shield
                </span>
              </a>
              {`, `}
              <a
                className="text-[inherit]"
                href="http://wiki.utopia-game.com/index.php?title=Mystics#Greater_Protection"
                target="_blank"
              >
                <span className="[text-decoration:underline]">
                  Greater Protection
                </span>
              </a>
              {`, `}
              <a
                className="text-[inherit]"
                href="http://wiki.utopia-game.com/index.php?title=Mystics#Illuminate_Shadows"
                target="_blank"
              >
                <span className="[text-decoration:underline]">
                  Illuminate Shadows
                </span>
              </a>
              {`, `}
              <a
                className="text-[inherit]"
                href="http://wiki.utopia-game.com/index.php?title=Mystics#Salvation"
                target="_blank"
              >
                <span className="[text-decoration:underline]">Salvation</span>
              </a>
              {`, `}
              <a
                className="text-[inherit]"
                href="http://wiki.utopia-game.com/index.php?title=Mystics#Wrathful_Smite"
                target="_blank"
              >
                <span className="[text-decoration:underline]">
                  Wrathful Smite
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="absolute top-[906px] left-[700px] bg-white box-border w-[349px] h-[375px] text-base font-roboto border-[1px] border-solid border-black">
        <div className="absolute top-[23px] left-[calc(50%_-_63.5px)] tracking-[0.15px] leading-[150%]">
          Personality Heretic
        </div>
        <div className="absolute top-[0px] left-[0px] bg-gainsboro-300 box-border w-[349px] h-[61px] border-[1px] border-solid border-black" />
        <div className="absolute top-[123.66px] left-[30.91px] text-[inherit] tracking-[0.15px] leading-[150%] font-inherit inline-block w-[303.13px] h-[187.99px]">
          <ul className="m-0 pl-[19px]">
            <li className="mb-0">-25% Military Casualties</li>
            <li className="mb-0">Immune to the Plague</li>
            <li className="mb-0">Can Cast Support Spells on Kingdom Members</li>
            <li className="mb-0">
              {`Access to `}
              <a
                className="text-[inherit]"
                href="http://wiki.utopia-game.com/index.php?title=Mystics#Divine_Shield"
                target="_blank"
              >
                <span className="[text-decoration:underline]">
                  Divine Shield
                </span>
              </a>
              {`, `}
              <a
                className="text-[inherit]"
                href="http://wiki.utopia-game.com/index.php?title=Mystics#Greater_Protection"
                target="_blank"
              >
                <span className="[text-decoration:underline]">
                  Greater Protection
                </span>
              </a>
              {`, `}
              <a
                className="text-[inherit]"
                href="http://wiki.utopia-game.com/index.php?title=Mystics#Illuminate_Shadows"
                target="_blank"
              >
                <span className="[text-decoration:underline]">
                  Illuminate Shadows
                </span>
              </a>
              {`, `}
              <a
                className="text-[inherit]"
                href="http://wiki.utopia-game.com/index.php?title=Mystics#Salvation"
                target="_blank"
              >
                <span className="[text-decoration:underline]">Salvation</span>
              </a>
              {`, `}
              <a
                className="text-[inherit]"
                href="http://wiki.utopia-game.com/index.php?title=Mystics#Wrathful_Smite"
                target="_blank"
              >
                <span className="[text-decoration:underline]">
                  Wrathful Smite
                </span>
              </a>
            </li>
            <li>
              Starts with +600 Soldiers and +600 Specialist credits and +200
              Wizards
            </li>
          </ul>
        </div>        
      </div>
      <div className="absolute top-[906px] left-[1070px] bg-white box-border w-[349px] h-[375px] text-base font-roboto border-[1px] border-solid border-black">
        <div className="absolute top-[23px] left-[calc(50%_-_63.5px)] tracking-[0.15px] leading-[150%]">
          Personality Merchant
        </div>
        <div className="absolute top-[0px] left-[0px] bg-gainsboro-300 box-border w-[349px] h-[61px] border-[1px] border-solid border-black" />
        <div className="absolute top-[123.66px] left-[30.91px] text-[inherit] tracking-[0.15px] leading-[150%] font-inherit inline-block w-[303.13px] h-[187.99px]">
          <ul className="m-0 pl-[19px]">
            <li className="mb-0">-15% Food Cost</li>
            <li className="mb-0">Immune to the Plague</li>
            <li className="mb-0">Can Cast Support Spells on Kingdom Members</li>
            <li className="mb-0">
              {`Access to `}
              
              {`, `}
              <a
                className="text-[inherit]"
                href="http://wiki.utopia-game.com/index.php?title=Mystics#Greater_Protection"
                target="_blank"
              >
                <span className="[text-decoration:underline]">
                  Greater Protection
                </span>
              </a>
              {`, `}
              
              {`, `}
              <a
                className="text-[inherit]"
                href="http://wiki.utopia-game.com/index.php?title=Mystics#Salvation"
                target="_blank"
              >
                <span className="[text-decoration:underline]">Salvation</span>
              </a>
              {`, `}
              <a
                className="text-[inherit]"
                href="http://wiki.utopia-game.com/index.php?title=Mystics#Wrathful_Smite"
                target="_blank"
              >
                <span className="[text-decoration:underline]">
                  Wrathful Smite
                </span>
              </a>
            </li>
            <li>
              Starts with +600 Farmer and +600 Specialist credits and +200
              Wizards
            </li>
          </ul>
        </div>        
      </div>
    </div>
  );
};

export default PagesList;
