interface IPropAdvance {
  img: string;
  title: string;
  desc: string;
}

const Advantages = (props: IPropAdvance) => {
  return (
    <div className="flex items-center gap-1">
      <div>
        <img
          src={props.img}
          alt="images"
          className="h-[100px] w-[100px] rounded-xl"
        />
      </div>
      <div className="mr-4">
        <h2 className="text-lg font-bold text-co-17">{props.title}</h2>
        <p className="text-xl text-co-18">{props.desc}</p>
      </div>
    </div>
  );
};

export default Advantages;
