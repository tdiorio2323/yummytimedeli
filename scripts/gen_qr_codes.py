import os, qrcode
out=os.path.expanduser("~/yummytimedeli/public/assets/images")
os.makedirs(out, exist_ok=True)
links={
  "website":"https://example.com",
  "doordash":"https://www.doordash.com/",
  "grubhub":"https://www.grubhub.com/",
  "ubereats":"https://www.ubereats.com/",
  "google_profile":"https://www.google.com/maps/search/?api=1&query=Yummy+Time+Deli+2142+Forest+Ave+Staten+Island+NY+10303"
}
for name,url in links.items():
    qrcode.make(url).save(os.path.join(out, f"{name}-qr.png"))
print("QR codes saved to", out)
