import React from "react";
import Image from "Next/Image"
import imagesrc from '@/app/assets/images/heroimage/background-header.jpg'

const Card = ({ imageSrc, title, description, demoLink, sourceCodeLink }:any) => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <Image
            className="h-48 w-full object-cover md:w-48"
            src={imagesrc}
            alt="Card image"
            width={30}
            height={30}
          />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            {title}
          </div>
          <p className="mt-2 text-gray-500">{description}</p>
          <div className="mt-4">
            <a
              href={demoLink}
              className="inline-block bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-600"
            >
              Demo
            </a>
            <a
              href={sourceCodeLink}
              className="inline-block bg-gray-200 text-gray-700 py-2 px-4 rounded ml-2 hover:bg-gray-300"
            >
              Source Code dasdfasdfadfrc asdf
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
function CumstomCard() {
    return (
      <div className="container mx-auto mt-10">
        <Card
          imageSrc="https://via.placeholder.com/150"
          title="Example Card"
          description="This is an example card with a description."
          demoLink="#"
          sourceCodeLink="#"
        />
      </div>
    );
  }
export default CumstomCard;
