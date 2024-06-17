import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";
import Link from "next/link";

type proptypes = {
  img: string;
  title: string;
  desc: string;
  href: string;
};

export default function BoxBlog(props: proptypes) {
  const { img, title, desc, href } = props;
  const theme = useContext(ThemeContext);

  return (
    <Link
      href={href}
      target="_blank"
      className="card"
      ref={theme?.tiltRef}
    >
      <div className="card-header shadow">
        <img src={img} alt="rover" />
      </div>
      <div className="card-body">
        <span className="tag tag-teal">{title}</span>
        <p className="py-4">{desc}</p>
        <div className="user">
          <img src="./../ProfileIMG/Ardi.png" alt="user" />
          <div className="user-info">
            <h5>Ardiansyah</h5>
            <small>2h ago</small>
          </div>
        </div>
      </div>
    </Link>
  );
}
