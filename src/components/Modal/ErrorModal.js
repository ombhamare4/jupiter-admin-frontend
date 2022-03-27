import "./Modal.css";
const ErrorModal = (props) => {
  return (
    <div className="backdrop" onClick={props.errorHandler}>
      <div className="modal rounded-lg">
        <header className=" bg-red-500 p-3">
          <h2 className="text-white text-xl">{props.title}</h2>
        </header>
        <main className="content bg-white">
          <h2>{props.error}</h2>
        </main>
        <footer className="bg-red-500 p-2 flex justify-center">
          <button className="bg-white p-y-2 px-5 rounded" onClick={props.errorHandler}>Ok</button>
        </footer>
      </div>
    </div>
  );
};

export default ErrorModal;
