import "./Modal.css";
import { Link } from "react-router-dom";
import { BsCheckLg } from "react-icons/bs";
const SuccessModal = (props) => {
  return (
    <div className="backdrop">
      <div className="modal rounded-lg bg-white">
        <header className="flex justify-center p-5 mt-5">
          <BsCheckLg className="text-5xl text-blue-500" />
        </header>
        <main className="flex justify-center">
          <h2 className="text-2xl font-semibold text-blue-500">Success</h2>
        </main>
        <main className="content bg-white flex justify-center">
          <h2>{props.message}</h2>
        </main>
        <footer className=" p-2 flex justify-center mb-5">
          <Link to={`/${props.navLink}`}>
            <button
              className="bg-blue-500 p-y-2 px-5 rounded text-white"
              onClick={props.SuccessHandler}
            >
              Ok
            </button>
          </Link>
        </footer>
      </div>
    </div>
  );
};

export default SuccessModal;
