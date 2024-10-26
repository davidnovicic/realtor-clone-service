import { useState } from "react";
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const navigate = useNavigate();
  const auth = getAuth();
  const [formData, setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email,
  });

  const { name, email } = formData;

  function onLogout() {
    auth.signOut();
    navigate("/");
  }

  return (
    <>
      <section className="max-w-6xl mx-auto flex justify-center items-center flex-col">
        <h1 className="text-3xl text-center mt-6 font-bold "> My Profile </h1>
        <div className="w-full md:w-[50%] mt-6 px-3">
          <form>
            {/* name Input */}

            <input
              type="text"
              id="name"
              value={name}
              disabled
              className="mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition easy-in-out"
            />
            {/* Email Input */}

            <input
              type="email"
              id="email"
              value={email}
              disabled
              className="mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition easy-in-out"
            />

            <div className="flex justify-between whitespace-nowrap text-sm sm:text-lg">
              <p className="flex items-center ">
                Do you want to change your name?
                <span className="text-red-600 hover:text-red-700 transition easy-in-out duration-200 ml-1 cursor-pointer">
                  Edit
                </span>
              </p>
              <p
                onClick={onLogout}
                className="text-blue-600 hover:text-blue-700 transition duration-200 easy-in-out cursor-pointer"
              >
                Sign Out
              </p>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
