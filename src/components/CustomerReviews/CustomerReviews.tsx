import "./style.css";

interface IPropReview {
  imgClient: string;
  imgComaRight: string;
  imgComaLeft: string;
  name: string;
  opinion: string;
}

const CustomerReviews = (props: IPropReview) => {
  return (
    <div className="relative h-[248px] w-[100%] px-10 py-[5.25rem] shadow-shadowPrimary">
      <div className="absolute right-0 top-0 lg:right-[5px] lg:top-[-16px]">
        <img src={props.imgComaRight} alt="comaRight" />
      </div>
      <div className="absolute right-[35%] top-[-25%] sm:right-[39%] md:right-[30%] lg:right-[35%] xl:right-[30%] 2xl:right-[35%]">
        <img
          src={props.imgClient}
          alt="imgCleint"
          className="h-[120px] w-[120px] rounded-full"
        />
      </div>
      <div className="max-lg:py-1">
        <p className="w-[100%] text-center text-[1.60rem] text-black">
          {props.opinion}
        </p>
        <p className="mt-[0.5rem] text-center text-lg text-[#2F3239]">
          {props.name}
        </p>
      </div>
      <div className="absolute bottom-0 left-0 lg:bottom-[-10px] lg:left-[1px]">
        <img src={props.imgComaLeft} alt="comaLeft" />
      </div>
    </div>
  );
};

export default CustomerReviews;
