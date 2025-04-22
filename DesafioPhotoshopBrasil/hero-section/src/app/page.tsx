import Image from "next/image";
import liquifyEffectjpg from "../assets/liquifyEffect.jpg";
import Gmailpng from "../assets/Gmail.png";

export default function Home() {
  return (
    <main>
      <section className="relative w-full h-screen flex-col bg-stone-300 items-center max-w-screen-lg mx-auto display flex justify-between">
        {/* Imagem de fundo */}
        <div className="absolute inset-0 -z-10">
          <Image
            src={liquifyEffectjpg}
            alt="Liquify Effect"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </div>

        <nav className="w-full flex items-center justify-end bg-white py-4 px-8 shadow-md">
          <ul className="flex space-x-6">
            <li><a href="#home" className="text-gray-800 hover:text-green-500 font-medium">Home</a></li>
            <li><a href="#desafios" className="text-gray-800 hover:text-green-500 font-medium">Desafios</a></li>
            <li><a href="#rankings" className="text-gray-800 hover:text-green-500 font-medium">Rankings</a></li>
            <li><a href="#regras" className="text-gray-800 hover:text-green-500 font-medium">Regras</a></li>
            <li><a href="#entrar" className="text-green-500 hover:text-green-500 font-medium">Entrar</a></li>
            <li><a href="#cadastre-se" className="text-gray-800 hover:text-green-500 font-medium">Cadastre-se</a></li>
          </ul>
        </nav>

        {/* Área de Login */}
        <div className="absolute top-20 right-8 bg-white p-6 rounded-lg shadow-lg w-80">
          <h2 className="text-gray-800 text-xl font-bold mb-4">Login</h2>
          <form className="flex flex-col space-y-4">
            <input
              type="email"
              placeholder="Email"
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <input
              type="password"
              placeholder="Senha"
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <div className="flex items-center justify-between">
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="form-checkbox text-green-500" />
                <span className="text-gray-600 text-sm">Lembrar-me</span>
              </label>
              <a href="#forgot-password" className="text-sm text-green-500 hover:underline">
                Esqueceu a senha?
              </a>
            </div>
            <button
              type="submit"
              className="bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition"
            >
              Entrar
            </button>
          </form>
          <div className="mt-4 text-center">
            <button
              className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition flex items-center justify-center space-x-2"
            >
              <Image
                src={Gmailpng}
                alt="Gmail Logo"
                width={20}
                height={20}
              />
              <span>Logar com Gmail</span>
            </button>
          </div>
        </div>

        {/* Título ajustado para o lado esquerdo da área de login */}
        <div className="absolute top-20 left-8 text-left w-1/3">
          <p className="text-white text-lg font-medium mb-4">Uma história marcada</p>
          <h2 className="text-white font-bold text-5xl drop-shadow-lg mb-6">
            Explore o mundo DPB
          </h2>
          <p className="text-white text-base mb-6">
            Embarque em uma jornada de criatividade e desafios únicos, onde a arte digital se encontra com a imaginação sem limites.
          </p>
          <button className="border border-white text-white py-2 px-6 rounded-lg hover:bg-gray-200 hover:text-gray-800 transition-all duration-300 ease-in-out shadow-lg">
            Deslize e veja mais
          </button>
        </div>
      </section>
    </main>
  );
}