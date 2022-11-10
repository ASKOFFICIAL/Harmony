
import tekore as tk#Spotify Web API
def authorize():
 CLIENT_ID = "31b908bc909041a5a2898268aaf89962"
 CLIENT_SECRET = "41a1563f82c44bffaac02437b11e8fc3"
 app_token = tk.request_client_token(CLIENT_ID, CLIENT_SECRET)
 return tk.Spotify(app_token)