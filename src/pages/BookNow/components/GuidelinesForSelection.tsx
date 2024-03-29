type IGuideline = {
  text: string;
};

const GuidelinesForSelection = (props: IGuideline) => {
  return (
    <div className="p-4">
      <h1 className="text-xl font-semibold">{props.text}</h1>
    </div>
  );
};

export default GuidelinesForSelection;
