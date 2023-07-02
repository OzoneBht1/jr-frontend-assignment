"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const error = ({ error, reset }: { error: Error; reset: () => void }) => {
  return (
    <div className="flex justify-center items-center h-[60vh]">
      <div className="max-w-md">
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-1">
            <h6 className="text-xl">{error && error.message}</h6>

            <Link href="/">
              <button className="py-2 px-4 mt-4 bg-blue-500 text-white rounded">
                Back Home
              </button>
            </Link>
          </div>
          <div className="col-span-1">
            <Image
              src="/404.jpg"
              alt=""
              className="w-500 h-250"
              width={500}
              height={250}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default error;
