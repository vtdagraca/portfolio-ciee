'use client';

import office from "./img/office.png"
import seguranca from "./img/segurança.webp"
import tecdesenho from "./img/tecdesenho.png"
import desenhopc from "./img/desenhopc.png"
import saude from "./img/saudedotrabalhador.png"
import relogio from "./img/relogio.png"
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
import AvaliationForm from './components/AvaliationForm';

const Home: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
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
          className="text-white focus:outline-none flex items-center hover:text-[#00AE9D] duration-300"
          onClick={toggleMenu}
        >
          <p className="mr-[10px]">Sumário</p>
          <span className="text-[37px] mb-1"><MdOutlineMenuBook /></span>
        </button>
      </header>

      {isMenuOpen && (
        <div className="fixed inset-0 bg-black opacity-50 z-10" onClick={closeMenu}></div>
      )}

      <ul
        className={`menu fixed top-0 right-0 bg-[#00AE9D] p-4 transition-transform transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} w-[500px] z-20`}
      >
        <button className="cursor-pointer ml-[95%] text-white text-[25px]" onClick={closeMenu}>x</button>
        <p className="text-center text-xl mb-[20px] text-lime-500">Sumário:</p>
        <li className="mb-2"><a onClick={closeMenu} href="#" className="text-white hover:text-lime-500 duration-200">Início</a></li>
        <li className="mb-2"><a onClick={closeMenu} href="#portfolio" className="text-white hover:text-lime-500 duration-200">O que é o portfólio CIEE?</a></li>
        <li className="mb-2"><a onClick={closeMenu} href="#sobremim" className="text-white hover:text-lime-500 duration-200">Sobre mim</a></li>
        <li className="mb-2"><a onClick={closeMenu} href="#conclusao" className="text-white hover:text-lime-500 duration-200">Conclusão</a></li>
        <li className="mb-2"><a onClick={closeMenu} href="#avalie" className="text-white hover:text-lime-500 duration-200">Avalie</a></li>
        <p className="text-center text-xl mb-[20px] text-lime-500">Encontros:</p>
        <li className="mb-2"><a onClick={closeMenu} href="#enc1" className="text-white hover:text-lime-500 duration-200">Encontro 1 - Lei da aprendizagem</a></li>
        <li className="mb-2"><a onClick={closeMenu} href="#enc2" className="text-white hover:text-lime-500 duration-200">Encontro 2 - Direito e deveres do empregado e empregador</a></li>
        <li className="mb-2"><a onClick={closeMenu} href="#enc3" className="text-white hover:text-lime-500 duration-200">Encontro 3 - Conceitos e tipos de empresa</a></li>
        <li className="mb-2"><a onClick={closeMenu} href="#enc4" className="text-white hover:text-lime-500 duration-200">Encontro 4 - Ética profissional</a></li>
        <li className="mb-2"><a onClick={closeMenu} href="#enc5" className="text-white hover:text-lime-500 duration-200">Encontro 5 - Relações interpessoais</a></li>
        <li className="mb-2"><a onClick={closeMenu} href="#enc6" className="text-white hover:text-lime-500 duration-200">Encontro 6 - Gestão do tempo</a></li>
        <li className="mb-2"><a onClick={closeMenu} href="#enc7" className="text-white hover:text-lime-500 duration-200">Encontro 7 - Saúde do trabalhador</a></li>
        <li className="mb-2"><a onClick={closeMenu} href="#enc8" className="text-white hover:text-lime-500 duration-200">Encontro 8 - Noções básicas do uso do computador</a></li>
        <li className="mb-2"><a onClick={closeMenu} href="#enc9" className="text-white hover:text-lime-500 duration-200">Encontro 9 - Internet e segurança digital</a></li>
        <li className="mb-2"><a onClick={closeMenu} href="#enc10" className="text-white hover:text-lime-500 duration-200">Encontro 10 - Pacote office</a></li>
      </ul>

      <div className="scrolling-text-container shadow-[0_-4px_6px_rgba(0,0,0,0.1),0_4px_6px_rgba(0,0,0,0.1)]">
        <div className="scrolling-text">
          - Vitor de Oliveira da Graça, Jovem Aprendiz de Automação Operacional na Cooperativa Sicoob.
        </div>
      </div>

      <main className="text-white flex flex-col md:flex-row md:items-center md:justify-between p-4 h-[600px]">
        <div className="foto flex flex-col items-center w-full md:w-[40%] mb-4 md:mb-0">
          <a
            href="https://portal.ciee.org.br/"
            className="cursor-pointer"
            target="_blank"
            rel="noopener noreferrer">
            <Image className="h-[150px] w-[300px] p-4 md:h-[200px] md:w-[400px] object-contain hover:scale-105 transition-transform duration-300 ease-in-out" src={Imagem} alt="Imagem" />
          </a>
          <a
            href="https://www.sicoob.com.br/"
            className="cursor-pointer"
            target="_blank"
            rel="noopener noreferrer">
            <Image className="mt-4 h-[100px] p-4 w-[250px] md:h-[150px] md:w-[350px] object-contain hover:scale-105 transition-transform duration-300 ease-in-out" src={logosicoob} alt="Logo Sicoob" />
          </a>
        </div>
        <div className="apresentacao p-5 text-center mr-[10%] md:text-left w-full md:w-[40%] border-lime-500 border-[1px] hover:scale-105 transition-transform duration-300 ease-in-out">
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
        <button onClick={toggleMenu} className="flex items-center cliquesumario h-[100px] border-lime-500 hover:border-white hover:text-lime-500 duration-300 border-2 w-[50%] mx-auto mt-[100px] text-white pulsate">
          <p className="flex mx-auto text-[30px]">Acesse o Sumário Aqui <PiCursorClickLight /></p>
        </button>
      </div>
      <svg className="mt-[-30px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#00AE9D" fill-opacity="1" d="M0,192L48,170.7C96,149,192,107,288,117.3C384,128,480,192,576,197.3C672,203,768,149,864,144C960,139,1056,181,1152,192C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
      <div id="sobremim" className="sobremim bg-[#00AE9D] border-b-2 border-lime-500 h-[500px] flex justify-end items-center">
        <div className="text-center text-white mx-auto p-[15px]">
          <p className="sobremimtitle text-[30px] mt-[15px] rounded-xl border-2 border-lime-400 bg-[#10435e] mx-auto p-[5px] w-[200px] mb-[50px]">Sobre mim:</p>
          <p className="sobremimtext text-[15px] w-[700px]">Olá, meu nome é Vitor de Oliveira da Graça,
            tenho 16 anos e estou atualmente cursando o programa de formação do CIEE,
            me preparando para uma experiência de trabalho como Jovem Aprendiz no Sicoob Seguros.
            Essa fase de preparação tem sido muito importante para o meu desenvolvimento pessoal e profissional.</p>
          <p className="sobremimtext text-[15px] w-[700px] mt-[10px]">
            Desde cedo, sempre fui fascinado por tecnologia, o que me levou a buscar capacitação na
            área. Á alguns meses atrás, ingressei no curso da
            <a
              href="https://www.eliti.com.br"
              className="text-[#134d6d] ml-[5px] underline cursor-pointer"
              target="_blank"
              rel="noopener noreferrer">ELITI
            </a>, uma escola focada na formação de líderes em TI,
            onde estou até hoje. A experiência na Eliti tem sido fundamental, proporcionando uma base
            sólida em T.i, liderança e inovação. A partir daí, me aprofundei em diversas linguagens e
            ferramentas de programação, sempre buscando me aprimorar e me tornar um profissional
            mais preparado para os desafios do mercado.</p>
          <p id="ultimotextsobremim" className="sobremimtext text-[15px] w-[700px] mt-[10px]">Estou ansioso para começar a trabalhar no
            <a
              href="https://www.sicoob.com.br/"
              className="text-[#134d6d] ml-[5px] underline cursor-pointer"
              target="_blank"
              rel="noopener noreferrer">SICOOB
            </a> e aplicar todo o conhecimento técnico que estou adquirindo. Vejo essa oportunidade como um caminho para crescer, tanto profissionalmente
            quanto pessoalmente, e estou muito empolgado para contribuir com a equipe e continuar aprimorando conhecimento.</p>
        </div>
        <div className="mt-[51px] w-[300px]">
          <Image className="vitor h-[448px]" src={vitor} alt="Imagem" />
        </div>
      </div>
      <div className="text-center encontro1 p-[50px]" id='enc1'>
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
        <div className="imgenc1 bg-lime-500 border-2 border-white flex justify-center mx-auto mb-[30px] p-[10px] w-[300px] hover:scale-105 transition-transform duration-300 ease-in-out">
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
        <div className="imgenc2 bg-lime-500 flex justify-center mx-auto mb-[30px] p-[10px] w-[300px] hover:scale-105 transition-transform duration-300 ease-in-out">
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
          Missão, visão e valores da Sicoob:
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
          Um dos organogramas da Sicoob:
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
          Vi exemplos práticos de ética, qual a importância de ser honesto,
          respeitar os colegas e cumprir os compromissos. Também falamos sobre
          ética empresarial, que envolve as práticas de uma empresa em relação aos
          seus funcionários, clientes e a sociedade. Aprendi como ela se aplica
          especificamente nos ambientes profissionais e que desenvolver a ética
          profissional no trabalho significa ter atitudes justas e respeitosas em
          todas as situações.
        </p>
        <div className="imgenc2 bg-lime-500 flex justify-center mx-auto mb-[30px] p-[10px] w-[300px] hover:scale-105 transition-transform duration-300 ease-in-out">
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
        <div className="imgenc2 flex justify-center mx-auto mb-[30px] p-[10px] w-[300px] hover:scale-105 transition-transform duration-300 ease-in-out">
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
      <div className="bg-lime-500 text-center encontro1 p-[50px]" id='enc6'>
        <p className="relative z-1 text-white text-[20px]">Encontro 6</p>
        <p className="titleenc1 text-[#10435e] text-[40px]">Gestão do tempo</p>
        <p className="textenc1 text-white mb-[40px] mt-[40px] w-[70%] mx-auto">
          No sexto encontro, aprendi sobre a gestão do tempo e como ela é essencial
          para melhorar a produtividade, seja no trabalho ou nos estudos. Aprendi também
          sobre o uso de calendários e aplicativos como ferramentas para melhor organização da rotina.
          Conheci os princípios básicos de gestão do tempo e a Técnica Pomodoro,
          que ajuda a manter o foco e aumentar a produtividade em blocos de tempo.
          Também vimos técnicas para combater a procrastinação, além de dicas para
          planejar melhor os estudos e gerenciar o tempo de forma eficiente.
        </p>
        <div className="imgenc2 flex justify-center mx-auto mb-[30px] p-[10px] w-[300px] hover:scale-105 transition-transform duration-300 ease-in-out">
          <Image src={relogio} alt="imagem" />
        </div>
        <p className="textenc1 text-white w-[70%] mx-auto">
          O que mais me interessou foi a Técnica Pomodoro, que funciona dividindo o
          tempo em blocos de 25 minutos de trabalho intenso, seguidos de uma pausa
          curta de 5 minutos. Após quatro ciclos, faz-se uma pausa mais longa,
          geralmente de 15 a 30 minutos. Essa técnica ajuda a manter o foco e
          evita a sensação de cansaço ao quebrar o trabalho em partes gerenciáveis.
          Também concordo com o uso de aplicativos para a organização do tempo,
          pois já utilizo algumas ferramentas que me ajudam a planejar tarefas e
          manter a produtividade em dia. Além disso, a técnica contra a
          procrastinação foi importante para mim, pois auxilia a evitar
          distrações e focar no que realmente importa.
        </p>
      </div>
      <div className="text-center encontro1 p-[50px]" id='enc7'>
        <p className="relative z-1 text-white text-[20px]">Encontro 7</p>
        <p className="titleenc1 text-lime-500 text-[40px]">Saúde do Trabalhador</p>
        <p className="textenc1 text-white mb-[40px] mt-[40px] w-[70%] mx-auto">
          No sétimo encontro, aprendi sobre a importância da saúde e segurança do
          trabalhador. Consegui enchergar como a saúde está diretamente relacionada ao
          ambiente de trabalho e como fatores como ergonomia desempenham um papel
          importante para evitar lesões e desconfortos. Também vi sobre como
          manter a saúde em dia, aprendendo alguns hábitos de higiene e incluindo
          o impacto negativo que a privação de sono tem sobre o cérebro,
          comportamento e emoções. Aprendi sobre a quantidade ideal de sono que
          devemos ter e a importância de fazer pausas durante o trabalho para
          descansar a mente e o corpo. Em geral, recebi dicas práticas para cuidar
          melhor da saúde no ambiente de trabalho.
        </p>
        <div className="imgenc2 flex justify-center mx-auto mb-[30px] p-[10px] w-[300px] hover:scale-105 transition-transform duration-300 ease-in-out">
          <Image src={saude} alt="imagem" />
        </div>
        <p className="textenc1 mb-[50px] text-white w-[70%] mx-auto">
          Uma coisa que realmente me chamou atenção foi a relação entre saúde e trabalho,
          principalmente a ergonomia, que ajuda a evitar problemas físicos ao garantir
          um ambiente de trabalho mais confortável. Outro ponto importante foi entender
          os efeitos da falta de sono, tanto no cérebro quanto no comportamento e emoções,
          mostrando o quanto é essencial dormir o tempo certo para ter energia e equilíbrio.
          Também achei muito interessante a importância de fazer pausas durante o trabalho,
          já que isso ajuda a manter a produtividade e a saúde mental em dia.
          As dicas para cuidar da saúde no trabalho, como manter uma boa postura e fazer
          alongamentos, foram ótimas para evitar problemas no futuro (ainda mais para mim que
          sou programador e passo horas sentado em frente ao computador).
        </p>
      </div>
      <div className="bg-lime-500 text-center encontro1 p-[50px]" id='enc8'>
        <p className="relative z-1 text-white text-[20px]">Encontro 8</p>
        <p className="titleenc1 text-[#10435e] text-[40px]">Noções básicas do uso do computador</p>
        <p className="textenc1 text-white mb-[40px] mt-[40px] w-[70%] mx-auto">
          No oitavo encontro, pude ver sobre conceitos básicos do uso do computador e a
          importância da tecnologia (a palavra "tecnologia" se refere ao conjunto
          de conhecimentos e ferramentas que facilitam nossa vida e o trabalho).
          Falamos sobre o uso de desktops (que são computadores de mesa), e como eles
          são fundamentais para diversas atividades. Também exploramos informática
          básica para estudos online, entendendo o uso do Windows 10, navegadores,
          internet, armazenamento na nuvem e práticas para aproveitar melhor
          o estudo online. Aprendi também sobre a relação entre as novas tecnologias
          e o mercado de trabalho, e como é essencial ter conhecimentos tecnológicos,
          especialmente com a chegada da Indústria 4.0, que está transformando a
          forma como trabalhamos. Além disso, vi como diversas áreas da tecnologia
          serão fundamentais no mercado de trabalho do futuro.
        </p>
        <div className="imgenc2 flex justify-center mx-auto mb-[30px] p-[10px] w-[300px] hover:scale-105 transition-transform duration-300 ease-in-out">
          <Image src={desenhopc} alt="imagem" />
        </div>
        <p className="textenc1 text-white w-[70%] mx-auto">
          O que mais me chamou a atenção foi a importância que deram à tecnologia
          para o futuro do mercado de trabalho. Isso me fez pensar em como as
          inovações vão impactar na minha área, (programação em geral e especificadamente
          Automação Operacional), que já tem e vai ter um papel fundamental no mercado.
          Gostei de aprender mais sobre o conceito de Indústria 4.0, que integra
          novas tecnologias, e as competências necessárias para se destacar nessa
          nova realidade. Também achei muito útil as noções básicas de informática
          para estudos online, como o uso do Windows 10, navegadores e o trabalho
          na nuvem, além das boas práticas que ajudam a ser mais eficiente.
        </p>
        <div className="imgenc2 flex justify-center mx-auto mb-[30px] mt-[30px] p-[10px] w-[300px] hover:scale-105 transition-transform duration-300 ease-in-out">
          <Image src={tecdesenho} alt="imagem" />
        </div>
      </div>
      <div className="text-center encontro1 p-[50px]" id='enc9'>
        <p className="relative z-1 text-white text-[20px]">Encontro 9</p>
        <p className="titleenc1 text-lime-500 text-[40px]">Internet e segurança digital</p>
        <p className="textenc1 text-white mb-[40px] mt-[40px] w-[70%] mx-auto">
          No nono encontro, aprendi mais sobre internet e segurança digital, destacando como
          proteger nossos dados enquanto usamos a rede. Vi também sobre a Lei Geral de
          Proteção de Dados (LGPD), que é uma legislação brasileira criada para garantir
          que empresas e organizações tratem nossas informações de maneira segura e responsável.
          Discutimos também a importância de tomar cuidado ao usar redes sociais, pois
          compartilhar dados pessoais de forma descuidada pode comprometer a privacidade e nossa segurança.
          Além disso, aprendi sobre os riscos de vazamento de dados e como evitar outras
          situações que possam expor nossas informações.
        </p>
        <div className="imgenc2 flex justify-center mx-auto mb-[30px] p-[10px] w-[300px] hover:scale-105 transition-transform duration-300 ease-in-out">
          <Image src={seguranca} alt="imagem" />
        </div>
        <p className="textenc1 mb-[50px] text-white w-[70%] mx-auto">
          O que mais me chamou atenção foi a LGPD, que busca proteger nossos dados e
          garantir que as empresas os usem de maneira adequada. Achei importante entender
          melhor os cuidados que devemos ter ao usar redes sociais e como manter a privacidade
          online, além de aprender sobre os riscos de vazamento de dados. Proteger informações
          pessoais, tanto em redes sociais quanto em qualquer outro espaço online, é fundamental
          para evitar problemas e garantir nossa segurança digital.
        </p>
        <p className="relative z-1 mb-[35px] text-lime-500 text-[20px]">
          Aqui estão algumas dicas de segurança digital:
        </p>
        <p className="textenc1 mb-[60px] text-white text-left w-[60%] mx-auto">
          <span className="text-lime-500">1- </span>
          Use senhas fortes: Crie senhas únicas com letras, números e símbolos. <br />
          <span className="text-lime-500">2- </span>
          Ative a autenticação de dois fatores: Adicione uma camada extra de segurança ao login. <br />
          <span className="text-lime-500">3- </span>
          Cuidado com e-mails suspeitos: Não clique em links ou baixe anexos de fontes desconhecidas. <br />
          <span className="text-lime-500">4- </span>
          Mantenha seus dispositivos atualizados: Atualize regularmente sistemas e aplicativos. <br />
          <span className="text-lime-500">5- </span>
          Use redes Wi-Fi seguras: Evite acessar informações sensíveis em redes públicas. <br />
        </p>
      </div>
      <div className="bg-lime-500 text-center encontro1 p-[50px]" id='enc10'>
        <p className="relative z-1 text-white text-[20px]">Encontro 10</p>
        <p className="titleenc1 text-[#10435e] text-[40px]">Pacote office</p>
        <p className="textenc1 text-white mb-[40px] mt-[40px] w-[70%] mx-auto">
          No décimo e último encontro, aprendi sobre o Pacote Office, um conjunto de
          ferramentas de produtividade criado pela Microsoft para facilitar
          diversas tarefas no dia a dia. Pude aprender sobre o Word que serve para criar e editar
          documentos de texto, o Excel que é utilizado para realizar cálculos e
          organizar dados em planilhas, enquanto o PowerPoint que é ideal para
          criar apresentações visuais. Além disso, conheci outras funcionalidades
          do Pacote Office, como o Access, Outlook, e OneNote.
          Também pude ver que o Pacote Office oferece uma interface amigável e
          várias ferramentas úteis que ajudam a otimizar o trabalho, seja em casa,
          na escola ou no ambiente corporativo.
        </p>
        <div className="imgenc2 flex justify-center mx-auto mb-[30px] p-[10px] w-[300px] hover:scale-105 transition-transform duration-300 ease-in-out">
          <Image src={office} alt="imagem" />
        </div>
        <p className="textenc1 text-white w-[70%] mx-auto">
          O que mais me chamou a atenção foi a versatilidade do Pacote Office e
          como cada ferramenta atende diferentes necessidades, como criar documentos
          no Word e fazer análises de dados no Excel. Também achei bem útil aprender
          sobre outras funções, como o Access e o Outlook, que são super importantes
          para quem trabalha em empresas. As dicas para usar o Pacote Office de forma
          mais eficiente, como os atalhos e as opções de formatação, foram bem práticas
          e me ajudaram a entender melhor como aproveitar essas ferramentas no dia a dia.
        </p>
      </div>
      <div className="text-center encontro1 p-[50px] mb-[-100px]" id='conclusao'>
        <p className="titleenc1 text-white text-[40px]">Conclusão:</p>
        <p className="textenc1 bg-[#00AE9D] rounded-md p-[20px] text-white mb-[40px] mt-[40px] w-[70%] mx-auto">
          Esse curso foi uma experiência super legal e cheia de aprendizado. Aprendi muita
          coisa importante, tanto para a vida pessoal quanto para o trabalho, como os direitos
          dos trabalhadores, saúde no trabalho, e até ferramentas práticas, como o Pacote
          Office e como organizar melhor o tempo. Cada encontro trouxe algo diferente,
          desde a importância de ter um bom relacionamento com os colegas até a necessidade
          de cuidar da nossa saúde física e mental no dia a dia.
        </p>
        <p className="textenc1 bg-[#00AE9D] rounded-md p-[20px] text-white mb-[40px] mt-[40px] w-[70%] mx-auto">
          Também achei muito interessante entender mais sobre ética, segurança digital, e como
          a tecnologia vai influenciar o futuro do mercado de trabalho. Isso me ajudou a
          perceber o que vão esperar de mim como profissional e como posso me preparar melhor
          para os desafios. Com tudo que revi e aprendi, sinto que estou mais pronto para entrar
          no ambiente de trabalho, com mais conhecimento e ferramentas pra lidar com o que vem
          por aí.
        </p>
        <p className="textenc1 bg-[#00AE9D] rounded-md p-[20px] text-white mb-[40px] mt-[40px] w-[70%] mx-auto">
          Foi legal também ver que algumas coisas que já uso, podem
          ser melhoradas e me ajudar ainda mais na produtividade. No geral, o curso foi bem
          completo e me fez pensar muito sobre minhas responsabilidades e o que posso fazer
          no mercado de trabalho.
        </p>
      </div>



      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#00AE9D" fill-opacity="1" d="M0,256L120,250.7C240,245,480,235,720,234.7C960,235,1200,245,1320,250.7L1440,256L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>
      <div id="avalie" className="avaliacao flex items-center bg-[#00AE9D] h-[440px]">
        <AvaliationForm />
      </div>
      <div className="flex items-center justify-center text-white h-[60px] bg-lime-500 text-center">
        <p>© {new Date().getFullYear()} Vitor de Oliveira da Graça</p>
      </div>
    </div>
  );
}

export default Home;
