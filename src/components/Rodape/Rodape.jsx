import { Facebook, Instagram } from "lucide-react";
import Mobile from "../Responsividade/Mobile";
import TelasMaiores from "../Responsividade/TelasMaiores";

export default function Rodape() {
  return (
    <div className="mt-10 p-3 text-white">
      <div className="flex flex-col items-center gap-y-5">
        <span className="font-bold text-xl">
          Com mais de 3.000 vendas nos principais marketplaces!
        </span>
        <img
          src="https://relogiodepulsomasculino.com.br/images/marktplaces.png"
          alt="Logo do mercado livre e amazon"
        />
        <Mobile>
          <img
            src="https://relogiodepulsomasculino.com.br/images/logoPerola.png"
            alt="Logo da óptica e relojaria pérola"
            className="w-56"
          />
          <div className="w-full space-y-2">
            <a
              href="https://www.instagram.com/opticaerelojoariaperola/"
              className="flex items-center gap-x-2"
            >
              <Instagram />
              <span className="">@opticaerelojoariaperola</span>
            </a>
            <a
              href="https://www.facebook.com/opticae.relojoariaperola/?locale=pt_BR"
              className="flex items-center gap-x-2"
            >
              <Facebook />
              <span className="">Óptica e Relojoaria Pérola</span>
            </a>
          </div>
        </Mobile>
        <TelasMaiores>
          <div className="flex justify-between items-center">
            <div className="space-y-4">
              <a
                href="https://www.instagram.com/opticaerelojoariaperola/"
                className="flex items-center gap-x-2"
              >
                <Instagram />
                <span className="">@opticaerelojoariaperola</span>
              </a>
              <a
                href="https://www.facebook.com/opticae.relojoariaperola/?locale=pt_BR"
                className="flex items-center gap-x-2"
              >
                <Facebook />
                <span className="">Óptica e Relojoaria Pérola</span>
              </a>
            </div>
            <img
              src="https://relogiodepulsomasculino.com.br/images/logoPerolaMaior.png"
              alt="Logo da óptica e relojaria pérola"
              className="w-72"
            />
          </div>
        </TelasMaiores>
      </div>
    </div>
  );
}
