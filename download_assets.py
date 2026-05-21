import urllib.request
import os

assets_dir = r"C:\Users\Kieu Sang\.gemini\antigravity\scratch\spa-website\assets"
os.makedirs(assets_dir, exist_ok=True)

images = {
    "service-facial.jpg": "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=600&auto=format&fit=crop",
    "service-massage.jpg": "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=600&auto=format&fit=crop",
    "service-body.jpg": "https://images.unsplash.com/photo-1616394584738-fc6e612e71c9?q=80&w=600&auto=format&fit=crop",
    "service-waxing.jpg": "https://images.unsplash.com/photo-1554050857-c84a8abdb5e5?q=80&w=600&auto=format&fit=crop",
    "service-lash.jpg": "https://images.unsplash.com/photo-1587778082149-bd5b1bf5d3fa?q=80&w=600&auto=format&fit=crop",
    "service-packages.jpg": "https://images.unsplash.com/photo-1560684352-8497838a2229?q=80&w=600&auto=format&fit=crop",
    "featured-glow.jpg": "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=800&auto=format&fit=crop",
    "about-team.jpg": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop",
    "gallery-1.jpg": "https://images.unsplash.com/photo-1552693673-1bf958298935?q=80&w=600&auto=format&fit=crop",
    "gallery-2.jpg": "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?q=80&w=600&auto=format&fit=crop",
    "gallery-3.jpg": "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?q=80&w=600&auto=format&fit=crop",
    "gallery-4.jpg": "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=600&auto=format&fit=crop",
    "gallery-5.jpg": "https://images.unsplash.com/photo-1616394584738-fc6e612e71c9?q=80&w=600&auto=format&fit=crop",
    "gallery-6.jpg": "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=600&auto=format&fit=crop",
    "booking-bg.jpg": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200&auto=format&fit=crop",
}

print("Downloading royalty-free assets...")
for filename, url in images.items():
    filepath = os.path.join(assets_dir, filename)
    print(f"Downloading {filename}...")
    try:
        urllib.request.urlretrieve(url, filepath)
    except Exception as e:
        print(f"Failed to download {filename}: {e}")

print("Asset preparation completed.")
