// Criar a estrutura HTML e CSS dinamicamente usando JavaScript
document.addEventListener('DOMContentLoaded', () => {
  // Adicionando o estilo diretamente via JavaScript
  const style = document.createElement('style');
  style.innerHTML = `
    body {
      background-color: #f8e1f4; /* Rosa suave */
      margin: 0;
      padding: 0;
      font-family: 'Arial', sans-serif;
      overflow: hidden;
      position: relative;
      height: 100vh;
    }

    .container {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      position: relative;
      background: radial-gradient(circle, rgba(255, 255, 255, 0.8) 0%, rgba(255, 192, 203, 0.3) 100%);
    }

    .doll {
      position: absolute;
      bottom: 20px;
      width: 150px;
      height: 300px;
      background-color: #deb6a4; /* cor base da boneca */
      border-radius: 15px;
      background-image: url('https://www.abcxyz.com/animacao-cacheada.png'); /* Substituir por uma URL real */
      background-size: cover;
      background-position: center;
      transition: all 0.5s ease;
    }

    .outfits, .accessories, .shoes {
      position: absolute;
      top: 50px;
      display: flex;
      justify-content: center;
      width: 100%;
    }

    .outfits {
      top: 50px;
    }
    .accessories {
      top: 200px;
    }
    .shoes {
      bottom: 100px;
    }

    .item {
      margin: 0 10px;
      padding: 10px;
      border: 2px solid #ffb6c1; /* rosa pastel */
      border-radius: 10px;
      background-color: #fff;
      transition: all 0.3s ease;
      cursor: pointer;
    }

    .item:hover {
      transform: scale(1.1);
      box-shadow: 0 0 20px rgba(255, 182, 193, 0.8);
    }

    .glitter {
      position: absolute;
      width: 100%;
      height: 100%;
      background: url('https://www.abcxyz.com/glitter.png') repeat;
      animation: glitterEffect 1s infinite;
      pointer-events: none;
    }

    @keyframes glitterEffect {
      0% {
        opacity: 0.1;
      }
      50% {
        opacity: 0.4;
      }
      100% {
        opacity: 0.1;
      }
    }
  `;
  document.head.appendChild(style);

  // Função para criar o conteúdo do jogo dinamicamente
  function createGame() {
    // Criando o container principal
    const container = document.createElement('div');
    container.classList.add('container');
    document.body.appendChild(container);

    // Adicionando glitter de fundo
    const glitter = document.createElement('div');
    glitter.classList.add('glitter');
    container.appendChild(glitter);

    // Criando a boneca
    const doll = document.createElement('div');
    doll.classList.add('doll');
    container.appendChild(doll);

    // Funções para mudar a roupa
    function changeOutfit(outfit) {
      if (outfit === 'dress1') {
        doll.style.backgroundImage = "url('https://www.abcxyz.com/dress1.png')"; // Substituir com imagem real
      } else if (outfit === 'dress2') {
        doll.style.backgroundImage = "url('https://www.abcxyz.com/dress2.png')"; // Substituir com imagem real
      } else if (outfit === 'top1') {
        doll.style.backgroundImage = "url('https://www.abcxyz.com/top1.png')"; // Substituir com imagem real
      }
    }

    function changeAccessory(accessory) {
      alert(`${accessory} selecionado`);
    }

    function changeShoes(shoe) {
      alert(`${shoe} selecionado`);
    }

    // Função para criar itens (roupas, acessórios, sapatos)
    function createItem(text, action) {
      const item = document.createElement('div');
      item.classList.add('item');
      item.textContent = text;
      item.onclick = action;
      return item;
    }

    // Criando a seção de roupas
    const outfitsSection = document.createElement('div');
    outfitsSection.classList.add('outfits');
    container.appendChild(outfitsSection);

    outfitsSection.appendChild(createItem('Vestido 1', () => changeOutfit('dress1')));
    outfitsSection.appendChild(createItem('Vestido 2', () => changeOutfit('dress2')));
    outfitsSection.appendChild(createItem('Blusa 1', () => changeOutfit('top1')));

    // Criando a seção de acessórios
    const accessoriesSection = document.createElement('div');
    accessoriesSection.classList.add('accessories');
    container.appendChild(accessoriesSection);

    accessoriesSection.appendChild(createItem('Bolsa 1', () => changeAccessory('Bolsa 1')));
    accessoriesSection.appendChild(createItem('Chapéu 1', () => changeAccessory('Chapéu 1')));
    accessoriesSection.appendChild(createItem('Colar 1', () => changeAccessory('Colar 1')));

    // Criando a seção de sapatos
    const shoesSection = document.createElement('div');
    shoesSection.classList.add('shoes');
    container.appendChild(shoesSection);

    shoesSection.appendChild(createItem('Sapato 1', () => changeShoes('Sapato 1')));
    shoesSection.appendChild(createItem('Sapato 2', () => changeShoes('Sapato 2')));
    shoesSection.appendChild(createItem('Sapato 3', () => changeShoes('Sapato 3')));
  }

  // Inicia o jogo
  createGame();
});
