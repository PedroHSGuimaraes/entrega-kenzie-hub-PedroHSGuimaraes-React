export const Button = ({ text, ...rest }) => {
  return (
    <>
      <button className={"button--submit button--submit-color"} {...rest}>
        {text}
      </button>
    </>
  );
};
