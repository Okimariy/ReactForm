import React from "react";
import { atom, RecoilRoot } from "recoil";
import PropTypes from "prop-types";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Check from "@material-ui/icons/Check";
import StepConnector from "@material-ui/core/StepConnector";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import InputComponent from "./InputComponent";
import ConfirmationComponent from "./ConfirmationComponent";

//*******************************************************************//
// 親component（ステータスバーの表示がある）
//*******************************************************************//

// Atomsはデータストア
// keyはアプリケーションを通してユニークであるdefaultには初期値を設定
// Inputの内容を入れるFormtextState
// export const FormtextState = atom({
//   key: "FormtextState",
//   jobname: "あいうえお",
//   jobmail: "かきくけこ",
//   jobtext: "さしすせそ",
// });

const QontoConnector = withStyles({
  alternativeLabel: {
    top: 10,
    left: "calc(-50% + 16px)",
    right: "calc(50% + 16px)",
  },
  active: {
    "& $line": {
      borderColor: "#42C38B",
    },
  },
  completed: {
    "& $line": {
      borderColor: "#42C38B",
    },
  },
  line: {
    borderColor: "#EAEAF0",
    borderTopWidth: 3,
    borderRadius: 1,
  },
})(StepConnector);
const useQontoStepIconStyles = makeStyles({
  root: {
    color: "#EAEAF0",
    display: "flex",
    height: 22,
    alignItems: "center",
  },
  active: {
    color: "#784AF4",
  },
  circle: {
    width: 8,
    height: 8,
    borderRadius: "50%",
    backgroundColor: "#F5F5F5",
  },
  completed: {
    color: "#784AF4",
    zIndex: 1,
    fontSize: 18,
  },
});
function QontoStepIcon(props) {
  const classes = useQontoStepIconStyles();
  const { active, completed } = props;
  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
      })}
    >
      {completed ? (
        <Check className={classes.completed} />
      ) : (
        <div className={classes.circle} />
      )}
    </div>
  );
}
QontoStepIcon.propTypes = {
  /**
   * Whether this step is active.
   */
  active: PropTypes.bool,
  /**
   * Mark the step as completed. Is passed to child components.
   */
  completed: PropTypes.bool,
};
const ColorlibConnector = withStyles({
  alternativeLabel: {
    top: 22,
  },
  active: {
    "& $line": {
      backgroundImage:
        "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
    },
  },
  completed: {
    "& $line": {
      backgroundImage:
        "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
    },
  },
  line: {
    height: 3,
    border: 0,
    backgroundColor: "#EAEAF0",
    borderRadius: 1,
  },
})(StepConnector);
const useColorlibStepIconStyles = makeStyles({
  root: {
    backgroundColor: "#ccc",
    zIndex: 1,
    color: "#fff",
    width: 50,
    height: 50,
    display: "flex",
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
  active: {
    backgroundImage:
      "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
    boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
  },
  completed: {
    backgroundImage:
      "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
  },
});
const ColorlibStepIcon = (props) => {
  const classes = useColorlibStepIconStyles();
  const { active, completed } = props;
  const icons = {
    // 1: <SettingsIcon />,
    // 2: <GroupAddIcon />,
    // 3: <VideoLabelIcon />,
  };
  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed,
      })}
    >
      {icons[String(props.icon)]}
    </div>
  );
};
ColorlibStepIcon.propTypes = {
  /**
   * Whether this step is active.
   */
  active: PropTypes.bool,
  /**
   * Mark the step as completed. Is passed to child components.
   */
  completed: PropTypes.bool,
  /**
   * The label displayed in the step icon.
   */
  icon: PropTypes.node,
};
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));
// バー部分のstepの内容
function getSteps() {
  return ["入力", "内容確認", "送信"];
}
// button部分のstepの内容
function getStepContent(step) {
  switch (step) {
    case 0:
      return <InputComponent />;
    case 1:
      return <ConfirmationComponent />;
    default:
      return "Unknown step";
  }
}
//*******************************************************************//
//createContextを使ってFromContextを作成
// export const FromContext = React.createContext();
//*******************************************************************//
function StepperPage() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const handleReset = () => {
    setActiveStep(0);
  };
  return (
    <div className={classes.root}>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>
              All steps completed - you&apos;re finished
            </Typography>
            <Button onClick={handleReset} className={classes.button}>
              Reset
            </Button>
          </div>
        ) : (
          <div>
            {/* //********************************************************************/}
            {/* 全てが入っている */}
            {/* //********************************************************************/}
            <Typography className={classes.instructions}>
              {/* //********************************************************************/}
              {/* ステップアップバーのデザイン */}
              {/* //********************************************************************/}
              <Stepper
                alternativeLabel
                activeStep={activeStep}
                connector={<QontoConnector />}
                style={{ background: "#F5F5F5" }}
              >
                {steps.map((label) => (
                  <Step key={label}>
                    <StepLabel StepIconComponent={QontoStepIcon}>
                      {label}
                    </StepLabel>
                  </Step>
                ))}
              </Stepper>
              {/* //********************************************************************/}
              {/* ステップアップバーのデザイン */}
              {/* //********************************************************************/}

              {getStepContent(activeStep)}
            </Typography>
            {/* //********************************************************************/}
            {/* 全てが入っている */}
            {/* //********************************************************************/}
            <div>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.button}
              >
                戻る
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
                className={classes.button}
              >
                {activeStep === steps.length - 1 ? "送信" : "内容を確認する"}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default StepperPage;
