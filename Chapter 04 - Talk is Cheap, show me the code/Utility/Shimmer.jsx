// Shimmer card to display with animation
import { shimmerCount } from "./Constant";
const CardShimmer = () => {
  return (
    <div className="shimmer-card">
      <div className="shimmer-img stroke animate"></div>
      <div className="shimmer-title stroke animate"></div>
      <div className="shimmer-tags stroke animate "></div>
      <div className="shimmer-details stroke animate "></div>
    </div>
  );
};

const Shimmer = () => {
  return (
    <>
      <div className="shimmer-container bg-red-700">
        {Array(shimmerCount)
          .fill(0)
          .map((item, index) => {
            return <CardShimmer key={index} />;
          })}
      </div>
    </>
  );
};
export default Shimmer;
