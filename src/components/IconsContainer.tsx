const IconsContainer = (props: { children: React.ReactNode }) => {
  return (
    <div className="inline-flex items-center space-x-2.5 text-gray-400 text-lg lg:text-xl">
      {props.children}
    </div>
  );
};

export default IconsContainer;