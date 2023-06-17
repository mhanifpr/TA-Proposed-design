import { FunctionComponent, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";

const ComponentImportantFacts: FunctionComponent = () => {
  const navigate = useNavigate();

  const onHomeButtonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="relative bg-white w-full h-[720px] overflow-hidden text-left text-base text-black font-roboto">
      <div className="absolute top-[526px] left-[calc(50%_-_144px)] tracking-[0.15px] leading-[150%]">
        https://mui.com/material-ui/react-card/
      </div>
      <div className="absolute top-[72px] left-[184px] bg-white box-border w-[349px] h-[375px] border-[1px] border-solid border-black">
        <div className="absolute top-[23px] left-[calc(50%_-_63.5px)] tracking-[0.15px] leading-[150%]">
          Personality Avian
        </div>
        <div className="absolute top-[0px] left-[0px] bg-gainsboro-300 box-border w-[349px] h-[61px] border-[1px] border-solid border-black" />
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
      <div className="absolute top-[72px] left-[836px] bg-white box-border w-[349px] h-[375px] border-[1px] border-solid border-black">
        <div className="absolute top-[23px] left-[calc(50%_-_63.5px)] tracking-[0.15px] leading-[150%]">
          Personality Avian
        </div>
        <div className="absolute top-[0px] left-[0px] bg-gainsboro-300 box-border w-[349px] h-[61px] border-[1px] border-solid border-black" />
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
      <Link
        className="cursor-pointer [text-decoration:none] absolute top-[0px] left-[0px] bg-peru w-20 h-[73px]"
        to="/"
        onClick={onHomeButtonClick}
      >
        <img
          className="absolute top-[6px] left-[10px] w-[60px] h-[60px] overflow-hidden"
          alt=""
          src="/bxhome1.svg"
        />
      </Link>
      <b className="absolute top-[15px] left-[calc(50%_-_128px)] text-13xl tracking-[-0.02em] font-poppins">
        Important Facts
      </b>
    </div>
  );
};

export default ComponentImportantFacts;
