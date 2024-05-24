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
      <p className="text-center mb-4 text-white lg:text-xl">
        {titleSkills}
      </p>
      <div
        className="flex lg:gap-12 gap-2 max-sm:gap-2 max-md:gap-2 items-center flex-wrap justify-center"
        ref={boxRef}
      >
        {contentSkills.map((item: any, index: number) => (
          <div
            className="lg:max-w-28 md:max-w-28 bg-slate-600 max-sm:w-1/4 max-md:w-1/3 rounded-lg border-sm p-4 place-self-center"
            key={index}
          >
            <Image
              width={100}
              height={100}
              src={`/./Icons/Icons Normal/${item.name}.${
                item.name === "next-js" ? "svg" : "png"
              }`}
              alt="Tes"
              className="w-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
