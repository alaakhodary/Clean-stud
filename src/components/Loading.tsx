const Loading: React.FC = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <div className="h-[50px] w-[50px] animate-spin rounded-[50%] border-4 border-t-[#3D99F5]"></div>
      <p className="mt-4 items-center text-3xl text-[#3D99F5]">Loading...</p>
    </div>
  );
};

export default Loading;
