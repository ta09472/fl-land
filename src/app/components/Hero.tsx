const words = ["조명", "조경", "도시재생", "도시경관"];
const keywordMap: {
  [key: number]: {
    color: string;
    text: string;
  };
} = {
  0: {
    color: "yellow",
    text: "조명",
  },
  1: {
    color: "green",
    text: "조경",
  },
  2: {
    color: "gray",
    text: "도시재생",
  },
  3: {
    color: "black",
    text: "도시경관",
  },
};

export default function Hero() {
  return (
    <section
      id="home"
      className=" flex items-center justify-center min-h-screen text-center text-white relative py-52 max-md:pb-16 max-md:pt-48 overflow-hidden bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% transition-colors duration-300"
    >
      <div className="text-center">
        <div className="font-extrabold text-3xl md:text-4xl [text-wrap:balance] text-white">
          {`우리는 `}
          <span className="text-indigo-500 dark:text-darkCrimsonRed transition-colors duration-300 inline-flex flex-col h-[calc(theme(fontSize.3xl)*theme(lineHeight.tight))] md:h-[calc(theme(fontSize.4xl)*theme(lineHeight.tight))] overflow-hidden">
            <ul className="animate-text-slide-4 leading-tight [&_li]:block">
              {words.map((v) => (
                <li key={v} className="flex flex-row">
                  {v}
                </li>
              ))}
              <li aria-hidden="true">{words.at(0)}</li>
            </ul>
          </span>
          의 전문가
        </div>
        <br />
        <p className="font-extrabold text-[2.5rem] lg:text-[3rem]">
          Festival Land 입니다.
        </p>
        <br />
        <p className="px-4 md:px-[18rem] lg:px-52 xl:px-[18rem] pt-16 text-lg opacity-80 text-center max-w-screen-lg mx-auto">
          우리는 맞춤형 솔루션으로 고객의 비전을 실현하고, 낙후된 지역을 생동감
          있는 공간으로 탈바꿈시키는 데 중점을 둡니다. 지속 가능하고 아름다운
          도시 경관 조성을 통해 사람들이 모이고 즐길 수 있는 커뮤니티를 만드는
          것이 우리의 목표입니다.
        </p>
      </div>
    </section>
  );
}
