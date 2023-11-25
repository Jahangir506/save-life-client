import "../SaveLifePerformance/SaveLifePerformance.css";
const SaveLifePerformance = () => {
  return (
    <>
      <div className="hero h-96 performanceImg my-20">
        <div className="bg-black w-full h-full bg-black/50"></div>
        <div className="hero-content space-x-40 text-center text-neutral-content">
          <div className="max-w-sm">
            <h1 className="mb-5 text-5xl font-bold">0</h1>
            <p className="mb-5">Year Experience</p>
          </div>
          <div className="max-w-sm">
            <h1 className="mb-5 text-5xl font-bold">0</h1>
            <p className="mb-5">Happy Donors</p>
          </div>
          <div className="max-w-sm">
            <h1 className="mb-5 text-5xl font-bold">0</h1>
            <p className="mb-5">Total Awards</p>
          </div>
          <div className="max-w-sm">
            <h1 className="mb-5 text-5xl font-bold">0</h1>
            <p className="mb-5">Happy Recipient</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default SaveLifePerformance;
