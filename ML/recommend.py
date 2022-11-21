import numpy as np
from numpy.linalg import norm
import random
import pandas as pd

# df = pd.read_csv("valence_arousal_dataset.csv")
def recommend(val,energy, ref_df):
    ref_df["mood_vec"] = ref_df[["valence", "energy"]].values.tolist()
    
    # Crawl valence and arousal of given track from spotify api
    featurevector = np.array([val, energy])
    
    # Compute distances to all reference tracks
    ref_df["distances"] = ref_df["mood_vec"].apply(lambda x: norm(featurevector-np.array(x)))
    # Sort distances from lowest to highest
    ref_df_sorted = ref_df.sort_values(by = "distances", ascending = True)
    
    # Return n recommendations
    return ref_df_sorted.iloc[0]