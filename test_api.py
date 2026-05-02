import urllib.request
import json

def test_api():
    urls = [
        'https://brapi.dev/api/v2/treasury?search=2032',
        'https://api.allorigins.win/raw?url=https%3A%2F%2Fwww.tesourodireto.com.br%2Fjson%2Fbr%2Fcom%2Fb3%2Ftesourodireto%2Fservice%2Fapi%2Ftreasurybondrequest.json'
    ]
    
    for url in urls:
        print(f"Testing {url}...")
        try:
            req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
            with urllib.request.urlopen(req, timeout=10) as response:
                data = json.loads(response.read().decode())
                print(f"SUCCESS: {str(data)[:100]}...")
        except Exception as e:
            print(f"FAILED: {e}")

if __name__ == "__main__":
    test_api()
