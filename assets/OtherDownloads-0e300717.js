import{P as n,j as e,f as l,g as d,h as m,i as p}from"./index-6badcd11.js";const r=[{nameToImage:"windows",operatingSystem:["Windows"],suportedVersions:["Windows 7, 8, 10"],linksToDownload:["https://www.mediafire.com/file/05s1xevfjv43ej5/Te%2527dna_diste-1.0.0_Setup.exe/file"]},{nameToImage:"linux",operatingSystem:[".deb",".rpm"],suportedVersions:["Debian, Ubuntu","Fedora, Red Hat, SUSE"],linksToDownload:["https://www.mediafire.com/file/lgbbrm9w8da97wr/tedna-diste_1.0.0_amd64.deb/file","https://www.mediafire.com/file/0v84raq9xd1d2z7/tedna-diste-1.0.0-1.x86_64.rpm/file"]}];const a=({operatingSystem:s,suportedVersions:t,href:i,isLittle:o=!1})=>e.jsxs("a",{target:"_blank",href:i,rel:"noreferrer",className:"button-option btn d-flex flex-wrap flex-column justify-content-center py-2",style:{padding:o?"0 3rem":"0 5rem"},children:[e.jsxs("p",{style:{fontSize:"1.2rem"},children:[e.jsx("i",{className:"bi bi-download"}),e.jsx("span",{className:"px-3",children:s})]}),e.jsx("small",{className:"small-letter",children:t})]});a.propTypes={operatingSystem:n.string.isRequired,suportedVersions:n.string.isRequired,href:n.string.isRequired,isLittle:n.bool};const g=()=>e.jsx("section",{className:"d-flex flex-wrap justify-content-center py-4",style:{background:"#F8F8F8"},children:r&&r.map((s,t)=>e.jsxs("div",{className:"mx-4 my-3",children:[e.jsx("div",{className:"container-img-os m-auto",children:e.jsxs("picture",{children:[e.jsx("source",{srcSet:new URL(Object.assign({"../../img/otherDownloads/linux.webp":l,"../../img/otherDownloads/windows.webp":d})[`../../img/otherDownloads/${s.nameToImage}.webp`],self.location).href}),e.jsx("img",{src:new URL(Object.assign({"../../img/otherDownloads/linux.png":m,"../../img/otherDownloads/windows.png":p})[`../../img/otherDownloads/${s.nameToImage}.png`],self.location).href,alt:s.nameToImage})]})}),e.jsx("div",{className:"button-downloads d-flex flex-wrap justify-content-around",children:s.operatingSystem&&s.operatingSystem.map((i,o)=>e.jsx("div",{className:"m-1",children:e.jsx(a,{operatingSystem:i,href:s.linksToDownload[o],suportedVersions:s.suportedVersions[o],isLittle:s.operatingSystem.length>1})},o))})]},t))});export{g as default};