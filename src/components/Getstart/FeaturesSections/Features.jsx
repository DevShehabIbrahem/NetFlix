const Fettures = ({ isLeft, data }) => {
  console.log(isLeft);
  const RightStyle =
    "flex items-center justify-between  max-w-6xl mx-auto   text-white py-[70px]";
  const LeftStyle =
    "flex items-center flex-row-reverse  max-w-6xl mx-auto justify-between  text-white py-[70px] w-full  ";
  return (
    <>
      {data.map(({ title, dec, Image, id }) => (
        <div className="border-t-8 border-gray-700 overflow-hidden" key={id}>
          <div className={isLeft ? LeftStyle : RightStyle}>
            <div className="max-w-[580px] font-bold">
              <h1 className="text-[3.125rem] mb-5 leading-[1.1em]">{title}</h1>
              <h1 className="text-[1.625rem]">{dec}</h1>
            </div>

            <div>
              <img src={Image} alt="homePoster" />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Fettures;
