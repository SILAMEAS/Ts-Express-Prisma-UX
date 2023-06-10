import React from "react";
import profile1 from "../assets/profile1.jpg";
import { BsFillImageFill, BsFillCameraVideoFill } from "react-icons/bs";
import { MdAttachFile } from "react-icons/md";

type Props = {};

function OnYourMine({}: Props) {
  return (
    <div className="bg-white dark:bg-gray-800 p-5 rounded-lg">
      <div className="flex items-center">
        <img src={profile1} className="h-10 w-10 object-fill rounded-full" />
        <input
          type="text"
          placeholder="what on your mine?"
          className="ml-5 rounded-full w-full text-sm"
        />
      </div>
      <hr className="my-5" />
      <div className="flex justify-between">
        <div className="flex items-center cursor-pointer hover:bg-gray-200 rounded-lg px-2 transition-all">
          <BsFillImageFill />
          <p className="ml-0 lg:ml-2">Image</p>
        </div>
        <div className="flex items-center cursor-pointer hover:bg-gray-200 rounded-lg px-2 transition-all">
          <BsFillCameraVideoFill />
          <p className="ml-0 lg:ml-2">Video</p>
        </div>
        <div className="md:flex items-center cursor-pointer hover:bg-gray-200 rounded-lg px-2 transition-all hidden">
          <MdAttachFile />
          <p className="ml-0 lg:ml-2 ">Attachment</p>
        </div>
        <div className="px-2 py-1 bg-blue-700 text-white rounded-lg cursor-pointer lg:px-6 lg:py-2 md:px-6">
          Post
        </div>
      </div>
    </div>
  );
}

export default OnYourMine;
