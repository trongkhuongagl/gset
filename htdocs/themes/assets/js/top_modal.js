if (document.querySelector('.js-topModal') != null) {
  const openButtons = document.querySelectorAll('.modalOpen');
  const modals = document.querySelectorAll('.modal');
  const closeButtons = document.querySelectorAll('.modalClose');

  openButtons.forEach(button => {
    button.addEventListener('click', function () {
      const modalId = this.getAttribute('data-modal');
      const modal = document.getElementById(modalId);
      if (modal) {
        modal.style.display = 'block';
        document.body.classList.add('modal-open');
      } else {
        console.error(`Modal with ID ${modalId} not found.`);
      }
    });
  });

  closeButtons.forEach(button => {
    button.addEventListener('click', function () {
      const modal = this.closest('.modal');
      if (modal) {
        stopVideo(modal);
        modal.style.display = 'none';
        document.body.classList.remove('modal-open');
      } else {
        console.error('No modal found to close.');
      }
    });
  });

  window.addEventListener('click', function (event) {
    modals.forEach(modal => {
      if (event.target === modal) {
        stopVideo(modal);
        modal.style.display = 'none';
        document.body.classList.remove('modal-open');
      }
    });
  });
  
  function stopVideo(modal) {
//      const iframe = modal.querySelector('.youtube');
//      if (iframe) {
//        iframe.src = iframe.src;
//      }
    
    // MP4ビデオ要素を停止
    const video = modal.querySelector('video');
    if (video) {
      video.pause();  // ビデオを一時停止
      video.currentTime = 0;  // ビデオの再生位置を最初にリセット
      video.load();
    }
  }
}