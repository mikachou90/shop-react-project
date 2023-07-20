import "./Main.css";
import StepProgress from "./Step/StepProgress/StepProgress";
import Form from "./Form/Form";
import ControlButton from "./ControlButton/ControlButton";
import Cart from "./Cart/Cart";

function Main() {
  return (
    <div className="main">
      <div className="leftZone">
        <StepProgress />
        <Form />
        <ControlButton />
      </div>
      <div className="rightZone">
        <Cart />
      </div>
    </div>
  );
}

export default Main;
