import Background from "./components/Background";
import Cabecalho from "./components/Cabecalho/Cabecalho";
import Principal from "./components/Principal/Principal";
import Rodape from "./components/Rodape/Rodape";

export default function App() {
  return (
    <Background>
      <Cabecalho />
      <Principal />
      <Rodape />
    </Background>
  );
}
