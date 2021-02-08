import { FormEvent, useState } from "react";
import { useLoginMutation, useRegisterMutation } from "../generated/graphql";
import { setAccessToken, getAccessToken } from "../lib/accessToken";
export default function Auth() {
  const [registration, setRegistration] = useState(false);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [login, { error: loginError }] = useLoginMutation();
  const [register, { error: registerError }] = useRegisterMutation();
  const handleLoginSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await login({
      variables: {
        password,
        email,
      },
    });
    if (response.data && response.data.login) {
      setAccessToken(response.data.login.accessToken);
    }

    setEmail("");
    setPassword("");
    setUsername("");
  };
  const handleRegisterSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await register({
      variables: {
        password,
        email,
        username,
      },
    });

    setEmail("");
    setPassword("");
    setUsername("");
  };

  return (
    <div className="grid-container">
      <main className="col-start-2 col-end-3 grid place-content-center text-center  ">
        <div className="border max-w-md p-8 sh rounded-lg bg-gradient-to-tr from-purple-600 to-red-400 mt-10">
          <h1 className="text-4xl mb-4">Free account</h1>
          <p className="text-sm mb-4">
            Create apps, connect databases and add-on services, and collaborate
            on your apps, for free
          </p>
          <form
            className="text-left text-xl"
            onSubmit={registration ? handleRegisterSubmit : handleLoginSubmit}
          >
            {registration && (
              <div className="">
                <label htmlFor="username">USERNAME</label>
                <input
                  type="text"
                  name="username"
                  value={username}
                  id="username"
                  required={true}
                  className="block p-2 rounded-md my-2 w-full"
                  placeholder="JohnDoe32"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
            )}
            {loginError?.message && (
              <div className="block">{loginError.message}</div>
            )}
            <label htmlFor="email">EMAIL</label>
            <input
              type="text"
              name="email"
              value={email}
              id="email"
              // required={true}
              className="block p-2 rounded-md my-2 w-full"
              placeholder="JohnDoe32@gmail.com"
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="password">PASSWORD</label>
            <input
              type="password"
              name="password"
              value={password}
              id="password"
              className="block p-2 rounded-md my-2 w-full"
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="flex justify-between text-sm">
              <div className="">
                <input
                  type="checkbox"
                  name="remember"
                  id="remember"
                  defaultChecked={true}
                  value="Remember Password"
                />
                <label htmlFor="remember">Remember Password</label>
              </div>
              <p>Forget Password?</p>
            </div>
            <button
              className="w-full p-3 rounded-md mt-5 bg-purple-800 hover:bg-purple-700  text-white "
              type="submit"
            >
              {registration ? "Sign Up Free Account" : "Login Your Account"}
            </button>
            <button
              className=" w-full p-3 rounded-md mt-5 bg-black   text-white"
              onClick={() => setRegistration((prev) => !prev)}
            >
              {registration ? "Login Your Account" : "Create New Account"}
            </button>
            <p className="text-sm mt-5">
              Signing up signifies that you have read and agree to the Terms of
              Service and our Privacy Policy.
            </p>
          </form>
        </div>
      </main>
    </div>
  );
}
