import React from "react";
import { baseImgUrl } from "../utils/constants";

const DetailDisplay = ({ title, data }) => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      {
        <div className="flex gap-5 mb-6">
          {data.map((item, i) =>
            item.logo_path ? (
              <div key={i} className="bg-white py-1 px-2 rounded-lg">
                <img
                  className="w-[100px] h-[40px] object-contain"
                  src={baseImgUrl + item.logo_path}
                  alt=""
                />
              </div>
            ) : (
              <div className="border py-1 px-2 rounded-md" key={i}>
                {item.name}
              </div>
            ),
          )}
        </div>
      }
    </div>
  );
};

export default DetailDisplay;
5;
