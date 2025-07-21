const storySteps = [
    {
        titulo: "Capítulo 1: O Despertar",
        texto: "Você descobre que pode controlar suas finanças. A jornada começa com educação financeira e um novo olhar sobre seu dinheiro."
    },
    {
        titulo: "Capítulo 2: O Mapa",
        texto: "Você cria seu orçamento pessoal, identifica gastos fixos e variáveis. Surge o plano que guiará suas decisões."
    },
    {
        titulo: "Capítulo 3: Os Obstáculos",
        texto: "Cartões, dívidas, imprevistos. Você aprende sobre reserva de emergência e renegocia condições com sabedoria."
    },
    {
        titulo: "Capítulo 4: Evolução",
        texto: "Começa a investir, define metas como 'viajar com a família' e vê cada escolha te aproximar do sonho."
    },
    {
        titulo: "Capítulo 5: O Legado",
        texto: "Você ajuda sua família, ensina seus filhos e encontra liberdade financeira. Sua história transforma outras vidas."
    }
];

function startStory() {
    const container = document.getElementById("storyContainer");
    container.innerHTML = "";

    storySteps.forEach((etapa, index) => {
        const card = document.createElement("div");
        card.className = "col-md-6";

        card.innerHTML = `
      <div class="card-story shadow-sm">
        <h4>${etapa.titulo}</h4>
        <p>${etapa.texto}</p>
      </div>
    `;
        container.appendChild(card);
    });
}