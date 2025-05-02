"use client";

import { usePathname } from "next/navigation";
import Regras from './../app/regras/page';

export default function Navbar() {
    const pathname = usePathname();

    return (
        <nav className="w-full flex items-center justify-end bg-white py-4 px-4 md:px-8 shadow-md">
            <ul className="flex space-x-4 md:space-x-6">
                <li>
                    <a
                        href="/"
                        className={`${pathname === "/" ? "text-green-500" : "text-gray-800"
                            } hover:text-green-500 font-medium`}
                    >
                        Home
                    </a>
                </li>
                <li>
                    <a
                        href="/desafios"
                        className={`${pathname === "/desafios" ? "text-green-500" : "text-gray-800"
                            } hover:text-green-500 font-medium`}
                    >
                        Desafios
                    </a>
                </li>
                <li>
                    <a
                        href="/rankings"
                        className="text-gray-800 hover:text-green-500 font-medium"
                    >
                        Rankings
                    </a>
                </li>
                <li>
                    <a
                        href="/regras"
                        className="text-gray-800 hover:text-green-500 font-medium"
                    >
                        Regras
                    </a>
                </li>
                <li>
                    <a
                        href="#entrar"
                        className="text-green-500 hover:text-green-500 font-medium"
                    >
                        Entrar
                    </a>
                </li>
                <li>
                    <a
                        href="#cadastre-se"
                        className="text-gray-800 hover:text-green-500 font-medium"
                    >
                        Cadastre-se
                    </a>
                </li>
            </ul>
        </nav>
    );
}