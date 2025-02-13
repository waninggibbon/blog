export const Banner = ({
  items,
  direction = "normal",
  delimiter = "",
}: {
  items: string[];
  direction: "normal" | "reverse";
  delimiter?: string;
}) => {
  return (
    <div className="relative flex w-full overflow-x-hidden text-3xl font-pixel sm:text-5xl font-heading whitespace-nowrap">
      <div
        className={` ${direction === "normal" ? "animate-scroll" : "animate-reverseScroll"}`}
      >
        {items
          .flatMap((item) => [item, delimiter])
          .map((item) => {
            return (
              <span key={item} className="mx-2">
                {item}
              </span>
            );
          })}
        {items
          .flatMap((item) => [item, delimiter])
          .map((item) => {
            return (
              <span key={item} className="mx-2">
                {item}
              </span>
            );
          })}
      </div>

      <div
        className={`absolute top-0 ${direction === "normal" ? "animate-scroll2" : "animate-reverseScroll2"} whitespace-nowrap`}
      >
        {items
          .flatMap((item) => [item, delimiter])
          .map((item) => {
            return (
              <span key={item} className="mx-2">
                {item}
              </span>
            );
          })}
        {items
          .flatMap((item) => [item, delimiter])
          .map((item) => {
            return (
              <span key={item} className="mx-2">
                {item}
              </span>
            );
          })}
      </div>
    </div>
  );
};
