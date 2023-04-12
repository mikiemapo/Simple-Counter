import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App(props) {
  return (
    <div className="Clock">
      <div className="p-auto w-25 ms-5">
        <i class="fa-regular fa-clock"></i>
      </div>

      <div className="digit">{Math.floor(props.counter / 100000) % 10}</div>
      <div className="digit">{Math.floor(props.counter / 10000) % 10}</div>
      <div className="digit">{Math.floor(props.counter / 1000) % 10}</div>
      <div className="digit">{Math.floor(props.counter / 100) % 10}</div>
      <div className="digit">{Math.floor(props.counter / 10) % 10}</div>
      <div className="digit">{Math.floor(props.counter / 1) % 10}</div>
    </div>
  );
}

export default App;
