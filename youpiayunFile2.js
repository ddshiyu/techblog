
window.onload = () => {
  const youpeiyunfooter = document.querySelector('.footer-wrapper')
  console.log(youpeiyunfooter)
  const youpeiyunSpan = youpeiyunfooter.querySelector('span')
  const youpeiyundiv = document.createElement('div')
  youpeiyundiv.innerHTML = '<div style="margin-bottom: 10px;color: #999;">本网站由<img class="youpaiyunImg" width="50" style="transform: translateY(6px);" src="https://cdn.jsdelivr.net/gh/ddshiyu/zredImage@master/youpai-logo.png">提供CDN加速/云服务存储</div>'
  youpeiyunfooter.insertBefore(youpeiyundiv, youpeiyunSpan)
  const img = document.querySelector('.youpaiyunImg')
  img.onclick = () => {
    window.open('https://www.upyun.com/?utm_source=lianmeng&utm_medium=referral', '_blank')
  }
}