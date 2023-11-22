import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./paginas/Inicio";
import SobreMim from "./paginas/SobreMim";
import Menu from "./components/Menu";
import Rodape from "components/Rodape";
import PaginaPadrao from "components/PaginaPadrao";
import Post from "paginas/Post";
import NaoEncontrada from "paginas/NaoEncontrada";

function App() {
  return (
  <BrowserRouter>
  <Menu/>
   <Routes>

   <Route path="/" element={<PaginaPadrao />}>
          <Route index element={<Inicio />} />
          <Route path="sobremim" element={<SobreMim />}/>
        </Route>

        <Route path="posts/:id" element={<Post />} />
 

    {/* Maneira anterior
    <Route path="/" element={<PaginaPadrao/>}>
    <Route path="/"element={<Inicio/>} />
    <Route path="/sobremim"element={<SobreMim/>} />
    </Route>
*/}
    


   {/*
   A tag <PaginaPadrao></PaginaPadrao> é um componente pai e dentro dela encontramos os componentes filhos (Inicio e SobreMim )

   Rotas alinhadas -> são rotas filhas de uma mesma rota
    Na rota "/", a estrutura a ser renderizada é: 

   <PaginaPadrao>
   <Inicio></Inicio>
   </PaginaPadrao>
   

    Na rota "/sobremim", a estrutura a ser renderizada é: 

   <PaginaPadrao>
   <SobreMim></SobreMim>
   </PaginaPadrao>
   */}

    <Route path="*" element={<NaoEncontrada />} />
   </Routes>
   <Rodape/>
  </BrowserRouter>
  );
  // o componente Routes é como se fosse o nosso roteador
  //ele vai decidir qual é a rota que vai mostrar na tela
  // <Route path="*" element={<div>Pagina não encontrada</div>} />->
  // colocamos la o asteristico para as paginas que não foram encontradas
}

export default App;
