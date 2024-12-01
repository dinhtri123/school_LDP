document.addEventListener('DOMContentLoaded', function() {
  const activeImg = document.getElementById("active-img");
  const activeTitle = document.getElementById("active-title");
  const activeDesc = document.getElementById("active-desc");
  const vrItems = document.querySelectorAll(".vr-item");
  const vrImg = document.querySelector(".vr-img");
  const media = window.matchMedia("(max-width: 830px");
  if (media.matches) {
    vrImg.appendChild(activeDesc);
  }
    vrItems.forEach((item) => {
      item.addEventListener("click", () => {
        const newImgSrc = item.querySelector("img").src;
        const newDesc = item.querySelector("p").innerText;
        const oldImgSrc = activeImg.src;
        const oldDesc = activeDesc.innerText;

        activeImg.src = newImgSrc;
        activeDesc.innerText = newDesc;

        item.querySelector("img").src = oldImgSrc;
        item.querySelector("p").innerText = oldDesc;

        rotateItems(item.getAttribute("data-index"));
      });
    });

  function rotateItems(activeIndex) {
    const itemsArray = Array.from(vrItems);

    itemsArray.forEach((item) => {
      if (item.getAttribute("data-index") === activeIndex) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });

    itemsArray.forEach((item) => {
      let currentIndex = parseInt(item.getAttribute("data-index"));
      let newIndex;

      if (currentIndex === parseInt(activeIndex)) {
        newIndex = 1;
      } else if (currentIndex < parseInt(activeIndex)) {
        newIndex = currentIndex + 1;
      } else {
        newIndex = currentIndex - 1;
      }

      item.setAttribute("data-index", newIndex);
    });
  }
})