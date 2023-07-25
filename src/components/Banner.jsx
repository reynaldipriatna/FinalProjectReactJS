import React from "react";
import BannerCharacter from "../assets/images/banner-character.png";

const Banner = () => {
  return (
    <section className="flex h-[483px] mt-10 md:mt-0">
      <div className="flex-1 flex justify-center items-start flex-col md:flex-row">
        <div className="justify-center mt-[100px]">
          <h2 className="banner-heading">
            Jadi expert bersama, <br />
            edspert.id
          </h2>
          <p className="banner-paragraph mt-5">
            Tingkatkan skill dan pengetahuan bersama para mentor terbaik di
            bidangnya, untuk siapkan karir impian anda.
          </p>
        </div>
        <div>
          <img
            src={BannerCharacter}
            alt="Banner Character"
            className="h-[100%]"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
