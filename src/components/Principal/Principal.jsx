import { ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import "./styles.css";
import { Navigation } from "swiper/modules";

export default function Principal() {
  const [relogios, setRelogios] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchRelogios() {
      try {
        const response = await fetch("../../../relogios.json");
        const data = await response.json();
        setRelogios(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Erro ao carregar os relógios:", error);
        setIsLoading(false);
      }
    }
    fetchRelogios();
  }, []);

  return (
    <div>
      {isLoading ? (
        <p>Carregando dados...</p>
      ) : (
        <div className="text-white flex flex-col items-center">
          <p className="mb-10 mt-5">Escolha o que mais combina com você</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-10 gap-y-5">
            {relogios.map((relogio) => (
              <RelogioCard key={relogio.id} relogio={relogio} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function RelogioCard({ relogio }) {
  return (
    <div className="w-[300px] h-[400px] bg-secundaria rounded-3xl p-3 shadow-2xl">
      <div className="h-full flex flex-col items-center justify-between">
        <div className="flex flex-col text-sm w-full">
          <span className="">{relogio.titulo}</span>
          <span className="">Mecanismo Automático</span>
        </div>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          <SwiperSlide>
            <img src={relogio.image} alt={relogio.titulo} />
          </SwiperSlide>
          <SwiperSlide className="p-12">
            <img
              src="https://relogiodepulsomasculino.com.br/images/caniveteAberto.png"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
        <div className="flex justify-between items-center w-full">
          <div className="flex flex-col text-sm">
            <span className="">Preço</span>
            <span className="">{relogio.preco}</span>
          </div>
          <a href={relogio.link} className="flex items-center">
            <span className="text-xl font-bold">COMPRAR</span>
            <ChevronRight />
          </a>
        </div>
      </div>
    </div>
  );
}
