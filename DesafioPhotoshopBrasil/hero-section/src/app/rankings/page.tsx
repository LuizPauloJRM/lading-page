"use client";

import { useState } from "react";

export default function Rankings() {
    // Estado para armazenar os dados da tabela
    const [rankings, setRankings] = useState([
        { posicao: "1º", participante: "João Silva", pontos: 120 },
        { posicao: "2º", participante: "Maria Oliveira", pontos: 110 },
        { posicao: "3º", participante: "Carlos Santos", pontos: 95 },
    ]);

    return (
        <main className="w-full min-h-screen bg-gray-100 flex flex-col items-center py-8">
            <section className="w-full max-w-4xl bg-white p-6 rounded-lg shadow-md">
                <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Rankings</h1>
                <p className="text-gray-600 text-sm leading-relaxed text-center mb-6">
                    Acompanhe os participantes mais votados e suas pontuações atualizadas.
                </p>
                <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="border border-gray-300 px-4 py-2 text-left">Posição</th>
                                <th className="border border-gray-300 px-4 py-2 text-left">Participante</th>
                                <th className="border border-gray-300 px-4 py-2 text-left">Pontuação</th>
                            </tr>
                        </thead>
                        <tbody>
                            {rankings.map((ranking, index) => (
                                <tr key={index}>
                                    <td className="border border-gray-300 px-4 py-2">{ranking.posicao}</td>
                                    <td className="border border-gray-300 px-4 py-2">{ranking.participante}</td>
                                    <td className="border border-gray-300 px-4 py-2">{ranking.pontos} pontos</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
        </main>
    );
}