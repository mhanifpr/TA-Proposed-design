import * as React from "react";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";

const steps = [
  {
    label: "Food Produce",
    description: `Food dapat di produksi melalui bangunan Farms, beberapa Race atau Personality bisa 
    mempunyai kemampuan khusus yang bisa mempercepat produksi bushels.`,
  },
  {
    label: "Food Consume",
    description:
      "Jika suatu provinsi tidak memiliki Food, maka provinsi tersebut akan mengalami kelaparan. Ketika provinsi mengalami kelaparan, jumlah populasi di dalamnya (petani, pasukan militer, dan pencuri) akan berkurang seiring dengan besarnya kekurangan makanan (termasuk pasukan yang sedang berada di luar provinsi). Namun, para penyihir tidak akan terpengaruh oleh kondisi kelaparan.",
  },
  {
    label: "Food Decayed",
    description: `Dalam kondisi normal, sekitar 0,99 atau sekitar 1% dari total stok makanan akan rusak. Jumlah yang tepat tergantung pada pengubah dalam rumus yang telah diberikan di atas dan dihitung berdasarkan total makanan yang disimpan di provinsi. 
    Jadi jika sebuah provinsi memiliki 300.000 bushels makanan dalam stok dalam kondisi normal, maka penurunan yang diharapkan sedikit lebih atau kurang dari 3000 bushels per tick / hari Utopia.`,
  },
];

export default function TextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = steps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box sx={{ maxWidth: 400, flexGrow: 1, border: 1 }}>
      <Paper
        square
        elevation={0}
        sx={{
          display: "flex",
          alignItems: "center",
          height: 50,
          pl: 2,
          bgcolor: "background.default",
        }}
        className={"bg-gray-300"}
      >
        <Typography>{steps[activeStep].label}</Typography>
      </Paper>
      <Box sx={{ height: 255, maxWidth: 400, width: "100%", p: 2 }}>
        {steps[activeStep].description}
      </Box>
      <MobileStepper
        variant="text"
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        className={"bg-gray-300"}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Box>
  );
}