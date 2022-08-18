import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import "./Agent.css";
//
// import BasicForm from "./components/BasicForm";
// import ContactForm from "./components/ContactForm";
// import PersonalForm from "./components/PersonalForm";
// import PaymentForm from "./components/PaymentForm";/

//
import { useForm, FormProvider } from "react-hook-form";
import BankDetailForm from "./Steps/BankDetailForm";
import PersonalForm from "./Steps/PersonalForm";
import AgreementUpload from "./Steps/AgreementUpload";
import ProductsPlan from "./Steps/ProductsPlan";
import MarketingCampaigns from "./Steps/MarketingCampaigns.jsx";
import OtherLinks from "./Steps/OtherLinks";
import { useState } from "react";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     width: "100%"
//   },
//   button: {
//     marginTop: theme.spacing(1),
//     marginRight: theme.spacing(1)
//   },
//   actionsContainer: {
//     marginBottom: theme.spacing(2)
//   },
//   resetContainer: {
//     padding: theme.spacing(3)
//   }
// }));

function getSteps() {
  return [
    "Personal details",
    "Bank details",
    "Upload agreement",
    "Marketing campaigns",
    "Products & plan",
    "Other links",
  ];
}

function InfoSteper() {
  // const classes = useStyles();
  const [fillDetails, setFillDetails] = useState(false);
  //   const[fillBankDetails ,setFillBankDetail] = useState(false)
  console.log("filpersonlform", fillDetails);
  const methods = useForm({
    defaultValues: {
      emailAddress: "",
      phoneNumber: "",
      address1: "",
      address2: "",
      state: "",
      city: "",
      //   emailAddress: "",
      pinCode: "",
      language: "",
      accountNum: "",
      reEnteraccountNum: "",
      ifcCode: "",
      accountHolderName: "",
      kycDocument: "",
      mutualFunds: "",
      gold: "",
      stock: "",
      basic: "",
      pro: "",
      enterprise: "",
      fbLink: "",
      linkdinLink: "",
      instaLink: "",
      website: "",
      microSite: "",
    },
  });
  console.log("state", methods.state);
  function getStepContent(step) {
    switch (step) {
      case 0:
        return <PersonalForm setFillDetails={setFillDetails} />;
      case 1:
        return <BankDetailForm setFillDetails={setFillDetails} />;
      case 2:
        return <AgreementUpload setFillDetails={setFillDetails} />;
      case 3:
        return <MarketingCampaigns setFillDetails={setFillDetails} />;
      case 4:
        return <ProductsPlan setFillDetails={setFillDetails} />;
      case 5:
        return <OtherLinks setFillDetails={setFillDetails} />;
      default:
        return "Unknown step";
    }
  }
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = (e) => {
    e.preventDefault();
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setFillDetails(false);
  };

  const handleBack = (e) => {
    e.preventDefault();
   
    
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const handleSubmit = (data) => {
    console.log(data);
  };

  return (
    <div style={{ marginLeft: "28px" }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel
              onClick={() => {
                if (activeStep === 0) {
                  return false;
                }
               else if(index ===  activeStep -1){
                  setActiveStep((prevActiveStep) => prevActiveStep -1);
                  // index ++
                  // activeStep =+ 1
                }
               
              }}
            >
              {label}
            </StepLabel>
            <StepContent>
              <div>
                <div>
                  <FormProvider {...methods}>
                    <form onSubmit={methods.handleSubmit(handleSubmit)}>
                      {getStepContent(activeStep)}
                      {/* <Button
                        disabled={activeStep === 0}
                        onClick={handleBack}
                        // className={classes.button}
                      >
                        Back
                      </Button> */}

                      <p
                        onClick={handleNext}
                        className={`${
                          fillDetails === true
                            ? "save-next-btn"
                            : "hide-save-next-btn"
                        }`}
                      >
                        {activeStep === steps.length - 1
                          ? "Finish"
                          : "Save and continue"}
                      </p>
                      {/* <p
                        variant="contained"
                        color="primary"
                        onClick={handleNext}
                        // className={classes.button}
                      >
                        {activeStep === steps.length - 1 ? "Finish" : "Next"}
                      </p> */}
                    </form>
                  </FormProvider>
                </div>
              </div>
            </StepContent>
          </Step>
        ))}
        <button
          className={`reqst-btn ${
            activeStep === steps.length ? "reqst-btn-active" : ""
          }`}
        >
          Continue
        </button>
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0}>
          <Typography>All steps completed - Thank you!</Typography>

          <Button onClick={handleReset}>Reset</Button>
        </Paper>
      )}
      {/* {JSON.stringify(activeStep)} */}
    </div>
  );
}

export default InfoSteper;
