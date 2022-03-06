import { useRef } from "react";
import image from "../../Assests/login.gif";

const AuthPage = (props) => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const emailAdmin = "om.rubiks@gmail.com";
  const passwordAdmin = "Om@1234";

  const submitFormHanlder = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    if (emailAdmin === email.trim() && passwordAdmin === password.trim()) {
      props.setIsLogin(true);
    }
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg">
        <div className="flex justify-center">
          <img src={image} alt="Computer man" width={100} />
        </div>
        <h3 className="text-2xl font-bold text-center">
          Login to your account
        </h3>
        <form onSubmit={submitFormHanlder}>
          <div className="mt-4">
            <div>
              <label className="block" htmlFor="email">
                Email
                <label>
                  <input
                    type="text"
                    placeholder="Email"
                    className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                    ref={emailRef}
                  />
                </label>
              </label>
            </div>
            <div className="mt-4">
              <label className="block">
                Password
                <label>
                  <input
                    type="password"
                    placeholder="Password"
                    className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                    ref={passwordRef}
                  />
                </label>
              </label>
            </div>
            <div className="flex items-baseline justify-between">
              <button className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">
                Login
              </button>
                Forgot password?
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AuthPage;
