import PresSpace from "../components/PresSpace";
import Pres from "../components/Pres";
import "./btn.css";
import Checkout from "../components/Checkout";
import LoginPage from "../components/LoginPage";
import RegisterPage from "../components/RegisterPage";
import "./background.css";
import Acceuil from "../components/Acceuil";

export default function Home() {
  return (
    <div>
      <div className="h-screen w-screen">
        <Acceuil className="snap-center" />
      </div>
      <div className="h-screen w-screen">
        <Pres className="snap-center" />
      </div>
      <div className="h-screen w-screen">
        <PresSpace className="snap-center" />
      </div>
      <div className="h-screen w-screen">
        <Checkout />
      </div>
      <div className="h-screen w-screen">
        <LoginPage />
      </div>
      <div>
        <RegisterPage />
      </div>
    </div>
  );
}
