const SingleInfo = ({ text, Image }) => {
  return (
    <div className="flex gap-4 items-center justify-start text-white/80 hover:text-white transition-all duration-300">
      <div className="text-white/60 hover:text-white transition-all duration-300">
        <Image size={24} />
      </div>
      <p>{text}</p>
    </div>
  );
};

export default SingleInfo;
