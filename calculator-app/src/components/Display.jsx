export default function Display({ theme, input }) {
  return (
    <div
      className={`${theme["bg-screen"]} ${theme["text-secondary"]} mt-8 flex h-[90px] items-center justify-end rounded-xl bg-1-bg-screen md:h-[126px]`}
    >
      <h2 className=" h-[55px]  pr-6 text-[2.5rem] md:h-[88px] md:pr-8 md:text-[4rem]">
        {input.firstNum === ""
          ? "0"
          : input.firstNum + input.operator + input.secondNum}
      </h2>
    </div>
  );
}
