import { FunctionComponent, useCallback } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Icon,
  Typography,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

const ComponentRecipe: FunctionComponent = () => {
  const navigate = useNavigate();

  const onHomeButtonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="relative bg-white w-full h-[720px] overflow-hidden">
      <Accordion
        className="absolute top-[249px] left-[500px] border-1"
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
      <b className="absolute top-[18px] left-[638px] text-13xl tracking-[-0.02em]">
        Recipe
      </b>
    </div>
  );
};

export default ComponentRecipe;
