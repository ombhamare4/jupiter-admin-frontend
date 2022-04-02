import "./Modal.css";
import { GiCancel } from "react-icons/gi";
const ErrorModal = (props) => {
  return (
    <div className="backdrop" onClick={props.errorHandler}>
      <div className="modal rounded-lg bg-white">
        <header className="flex justify-center p-5 mt-5">
          <GiCancel className="text-5xl text-red-500"/>
          <h2 className="text-white text-xl">{props.title}</h2>
        </header>
        <main className="flex justify-center">
          <h2 className="text-2xl font-semibold text-red-500">Oops...</h2>
        </main>
        <main  className="content bg-white flex justify-center">
          <h2>{props.error}</h2>
        </main>
        <footer className=" p-2 flex justify-center mb-5">
          <button className="bg-red-500 text-white p-y-2 px-5 rounded" onClick={props.errorHandler}>Ok</button>
        </footer>
      </div>
    </div>
  );
};

export default ErrorModal;
