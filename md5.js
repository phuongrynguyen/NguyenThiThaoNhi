let devtoolsOpen = false;

  const checkDevTools = function () {
    const threshold = 160;
    if (
      window.outerWidth - window.innerWidth > threshold ||
      window.outerHeight - window.innerHeight > threshold
    ) {
      if (!devtoolsOpen) {
        devtoolsOpen = true;
         document.body.innerHTML = '';
        alert("DevTools bị cấm. Truy cập đã bị vô hiệu.");
      }
    } else {
      devtoolsOpen = false;
    }
  };

  setInterval(checkDevTools, 500);