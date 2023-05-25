import img from "../../../assest/img1.svg";

interface IPropImg {
  text: string;
  subText: string;
}

const MainImage = (props: IPropImg) => {
  return (
    <section className="px-2 py-12">
      <div className="relative h-full w-full">
        <img src={img} alt="Img" className="m-auto w-full object-cover" />
        <div className="absolute right-0 top-0 h-full w-2/4 rounded-3xl">
          <div className="inside-img w-full max-md:p-[1.5rem] md:mx-8 md:my-16 lg:mx-20 lg:my-28">
            <h1 className="mb-3 w-[23rem] text-5xl leading-[3.5rem] max-sm:w-40 max-sm:text-xl md:w-[24rem] md:text-[50px] md:leading-[4rem]">
              {props.text}
            </h1>
            <p className="max-xs:mb-0 mb-6 w-[18rem] text-2xl text-[#7D7E82] max-sm:w-44 max-sm:text-sm md:w-[22rem] md:text-3xl lg:mt-6">
              {props.subText}
            </p>
            <button className="h-12 w-[150px] rounded-full border bg-white p-2 text-[1.59rem] text-xl max-sm:w-36 max-sm:text-sm">
              تواصل معنا
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainImage;
