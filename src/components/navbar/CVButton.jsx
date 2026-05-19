const CVButton = () => {
  const openCV = () => {
    window.dispatchEvent(new Event("openCV"));
  };

  return (
    <button
      onClick={openCV}
      className="ml-3 px-3 py-1 rounded-full text-sm font-medium text-white border border-white/15 bg-white/5 hover:bg-white/10 transition"
    >
      See What I Bring
    </button>
  );
};

export default CVButton;
