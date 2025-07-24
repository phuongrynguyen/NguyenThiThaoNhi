document.addEventListener("keydown", function (e) {
    
    if (e.key === "F12" || e.keyCode === 123) {
      e.preventDefault();
      return false;
    }

    
    if (e.ctrlKey && e.shiftKey && e.key === "I") {
      e.preventDefault();
      return false;
    }

    
    if (e.ctrlKey && e.shiftKey && e.key === "J") {
      e.preventDefault();
      return false;
    }

    
    if (e.ctrlKey && e.key === "u") {
      e.preventDefault();
      return false;
    }
  });

  
  document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
    return false;
  });
  
setInterval(function () {
    const threshold = 160;
    if (
      window.outerWidth - window.innerWidth > threshold ||
      window.outerHeight - window.innerHeight > threshold
    ) {
      alert("DevTools đang được mở! Truy cập bị chặn.");
      window.location.href = "about:blank"; 
    }
  }, 1000);
  
  
  document.addEventListener("click", () => {
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    }
  });