import { FunctionComponent, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import SearchAppBar from "./Searchbar";
import StickyHeadTable from "./Tabelfunc";

const PagesList: FunctionComponent = () => {
  const navigate = useNavigate();

  const onHomeButtonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="relative bg-gainsboro-200 w-full h-[1878px] overflow-hidden text-left text-[inherit] text-black font-poppins">
      <Link
        className="cursor-pointer [text-decoration:none] fixed top-[5px] left-[0px] bg-gray-100 w-20 h-[73px]"
        to="/"
        onClick={onHomeButtonClick}
      >
        <img
          className="fixed top-[6px] left-[10px] w-[60px] h-[60px] overflow-hidden"
          alt=""
          src="/bxhome4.svg"
        />
      </Link>
      <div className="absolute top-[0px] left-[120px] bg-white w-[1189px] h-[1878px]" />
      <b className="absolute top-[93px] left-[416px] text-13xl tracking-[-0.02em] leading-[25px]">
        Personality
      </b>
      <img
        className="fixed top-[73px] left-[120px] w-[273px] h-[750px] object-cover"
        alt=""
        src="/screen-shot-20230614-at-1846-1@2x.png"
      />
      <div className="absolute top-[186px] left-[424px] text-5xl tracking-[-0.02em] leading-[25px] font-semibold">
        Personlity list:
      </div>
      <div className="absolute top-[856px] left-[408px] text-5xl tracking-[-0.02em] leading-[25px] font-semibold inline-block w-52 h-[25px]">
        Personlity Details:
      </div>
      
      <div className="absolute top-[911px] left-[459px] bg-white box-border w-[349px] h-[373px] text-base font-roboto border-[1px] border-solid border-black">
        <div className="absolute top-[0px] left-[0px] bg-whitesmoke-200 box-border w-[349px] h-[61px] border-[1px] border-solid border-black" />
        <div className="absolute top-[23px] left-[calc(50%_-_63.5px)] tracking-[0.15px] leading-[150%]">
          Personality Heretic
        </div>
        <div className="absolute top-[123.66px] left-[30.91px] text-[inherit] tracking-[0.15px] leading-[150%] font-inherit inline-block w-[303.13px] h-[187.99px]">
          <ul className="m-0 pl-[19px]">
            <li className="mb-0">-20% Military Casualties</li>
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
      <div className="absolute top-[911px] left-[842px] bg-white box-border w-[349px] h-[373px] font-inherit border-[1px] border-solid border-black">
        <div className="absolute top-[0px] left-[0px] bg-gainsboro-300 box-border w-[349px] h-[61px] border-[1px] border-solid border-black" />
        <div className="absolute top-[123.66px] left-[30.91px] tracking-[0.15px] leading-[150%] inline-block w-[303.13px] h-[187.99px]">
          <ul className="m-0 pl-[19px]">
            <li className="mb-0">-20% Military Casualties</li>
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
        <div className="absolute top-[21px] left-[calc(50%_-_68.5px)] text-base tracking-[0.15px] leading-[150%] font-roboto">
          Personality Heretic
        </div>
      </div>
      <div className="absolute top-[1408px] left-[842px] bg-white box-border w-[349px] h-[373px] font-inherit border-[1px] border-solid border-black">
        <div className="absolute top-[0px] left-[0px] bg-gainsboro-300 box-border w-[349px] h-[61px] border-[1px] border-solid border-black" />
        <div className="absolute top-[123.66px] left-[30.91px] tracking-[0.15px] leading-[150%] inline-block w-[303.13px] h-[187.99px]">
          <ul className="m-0 pl-[19px]">
            <li className="mb-0">-20% Military Casualties</li>
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
        <div className="absolute top-[21px] left-[calc(50%_-_68.5px)] text-base tracking-[0.15px] leading-[150%] font-roboto">
          Personality Heretic
        </div>
      </div>
      <div className="absolute top-[1408px] left-[459px] bg-white box-border w-[349px] h-[373px] font-inherit border-[1px] border-solid border-black">
        <div className="absolute top-[0px] left-[0px] bg-gainsboro-300 box-border w-[349px] h-[61px] border-[1px] border-solid border-black" />
        <div className="absolute top-[123.66px] left-[30.91px] tracking-[0.15px] leading-[150%] inline-block w-[303.13px] h-[187.99px]">
          <ul className="m-0 pl-[19px]">
            <li className="mb-0">-20% Military Casualties</li>
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
        <div className="absolute top-[21px] left-[calc(50%_-_68.5px)] text-base tracking-[0.15px] leading-[150%] font-roboto">
          Personality Cleric
        </div>
        
      </div>
      
      <div className="absolute top-[250px] left-[400px] w-[900px] h-[160px]">
        <StickyHeadTable/>
        </div>
      
        <div className="fixed top-[0px] left-[120px] w-[1189px] h-[80.08px] bg-gray text-center border-1 ">
        <SearchAppBar />
      </div>
    </div>
  );
};

export default PagesList;
