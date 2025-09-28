import os, qrcode
out=os.path.expanduser("~/yummytimedeli/public/assets/images")
os.makedirs(out, exist_ok=True)
links={
  "website":"https://yummytimedeli.com",
  "doordash":"https://www.doordash.com/store/YOUR-STORE",
  "grubhub":"https://www.grubhub.com/restaurant/YOUR-STORE",
  "ubereats":"https://www.ubereats.com/store/YOUR-STORE",
  "google_profile":"https://www.google.com/maps/search/?api=1&query=Yummy+Time+Deli+2142+Forest+Avenue+Staten+Island+NY+10303"
}
for name,url in links.items():
    qrcode.make(url).save(os.path.join(out, f"{name}-qr.png"))
print("QR codes saved to", out)
