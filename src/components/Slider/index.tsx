import React from "react";
import { Slide, SlideshowRef } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { Image } from "@chakra-ui/react";

interface slideProps {
  data: string[];
}

export function Slider({ data }: slideProps) {
  const slideRef = React.useRef<SlideshowRef>(null);
  const buttonStyle = {
    width: "30px",
    background: "none",
    border: "0px",
    _holver: {
      background: "red",
    },
  };
  const properties = {
    prevArrow: (
      <button style={{ ...buttonStyle }} title="Anterior">
        <IoIosArrowBack size={24} />
      </button>
    ),
    nextArrow: (
      <button style={{ ...buttonStyle }} title="Proximo">
        <IoIosArrowForward size={24} />
      </button>
    ),
  };
  return (
    <Slide indicators={true} ref={slideRef} {...properties}>
      {data.map((item, index) => (
        <Image key={index} src={item} alt="Slide" borderRadius="md" w="100%" />
      ))}
    </Slide>
  );
}
