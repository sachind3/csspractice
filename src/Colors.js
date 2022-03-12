import React from "react";

export default function Colors() {
  return (
    <section className="py-4">
      <div className="container mx-auto px-4">
        <div className="space-y-4">
          <h1 className="text-xl font-bold">Colors heading here</h1>
          <p className="text-base text-slate-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quisquam
            illum sapiente veniam, vero ut deleniti modi nesciunt eligendi
            facilis aspernatur at neque quia itaque recusandae fugiat harum
            architecto ipsam.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div className="bg-themeColor text-white shadow-sm p-3 rounded">
              asd
            </div>
            <div className="bg-white shadow-sm p-3 rounded">asd</div>
            <div className="bg-white shadow-sm p-3 rounded">asd</div>
            <div className="bg-white shadow-sm p-3 rounded">asd</div>
          </div>
        </div>
      </div>
    </section>
  );
}
