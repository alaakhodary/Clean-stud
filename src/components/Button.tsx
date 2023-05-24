interface IPropBtn {
  text: string;
  onClick?: (event: any) => void;
  variant?: "primary" | "secondary";
}

const Button = (props: IPropBtn) => {
  const buttonClasses = `${
    props.variant === "primary"
      ? "w-36 px-6 h-14 ml-2 border-solid border-2 rounded-full border-[#00ADEE] bg-white text-[#00ADEE] hover:border-none hover:bg-[#00ADEE] hover:text-white text-[19px]"
      : "w-36 px-6 h-14 border-solid border-2 rounded-full border-[#00ADEE] bg-[#00ADEE] text-white hover:bg-white hover:text-[#00ADEE] text-[19px]"
  }`;
  return (
    <button onClick={props.onClick} className={buttonClasses}>
      {props.text}
    </button>
  );
};

export default Button;
