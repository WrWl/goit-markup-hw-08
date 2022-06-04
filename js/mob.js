(() => {
  const refs = {
    openMobBtn: document.querySelector(".mob-open-btn"),
    closeMobBtn: document.querySelector(".mob-close-btn"),
    mob: document.querySelector(".mob"),
    body: document.querySelector("body")
  };

  refs.openMobBtn.addEventListener("click", toggleMob);
  refs.closeMobBtn.addEventListener("click", toggleMob);

  function toggleMob() {
    refs.mob.classList.toggle("is-hidden");
    refs.body.classList.toggle("no-scroll")
  }
})();