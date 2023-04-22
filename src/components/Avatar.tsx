import React, { FC } from "react";

interface Props {
  image: string;
}
const Avatar: FC<Props> = ({ image }) => {
  return (
    <div
      className="md:w-[273px] md:h-[273px] w-[173px]  h-[173px] flexCenter  border overflow-hidden rounded-full"
      style={{
        backgroundImage: `url('${image}')`,
        backgroundSize: "cover",
      }}
    >
    </div>
  );
};

export default Avatar;
