"use client";

import { useState } from "react";
import Image from "next/image";
import DesafioImage1 from "../../assets/giraffe.jpg"; // Substitua pelo caminho real da imagem do Desafio 1
import DesafioImage2 from "../../assets/liquifyEffect.jpg"; // Substitua pelo caminho real da imagem do Desafio 2

export default function Desafios() {
    const [isModalOpen1, setIsModalOpen1] = useState(false); // Controle do modal do Desafio 1
    const [isModalOpen2, setIsModalOpen2] = useState(false); // Controle do modal do Desafio 2
    const [uploadedImage1, setUploadedImage1] = useState<string | null>(null); // Armazena a imagem enviada no Desafio 1
    const [uploadedImage2, setUploadedImage2] = useState<string | null>(null); // Armazena a imagem enviada no Desafio 2

    // Funções para abrir e fechar os modais
    const toggleModal1 = () => {
        setIsModalOpen1(!isModalOpen1);
    };

    const toggleModal2 = () => {
        setIsModalOpen2(!isModalOpen2);
    };

    // Função para lidar com o upload da imagem no Desafio 1
    const handleImageUpload1 = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setUploadedImage1(reader.result as string); // Armazena a imagem como base64
            };
            reader.readAsDataURL(file);
        }
    };

    // Função para lidar com o upload da imagem no Desafio 2
    const handleImageUpload2 = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setUploadedImage2(reader.result as string); // Armazena a imagem como base64
            };
            reader.readAsDataURL(file);
        }
    };

    // Função para excluir a imagem enviada no Desafio 1
    const handleDeleteImage1 = () => {
        setUploadedImage1(null);
    };

    // Função para excluir a imagem enviada no Desafio 2
    const handleDeleteImage2 = () => {
        setUploadedImage2(null);
    };

    return (
        <main className="w-full min-h-screen bg-gray-100 flex flex-col items-center py-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Desafios da Semana</h1>

            {/* Cards dos Desafios */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Card do Desafio 1 */}
                <div className="bg-white p-4 rounded-lg shadow-md w-60 h-auto flex flex-col items-center">
                    <Image
                        src={DesafioImage1}
                        alt="Desafio 1"
                        className="rounded-lg mb-4"
                        width={240}
                        height={135}
                    />
                    <h2 className="text-lg font-semibold text-gray-800 mb-2 text-center">Criatividade Sem Limites</h2>
                    <div className="flex justify-between w-full mt-4">
                        <a
                            href="/path/to/image1.jpg" // Substitua pelo caminho real da imagem para download
                            download
                            className="bg-green-500 text-white py-1 px-3 rounded-lg hover:bg-green-600 transition text-sm"
                        >
                            Download
                        </a>
                        <button
                            onClick={toggleModal1}
                            className="bg-blue-500 text-white py-1 px-3 rounded-lg hover:bg-blue-600 transition text-sm"
                        >
                            Saiba Mais
                        </button>
                    </div>
                </div>

                {/* Card do Desafio 2 */}
                <div className="bg-white p-4 rounded-lg shadow-md w-60 h-auto flex flex-col items-center">
                    <Image
                        src={DesafioImage2}
                        alt="Desafio 2"
                        className="rounded-lg mb-4"
                        width={240}
                        height={135}
                    />
                    <h2 className="text-lg font-semibold text-gray-800 mb-2 text-center">Natureza Selvagem</h2>
                    <div className="flex justify-between w-full mt-4">
                        <a
                            href="/path/to/image2.jpg" // Substitua pelo caminho real da imagem para download
                            download
                            className="bg-green-500 text-white py-1 px-3 rounded-lg hover:bg-green-600 transition text-sm"
                        >
                            Download
                        </a>
                        <button
                            onClick={toggleModal2}
                            className="bg-blue-500 text-white py-1 px-3 rounded-lg hover:bg-blue-600 transition text-sm"
                        >
                            Saiba Mais
                        </button>
                    </div>
                </div>
            </div>

            {/* Modal do Desafio 1 */}
            {isModalOpen1 && (
                <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-10/12 md:w-2/3 lg:w-1/2 relative">
                        <button
                            onClick={toggleModal1}
                            className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 text-2xl"
                        >
                            ✖
                        </button>
                        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Regras do Desafio 1</h2>
                        <div className="flex flex-col md:flex-row items-center md:items-start">
                            {/* Regras à Esquerda */}
                            <div className="text-gray-600 text-base md:w-1/2">
                                <p className="mb-4">
                                    <strong>1.</strong> Baixe a imagem e use sua criatividade para editá-la.
                                </p>
                                <p className="mb-4">
                                    <strong>2.</strong> Envie sua edição até o prazo estipulado.
                                </p>
                                <p className="mb-4">
                                    <strong>3.</strong> Siga as regras de edição descritas no site.
                                </p>
                                <p>
                                    <strong>4.</strong> Divirta-se e compartilhe sua arte com a comunidade!
                                </p>
                            </div>
                            {/* Imagem à Direita */}
                            <div className="md:w-1/2 flex justify-center">
                                <Image
                                    src={DesafioImage1}
                                    alt="Desafio 1"
                                    className="rounded-lg"
                                    width={400}
                                    height={240}
                                />
                            </div>
                        </div>
                        {/* Botão de Enviar Imagem e Prazo */}
                        <div className="flex flex-col items-center mt-6">
                            {uploadedImage1 ? (
                                <div className="flex flex-col items-center">
                                    <img
                                        src={uploadedImage1}
                                        alt="Imagem Enviada"
                                        className="rounded-lg mb-4 w-48 h-48 object-cover"
                                    />
                                    <button
                                        onClick={handleDeleteImage1}
                                        className="bg-red-500 text-white py-1 px-3 rounded-lg hover:bg-red-600 transition text-sm"
                                    >
                                        Excluir Imagem
                                    </button>
                                </div>
                            ) : (
                                <label className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition cursor-pointer">
                                    Enviar Imagem
                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={handleImageUpload1}
                                        className="hidden"
                                    />
                                </label>
                            )}
                            <p className="text-gray-600 text-sm mt-4">Prazo: 10/05/2025</p>
                        </div>
                    </div>
                </div>
            )}

            {/* Modal do Desafio 2 */}
            {isModalOpen2 && (
                <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-10/12 md:w-2/3 lg:w-1/2 relative">
                        <button
                            onClick={toggleModal2}
                            className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 text-2xl"
                        >
                            ✖
                        </button>
                        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Regras do Desafio 2</h2>
                        <div className="flex flex-col md:flex-row items-center md:items-start">
                            {/* Regras à Esquerda */}
                            <div className="text-gray-600 text-base md:w-1/2">
                                <p className="mb-4">
                                    <strong>1.</strong> Baixe a imagem e use sua criatividade para editá-la.
                                </p>
                                <p className="mb-4">
                                    <strong>2.</strong> Envie sua edição até o prazo estipulado.
                                </p>
                                <p className="mb-4">
                                    <strong>3.</strong> Siga as regras de edição descritas no site.
                                </p>
                                <p>
                                    <strong>4.</strong> Divirta-se e compartilhe sua arte com a comunidade!
                                </p>
                            </div>
                            {/* Imagem à Direita */}
                            <div className="md:w-1/2 flex justify-center">
                                <Image
                                    src={DesafioImage2}
                                    alt="Desafio 2"
                                    className="rounded-lg"
                                    width={400}
                                    height={240}
                                />
                            </div>
                        </div>
                        {/* Botão de Enviar Imagem e Prazo */}
                        <div className="flex flex-col items-center mt-6">
                            {uploadedImage2 ? (
                                <div className="flex flex-col items-center">
                                    <img
                                        src={uploadedImage2}
                                        alt="Imagem Enviada"
                                        className="rounded-lg mb-4 w-48 h-48 object-cover"
                                    />
                                    <button
                                        onClick={handleDeleteImage2}
                                        className="bg-red-500 text-white py-1 px-3 rounded-lg hover:bg-red-600 transition text-sm"
                                    >
                                        Excluir Imagem
                                    </button>
                                </div>
                            ) : (
                                <label className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition cursor-pointer">
                                    Enviar Imagem
                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={handleImageUpload2}
                                        className="hidden"
                                    />
                                </label>
                            )}
                            <p className="text-gray-600 text-sm mt-4">Prazo: 15/05/2025</p>
                        </div>
                    </div>
                </div>
            )}
        </main>
    );
}