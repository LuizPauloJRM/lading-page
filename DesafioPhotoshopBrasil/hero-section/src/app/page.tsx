


import Image from "next/image";
import liquifyEffectjpg from "../assets/liquifyEffect.jpg";
export default function Home() {
  return (
    <main>
      <section className="w-full h-screen flex-col bg-stone-300 items-center max-w-screen
      -lg mx-auto display flex justify-between">
        <nav className="w-full flex items-center justify-between">

        </nav>

        <div className="flex w-full  items-center justify-between">
          <div className="flex w-full items-center justify-between">
            <h1 className="text-left font-bold  text-7xl">Desafio Photoshop <span className="text-green-600">Brasil</span></h1>
          </div>

          <Image
            className="w-full max-w-2xl"
            src={liquifyEffectjpg}
            alt="Liquify Effect"
          />

        </div>



      </section>


    </main >
  );
}
