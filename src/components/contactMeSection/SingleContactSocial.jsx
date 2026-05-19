const SingleContactSocial = ({ Icon, link }) => {
  return (
    <div className="text-2xl h-12 w-12 border border-white/30 text-white hover:border-white hover:bg-white/5 rounded-full p-3 flex items-center justify-center transition-all duration-500 group">
      <a href={link} target="_blank" rel="noopener noreferrer" className="cursor-pointer group-hover:scale-110 transition-transform duration-300">
        <Icon size={20} />
      </a>
    </div>
  );
};

export default SingleContactSocial;
