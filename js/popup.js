document.addEventListener("DOMContentLoaded", () => {
  const qrImg = document.querySelector("#qr img");

  // Criar modal, mas escondido inicialmente
  const modal = document.createElement("div");
  modal.classList.add("modal"); // já com display: none via CSS
  modal.innerHTML = `
    <div class="modal-content">
      <button class="close-btn">X</button>
      <img src="${qrImg.src}" alt="Código QR ampliado" />
      <p><strong>FÁBIO SANTIAGO DA PAIXÃO</strong></p>
    </div>
  `;
  document.body.appendChild(modal);

  const closeBtn = modal.querySelector(".close-btn");

  // Abrir modal somente ao clicar na imagem
  qrImg.addEventListener("click", () => {
    modal.style.display = "flex";
  });

  // Fechar modal ao clicar no botão
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Evitar fechar clicando fora da imagem
  modal.addEventListener("click", (e) => {
    e.stopPropagation();
  });
});
