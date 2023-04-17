import { useEffect } from "react";
import { useState } from "react";

export default function App() {
  const [slip, setSlip] = useState("");

  const fetchApi = async () => {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    return data.slip;
  };

  const handleRequest = async () => {
    const slip = await fetchApi();
    setSlip(slip);
  };

  useEffect(() => {
    handleRequest();
  }, []);

  return (
    <main className="h-screen overflow-hidden bg-blue-800 text-center font-manrope md:flex md:items-center">
      <div className="relative mx-auto mt-[120px] w-[340px] rounded-xl bg-blue-600 px-5 md:mt-0 md:w-[540px] md:px-12">
        <p className="pt-10 text-[11px] tracking-[0.25em] text-green-500 md:text-sm">
          ADVICE #{slip.id}
        </p>
        <h1 className="mt-6 text-2xl text-blue-50 md:text-[1.65rem] md:leading-10">
          {slip.advice}
        </h1>
        <div className="mt-6 pb-16 md:hidden">
          <svg width="295" height="16" xmlns="http://www.w3.org/2000/svg">
            <g fill="none">
              <path fill="#4F5D74" d="M0 8h122v1H0zM173 8h122v1H173z" />
              <g transform="translate(138)" fill="#CEE3E9">
                <rect width="6" height="16" rx="3" />
                <rect x="14" width="6" height="16" rx="3" />
              </g>
            </g>
          </svg>
        </div>
        <div className="mt-6 hidden pb-16 md:block">
          <svg width="444" height="16" xmlns="http://www.w3.org/2000/svg">
            <g fill="none">
              <path fill="#4F5D74" d="M0 8h196v1H0zM248 8h196v1H248z" />
              <g transform="translate(212)" fill="#CEE3E9">
                <rect width="6" height="16" rx="3" />
                <rect x="14" width="6" height="16" rx="3" />
              </g>
            </g>
          </svg>
        </div>
        <button
          onClick={handleRequest}
          className="absolute left-1/2 top-full grid h-16 w-16 place-items-center rounded-full bg-green-500 hover:shadow-button"
          style={{ transform: "translate(-50%, -50%)" }}
        >
          <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"
              fill="#202733"
            />
          </svg>
        </button>
      </div>
    </main>
  );
}
