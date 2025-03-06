import React from "react";

export default function Profile() {
  return (
    <>
      <div className=" p-10">
        <h1 className="font-bold text-[48px] text-center">My Account</h1>
      </div>
      <div className=" flex gap-2">
        <div className="flex flex-col w-full max-w-[300px] rounded-md  p-5 gap-8 bg-[#F3F5F7]">
          <div className=" flex flex-col items-center gap-2">
            <div className="w-[120px] rounded-full">
              <img
                className="w-full rounded-full"
                src="https://ir.ozone.ru/s3/multimedia-1-f/c1000/7213404615.jpg"
                alt="avatar"
              />
            </div>
            <p className="font-bold text-2xl">Ivan Kalin</p>
          </div>
          <div className="flex flex-col gap-6  text-lg font-bold">
            <p>Account</p>
            <p>Address</p>
            <p>Orders</p>
            <p>Wishlist</p>
            <p>Log out</p>
          </div>
        </div>
        <div className=" p-2 flex flex-col gap-4 w-full">
          <h2 className="font-bold text-xl">Account Details</h2>
          <label>First Name *</label>
          <input type="text" placeholder="Ivan" />
          <label>Last Name *</label>
          <input type="text" placeholder="Kalin" />
          <label>Display Name *</label>
          <input type="text" placeholder="Display Name" />
          <label>Email *</label>
          <input type="email" placeholder="ivan@bk.ru" />
        </div>
      </div>
    </>
  );
}
