"use client";

import Image from "next/image";
import RegrasImage from "../../assets/slide1.jpg"; // Substitua pelo caminho real da imagem para a aba Regras

export default function Regras() {
    return (
        <main className="w-full min-h-screen bg-gray-100 flex flex-col items-center py-8">
            <section className="w-full max-w-4xl bg-white p-6 rounded-lg shadow-md">
                <div className="flex flex-col items-center">
                    <Image
                        src={RegrasImage}
                        alt="Regras"
                        className="rounded-lg mb-4"
                        width={400}
                        height={240}
                    />
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Regras</h2>
                    <p className="text-gray-600 text-sm leading-relaxed">
                        <strong>Regulamento do Desafio de Photoshop - Edição Mensal</strong>
                        <br />
                        <br />
                        <strong>Objetivo do Desafio:</strong> Criar uma arte digital original utilizando as imagens bases fornecidas pelo administrador do desafio.
                        <br />
                        <br />
                        <strong>Imagens Bases:</strong> As imagens bases serão fornecidas exclusivamente pelo administrador do desafio. O uso de outras imagens externas ou conteúdo não fornecido será desqualificado.
                        <br />
                        <br />
                        <strong>Proibição do Uso de Inteligência Artificial (IA):</strong> Não será permitido o uso de inteligência artificial (IA) ou ferramentas automáticas que gerem ou alterem imagens de forma não manual. Todo o trabalho deve ser feito utilizando ferramentas tradicionais de edição de imagem, como o Photoshop.
                        <br />
                        <br />
                        <strong>Entrega de Imagens:</strong> A imagem final deve ser entregue dentro do prazo estipulado. O não cumprimento do prazo resultará em desclassificação do participante.
                        <br />
                        A entrega das artes finais deve ser feita diretamente para o WhatsApp do administrador do desafio dentro do prazo estabelecido.
                        <br />
                        <br />
                        <strong>Tamanho e Formato da Imagem:</strong> A imagem final deve ter um dos seguintes tamanhos obrigatoriamente:
                        <ul className="list-disc list-inside">
                            <li>1350 x 1350 pixels</li>
                            <li>1080 x 1350 pixels</li>
                        </ul>
                        Qualquer imagem enviada fora desses formatos será desqualificada.
                        <br />
                        <br />
                        <strong>Composição das Imagens:</strong> Ao enviar a imagem final, o participante deverá enviar também uma outra imagem que mostre todas as imagens bases utilizadas para compor a arte final. Essa imagem deve ser organizada de maneira clara, evidenciando o uso de cada uma das imagens.
                        <br />
                        <br />
                        <strong>Critérios de Avaliação:</strong> As artes serão avaliadas por criatividade, originalidade, aderência às imagens bases e técnica de edição.
                        <br />
                        <br />
                        <strong>Votação e Pontuação:</strong> A votação será feita por todos os participantes dos desafios e pelos membros do grupo de WhatsApp. As imagens serão publicadas no Instagram e, posteriormente, uma enquete será aberta no grupo de WhatsApp com os números das artes participantes, mantendo assim o sigilo do autor da arte. Os três mais votados irão compor o ranking dos primeiros colocados, sendo:
                        <ul className="list-disc list-inside">
                            <li>1º lugar: 10 pontos</li>
                            <li>2º lugar: 7 pontos</li>
                            <li>3º lugar: 4 pontos</li>
                        </ul>
                        A pontuação será acumulada ao longo do ano para definir quem obteve a maior pontuação ao final das edições do desafio.
                        <br />
                        <br />
                        <strong>Responsabilidade do Participante:</strong> Não infringir direitos autorais das imagens.
                    </p>
                </div>
            </section>
        </main>
    );
}