const CVButton = () => {
  const openCV = () => {
    window.dispatchEvent(new Event("openCV"));
  };

  return (
    <button
      onClick={openCV}
      className="ml-3 px-3 py-1 rounded-full text-sm font-medium transition-all duration-300"
      style={{
        color: "#D4AF37",
        border: "1px solid rgba(212,175,55,0.35)",
        background: "rgba(212,175,55,0.06)",
      }}
      onMouseEnter={e => {
        e.currentTarget.style.background = "rgba(212,175,55,0.15)";
        e.currentTarget.style.borderColor = "rgba(212,175,55,0.6)";
        e.currentTarget.style.color = "#F2D060";
        e.currentTarget.style.boxShadow = "0 0 14px rgba(212,175,55,0.2)";
      }}
      onMouseLeave={e => {
        e.currentTarget.style.background = "rgba(212,175,55,0.06)";
        e.currentTarget.style.borderColor = "rgba(212,175,55,0.35)";
        e.currentTarget.style.color = "#D4AF37";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      See What I Bring
    </button>
  );
};

export default CVButton;
