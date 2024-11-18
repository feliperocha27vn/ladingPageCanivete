import Mobile from "../Responsividade/Mobile";
import Texto from "./Texto";
import TelasMaiores from "../Responsividade/TelasMaiores";
import { MoveDown } from "lucide-react";

export default function Cabecalho() {
  return (
    <div className="bg-secundaria h-[34rem] md:h-[30rem] lg:h-[32rem] p-5 flex flex-col items-center justify-between">
      <div className="w-full">
        <img
          src="https://relogiodepulsomasculino.com.br/images/logoPerola.png"
          alt="Logo da Óptica e Relojoaria Pérola"
          className="w-44"
        />
      </div>
      <Mobile>
        <div className="space-y-10">
          <div className="w-full flex justify-center mt-2">
            <Texto />
          </div>
          <div className="w-full flex justify-center">
            <img
              src="https://relogiodepulsomasculino.com.br/images/caniveteBrinde.png"
              alt="Brinde canivete fechado"
            />
          </div>
        </div>
      </Mobile>
      <TelasMaiores>
        <div className="flex justify-evenly items-center w-full">
          <Texto />
          <img
            src="https://relogiodepulsomasculino.com.br/images/caniveteBrinde.png"
            alt="Brinde canivete fechado"
            className="md:h-28 lg:hidden"
          />
          <img
            src="https://relogiodepulsomasculino.com.br/images/canivetes.png"
            alt="Brinde canivete fechado e aberto"
            className="hidden lg:block h-[18rem]"
          />
        </div>
      </TelasMaiores>
      <div className="flex flex-col gap-y-3">
        <div className="bg-terciaria w-56 h-12 font-bold text-lg rounded-3xl shadow-2xl flex items-center justify-center">
          <MoveDown />
          OPÇÕES A BAIXO
          <MoveDown />
        </div>
      </div>
    </div>
  );
}
