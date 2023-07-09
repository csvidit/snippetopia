const PillButton = (props: {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  variant: string;
  children: React.ReactNode;
}) => {
  return (
    <button
      onClick={props.onClick}
      className={`px-5 py-1 w-fit rounded-full border border-indigo-600 transition-all duration-200 ease-out ${
        props.variant == "fill"
          ? "bg-indigo-600 text-indigo-100 hover:bg-indigo-100 hover:text-indigo-600"
          : "bg-indigo-100 text-indigo-600 hover:bg-indigo-600 hover:text-indigo-100"
      }`}
    >
      {props.children}
    </button>
  );
};

export default PillButton;
