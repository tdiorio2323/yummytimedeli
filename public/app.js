const links={
  doordash: "https://www.doordash.com/store/YOUR-STORE",
  grubhub:  "https://www.grubhub.com/restaurant/YOUR-STORE",
  ubereats: "https://www.ubereats.com/store/YOUR-STORE"
};
for (const [k,url] of Object.entries(links)){
  const el=document.getElementById(`order-${k}`);
  if(el){ el.href=url; }
}
