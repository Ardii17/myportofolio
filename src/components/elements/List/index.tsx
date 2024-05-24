type types = {
  children: React.ReactNode;
  onClick: any;
};
const List = (props: types) => {
  const { children, onClick } = props;
  return (
    <li
      className="text-white cursor-pointer hover:text-zinc-100"
      onClick={onClick}
    >
      {children}
    </li>
  );
};

export default List;
