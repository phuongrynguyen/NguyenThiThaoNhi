const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const cod = document.querySelector(".codig");

const ur = "#";
const gb = document.querySelector(".gb");

window.onload = function (){
  if(ur === "#"){
    cod.style.display = "none";
    gb.textContent = "Hiện tại chưa có mã nguồn miễn phí!";
  }
}

const coding = {
  Coding: [
    {
     h2: "[HOT]&nbsp; Game Minh chủ võ lâm",
     h3: `Thể loại:&nbsp;<b>Source Game</b>`,
     p: "Game này rất hay và đang mở game thương mại giờ share cho anh em để học tập trong lập trình.",
     p1: "Tuyên bố, đây là source code đặc quyền của admin, những thứ admin đăng trên đây là code của admin và không phải của ai hoặc của 1 bên nào hết!",
     xac_minh: `<span id="trangthai">trạng thái:&nbsp;<b style="color: crimson;">Còn</b></span>
          <span id="codeFr">- code:&nbsp;<b style="color: springgreen;">Free</b></span>
          <span id="nguoidang">- người đăng:&nbsp;<b style="color: crimson;">Admin</b></span>`,
          igcode0: "share.png",
          igcode1: "share.png",
          igcode2: "share.png",
          igcode3: "share.png",
          url: "https://",
    },
  ],
  
  remod: function(){
    const htmls = this.Coding.map(html => {
      return `
      <div id="tab">
        <div class="avt">
          <div>
            <img src="avatar.png">
          </div>
          <div class="names">
            <h3>Nguyễn Thị Thảo Nhi</h3>
            <span>hôm nay lúc 6:30 pm</span>
          </div>
        </div>
        
        <div class="content-container">
          <div id="text" class="text-content">
            <h2 style="margin-top: 2rem;">${html.h2}</h2>
            <h3 style="margin-top: 1rem;">${html.h3}</h3>
            <p style="margin-top: 1rem;">${html.p}</p>
            <div style="margin-top: 2rem; margin-bottom: 1rem;">
            <p style="color: crimson;">${html.p1}</p>
            </div>
          </div>
        </div>
        
        <!-- Free hoặc mất phí -->
        <div style="text-align: center;">
          <!-- xác minh -->
          ${html.xac_minh}
        </div>
        
        <div class="igm">
          <img src="${html.igcode0}">
          <img src="${html.igcode1}">
          <img src="${html.igcode2}">
          <img src="${html.igcode3}">
        </div>
        
        <div class="iconBtn">
          <div class="iconlike" id="btnLike" onclick="like()">
            <i class="fa-regular fa-thumbs-up"></i>&nbsp; thích
          </div>
          <div class="iconment" id="btnMent" onclick="location.href='${html.url}'">
            <i class="fa-solid fa-download"></i>&nbsp; Tải xuống
          </div>
          <div class="iconshar">
            <i class="fa-solid fa-web-awesome"></i>&nbsp; Đã Xác minh 
          </div>
        </div>
      </div>
    </div>
      `;
    });
    $(".codig").innerHTML = htmls.join('');
  },
  
  start: function(){
    this.remod();
    this.true();
  },
}

coding.start();