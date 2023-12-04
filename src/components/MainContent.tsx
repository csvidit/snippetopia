const MainContent = (props: { children: React.ReactNode }) => {
    return (
      <div className="w-11/12 lg:w-10/12 h-full min-h-screen flex flex-col gap-y-5 lg:gap-y-10">
        {props.children}
      </div>
    );
  };
  
  export default MainContent;