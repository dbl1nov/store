import React from "react";

export default function Profile() {
  return (
    <div className="flex items-center bg-gray-300 rounded-lg p-4 gap-4 m-4 shadow-md">
      <img
        className=" w-[150px] rounded-md"
        src="https://ir.ozone.ru/s3/multimedia-1-f/c1000/7213404615.jpg"
        alt="avatar"
      />
      <div className="">
        <p className="text-lg font-bold">Иван Калин</p>
        <p className="text-2xl">Лучший рэпер</p>
      </div>
    </div>
  );
}
