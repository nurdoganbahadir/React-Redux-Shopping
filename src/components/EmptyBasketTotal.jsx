import emptyShopping from "../assets/empty-shopping.png";

const EmptyBasketTotal = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <img src={emptyShopping} alt="" />
    </div>
  );
};

export default EmptyBasketTotal;
