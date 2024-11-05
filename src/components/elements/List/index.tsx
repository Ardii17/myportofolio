type types = {
  children: React.ReactNode;
  onClick: any;
  className?: string;
};

const List = (props: types) => {
  const { children, onClick, className } = props;
  return (
    <li
      className={`text-white cursor-pointer hover:text-zinc-100 ${className}`}
      onClick={onClick}
    >
      {children}
    </li>
  );
};

export default List;
