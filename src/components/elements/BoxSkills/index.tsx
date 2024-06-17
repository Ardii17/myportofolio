import { Tooltip } from "@mui/material";
import Image from "next/image";
import { useRef } from "react";

type types = {
  contentSkills: any;
  titleSkills: string;
};

export default function BoxSkills(props: types) {
  const { contentSkills, titleSkills } = props;
  const boxRef: any = useRef(null);

  return (
    <div className="lg:mx-14 rounded-2xl mb-8">
      <p className="text-center mb-4 text-white lg:text-xl">{titleSkills}</p>
      <div
        className="flex lg:gap-12 gap-2 max-sm:gap-2 max-md:gap-2 items-center flex-wrap justify-center"
        ref={boxRef}
      >
        {contentSkills.map((item: any, index: number) => (
          <Tooltip arrow title={item.name} placement="bottom"
            className="lg:max-w-28 md:max-w-28 max-sm:w-1/4 max-md:w-1/3 rounded-lg bg-blue-950 border-sm border-blue-900 shadow  p-4 flex items-center justify-center"
            key={index}
          >
            <img
              src={`/./Icons/Icons Normal/${item.name}.${
                item.name === "next-js" ? "svg" : "png"
              }`}
              alt="Tes"
              className="max-w-[50px] max-h-[50px] m-auto place-self-center"
            />
          </Tooltip>
        ))}
      </div>
    </div>
  );
}
