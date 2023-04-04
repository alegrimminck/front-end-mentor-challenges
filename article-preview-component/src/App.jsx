import { useState } from "react";

function App() {
  const [isActive, setIsActive] = useState(false);
  return (
    <main className="flex h-screen  justify-center bg-light-grayish-blue pt-[74px] font-manrope text-[13px] md:items-center md:pt-0">
      <div className="relative h-fit w-[330px] overflow-hidden rounded-lg shadow-xl md:flex md:w-fit md:overflow-visible">
        <img
          className="h-[200px] w-full object-cover object-top md:h-auto md:w-[285px] md:rounded-l-lg md:object-left"
          src="../public/images/drawers.jpg"
          alt=""
        />
        <div className="bg-white px-9 md:w-[445px] md:rounded-r-lg">
          <h1 className="pt-9 text-base font-bold text-very-dark-grayish-blue md:text-xl">
            Shift the overall look and feel by adding these wonderful touches to
            furniture in your home
          </h1>
          <p className="pt-3  text-very-dark-grayish-blue opacity-70">
            Ever been in a room and felt like something was missing? Perhaps it
            felt slightly bare and uninviting. I’ve got some simple tips to help
            you make any room feel complete.
          </p>
          <div className="mt-8 flex items-center justify-between pb-4 md:mt-4 md:pb-8">
            <div className="flex items-center gap-4">
              <img
                src="../public/images/avatar-michelle.jpg"
                className="h-10 w-10 rounded-full"
                alt=""
              />
              <div>
                <p className="font-bold text-very-dark-grayish-blue">
                  Michelle Appleton
                </p>
                <p className="text-grayish-blue">28 Jun 2020</p>
              </div>
            </div>
            <button
              onClick={() => setIsActive(!isActive)}
              className={
                isActive
                  ? "z-50 flex h-8 w-8 items-center justify-center rounded-full bg-desaturated-dark-blue"
                  : "flex h-8 w-8 items-center justify-center rounded-full bg-light-grayish-blue"
              }
            >
              <svg
                className={
                  isActive
                    ? "fill-light-grayish-blue"
                    : "fill-desaturated-dark-blue"
                }
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="13"
              >
                <path d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z" />
              </svg>
            </button>
          </div>
        </div>
        {isActive && (
          <div className="absolute bottom-0 left-0 flex h-[74px] w-full items-center gap-5 bg-very-dark-grayish-blue pl-8 text-white md:-right-16 md:bottom-[90px] md:left-auto md:h-[55px] md:w-[245px] md:rounded-lg md:shadow-lg">
            <p className="tracking-[0.4em] opacity-50">SHARE</p>
            <div className="flex gap-4">
              <img src="../public/images/icon-facebook.svg" alt="" />
              <img src="../public/images/icon-twitter.svg" alt="" />
              <img src="../public/images/icon-pinterest.svg" alt="" />
            </div>
            <div className="absolute -bottom-2 left-[49%] h-4 w-4 rotate-45 bg-very-dark-grayish-blue"></div>
          </div>
        )}
      </div>
    </main>
  );
}

export default App;
