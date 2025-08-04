document.write(`
  <style>
    body {
      margin: 0;
      font-family: 'Georgia', serif;
      background: #ffeef8;
      color: #5e4b56;
      overflow-x: hidden;
      position: relative;
    }

    header {
      background-color: #f8c8dc;
      text-align: center;
      padding: 2rem;
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    }

    header h1 {
      margin: 0;
      font-size: 2.5rem;
      color: #a05278;
    }

    .content {
      max-width: 800px;
      margin: 2rem auto;
      padding: 1.5rem;
      background: #fff8f8;
      border-radius: 20px;
      box-shadow: 0 4px 10px rgba(0,0,0,0.05);
    }

    .poem {
      margin-bottom: 3rem;
    }

    .poem h2 {
      font-size: 1.5rem;
      color: #b35d84;
    }

    .poem p {
      white-space: pre-wrap;
      line-height: 1.6;
    }

    .flower {
      position: absolute;
      width: 80px;
      opacity: 0.4;
      z-index: 0;
    }

    .flower1 {
      top: 20px;
      left: 20px;
    }

    .flower2 {
      bottom: 20px;
      right: 20px;
    }

    .emoji {
      position: absolute;
      font-size: 2rem;
      pointer-events: none;
      animation: floatUp 2s ease-out forwards;
    }

    @keyframes floatUp {
      0% { transform: translateY(0); opacity: 1; }
      100% { transform: translateY(-80px); opacity: 0; }
    }

    footer {
      text-align: center;
      padding: 2rem;
      color: #a86b8d;
      font-size: 1.2rem;
      font-weight: bold;
    }
  </style>

  <header>
    <h1>Jardim de Poesias</h1>
  </header>

  <img src="https://img.icons8.com/emoji/96/hibiscus.png" class="flower flower1" alt="flor hibisco">
  <img src="https://img.icons8.com/emoji/96/cherry-blossom.png" class="flower flower2" alt="flor cerejeira">

  <div class="content">
    <div class="poem">
      <h2>1. Soneto da Fidelidade — Vinicius de Moraes</h2>
      <p>
De tudo, ao meu amor serei atento
Antes, e com tal zelo, e sempre, e tanto
Que mesmo em face do maior encanto
Dele se encante mais meu pensamento.

Quero vivê-lo em cada vão momento
E em seu louvor hei de espalhar meu canto
E rir meu riso e derramar meu pranto
Ao seu pesar ou seu contentamento.

E assim, quando mais tarde me procure
Quem sabe a morte, angústia de quem vive
Quem sabe a solidão, fim de quem ama

Eu possa me dizer do amor (que tive):
Que não seja imortal, posto que é chama
Mas que seja infinito enquanto dure.
      </p>
    </div>

    <div class="poem">
      <h2>2. Motivo — Cecília Meireles</h2>
      <p>
Eu canto porque o instante existe  
e a minha vida está completa.  
Não sou alegre nem sou triste:  
sou poeta.  

Irmão das coisas fugidias,  
não sinto gozo nem tormento.  
Atravesso noites e dias  
no vento.  

Se desmorono ou se edifico,  
se permaneço ou me desfaço,  
— não sei, não sei. Não sei se fico  
ou passo.  

Sei que canto. E a canção é tudo.  
Tem sangue eterno a asa ritmada.  
E um dia sei que estarei mudo:  
— mais nada.
      </p>
    </div>

    <div class="poem">
      <h2>3. O Tempo — Mario Quintana</h2>
      <p>
A vida é uns deveres que nós trouxemos para fazer em casa.  
Quando se vê, já são seis horas!  
Quando se vê, já é sexta-feira!  
Quando se vê, já é Natal...  
Quando se vê, já terminou o ano...  

Quando se vê, perdemos o amor da nossa vida.  
Quando se vê, passaram-se 50 anos!  

Agora é tarde demais para ser reprovado...  
Se me fosse dado, um dia, outra oportunidade,  
eu nem olhava o relógio.  
Seguiria sempre em frente e iria jogando pelo caminho  
a casca dourada e inútil das horas...
      </p>
    </div>

    <div class="poem">
      <h2>4. Ausência — Carlos Drummond de Andrade</h2>
      <p>
Por muito tempo achei que ausência é falta.  
E lastimava, ignorante, a falta.  
Hoje não a lastimo.  
Não há falta na ausência.  
A ausência é um estar em mim.  
E sinto-a, branca,  
tão pegada, aconchegada nos meus braços,  
que rio e danço e invento exclamações alegres,  
porque a ausência,  
essa ausência assimilada,  
ninguém a rouba mais de mim.
      </p>
    </div>

    <div class="poem">
      <h2>5. Bilhete — Mario Quintana</h2>
      <p>
Se tu me amas, ama-me baixinho  
Não o grites de cima dos telhados  
Deixa em paz os passarinhos  
Deixa em paz a mim!  

Se me queres, enfim,  
tem de ser bem devagarinho,  
amada, que a vida é breve,  
e o amor mais breve ainda.
      </p>
    </div>

    <div class="poem">
      <h2>6. Isto ou Aquilo — Cecília Meireles</h2>
      <p>
Ou se tem chuva e não se tem sol,  
ou se tem sol e não se tem chuva!  
Ou se calça a luva e não se põe o anel,  
ou se põe o anel e não se calça a luva!  

Quem sobe nos ares não fica no chão,  
quem fica no chão não sobe nos ares.  
É uma grande pena que não se possa  
estar ao mesmo tempo nos dois lugares!  
      </p>
    </div>

    <div class="poem">
      <h2>7. A Rosa de Hiroshima — Vinicius de Moraes</h2>
      <p>
Pensem nas crianças  
Mudas telepáticas  
Pensem nas meninas  
Cegas inexatas  

Pensem nas mulheres  
Rotas alteradas  
Pensem nas feridas  
Como rosas cálidas  

Mas oh não se esqueçam  
Da rosa, da rosa  
Da rosa de Hiroshima  
A rosa hereditária  

A rosa radioativa  
Estúpida e inválida  
A rosa com cirrose  
A anti-rosa atômica  

Sem cor, sem perfume  
Sem rosa, sem nada.
      </p>
    </div>

    <div class="poem">
      <h2>8. Poeminha do Contra — Mario Quintana</h2>
      <p>
Todos esses que aí estão  
Atravancando meu caminho,  
Eles passarão...  
Eu passarinho!
      </p>
    </div>

    <div class="poem">
      <h2>9. Canção do Exílio — Gonçalves Dias</h2>
      <p>
Minha terra tem palmeiras,  
Onde canta o Sabiá;  
As aves que aqui gorjeiam,  
Não gorjeiam como lá.  

Nosso céu tem mais estrelas,  
Nossas várzeas têm mais flores,  
Nossos bosques têm mais vida,  
Nossa vida mais amores.
      </p>
    </div>

    <div class="poem">
      <h2>10. O Amor — Pablo Neruda</h2>
      <p>
O amor não se vê com os olhos,  
mas com o coração.  
E é por isso que o cupido é representado cego.
      </p>
    </div>

    <div class="poem">
      <h2>11. Amar — Florbela Espanca</h2>
      <p>
Eu quero amar, amar perdidamente!  
Amar só por amar: aqui… além…  
Mais Este e Aquele, o Outro e toda a gente…  
Amar! Amar! E não amar ninguém!  

Recordar? Esquecer? Indiferente!  
Prender ou desprender? É mal? É bem?  
Quem disser que se pode amar alguém  
Durante a vida inteira é porque mente!
      </p>
    </div>
  </div>

  <footer>
    <p>🌸 Gaby Thaila 🌸</p>
  </footer>
`);

document.body.addEventListener("click", function(e) {
  const emoji = document.createElement("div");
  emoji.className = "emoji";
  emoji.style.left = `${e.pageX}px`;
  emoji.style.top = `${e.pageY}px`;
  emoji.textContent = "📚";
  document.body.appendChild(emoji);

  setTimeout(() => {
    emoji.remove();
  }, 2000);
});

