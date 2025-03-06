import React from "react";
import { Link } from "react-router-dom";

export default function SaleAlert() {
  return (
    <div className="bg-[#F3F5F7] flex p-3 justify-center gap-5 items-center">
      <img className="" src="/images/ticket-percent.svg" alt="ticket" />
      <p className=" font-bold">30% off storewide — Limited time!</p>
      <Link className=" text-blue-500 underline" to={"/"}>
        Shop Now
      </Link>
    </div>
  );
}
