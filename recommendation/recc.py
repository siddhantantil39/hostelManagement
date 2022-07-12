import re
import pandas as pd
import numpy as np
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.metrics.pairwise import cosine_similarity

def get_data():
    df = pd.read_csv("hostelData.csv")
    df['index'] = df.index
    #df.set_index("USN", inplace = True)
    return df
    
def formatDate(df):
    df['DOB'] = df.birthdate[0:3]
    return df

def combine_data(df):
    df = formatDate(df)
    features = ['DOB','state','branch','year','nature','sleepEarly','sportslike','study','singing','movies']
    for feature in features:
        df[feature] = df[feature].fillna('')
    df["combined_features"] = df.apply(combine_features,axis=1)
    return df


def combine_features(row):
    return str(row['DOB'])+" "+row['state']+" "+row['branch']+" "+row['year']+" "+row['nature']+" "+row['sleepEarly']+" "+row['sportslike']+" "+row['study']+" "+row['singing']+" "+row['movies']
    

def transform_data(combine,data):
    cv = CountVectorizer()
    count_matrix = cv.fit_transform(combine["combined_features"])
    #feeding combined strings(data contents) to CountVectorizer() object
    cosine_sim = cosine_similarity(count_matrix)
    return cosine_sim
    

def get_title_from_index(index):
    find_data = get_data()
    return find_data[find_data.index == index]["usn"].values[0]
def get_index_from_title(USN):
    find_data = get_data()
    return find_data[find_data.usn == USN]["index"].values[0]


def recommend(usn,data,combine,transform):
    recommendations = []
    USN_index = get_index_from_title(usn)
    similar_people =  list(enumerate(transform[USN_index]))
    sorted_similar = sorted(similar_people,key=lambda x:x[1],reverse=True)[1:]
    i=0
    for element in sorted_similar:
        #print(get_title_from_index(element[0]))
        recommendations.append(get_title_from_index(element[0]))
        i=i+1
        if i>=5:
            break
    return recommendations
    
def results(usn):
    data = get_data()
    combine = combine_data(data)
    transform = transform_data(combine,data)
    recommendations = []
    if usn not in data['usn'].unique():
        return 'USN not in Database'
    else:
        recommendations = recommend(usn,data,combine,transform)
        #print(recommendations)
        return recommendations
        
 
 
 
