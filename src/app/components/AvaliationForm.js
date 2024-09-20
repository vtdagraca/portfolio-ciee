import React, { useState } from "react";
import emailjs from 'emailjs-com';
import '../globals.css';

const AvaliationForm = () => {
  const [rating, setRating] = useState(0);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleRating = (value) => {
    setRating(value);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!name || rating === 0) {
      alert("Por favor, preencha todos os campos e escolha uma avaliação.");
      return;
    }

    const templateParams = {
      name: name,
      rating: rating,
      message: message,
    };

    emailjs.send(
      'service_97kbn6h',  // Substitua pelo seu Service ID
      'template_68sbc17', // Substitua pelo seu Template ID
      templateParams,
      'J9FQ7z-7dFwoSYByY'      // Substitua pelo seu User ID
    )
      .then((response) => {
        console.log('Email enviado com sucesso!', response.status, response.text);
        setSubmitted(true);
      }, (err) => {
        console.log('Erro ao enviar o email:', err);
      });
  };

  return (
    <div className="todaavaliacao flex justify-around items-center mt-[-100px] w-[100%]">
      <div>
        <p className="avaliacaotext1 text-left text-[40px] mb-[-10px] text-[#134d6d] font-[600]">Avalie o meu</p>
        <p className="avaliacaotext2 text-white text-left font-[800] mb-[20px] text-[80px]">Portfólio!</p>
      </div>
      <div className="fundoavaliacao text-center p-[30px]">
        <form className="flex flex-col font-[500] text-white" onSubmit={sendEmail}>
          <div className="flex flex-col">
            <input
              className="bg-black h-[30px] p-[5px] pt-[0px] focus:outline-none bg-opacity-0 border-b-[1px] placeholder:text-[12px] border-lime-500"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="Digite seu nome*"
            />
          </div>

          <div className="rating flex flex-col">
            <div className="estrelas text-[50px] mt-[10px] mb-[25px] tracking-[5px]">
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  onClick={() => handleRating(star)}
                  style={{ cursor: "pointer", color: star <= rating ? "#84cc16" : "gray" }}>
                  ★
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col">
            <textarea
              className="tamanhoavaliacao resize-none bg-black h-[70px] p-[5px] w-[400px] focus:outline-none bg-opacity-0 border-[1px] placeholder:text-[12px] border-lime-500"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Deixe uma mensagem (opcional)"
            />
          </div>

          <button type="submit" className="footer rounded-[5px] mt-[30px] h-[35px] w-[200px] mx-auto bg-lime-500 hover:bg-opacity-0 border-[1px] border-lime-500 bg duration-300" disabled={submitted}>
            {submitted ? "Enviado!" : "Enviar Avaliação"}
          </button>
        </form>
        <p className="text-[10px] mt-[10px] font-[400] text-white">(Recebo automaticamente no meu email.)</p>
      </div>
    </div>
  );
};

export default AvaliationForm;
