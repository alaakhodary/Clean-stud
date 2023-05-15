import img from "../assest/img1.svg";

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
            <h1 className="mb-3 w-64 text-4xl leading-[3.5rem] max-sm:w-40 max-sm:text-xl lg:w-[25rem] lg:text-[4.25rem] lg:leading-[4rem]">
              {props.text}
            </h1>
            <p className="max-xs:mb-0 mb-6 w-[15rem] text-2xl text-[#7D7E82] max-sm:w-44 max-sm:text-sm lg:mt-6 lg:w-[21rem] lg:text-[2rem]">
              {props.subText}
            </p>
            <button className="h-12 w-[150px] rounded-full border bg-white p-2 text-[1.59rem] text-xl max-sm:w-36 max-sm:text-sm lg:h-16 lg:w-[170px]">
              تواصل معنا
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainImage;

/* <img src={img} alt="Img" className="m-auto w-full object-cover" />
        <div className="absolute right-52 top-20 max-sm:right-4 max-sm:top-4 max-sm:w-48 max-sm:p-3 max-sm:text-xl sm:right-5 sm:top-4 lg:right-9 lg:top-10 xl:right-20 xl:top-10 2xl:right-56 2xl:top-10">
          <h1 className="mb-3 w-64 text-4xl leading-[3.5rem] max-sm:w-40 max-sm:text-xl">
            {props.text}
          </h1>
          <p className="max-xs:mb-0 mb-6 w-[15rem] text-2xl text-[#7D7E82] max-sm:w-44 max-sm:text-sm">
            {props.subText}
          </p>
          <button className="h-12 w-[150px] rounded-full border bg-white p-2 text-xl max-sm:w-36 max-sm:text-sm">
            تواصل معنا
          </button>
        </div> */
