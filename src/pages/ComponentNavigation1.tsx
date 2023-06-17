import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import SearchAppBar from "./Searchbar";

const ComponentNavigation1: FunctionComponent = () => {
  return (
    <div className="relative bg-white w-full h-[720px] overflow-hidden text-left text-xl text-black font-poppins">
      <Link
        className="cursor-pointer [text-decoration:none] absolute top-[121px] left-[1360px] bg-peru w-20 h-[73px]"
        to="/"
      >
        <img
          className="absolute top-[6px] left-[10px] w-[60px] h-[60px] overflow-hidden"
          alt=""
          src="/bxhome.svg"
        />
      </Link>
      <b className="absolute top-[152px] left-[calc(50%_-_89px)] text-13xl tracking-[-0.02em] text-black">
        Navigation
      </b>
      
      <div className="absolute top-[290px] left-[250px] w-[976px] h-48 bg-gray text-center border-1 ">
        <SearchAppBar />
      </div>
    </div>
  );
};

export default ComponentNavigation1;
