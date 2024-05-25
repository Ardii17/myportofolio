import Link from "next/link";

type types = {
  name: string;
  link: string;
  className?: string;
};

export default function Icon(props: types) {
  const { name, link, className } = props;
  return (
    <Link className={`${className} w-9 rounded-lg`} href={link} target="_blank">
      <img
        src={`./../Icons/Icons Web/${name}.png`}
        alt={name}
        className="w-full h-full"
      />
    </Link>
  );
}
