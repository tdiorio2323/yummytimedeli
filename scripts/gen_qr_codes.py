import os
import qrcode
import json

out=os.path.expanduser("~/yummytimedeli/public/assets/images")
os.makedirs(out, exist_ok=True)

with open("/Users/tylerdiorio/yummytimedeli/config.json") as f:
    config = json.load(f)

links = {
    "website": config["website_url"],
    **config["ordering_links"],
    "google_profile": config["google_maps_url"]
}

for name,url in links.items():
    qrcode.make(url).save(os.path.join(out, f"{name}-qr.png"))
print("QR codes saved to", out)
