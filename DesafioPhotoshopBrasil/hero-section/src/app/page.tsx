"use client";

import { useState } from "react";
import Image from "next/image";
import Gmailpng from "../assets/Gmail.png";
import CardImage1 from "../assets/slide1.jpg"; // Substitua pelo caminho real da imagem
import CardImage2 from "../assets/slide2.jpg"; // Substitua pelo caminho real da imagem
import CardImage3 from "../assets/slide3.jpg"; // Substitua pelo caminho real da imagem
import { FaInstagram } from "react-icons/fa"; // Importa o ícone do Instagram

export default function Home() {
  const [isLogin, setIsLogin] = useState(true); // Alterna entre Login e Cadastro
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "", // Apenas para cadastro
  });

  // Função para lidar com mudanças nos campos do formulário
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Função para lidar com o envio do formulário
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isLogin) {
      // Lógica de login
      console.log("Login:", formData);
    } else {
      // Lógica de cadastro
      if (formData.password !== formData.confirmPassword) {
        alert("As senhas não coincidem!");
        return;
      }
      console.log("Cadastro:", formData);
    }
  };

  return (
    <main>
      <section className="relative w-full h-screen flex flex-col bg-stone-300 items-center justify-between">
        {/* Caixa de Login/Cadastro */}
        <div className="absolute top-20 right-4 md:right-8 bg-white p-4 md:p-6 rounded-lg shadow-lg w-72 md:w-80">
          <h2 className="text-gray-800 text-lg md:text-xl font-bold mb-4">
            {isLogin ? "Login" : "Cadastro"}
          </h2>
          <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <input
              type="password"
              name="password"
              placeholder="Senha"
              value={formData.password}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            {!isLogin && (
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirme a Senha"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            )}
            <button
              type="submit"
              className="bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition"
            >
              {isLogin ? "Entrar" : "Cadastrar"}
            </button>
          </form>
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600">
              {isLogin ? "Não tem uma conta?" : "Já tem uma conta?"}{" "}
              <button
                type="button"
                onClick={() => setIsLogin(!isLogin)}
                className="text-green-500 hover:underline"
              >
                {isLogin ? "Cadastre-se" : "Faça login"}
              </button>
            </p>
          </div>
        </div>

        {/* Conteúdo principal */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center w-11/12 md:w-1/3">
          <p className="text-white text-base md:text-lg font-medium mb-4">Uma história marcada</p>
          <h2 className="text-white font-bold text-3xl md:text-5xl drop-shadow-lg mb-6">
            Explore o mundo DPB
          </h2>
          <p className="text-white text-sm md:text-base mb-6">
            Embarque em uma jornada de criatividade e desafios únicos, onde a arte digital se encontra com a imaginação sem limites.
          </p>
          <button className="border border-white text-white py-2 px-6 rounded-lg hover:bg-gray-200 hover:text-gray-800 transition-all duration-300 ease-in-out shadow-lg">
            Deslize e veja mais
          </button>
        </div>
      </section>

      {/* Nova seção com cards */}
      <section className="w-full py-16 bg-gray-100">
        <div className="max-w-screen-lg mx-auto text-center px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Desafios DPB</h1>
          <p className="text-gray-600 text-base md:text-lg mb-8">
            Explore a diversidade de estilos e talentos, uma experiência visual que inspira criatividade e celebra a imaginação sem limites.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Image
                src={CardImage1}
                alt="Desafio 1"
                className="rounded-lg mb-4"
                width={400}
                height={200}
              />
              <h2 className="text-xl font-bold text-gray-800 mb-2">Desafio 1</h2>
              <p className="text-gray-600 mb-4">Descubra novos horizontes criativos com este desafio único.</p>
              <button className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition">
                Saiba mais
              </button>
            </div>
            {/* Card 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Image
                src={CardImage2}
                alt="Desafio 2"
                className="rounded-lg mb-4"
                width={400}
                height={200}
              />
              <h2 className="text-xl font-bold text-gray-800 mb-2">Desafio 2</h2>
              <p className="text-gray-600 mb-4">Mostre seu talento em um desafio que celebra a inovação.</p>
              <button className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition">
                Saiba mais
              </button>
            </div>
            {/* Card 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Image
                src={CardImage3}
                alt="Desafio 3"
                className="rounded-lg mb-4"
                width={400}
                height={200}
              />
              <h2 className="text-xl font-bold text-gray-800 mb-2">Desafio 3</h2>
              <p className="text-gray-600 mb-4">Inspire-se e crie algo extraordinário neste desafio.</p>
              <button className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition">
                Saiba mais
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}