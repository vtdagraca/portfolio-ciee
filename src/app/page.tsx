'use client';

import interpessoal from "./img/interpessoais.webp"
import etica from "./img/etica.png"
import organograma from "./img/organograma.png"
import clt from "./img/clt.png"
import aprendiz from "./img/aprendiz.png";
import vitor from "./img/vitorselfie.png";
import logosicoob from "./img/logosicoob.png";
import Imagem from "./img/logociee.png";
import React, { useState, useEffect } from 'react';
import './globals.css';
import { MdOutlineMenuBook } from "react-icons/md";
import Image from 'next/image';
import { PiCursorClickLight } from "react-icons/pi";

const Home: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    // Função para desativar a rolagem quando o menu estiver aberto
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      // Limpa o estilo de overflow ao desmontar o componente
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  return (
    <div className="Main">
      <header className="flex items-center justify-between text-aliceblue h-[70px] p-4 relative border-b-2 border-lime-500">
        <p className="textheader text-white text-lg">Vitor de Oliveira da Graça</p>
        <button
          className="text-white focus:outline-none flex items-center"
          onClick={toggleMenu}
        >
          <p className="mr-[10px]">Sumário</p>
          <span className="text-[37px] mb-1"><MdOutlineMenuBook /></span>
        </button>
      </header>

      {/* Overlay preto semitransparente */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black opacity-50 z-10" onClick={closeMenu}></div>
      )}

      <ul
        className={`menu fixed top-0 right-0 bg-[#00AE9D] p-4 transition-transform transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} w-[500px] z-20`}
      >
        <button className="cursor-pointer ml-[95%] text-white text-[25px]" onClick={closeMenu}>x</button>
        <p className="text-center text-xl mb-[20px] text-lime-500">Sumário:</p>
        <li className="mb-2"><a onClick={closeMenu} href="#" className="text-white">Início</a></li>
        <li className="mb-2"><a onClick={closeMenu} href="#portfolio" className="text-white">O que é o portfólio CIEE?</a></li>
        <li className="mb-2"><a onClick={closeMenu} href="#sobremim" className="text-white">Sobre mim</a></li>
        <p className="text-center text-xl mb-[20px] text-lime-500">Encontros:</p>
        <li className="mb-2"><a onClick={closeMenu} href="#enc1" className="text-white">Encontro 1 - Lei da aprendizagem</a></li>
        <li className="mb-2"><a onClick={closeMenu} href="#enc2" className="text-white">Encontro 2 - Direito e deveres do empregado e empregador</a></li>
        <li className="mb-2"><a onClick={closeMenu} href="#enc3" className="text-white">Encontro 3 - Conceitos e tipos de empresa</a></li>
        <li className="mb-2"><a onClick={closeMenu} href="#enc4" className="text-white">Encontro 4 - Ética profissional</a></li>
        <li className="mb-2"><a onClick={closeMenu} href="#enc5" className="text-white">Encontro 5 - Relações interpessoais</a></li>
        <li className="mb-2"><a onClick={closeMenu} href="#enc6" className="text-white">Encontro 6 - Gestão do tempo</a></li>
        <li className="mb-2"><a onClick={closeMenu} href="#enc7" className="text-white">Encontro 7 - Saúde do trabalhador</a></li>
        <li className="mb-2"><a onClick={closeMenu} href="#enc8" className="text-white">Encontro 8 - Noções básicas do uso do computador</a></li>
        <li className="mb-2"><a onClick={closeMenu} href="#enc9" className="text-white">Encontro 9 - Internet e segurança digital</a></li>
        <li className="mb-2"><a onClick={closeMenu} href="#enc10" className="text-white">Encontro 10 - Pacote office</a></li>
      </ul>

      <div className="scrolling-text-container">
        <div className="scrolling-text">
          - Vitor de Oliveira da Graça, Jovem Aprendiz de Automação Operacional no Banco Sicoob.
        </div>
      </div>

      <main className="text-white flex flex-col md:flex-row md:items-center md:justify-between p-4 h-[600px]">
        <div className="foto border-b-[1px] border-l-[1px] border-lime-400 rounded-[0px] flex flex-col items-center w-full md:w-[40%] mb-4 md:mb-0">
          <Image className="h-[150px] w-[300px] p-4 md:h-[200px] md:w-[400px] object-contain" src={Imagem} alt="Imagem" />
          <Image className="mt-4 h-[100px] p-4 w-[250px] md:h-[150px] md:w-[350px] object-contain" src={logosicoob} alt="Logo Sicoob" />
        </div>
        <div className="apresentacao p-5 text-center mr-[10%] md:text-left w-full md:w-[40%]">
          <p className="textoinicial text-lime-400 text-[30px] text-center">
            Portfólio
          </p>
          <p className="vtdagracatitle text-[70px] text-white text-center">
            Vitor Graça
          </p>
          <p className="pb-5 text-center text-[#00AE9D] text-[20px]">
            Jovem Aprendiz de Automação Operacional
          </p>
          <p className="">
            - Contratante: Sicoob Seguros <br />
            - Programa: CIEE <br />
            - Supervisor: Gelson
          </p>
        </div>
      </main>

      <div id="portfolio" className="bg-white h-[300px] text-[#00665c] text-center p-4 border-b-2 border-[#00AE9D] border-t-2 max-w-]">
        <p className="portfoliotitle mt-[20px] text-[30px] mb-[30px] p-4]">O que é o portfólio CIEE?</p>
        <p className="portfoliotext text-[18px] text-center w-[70%] mx-auto">O portfólio CIEE é uma atividade que junta os principais registros dos encontros EAD do Programa CIEE. Ele tem como objetivo mostrar para as empresas um resumo do que foi aprendido e vivenciado durante o curso, dando uma ideia das experiências e conhecimentos que os participantes adquiriram. Assim, o portfólio ajuda a compartilhar um pouco da jornada de desenvolvimento do aprendiz com as empresas.</p>
      </div>
      <div className='teste h-[200px]'>
        <button onClick={toggleMenu} className="flex items-center cliquesumario h-[100px] border-lime-500 border-2 w-[50%] mx-auto mt-[100px] text-white pulsate">
          <p className="flex mx-auto text-[30px]">Acesse o Sumário Aqui <PiCursorClickLight /></p>
        </button>
      </div>
      <div id="sobremim" className="sobremim bg-lime-500 h-[500px] flex justify-end items-center">
        <div className="text-center text-white mx-auto p-[15px]">
          <p className="sobremimtitle text-[30px] mb-[50px]">Sobre mim:</p>
          <p className="sobremimtext text-[15px] w-[700px]">Olá, meu nome é Vitor de Oliveira da Graça,
            tenho 16 anos e estou atualmente cursando o programa de formação do CIEE,
            me preparando para uma experiência de trabalho como Jovem Aprendiz no Sicoob Seguros.
            Essa fase de preparação tem sido muito importante para o meu desenvolvimento pessoal e profissional.</p>
          <p className="sobremimtext text-[15px] w-[700px] mt-[10px]">
            Desde cedo, sempre fui fascinado por tecnologia, o que me levou a buscar
            capacitação na área de programação. Ao longo do tempo, tenho me dedicado
            a aprender diversas linguagens e ferramentas, com o objetivo de me tornar um programador
            cada vez mais preparado para os desafios do mercado. </p>
          <p id="ultimotextsobremim" className="sobremimtext text-[15px] w-[700px] mt-[10px]">Estou ansioso para começar a trabalhar no
            Sicoob e aplicar todo o conhecimento técnico que estou adquirindo, especialmente no desenvolvimento
            de soluções automatizadas. Vejo essa oportunidade como um caminho para crescer, tanto profissionalmente
            quanto pessoalmente, e estou muito empolgado para contribuir com a equipe e continuar aprimorando conhecimento.</p>
        </div>
        <div className="mt-[51px] w-[300px]">
          <Image className="vitor h-[448px]" src={vitor} alt="Imagem" />
        </div>
      </div>
      <div className="text-center encontro1 p-[50px]" id='enc1'>
        {/*<Image className='w-[300px] ml-[10%] mt-[130px] absolute z-0' src={direitos} alt="Imagem" />*/}
        <p className="relative z-1 text-white text-[20px]">Encontro 1</p>
        <p className="titleenc1 text-lime-500 text-[40px]">Lei da Aprendizagem</p>
        <p className="textenc1 text-white mb-[40px] mt-[40px] w-[70%] mx-auto">
          No primeiro encontro sobre a Lei da Aprendizagem,
          aprendi os pontos principais da lei, especialmente sobre
          meus direitos como menor aprendiz. Também
          conheci mais sobre o ECA (Estatuto da Criança e do Adolescente)
          e o Programa de Erradicação do Trabalho Infantil,
          que tem como objetivo combater o trabalho infantil e garantir que
          as crianças e adolescentes possam estudar e se desenvolver
          de forma saudável, sem serem exploradas no mercado de
          trabalho.
        </p>
        <div className="imgenc1 bg-lime-500 border-2 border-white flex justify-center mx-auto mb-[30px] p-[10px] w-[300px]">
          <Image src={aprendiz} alt="imagem" />
        </div>
        <p className="textenc1 text-white w-[70%] mx-auto">
          O que mais me interessou foi aprender sobre os direitos
          que a Lei da Aprendizagem garante, como a jornada de trabalho
          adaptada aos estudos. No ECA, gostei de entender melhor como ele
          protege os direitos dos jovens, especialmente no acesso à educação.
          E, no Programa de Erradicação do Trabalho Infantil, achei importante
          ver como ele combate a exploração infantil, permitindo que as crianças
          se desenvolvam sem precisar trabalhar cedo e forçadamente.
        </p>
      </div>
      <div className="bg-lime-500 text-center encontro1 p-[50px]" id='enc2'>
        <p className="relative z-1 text-white text-[20px]">Encontro 2</p>
        <p className="titleenc1 text-[#10435e] text-[40px]">Direitos e deveres do empregado e empregador</p>
        <p className="textenc1 text-white mb-[40px] mt-[40px] w-[70%] mx-auto">
          No segundo encontro, aprendi sobre os direitos e deveres dos trabalhadores
          e empregadores, bem como um breve histórico das leis trabalhistas no Brasil.
          Aprendi também sobre o trabalho na pré-história, que funcionava de maneira
          muito diferente do que conhecemos hoje. Entendi melhor os principais
          deveres dos empregadores, como garantir um ambiente de trabalho seguro,
          e os encargos trabalhistas, que incluem contribuições como INSS e FGTS.
          Também aprendi sobre o holerite, que é o documento que detalha o pagamento
          dos funcionários. Além disso, vimos os principais direitos dos empregadores
          e as licenças previstas na CLT, como a licença-maternidade. Outro ponto
          importante foi a inclusão de pessoas com deficiência no mercado de trabalho,
          com leis que garantem acessibilidade e oportunidades.
        </p>
        <div className="imgenc2 bg-lime-500 flex justify-center mx-auto mb-[30px] p-[10px] w-[300px]">
          <Image src={clt} alt="imagem" />
        </div>
        <p className="textenc1 text-white w-[70%] mx-auto">
          O que mais me chamou a atenção nesse encontro foram os direitos e deveres
          dos trabalhadores, como ter um salário justo e trabalhar em um ambiente seguro.
          Também achei interessante entender o histórico das leis trabalhistas no Brasil
          e como esses direitos foram conquistados ao longo do tempo. Aprender sobre o
          holerite foi útil para entender melhor os descontos e valores no salário. Além disso,
          a parte sobre a inclusão de pessoas com deficiência no mercado de trabalho me
          despertou interesse, já que isso ajuda a garantir mais oportunidades para todos.
        </p>
      </div>
      <div className="text-center encontro1 p-[50px]" id='enc3'>
        <p className="relative z-1 text-white text-[20px]">Encontro 3</p>
        <p className="titleenc1 text-lime-500 text-[40px]">Conceitos e tipos de empresa</p>
        <p className="textenc1 text-white mb-[40px] mt-[40px] w-[70%] mx-auto">
          No terceiro encontro, aprendi sobre o conceito de empresa, entendendo seus
          diferentes perfis: subjetivo, funcional e objetivo. Vi também sobre os tipos
          de empresas, como as dos setores primário, secundário e terciário, além de
          empresas individuais e societárias, e também as privadas, públicas e mistas.
          Estudei as sociedades empresariais e as contribuições da responsabilidade
          social, tanto para a empresa quanto para a sociedade e o meio ambiente.
          Conheci mais sobre o empreendedorismo social e como ele busca gerar impacto
          positivo. Também abordaram a elaboração de missão, visão e valores.
          Aprendi sobre organogramas e a importância da hierarquia nas empresas,
          além de ver o conceito de startups e um pouco da história de empresas
          como Netflix e Instagram.
        </p>
        <p className="textenc1 mb-[50px] text-white w-[70%] mx-auto">
          O que mais me interessou foi entender os diferentes tipos de empresa
          e como elas se organizam em setores, como o primário, secundário e terciário.
          Achei interessante aprender sobre as sociedades empresariais e como a
          responsabilidade social pode trazer benefícios não só para a empresa, mas
          também para a sociedade e o meio ambiente. A parte sobre o empreendedorismo
          social me chamou atenção, por ser uma forma de empreender com impacto
          positivo. Gostei também de entender melhor a importância da hierarquia
          nas empresas e como o organograma ajuda a visualizar isso. Além disso,
          gostei de ver sobre missão, visão e valores que são pontos que toda empresa
          deve ter.
        </p>
        <p className="relative z-1 mb-[35px] text-lime-500 text-[20px]">
          <span className="text-white text-[15px]">(Achei interessante incluir)</span><br />
          Missão, visão e valores do banco Sicoob:
        </p>
        <p className="textenc1 mb-[60px] text-white text-left w-[70%] mx-auto">
          <span className="text-lime-500">Missão:</span><br />
          Promover o desenvolvimento sustentável das cooperativas e dos cooperados,
          oferecendo soluções financeiras com qualidade e inovação, contribuindo para
          o bem-estar das pessoas e das comunidades. <br />
          <span className="text-lime-500">Visão:</span><br />
          Ser reconhecido como o sistema de cooperativas de crédito mais confiável
          e inovador do Brasil, proporcionando aos cooperados e clientes uma experiência
          financeira diferenciada e sustentável.<br />
          <span className="text-lime-500">Valores:</span><br />
          Cooperação, transparência, ética, inovação e sustentabilidade.
        </p>
        <p className="relative z-1 mb-[35px] text-lime-500 text-[20px]">
          Um dos organogramas do banco Sicoob:
        </p>
        <div className="imgenc3 flex justify-center mx-auto border-2 border-lime-500 mb-[30px] p-[10px] w-[700px] bg-white">
          <Image src={organograma} alt="imagem" />
        </div>
      </div>
      <div className="bg-lime-500 text-center encontro1 p-[50px]" id='enc4'>
        <p className="relative z-1 text-white text-[20px]">Encontro 4</p>
        <p className="titleenc1 text-[#10435e] text-[40px]">Ética profissional</p>
        <p className="textenc1 text-white mb-[40px] mt-[40px] w-[70%] mx-auto">
          No quarto encontro, aprendi sobre ética profissional, entendendo o que
          significa agir com responsabilidade e integridade no ambiente de trabalho.
          Vimos exemplos práticos de ética, como a importância de ser honesto,
          respeitar os colegas e cumprir os compromissos. Também falamos sobre
          ética empresarial, que envolve as práticas de uma empresa em relação aos
          seus funcionários, clientes e a sociedade. Aprendi como ela se aplica
          especificamente nos ambientes profissionais e que desenvolver a ética
          profissional no trabalho significa ter atitudes justas e respeitosas em
          todas as situações.
        </p>
        <div className="imgenc2 bg-lime-500 flex justify-center mx-auto mb-[30px] p-[10px] w-[300px]">
          <Image src={etica} alt="imagem" />
        </div>
        <p className="textenc1 text-white w-[70%] mx-auto">
          O que mais me chamou atenção foi a importância da ética no ambiente
          de trabalho, como ser honesto e tratar os colegas com respeito.
          Gostei de entender melhor o que é ética empresarial e como as empresas
          precisam adotar práticas corretas em suas relações. Outro ponto que
          me interessou foi como podemos desenvolver a ética no trabalho, agindo
          com responsabilidade e cumprindo nossas obrigações. Por fim, o conceito
          geral de ética, sobre sempre fazer o certo, foi um dos temas que mais
          me fez refletir.
        </p>
      </div>
      <div className="text-center encontro1 p-[50px]" id='enc5'>
        <p className="relative z-1 text-white text-[20px]">Encontro 5</p>
        <p className="titleenc1 text-lime-500 text-[40px]">Relações interpessoais</p>
        <p className="textenc1 text-white mb-[40px] mt-[40px] w-[70%] mx-auto">
          No quinto encontro, aprendi sobre o relacionamento interpessoal e sua importância
          no ambiente de trabalho. Abordaram os 6 pilares do relacionamento interpessoal,
          que ajudam a construir conexões saudáveis com as pessoas. Também vi sobre
          inteligência emocional, que envolve entender e controlar nossas emoções para
          melhorar nossas relações e desempenho. Falaram sobre como fazer amigos e
          influenciar pessoas de forma positiva, e a importância de manter um bom
          relacionamento com colegas de trabalho. Além disso, aprendi sobre postura
          profissional e como a comunicação, tanto verbal quanto não verbal, é essencial
          nas organizações para garantir uma boa convivência e produtividade.
        </p>
        <div className="imgenc2 flex justify-center mx-auto mb-[30px] p-[10px] w-[300px]">
          <Image src={interpessoal} alt="imagem" />
        </div>
        <p className="textenc1 mb-[50px] text-white w-[70%] mx-auto">
          O que mais me interessou foi a importância do relacionamento interpessoal no 
          ambiente de trabalho, como a maneira que nos relacionamos pode impactar o dia 
          a dia e os resultados. A inteligência emocional foi outro ponto interessante, 
          mostrando como entender e controlar nossas emoções pode melhorar nossas relações 
          e nosso desempenho. Gostei também de aprender sobre a comunicação no trabalho, 
          tanto a verbal quanto a não verbal, e como ela é fundamental para manter um 
          bom ambiente. Além disso, os 6 pilares do relacionamento interpessoal foram 
          uma ótima base para entender como melhorar as interações com os colegas.
        </p>
        <p className="relative z-1 mb-[35px] text-lime-500 text-[20px]">
          6 pilares do relacionamento interpessoal:
        </p>
        <p className="textenc1 mb-[60px] text-white text-left w-[60%] mx-auto">
          <span className="text-lime-500">1- </span>
          Autoconhecimento: Entender suas emoções, motivações e limitações. <br />
          <span className="text-lime-500">2- </span>
          Adaptabilidade: Ajustar-se facilmente a novas situações. <br />
          <span className="text-lime-500">3- </span>
          Diálogo: Troca respeitosa de ideias. <br />
          <span className="text-lime-500">4- </span>
          Atenção: Foco no presente e nos detalhes. <br />
          <span className="text-lime-500">5- </span>
          Respeito: Valorizar a dignidade dos outros. <br />
          <span className="text-lime-500">6- </span>
          Empatia: Compreender e compartilhar os sentimentos alheios.
        </p>
      </div>
    </div>
  );
}

export default Home;
