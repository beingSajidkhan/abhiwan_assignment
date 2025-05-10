
// Search Toggle
document.getElementById("searchToggle").addEventListener("click", () => {
    document.getElementById("searchBox").classList.toggle("active");
  });
  
  // Hamburger Menu
  document.getElementById("menuToggle").addEventListener("click", () => {
    document.getElementById("nav").querySelector('.nav-list').classList.toggle("show");
  });
  
  // Gallery
  const thumbnails = document.querySelectorAll(".thumb");
  const mainImage = document.getElementById("mainImage");
  
  thumbnails.forEach((thumb) => {
    thumb.addEventListener("click", () => {
      mainImage.src = thumb.src;
      thumbnails.forEach((t) => t.classList.remove("active"));
      thumb.classList.add("active");
    });
  });
  
  // Add to Cart URL Update
  const addToCart = document.getElementById("addToCart");
  const flavorRadios = document.querySelectorAll("input[name='flavor']");
  const typeRadios = document.querySelectorAll("input[name='type']");
  
  function updateAddToCartLink() {
    const flavor = document.querySelector("input[name='flavor']:checked").value;
    const type = document.querySelector("input[name='type']:checked").value;
    addToCart.href = `dummy/${flavor}-${type}.html`;
  }
  
  flavorRadios.forEach(radio => radio.addEventListener("change", updateAddToCartLink));
  typeRadios.forEach(radio => radio.addEventListener("change", updateAddToCartLink));
  
  // Counter Animation
  const counters = document.querySelectorAll(".counter");
  let hasCounted = false;
  
  function countUp(counter) {
    const target = +counter.getAttribute("data-target");
    let count = 0;
    const step = Math.ceil(target / 60);
  
    const interval = setInterval(() => {
      count += step;
      if (count >= target) {
        count = target;
        clearInterval(interval);
      }
      counter.innerText = count;
    }, 20);
  }
  
  function handleScroll() {
    const section = document.getElementById("percentageSection");
    const rect = section.getBoundingClientRect();
  
    if (!hasCounted && rect.top < window.innerHeight) {
      counters.forEach(countUp);
      hasCounted = true;
    }
  }
  
  window.addEventListener("scroll", handleScroll);
  
  // FAQ Accordions
  const faqs = document.querySelectorAll(".faq-question");
  faqs.forEach(button => {
    button.addEventListener("click", () => {
      const parent = button.parentElement;
      parent.classList.toggle("open");
    });
  });
    