/* load bài viết */
window.onload = function () {
const w = [
  {
    avatars: "avatar.png",
    nametab: "Nguyễn Thị Thảo Nhi",
    parts: "hôm nay lúc 6:30 pm",
    texts: "Xin chào các bạn, mình giới thiệu qua về mình, mình là Nguyễn Thị Thảo Nhi làm lập trình viên có 10 năm kinh nghiệm trong nghành công nghệ thông tin này, bạn đang cần 1 người code dự án của bạn website, game, app tool phần mềm thì hãy liên hệ cho mình ngay để triển khai dự án project đó nhé!",
    igm0: "share.png",
    igm1: "share.png",
    igm2: "share.png",
    igm3: "share.png",
  },
  {
    avatars: "avatar.png",
    nametab: "Nguyễn Thị Thảo Nhi",
    parts: "hôm nay lúc 6:30 pm",
    texts: "Xin chào các bạn, mình giới thiệu qua về mình, mình là Nguyễn Thị Thảo Nhi làm lập trình viên có 10 năm kinh nghiệm trong nghành công nghệ thông tin này, bạn đang cần 1 người code dự án của bạn website, game, app tool phần mềm thì hãy liên hệ cho mình ngay để triển khai dự án project đó nhé!",
    igm0: "share.png",
    igm1: "share.png",
    igm2: "share.png",
    igm3: "share.png",
  }
];

function Msg(){
  const data = document.querySelector(".data");
  data.innerHTML = "";
  
  w.forEach((th, index) => {
    
    const dv = document.createElement("div");
    dv.innerHTML = `<div id="tab">
      <div class="avt">
        <div>
          <img src="${th.avatars}">
        </div>
        <div class="names">
          <h3>${th.nametab}</h3>
          <span>${th.parts}</span>
        </div>
      </div>
      
<div class="content-container">
  <div id="text" class="text-content">
    <p>${th.texts}</p>
  </div>
</div>

    
      <div class="igm">
        <img src="${th.igm0}">
        <img src="${th.igm1}">
        <img src="${th.igm2}">
        <img src="${th.igm3}">
        </div>
        <br>
    </div>`;
    data.appendChild(dv);
  });
}
Msg();
}

/* chia sẻ bài viết */
const shareBtn = document.getElementById('btnShare');

  shareBtn.addEventListener('click', async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Bài Viết Cá nhân ',
          text: 'Nguyễn Thị Thảo Nhi!',
          url: window.location.href
        });
        alert('Đã chia sẻ thành công!');
      } catch (error) {
        console.error('Lỗi khi chia sẻ:', error);
      }
    } else {
      alert('Trình duyệt của bạn không hỗ trợ chức năng chia sẻ.');
    }
  });