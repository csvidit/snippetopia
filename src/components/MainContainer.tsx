const MainContainer = (props: { children: React.ReactNode }) => {
  return (
    <div className="text-sm relative justify-center w-full h-full min-w-screen min-h-screen p-5 lg:p-10 flex flex-col space-y-5 items-center lg:space-y-10 bg-indigo-100 text-gray-600">
      {props.children}
    </div>
  );
};

export default MainContainer;