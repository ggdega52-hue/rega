document.querySelectorAll(".toggle").forEach(btn => {
    btn.addEventListener("click", () => {
      const content = btn.parentElement.nextElementSibling;
      content.classList.toggle("active");

      btn.textContent = content.classList.contains("active") ? "−" : "+";
    });
  });