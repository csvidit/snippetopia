const MainContainer = (props: { children: React.ReactNode }) => {
  return (
    <div className="text-sm relative justify-center w-full h-full min-w-screen min-h-screen flex flex-col items-center bg-indigo-100 text-gray-600 gap-y-5 lg:gap-y-10">
      {props.children}
    </div>
  );
};

export default MainContainer;