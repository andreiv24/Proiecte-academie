const TertiaryButton = ({ extraclass, imageURL, buttonID }) => {
  return (
    <button className={`smallbutton ${extraclass}`} id={buttonID}>
      <img src={imageURL} alt="backarrow" />
    </button>
  );
};

export default TertiaryButton;
