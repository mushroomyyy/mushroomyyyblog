const AboutMeImage = () => {
  return (
    <div className="h-[500px] w-[350px] relative">
      <div className="h-[500px] w-[350px] rounded-[100px] absolute overflow-hidden">
        <img
          src={`${import.meta.env.BASE_URL}images/test2.png`}
          alt="About Me Image"
          className="h-full w-auto object-contain transform"
        />
      </div>
      <div className="h-[500px] w-[250px] bg-taro absolute bottom-[-30px] left-[-30px] rounded-bl-[120px] rounded-tr-[120px] rounded-br-[20px] rounded-tl-[20px] -z-10"></div>
    </div>
  );
};

export default AboutMeImage;
