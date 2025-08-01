document.addEventListener("DOMContentLoaded", function() {
    // Criação da estrutura básica do jogo
    const body = document.body;

    // Título do jogo
    const title = document.createElement('h1');
    title.textContent = "Jogo de Moda Parisiense";
    title.style.textAlign = "center";
    title.style.color = "#4b3f72";
    title.style.fontSize = "36px";
    body.appendChild(title);

    // Container do jogo
    const gameContainer = document.createElement('div');
    gameContainer.style.display = "flex";
    gameContainer.style.flexDirection = "column";
    gameContainer.style.alignItems = "center";
    body.appendChild(gameContainer);

    // Container para a modelo
    const modelContainer = document.createElement('div');
    modelContainer.style.position = "relative";
    modelContainer.style.marginTop = "30px";
    gameContainer.appendChild(modelContainer);

    // Modelo (vazia no início)
    const model = document.createElement('div');
    model.style.width = "200px";
    model.style.height = "400px";
    model.style.backgroundColor = "#f9f9f9";
    model.style.borderRadius = "20px";
    model.style.border = "1px solid #ddd";
    model.style.position = "absolute";
    model.style.top = "0";
    model.style.left = "0";
    modelContainer.appendChild(model);

    // Função para criar as opções
    function createOption(label, imageUrl, callback) {
        const option = document.createElement('div');
        option.style.backgroundColor = "#e8d9f3";
        option.style.borderRadius = "10px";
        option.style.padding = "10px";
        option.style.cursor = "pointer";
        option.style.transition = "transform 0.2s ease";
        option.style.textAlign = "center";
        option.style.maxWidth = "150px";
        option.style.margin = "10px";

        option.addEventListener("mouseover", function() {
            option.style.transform = "scale(1.05)";
        });
        
        option.addEventListener("mouseout", function() {
            option.style.transform = "scale(1)";
        });

        const img = document.createElement('img');
        img.src = imageUrl;
        img.style.width = "100%";
        img.style.borderRadius = "10px";
        option.appendChild(img);

        const optionLabel = document.createElement('h3');
        optionLabel.textContent = label;
        optionLabel.style.fontSize = "14px";
        optionLabel.style.color = "#4b3f72";
        optionLabel.style.marginTop = "10px";
        option.appendChild(optionLabel);

        option.addEventListener('click', callback);

        return option;
    }

    // Container para as opções
    const optionsContainer = document.createElement('div');
    optionsContainer.style.display = "grid";
    optionsContainer.style.gridTemplateColumns = "repeat(4, 1fr)";
    optionsContainer.style.gap = "10px";
    optionsContainer.style.width = "80%";
    gameContainer.appendChild(optionsContainer);

    // Funções para alterar as opções da modelo
    function changeOutfit(outfit) {
        model.innerHTML = `<img src="${outfit}" alt="Outfit">`;
    }

    function changeShoes(shoes) {
        model.innerHTML += `<img src="${shoes}" alt="Shoes" style="width: 50px; height: auto;">`;
    }

    function changeHair(hair) {
        model.innerHTML = `<img src="${hair}" alt="Hair">`;
    }

    function changeEyes(eyes) {
        model.innerHTML = `<img src="${eyes}" alt="Eyes">`;
    }

    // Adicionando opções ao jogo
    const outfit1 = createOption("Roupa Delicada", "https://via.placeholder.com/150/FFD1DC/FFFFFF?text=Roupa+1", function() { changeOutfit("https://via.placeholder.com/200x400/FFD1DC/FFFFFF?text=Roupa+1"); });
    const outfit2 = createOption("Roupa Elegante", "https://via.placeholder.com/150/FFD1DC/FFFFFF?text=Roupa+2", function() { changeOutfit("https://via.placeholder.com/200x400/FFD1DC/FFFFFF?text=Roupa+2"); });
    const shoes1 = createOption("Sapato Rosa", "https://via.placeholder.com/150/FFB3B3/FFFFFF?text=Sapato+1", function() { changeShoes("https://via.placeholder.com/50/FFB3B3/FFFFFF?text=Sapato+1"); });
    const shoes2 = createOption("Sapato Beje", "https://via.placeholder.com/150/FFB3B3/FFFFFF?text=Sapato+2", function() { changeShoes("https://via.placeholder.com/50/FFB3B3/FFFFFF?text=Sapato+2"); });
    const hair1 = createOption("Cabelo Liso", "https://via.placeholder.com/150/FFFFFF/000000?text=Cabelo+Liso", function() { changeHair("https://via.placeholder.com/200x400/FFFFFF/000000?text=Cabelo+Liso"); });
    const hair2 = createOption("Cabelo Cacheado", "https://via.placeholder.com/150/FFFFFF/000000?text=Cabelo+Cacheado", function() { changeHair("https://via.placeholder.com/200x400/FFFFFF/000000?text=Cabelo+Cacheado"); });
    const hair3 = createOption("Cabelo Crespo", "https://via.placeholder.com/150/FFFFFF/000000?text=Cabelo+Crespo", function() { changeHair("https://via.placeholder.com/200x400/FFFFFF/000000?text=Cabelo+Crespo"); });
    const eyes1 = createOption("Olhos Verdes", "https://via.placeholder.com/150/FFFFFF/000000?text=Olhos+Verde", function() { changeEyes("https://via.placeholder.com/200x400/FFFFFF/000000?text=Olhos+Verde"); });
    const eyes2 = createOption("Olhos Azuis", "https://via.placeholder.com/150/FFFFFF/000000?text=Olhos+Azul", function() { changeEyes("https://via.placeholder.com/200x400/FFFFFF/000000?text=Olhos+Azul"); });
    const eyes3 = createOption("Olhos Castanhos", "https://via.placeholder.com/150/FFFFFF/000000?text=Olhos+Castanho", function() { changeEyes("https://via.placeholder.com/200x400/FFFFFF/000000?text=Olhos+Castanho"); });

    // Adicionando as opções no container
    optionsContainer.appendChild(outfit1);
    optionsContainer.appendChild(outfit2);
    optionsContainer.appendChild(shoes1);
    optionsContainer.appendChild(shoes2);
    optionsContainer.appendChild(hair1);
    optionsContainer.appendChild(hair2);
    optionsContainer.appendChild(hair3);
    optionsContainer.appendChild(eyes1);
    optionsContainer.appendChild(eyes2);
    optionsContainer.appendChild(eyes3);
});
