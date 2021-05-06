function strayAwayFromOthers() {
  document.querySelectorAll('.social-count').forEach(node => node.remove())

  becomeHermit();

  function becomeHermit() {
    document.querySelectorAll('a').forEach(node => {
      if (node.href.indexOf('stargazers') > -1) {
        node.remove();
      }
    });
  }

  function proSocialDistance(count) {
    becomeHermit();
    if (count < 10) {
      setTimeout(() => {
        proSocialDistance(count + 1)
      }, 50)
    }
  }

  document.querySelectorAll('summary[role="button"]').forEach(node => {
    node.addEventListener('mouseover', () => {
      proSocialDistance(0)
    })
  });
}

strayAwayFromOthers();

chrome.runtime.onMessage.addListener(()=>{
  strayAwayFromOthers();
})
