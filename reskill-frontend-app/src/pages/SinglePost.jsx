import React from "react";
import { useLoaderData } from "react-router-dom";

function SinglePost() {
  const { data } = useLoaderData();
  console.log(data);

  return (
    <>
      <div
        key={data.id}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 px-20 "
      >
        <div className="flex flex-col col-span-1 gap-6 pr-4 tracking-tight">
          <h1 className="font-[700] text-[64px] text-black  text-left tracking-tight capitalize ">
            {data.title}
          </h1>{" "}
          {/*TITLE*/}
          <h3 className="font-[400] text-[24px] text-[#828282]  text-left">
            <p>{data.subheader}</p> {/*SUBHEADER */}
          </h3>
          <h2 className="font-[500] text-[20px]  text-left ">
            {" "}
            {/*BODY */}
            <p className="text-left text-black ">{data.paragraph1}</p>
            <br />
            <p className="text-left text-black">{data.paragraph2}</p>
            <p className="text-left text-black">{data.paragraph3}</p>
          </h2>
        </div>
        <div className="flex col-span-1 lg:col-span-1 justify-end pl-0 md:pl-16 lg:pl-28 pr-1 ">
          {/*IMAGE */}
          <img
            src={data.photo}
            alt="Photo"
            className="rounded-lg lg:w-[508px] lg:h-[657px]  "
          />
        </div>
      </div>
    </>
  );
}

export default SinglePost;
