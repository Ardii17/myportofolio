import Link from "next/link";

type types = {
    name: string;
    link: string
}

export default function Icon(props: types) {
  const { name, link } = props;
  return (
    <Link  className="w-9 bg-white rounded-lg" href={link} target="_blank">
      <img
        src={`./../Icons/Icons Web/${name}.png`}
        alt={name}
        className="w-full"
      />
    </Link>
  );
}
