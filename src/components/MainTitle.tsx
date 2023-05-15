import imgLeft from "../assest/imgTitleLeft.svg";
import imgRight from "../assest/imgTitleRight.svg";

interface IPropTitle {
  text: string;
}

const MainTitle = (props: IPropTitle) => {
  return (
    <div className="mb-20 flex justify-center text-center">
      <img src={imgRight} alt="imgTitleR" />
      <h1 className="ml-2 mr-2 mt-[-4px] text-[35px] max-md:text-3xl">
        {props.text}
      </h1>
      <img src={imgLeft} alt="imgTitleL" />
    </div>
  );
};

export default MainTitle;
