"use client";
import styled from "styled-components";

const LiveProgressBar = (props) => {
  const ProgressBar = styled.div((props) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    margin: "auto",
    background: `radial-gradient(closest-side, #3d3d3d 95%, transparent 100% 100%),
      conic-gradient(#44ca5b ${props.$minutesPlayedValue}%, #545a55 0)`,
    "&::before": {
      color: "#ffffff",
      content: `"${props.$minutesPlayedLabel}"`,
    },
  }));

  var progressBarValue = {};
  if (props.progress === "FT") {
    progressBarValue.value = 100;
    progressBarValue.label = "FT";
  } else if (props.progress === "-") {
    progressBarValue.value = 0;
    progressBarValue.label = "";
  } else if (props.progress === "HT") {
    progressBarValue.value = 50;
    progressBarValue.label = "HT";
  } else if (props.progress === "Canceled") {
    progressBarValue.value = 0;
    progressBarValue.label = "";
  } else {
    //substring to cover case fpr 45+ etc...
    progressBarValue.value = props.progress.substring(0, 2);
    progressBarValue.label = props.progress + "'";
  }

  return (
    <ProgressBar
      $minutesPlayedValue={progressBarValue.value}
      $minutesPlayedLabel={progressBarValue.label}
    >
      <progress
        min="0"
        max="100"
        style={{ visibility: "hidden", height: "0", width: "0" }}
      >
        90%
      </progress>
    </ProgressBar>
  );
};
export default LiveProgressBar;
