{
 "cells": [
  {
   "cell_type": "code",
   "execution_count": 30,
   "id": "81f9f2c4",
   "metadata": {},
   "outputs": [],
   "source": [
    "import pandas as pd\n",
    "import numpy as np\n",
    "from sklearn.feature_extraction.text import CountVectorizer\n",
    "from sklearn.metrics.pairwise import cosine_similarity"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 44,
   "id": "c6e07861",
   "metadata": {},
   "outputs": [],
   "source": [
    "def get_data():\n",
    "    df = pd.read_csv(\"hostel.csv\")\n",
    "    df = df[:-1]\n",
    "    df['ROOM NO.'] = df['ROOM NO.'].astype(int)\n",
    "    df['index'] = df.index\n",
    "    #df.set_index(\"USN\", inplace = True)\n",
    "    return df"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 32,
   "id": "be6eac39",
   "metadata": {},
   "outputs": [],
   "source": [
    "def combine_data(df):\n",
    "    features = ['DOB','STATE','BRANCH']\n",
    "    for feature in features:\n",
    "        df[feature] = df[feature].fillna('')\n",
    "    df[\"combined_features\"] = df.apply(combine_features,axis=1)\n",
    "    return df\n"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 33,
   "id": "19c743b9",
   "metadata": {},
   "outputs": [],
   "source": [
    "def combine_features(row):\n",
    " return str(row['DOB'])+\" \"+row['STATE']+\" \"+row['BRANCH']"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 34,
   "id": "9295baae",
   "metadata": {},
   "outputs": [],
   "source": [
    "def transform_data(combine,data):\n",
    "    cv = CountVectorizer()\n",
    "    count_matrix = cv.fit_transform(combine[\"combined_features\"])\n",
    "    #feeding combined strings(data contents) to CountVectorizer() object\n",
    "    cosine_sim = cosine_similarity(count_matrix)\n",
    "    return cosine_sim\n",
    "    \n",
    "\n"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 35,
   "id": "3e1e09df",
   "metadata": {},
   "outputs": [],
   "source": [
    "def get_title_from_index(index):\n",
    "    find_data = get_data()\n",
    "    return find_data[find_data.index == index][\"USN\"].values[0]\n",
    "def get_index_from_title(USN):\n",
    "    find_data = get_data()\n",
    "    return find_data[find_data.USN == USN][\"index\"].values[0]\n"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 36,
   "id": "b2edff57",
   "metadata": {},
   "outputs": [],
   "source": [
    "def recommend(USN,data,combine,transform):\n",
    "    recommendations = []\n",
    "    USN_index = get_index_from_title(USN)\n",
    "    similar_people =  list(enumerate(transform[USN_index]))\n",
    "    sorted_similar = sorted(similar_people,key=lambda x:x[1],reverse=True)[1:]\n",
    "    i=0\n",
    "    for element in sorted_similar:\n",
    "        #print(get_title_from_index(element[0]))\n",
    "        recommendations.append(get_title_from_index(element[0]))\n",
    "        i=i+1\n",
    "        if i>=5:\n",
    "            break\n",
    "    return recommendations"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 41,
   "id": "6f3257f4",
   "metadata": {},
   "outputs": [],
   "source": [
    "def results(USN):\n",
    "    data = get_data()\n",
    "    combine = combine_data(data)\n",
    "    transform = transform_data(combine,data)\n",
    "    recommendations = []\n",
    "    if USN not in data['USN'].unique():\n",
    "        return 'USN not in Database'\n",
    "    else:\n",
    "        recommendations = recommend(USN,data,combine,transform)\n",
    "        #print(recommendations)\n",
    "        return recommendations"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 42,
   "id": "dff85b05",
   "metadata": {},
   "outputs": [
    {
     "data": {
      "text/plain": [
       "['1SI18CS004', '1SI17CS402', '1SI19CS408', '1SI20SCS01', '1SI20SCS03']"
      ]
     },
     "execution_count": 42,
     "metadata": {},
     "output_type": "execute_result"
    }
   ],
   "source": [
    "results()"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 14,
   "id": "ce829ec5",
   "metadata": {},
   "outputs": [],
   "source": [
    "#TODO\n",
    "#Add user with arbitary room no. 999 to not mess up undexing at the \n",
    "#bottom\n",
    "#Add him in the beginning\n",
    "#At last append room no. by which he selects after suggestion\n"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": null,
   "id": "34a2baf5",
   "metadata": {},
   "outputs": [],
   "source": []
  },
  {
   "cell_type": "code",
   "execution_count": null,
   "id": "cf9fda7d",
   "metadata": {},
   "outputs": [],
   "source": []
  },
  {
   "cell_type": "code",
   "execution_count": null,
   "id": "61e24814",
   "metadata": {},
   "outputs": [],
   "source": []
  }
 ],
 "metadata": {
  "kernelspec": {
   "display_name": "Python 3 (ipykernel)",
   "language": "python",
   "name": "python3"
  },
  "language_info": {
   "codemirror_mode": {
    "name": "ipython",
    "version": 3
   },
   "file_extension": ".py",
   "mimetype": "text/x-python",
   "name": "python",
   "nbconvert_exporter": "python",
   "pygments_lexer": "ipython3",
   "version": "3.9.7"
  }
 },
 "nbformat": 4,
 "nbformat_minor": 5
}
