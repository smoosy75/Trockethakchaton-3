import PresSpace from "../components/PresSpace";
import Pres from "../components/Pres";
import "./btn.css";

export default function Home() {
  return (
    <div snap-y snap-mandatory overflow-scroll>
      <div className="background-container">
        <div className="w-screen h-screen m-0 bg-black overflow-hidden ">
          <img
            className="ml-auto mr-auto w-30 h-30"
            src="../src/assets/logo.png"
            alt="logo"
          />
          <div className="flex items-center justify-center">
            <p className="uppercase text-white text-6xl tracking-[12px] ">
              to infinity and beyond
            </p>
          </div>
          <div className="flex justify-center items-center p-5 flex-row">
            <button className="btn" type="button">
              FLY WITH US
            </button>
            <button className="btn" type="button">
              PRO
            </button>
          </div>
        </div>
        <div className="h-screen">
          <Pres className="snap-center" />
        </div>
        <div>
          <PresSpace className="snap-center" />
        </div>
      </div>
    </div>
  );
}
