import { Parallax } from "react-parallax";

import { useState } from "react";
import image1 from "./assets/image-1.jpg";
import image2 from "./assets/image-2.jpg";
import image3 from "./assets/image-3.jpg";
import image4 from "./assets/image-4.jpg";
import image5 from "./assets/image-5.jpg";
import image6 from "./assets/image-6.jpg";
import image7 from "./assets/image-7.jpeg";
import image8 from "./assets/image-8.jpg";
import image9 from "./assets/image-9.jpg";

function App() {
  const [count, setCount] = useState(1);
  const [hidden, setHidden] = useState(true);
  const [buttonInitialPosition, setButtonInitialPosition] = useState({
    x: 0,
    y: 0,
  });

  function handleMouseEnter() {
    // move the button to a random position
    const button = document.querySelector("button");

    if (count === 1) {
      setButtonInitialPosition({
        x: button?.getBoundingClientRect().x || 0,
        y: button?.getBoundingClientRect().y || 0,
      });
    }

    if (count === 3) alert("Continua tentando, você vai conseguir!");

    if (count === 6) alert("Você está quase lá, continue tentando!");

    if (count === 9) {
      if (button) {
        button.style.position = "absolute";
        button.style.top = `${buttonInitialPosition.y + 30}px`;
        button.style.left = `${buttonInitialPosition.x}px`;
        return;
      }
    }

    setCount((previous) => previous + 1);

    if (button) {
      button.style.position = "absolute";
      button.style.top = `${Math.random() * 100}%`;
      button.style.left = `${Math.random() * 100}%`;
    }
  }

  return (
    <>
      <div
        className={
          hidden
            ? "bg-zinc-900 w-screen h-screen flex flex-col items-center justify-center gap-4"
            : "hidden"
        }
      >
        <h1 className="text-2xl text-white font-semibold">
          O que será que há escondido nessa página? 🤔
        </h1>
        <button
          className="bg-red-500 font-sans text-white p-2 rounded-md hover:bg-red-900"
          onMouseEnter={handleMouseEnter}
          onClick={() => {
            setHidden(false);
            alert(
              "Parabéns! Você conseguiu! 🎉 Vai scrollando a página pra baixo pra ver a surpresa ❤️"
            );
          }}
        >
          Clique aqui para começar
        </button>
      </div>
      <div className={hidden ? "hidden" : ""}>
        <div className="px-14 py-4 bg-zinc-900">
          <Parallax bgImage={image1} strength={200}>
            <div style={{ height: 900 }}>
              <div className="bg-white p-5 absolute bottom-12 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-serif font-bold text-2xl text-center rounded-2xl">
                Dayane Priscilla Fiedler Friedel
              </div>
            </div>
          </Parallax>
          <Parallax bgImage={image2} strength={300}>
            <div style={{ height: 900 }}>
              <div className="bg-white p-5 absolute bottom-12 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-serif font-bold text-2xl text-center rounded-2xl">
                Meu amor, minha vida, minha esposa ❤️
              </div>
            </div>
          </Parallax>
          <Parallax bgImage={image5} strength={300}>
            <div style={{ height: 900 }}>
              <div className="bg-white p-5 absolute bottom-12 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-serif font-bold text-2xl text-center rounded-2xl">
                Que topa qualquer parada comigo, e me faz muito feliz a muito
                tempo! 😍
              </div>
            </div>
          </Parallax>
          <Parallax bgImage={image4} strength={300}>
            <div style={{ height: 1000 }}>
              <div className="bg-white p-5 absolute bottom-12 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-serif font-bold text-2xl text-center rounded-2xl">
                Que lutou junto comigo para conseguirmos a nessa casinha 🏡
              </div>
            </div>
          </Parallax>
          <Parallax bgImage={image3} strength={300}>
            <div style={{ height: 1000 }}>
              <div className="bg-white p-5 absolute bottom-12 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-serif font-bold text-2xl text-center rounded-2xl">
                Mãe de Pet desse filhote lindo chamado Waffle🐶
              </div>
            </div>
          </Parallax>
          <Parallax bgImage={image7} strength={300}>
            <div style={{ height: 1000 }}>
              <div className="bg-white p-5 absolute bottom-12 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-serif font-bold text-2xl text-center rounded-2xl">
                Que as vezes prefere o Charles Leclerc do que eu como marido 😂
              </div>
            </div>
          </Parallax>
          <Parallax bgImage={image8} strength={200}>
            <div style={{ height: 800 }}>
              <div className="bg-white p-5 absolute top-24 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-serif font-bold text-2xl text-center rounded-2xl">
                Mas tudo bem, eu entendo. Eu também as vezes prefiro o Lewis
                Hamilton pilotando o Mercedes-AMG F1 W11 EQ Performance na chuva
                😂
              </div>
            </div>
          </Parallax>
          <Parallax bgImage={image9} strength={200}>
            <div style={{ height: 800 }}>
              <div className="bg-white p-5 absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-serif font-bold text-2xl text-center rounded-2xl">
                Pelo menos nos dois não gostamos do Peixonauta, vulgo "Peixoto",
                vulgo Max Verstappen 🐟
              </div>
            </div>
          </Parallax>
          <Parallax bgImage={image6} strength={300}>
            <div style={{ height: 1000 }}>
              <div className="bg-white p-5 absolute bottom-12 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-serif font-bold text-2xl text-center rounded-2xl">
                Desejo pra você um feliz aniversário, tudo de bom hoje e sempre!
                🎉 Que continuemos conquistando nossos sonhos juntos, e que
                possamos ser felizes para sempre! 🥰
              </div>
              <div className="bg-white p-5 absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-serif font-bold text-2xl text-center rounded-2xl">
                Amo muito você ❤️
              </div>
            </div>
          </Parallax>
        </div>
      </div>
    </>
  );
}

export default App;
