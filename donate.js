document.write(`
<style>
.image{position:relative;display:inline-block;max-width:600px}.image img{width:100%;display:block;transition:opacity .3s ease}.image iframe{position:absolute;top:0;left:0;width:100%;height:712px;background:#fff;border:none;padding:25px;display:none;box-shadow:0 4px 15px rgba(92,184,92,.3);border-radius:0 0 25px 25px;box-sizing:border-box}
</style>
<div class="image" onmouseover="loadIframe(this)" onmouseleave="unloadIframe(this)">
    <img src="/1.png" alt="donate">
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