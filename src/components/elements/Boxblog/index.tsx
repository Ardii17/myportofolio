import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";
import Link from "next/link";

type proptypes = {
  img: string;
};

export default function BoxBlog(props: proptypes) {
  const { img } = props;
  const theme = useContext(ThemeContext);

  return (
    <Link
      href="https://mafstore.vercel.app"
      target="_blank"
      className="card"
      ref={theme?.tiltRef}
      data-tilt
    >
      <div className="card-header">
        <img src={img} alt="rover" />
      </div>
      <div className="card-body">
        <span className="tag tag-teal">Mafstore</span>
        <p className="py-4">
          Mafstore adalah sebuah website marketplace yang menjual berbagai macam
          kebutuhan kita
        </p>
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
