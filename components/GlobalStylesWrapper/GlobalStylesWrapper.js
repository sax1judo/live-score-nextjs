import globalStyles from "../../styles/global";

const GlobalStylesWrapper = (props) => {
  return (
    <>
      <style jsx global>
        {globalStyles}
      </style>
      {props.children}
    </>
  );
};

export default GlobalStylesWrapper;
