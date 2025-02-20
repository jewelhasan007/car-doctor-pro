import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="text-slate-400 m-4">
      <div>
        <div className="grid grid-cols-1 lg:grid-cols-2 h-screen">
          <div style={{ position: "relative" }}>
            <Image
              className="rounded"
              src="/images/about_us/person.jpg"
              width={400}
              height={400}
              alt="image"
            ></Image>
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -90%)",
                width: "30%",
                height: "auto",
              }}
            >
              <Image
                className="rounded border-[5px] border-white-700"
                src="/images/about_us/parts.jpg"
                width={400}
                height={400}
                alt="image"
              ></Image>
            </div>
          </div>
          <div className="space-y-5">
            <h1 className="text-primary">About Us</h1>
            <h1 className="text-5xl">
              We are qualified & of experience in this field
            </h1>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable.{" "}
            </p>
            <p>
              the majority have suffered alteration in some form, by injected
              humour, or randomised words which don't look even slightly
              believable.{" "}
            </p>
            <button className="btn btn-primary">Get More Info</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
