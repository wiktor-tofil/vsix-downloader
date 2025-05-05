const params = new URL(location.href).searchParams;
const itemName = params.get('itemName').split(".");
const publisher = itemName[0];
const name = itemName[1];

const resultUrl = 'https://marketplace.visualstudio.com/_apis/public/gallery/publishers/'+publisher+'/vsextensions/'+name+'/latest/vspackage/';


const btn = document.createElement("button");
btn.innerText = 'Download .VSIX';
btn.style.cssText = 'position:fixed;top:10px;right:10px;z-index:9999;padding:8px;background:blue;color:white;border:none;cursor:pointer;';

btn.onclick = () => {
  window.open(resultUrl, '_blank');
};

document.body.appendChild(btn);

