document.write(`
<div style="display: flex; white-space: nowrap; align-items: center; background: rgba(92, 184, 92, 0.1); border: 1px solid rgba(92, 184, 92, 0.3); box-sizing: border-box;">
   <div style='display:inline-block'>
  
<div style='width:592px'>
<style>
.image{background: url('https://giveahands.github.io/1.png') center no-repeat; background-color: #f9f9f9; background-size: cover;height: 256px; position: relative; width: 100%}
.image img{width:100%;display:block;transition:opacity .3s ease}
.image iframe{position:absolute;top:0;left:0;z-index:999;width:100%;height:712px;background:#fff;border:none;padding:25px;display:none;box-shadow:0 4px 15px rgba(92,184,92,.3);border-radius:0 0 25px 25px;box-sizing:border-box}
#block {margin:auto;display:inline-block}
@media (max-width:650px) {
#block{display:none}
}
</style>
<div class="image" onmouseover="loadIframe(this)" onmouseleave="unloadIframe(this)"></div>
</div>

  </div>

  <div id='block'><a href='https://giveahands.github.io/'>
	<img src='https://cdn3.iconfinder.com/data/icons/google-material-design-icons/48/ic_info_outline_48px-256.png' style='width:24px'>
  </a></div>
</div>
`);
function loadIframe(container) {
    if (!container.querySelector('iframe')) {
        const iframe = document.createElement('iframe');
        iframe.src = "https://ko-fi.com/giveahand/?hidefeed=true&widget=true&embed=true&preview=true";
        iframe.title = "giveahand";
        container.appendChild(iframe);
    }
    const iframe = container.querySelector('iframe');
    iframe.style.display = 'block';
    const img = container.querySelector('img');
    img.style.opacity = '0';
}

function unloadIframe(container) {
    const iframe = container.querySelector('iframe');
    if (iframe) iframe.style.display = 'none';
    const img = container.querySelector('img');
    img.style.opacity = '1';
}