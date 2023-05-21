function Circle() {
  return (
    <svg className="h-20 w-20 sm:h-28 sm:w-28 md:h-40 md:w-40">
      <circle
        cx="50%"
        cy="50%"
        r="40%"
        fill="transparent"
        stroke="#8A5CF6"
        className="circle stroke-[12] sm:stroke-[15] md:stroke-[18]"
      />
    </svg>
  );
}

export default Circle;

// w-[86px] h-[86px] sm:w-[110px] sm:h-[110px] md:w-[146px] md:h-[146px]
