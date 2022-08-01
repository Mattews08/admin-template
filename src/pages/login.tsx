import AuthInput from "../components/Auth/AuthInput";
import { useState } from "react";
import Logo from "../components/template/Logo";
import { IconWarnig } from "../components/icons";
import { func } from "prop-types";
import useAuth from "../data/hook/useAuth";

export default function Login() {
  const {loginGoogle} = useAuth();

  const [error, setError] = useState(null);
  const [mode, setMode] = useState<"login" | "register">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function onSubmit() {
    if (mode === "login") {
      console.log("login");
      handleViewError("Ocorreu um erro no login!");
    } else {
      console.log("cadastre-se");
      handleViewError("Ocorreu um erro no cadastro!");
    }
    console.log;
  }

  function handleViewError(msg: any, time = 5) {
    setError(msg);
    setTimeout(() => setError(null), time * 1000);
  }

  return (
    <div className="flex h-screen items-center justify-center m-auto">
      <div hidden className="hidden md:block md:w-1/2">
        <img
          src="bg.jpg"
          alt="tela de login"
          className="w-full h-screen object-cover"
        />
      </div>
      <div className="m-10 lg:w-1/2">
        <div className="m-auto py-20 px-12 sm:p-20 xl:w-10/12">
          <div className="space-y-4">
            <a href="">
              <Logo />
            </a>
            <p className="font-medium text-lg text-gray-600">
              {mode === "login"
                ? "Bem-vindo! Faça login primeiro"
                : "Cadastre-se na plataforma"}
            </p>
          </div>

          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <button
              onClick={loginGoogle}
              className="py-3 px-6 rounded-xl bg-blue-50 hover:bg-blue-100 focus:bg-blue-100 active:bg-blue-200"
            >
              <div className="flex gap-4 justify-center">
                <img src="Google.svg" alt="tela de login" className="w-5" />
                <span className="block w-max font-medium tracking-wide text-sm text-blue-700">
                  Google
                </span>
              </div>
            </button>
            <button className="py-3 px-6 rounded-xl bg-blue-500 transition hover:bg-gray-800 active:bg-gray-600 focus:bg-gray-700">
              <div className="flex gap-4 items-center justify-center text-white">
                <img src="https://img.icons8.com/fluency/24/000000/facebook-new.png"/>
                <span className="block w-max font-medium tracking-wide text-sm text-white">
                  Facebook
                </span>
              </div>
            </button>
          </div>

          <div role="hidden" className="mt-12 border-t">
            <span className="block w-max mx-auto -mt-3 px-6 text-center text-gray-500 bg-white">
              Ou
            </span>
          </div>

          {error ? (
            <div className="flex items-center bg-red-400 text-white py-3 px-5 my-2 rounded-lg">
              {IconWarnig}
              <span className="ml-3">{error}</span>
            </div>
          ) : (
            false
          )}

          <form className="space-y-2 py-6">
            <div>
              <AuthInput
                label="E-mail"
                value={email}
                onChange={setEmail}
                type="email"
                required
              />
            </div>

            <div className="flex flex-col">
              <AuthInput
                label="Senha"
                value={password}
                onChange={setPassword}
                type="password"
                required
              />
              <button type="reset" className="w-max p-3 -mr-3">
                <span className="text-sm tracking-wide text-blue-600">
                  Esqueceu a senha?
                </span>
              </button>
              <button
                onClick={onSubmit}
                className={`w-full px-6 py-3 rounded-xl bg-sky-500 transition hover:bg-sky-600 focus:bg-sky-600 active:bg-sky-800 font-semibold text-white text-lg`}
              >
                {mode === "login" ? "Entrar" : "Cadastre-se"}
              </button>

              {mode === "login" ? (
                <p className="w-max p-3 -mr-3">
                  <a
                    onClick={() => setMode("register")}
                    className="text-sm tracking-wide text-blue-600 cursor-pointer"
                  >
                    Crie um conta gratuitamente!
                  </a>
                </p>
              ) : (
                <p className="w-max p-3 -mr-3">
                  <a
                    onClick={() => setMode("login")}
                    className="text-sm tracking-wide text-blue-600 cursor-pointer"
                  >
                    Entre com as suas informações!
                  </a>
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
