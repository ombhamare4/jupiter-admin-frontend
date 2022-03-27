import "./Modal.css";
import { Link } from "react-router-dom";
const SuccessModal = (props) => {
  return (
    <div className="backdrop">
      <div className="modal rounded-lg">
        <header className=" bg-blue-500 p-3">
          <h2 className="text-white text-xl">{props.title}</h2>

        </header>
        <main className="content bg-white">
          <h2>{props.message}</h2>
        </main>
        <footer className="bg-blue-500 p-2 flex justify-center">
          <Link to={"/products"}>
            <button className="bg-white p-y-2 px-5 rounded" onClick={props.SuccessHandler}>Ok</button>
          </Link>
        </footer>
      </div>
    </div>
  );
};

export default SuccessModal;
