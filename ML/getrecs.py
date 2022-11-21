from recommend import *
import sys
import pandas as pd
import json

# df=pd.read_csv(sys.argv[1])
df=pd.read_csv("C:/Users/shash/Desktop/GitHub/Harmony/ML/valence_arousal_dataset.csv")
# print(df.to_json())
n_recs=50
point1=json.loads(sys.argv[1])
point2=json.loads(sys.argv[2])
# print('123123123123')
# print(point1)
x=recommend(point1[0],point1[1],df)
# # print(x.to_json())
# # print(x)
tracks={}
n=n_recs-1
x_change=(point2[0]-point1[0])/n
y_change=(point2[1]-point1[1])/n
x_val=point1[0]
y_val=point1[1]
for i in range(n):
    x_val+=x_change
    y_val+=y_change
    x=recommend(x_val,y_val,df)
    # print(type(x))
    # tracks.append({"name": x["track_name"], "id": x["id"]})
    # print(x["id"])
    tracks[x["id"]] = x["track_name"]

# print(type(tracks))
# print(tracks)
# print(str(tracks).encode('utf-8'))
print(json.dumps(tracks))
# print(type(tracks))

sys.exit(0)