
//الاظهار اول ما تيجي الصفحة
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1 
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach(element => {
    observer.observe(element); 
});



//اللودر

window.onload = function () {
    const loader = document.querySelector(".loader");
    const content = document.querySelector(".content");

    setTimeout(function () {
      loader.style.display = "none";
      content.style.display = "block";
    }, 3000);
  };




function goToProperties() {
    window.location.href = "Properties.html";
}