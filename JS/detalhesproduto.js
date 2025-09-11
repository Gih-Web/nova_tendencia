// Espera o DOM carregar
document.addEventListener("DOMContentLoaded", function () {
  // ---------------- Header toggle ----------------
  const menuToggle = document.getElementById("menu-toggle");
  const icons = document.getElementById("icons");
  menuToggle.addEventListener("click", () => {
    icons.style.display = icons.style.display === "flex" ? "none" : "flex";
  });

  // ---------------- Miniaturas ----------------
  const mainImage = document.getElementById("main-image");
  const thumbs = document.querySelectorAll(".thumb");
  thumbs.forEach((thumb) => {
    thumb.addEventListener("click", () => {
      mainImage.src = thumb.src;
      thumbs.forEach((t) => t.classList.remove("selected"));
      thumb.classList.add("selected");
    });
  });

  // ---------------- Cores ----------------
  const colorOptions = document.querySelectorAll(".product-colors span");
  colorOptions.forEach((color) => {
    color.addEventListener("click", () => {
      mainImage.src = color.getAttribute("data-img");
      colorOptions.forEach((c) => c.classList.remove("selected"));
      color.classList.add("selected");
    });
  });

  // ---------------- Tamanhos ----------------
  const sizeButtons = document.querySelectorAll(".product-sizes .btn");
  sizeButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (!btn.disabled) {
        sizeButtons.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
      }
    });
  });

  // ---------------- Adicionar à sacola ----------------
  let cartCount = 0;
  const cartIcon = document.getElementById("cart-icon");
  const cartCountSpan = document.getElementById("cart-count");
  const addToCartBtn = document.querySelector(".btn-sacola");

  addToCartBtn.addEventListener("click", () => {
  // --- Dados do produto ---
  const nome = document.querySelector("h4").innerText;
  const preco = 89.90; // pode puxar dinamicamente
  const img = document.getElementById("main-image").src;
  const cor = corSelecionada || "Não selecionada";

  // --- Pega carrinho atual do localStorage ---
  let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

  // --- Verifica se produto já existe (mesmo nome + cor) ---
  const existente = carrinho.find(item => item.nome === nome && item.cor === cor);
  if (existente) {
    existente.quantidade++;
  } else {
    carrinho.push({ nome, preco, img, cor, quantidade: 1 });
  }

  // --- Salva no localStorage ---
  localStorage.setItem("carrinho", JSON.stringify(carrinho));

  // --- Atualiza contador da sacola (somando quantidades) ---
  const cartCountSpan = document.getElementById("cart-count");
  const totalItens = carrinho.reduce((soma, item) => soma + item.quantidade, 0);
  cartCountSpan.style.display = "inline";
  cartCountSpan.innerText = totalItens;

  // --- Cria imagem voadora (animação) ---
  const flyingImg = mainImage.cloneNode(true);
  flyingImg.classList.add("flying-img");
  document.body.appendChild(flyingImg);

  // Posiciona na posição do botão
  const btnRect = addToCartBtn.getBoundingClientRect();
  flyingImg.style.left = `${btnRect.left + btnRect.width / 2 - 25}px`;
  flyingImg.style.top = `${btnRect.top + btnRect.height / 2 - 25}px`;

  // Calcula destino (ícone da sacola)
  const cartRect = cartIcon.getBoundingClientRect();
  const translateX = cartRect.left + cartRect.width / 2 - (btnRect.left + btnRect.width / 2);
  const translateY = cartRect.top + cartRect.height / 2 - (btnRect.top + btnRect.height / 2);

  // Executa animação
  requestAnimationFrame(() => {
    flyingImg.style.transform = `translate(${translateX}px, ${translateY}px) scale(0.2)`;
    flyingImg.style.opacity = "0";
  });

  // Remove imagem depois da animação
  flyingImg.addEventListener("transitionend", () => {
    flyingImg.remove();
  });

  alert("Produto adicionado à sacola!");
});


  // --- Seleção da cor ---
const cores = document.querySelectorAll(".product-colors span");
let corSelecionada = null;

cores.forEach(cor => {
  cor.addEventListener("click", () => {
    // remove seleção anterior
    cores.forEach(c => c.classList.remove("selected"));
    cor.classList.add("selected");
    corSelecionada = cor.getAttribute("data-img");

    // troca a imagem principal
    document.getElementById("main-image").src = cor.getAttribute("data-img");
  });
});









});
