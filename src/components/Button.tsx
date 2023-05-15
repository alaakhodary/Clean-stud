interface IPropBtn {
  text: string;
  onClick?: (event: any) => void;
  variant?: "primary" | "secondary";
}

const Button = (props: IPropBtn) => {
  const buttonClasses = `${
    props.variant === "primary"
      ? "w-36 px-6 h-14 ml-2 border-solid border-2 rounded-full border-co-4 bg-white text-co-4 hover:border-none hover:bg-co-4 hover:text-white text-[1.4rem]"
      : "w-36 px-6 h-14 border-solid border-2 rounded-full border-co-4 bg-co-4 text-white hover:bg-white hover:text-co-4 text-[1.4rem]"
  }`;
  return (
    <button onClick={props.onClick} className={buttonClasses}>
      {props.text}
    </button>
  );
};

export default Button;
