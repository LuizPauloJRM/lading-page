import { FaInstagram } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="w-full bg-green-500 py-4 px-8 flex items-center justify-between">
            {/* Logo à esquerda */}
            <div className="text-white text-lg font-bold">
                Logo Aqui
            </div>

            {/* Ícone do Instagram à direita */}
            <a
                href="https://www.instagram.com/desafios.photoshop.brasil/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-2xl hover:text-gray-200 transition"
            >
                <FaInstagram />
            </a>
        </footer>
    );
}