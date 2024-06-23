import { Tooltip } from "@mui/material";
import { useEffect, useState } from "react";

const ToTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Tooltip
      arrow
      title="Return To Top"
      placement="top"
      className={`${showButton ? "hidden md:block " : "hidden"} `}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <div className={`fixed md:bottom-10 md:right-10 cursor-pointer`}>
        <i className="bx bx-up-arrow-alt text-3xl p-2 text-black hover:bg-zinc-100 bg-white rounded-md" />
      </div>
    </Tooltip>
  );
};

export default ToTop;
