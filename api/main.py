import os
import json
import re
import tweepy as tt
from dotenv import load_dotenv

load_dotenv()
api_Key = os.getenv('API_KEY')
api_Secret_Key = os.getenv('API_SECRET_KEY')
access_Token = os.getenv('ACCCESS_TOKEN')
access_Token_Secret = os.getenv('ACCESS_TOKEN_SECRET')

regexPrice = r'R\$\s[0-9]*|R\$[0-9]*'
regexIntel = r'[iI][3-9]\-[0-9]*[a-zA-Z]*\/?[a-zA-Z]*'
regexAMD = r'R[a-zA-Z]*\s[3579]\s[0-9]*[TX]*|R[3-9]\s[0-9]*[TX]*\/?[a-zA-Z]*\/?[a-zA-Z]*'


auth = tt.OAuthHandler(api_Key, api_Secret_Key)
auth.set_access_token(access_Token, access_Token_Secret)


api = tt.API(auth)

try:
    api.verify_credentials()
    print("everything is just fine")
except:
    print("something went wrong")


username = 'observatorioCPU'
count = 30
startingPoint = 'https://api.twitter.com/1.1/statuses/user_timeline.json?'

tweets = api.user_timeline(
    screen_name=username,
    count=count,
    exclude_replies=True,
    include_rts=False,
    tweet_mode='extended')

data = {}

for t in tweets:
    tweetText = t._json['full_text']
    intel = re.findall(regexIntel, tweetText)
    amd = re.findall(regexAMD, tweetText)
    price = re.findall(regexPrice, tweetText)

    if(amd and intel and price):
        for a, p in enumerate(price):
            try:
                if(amd and intel):
                    if(intel and tweetText.index(intel[0]) < tweetText.index(amd[0])):
                        data[intel[0]] = p
                        intel.pop(0)
                    elif(amd and tweetText.index(amd[0]) < tweetText.index(intel[0])):
                        data[amd[0]] = p
                        amd.pop(0)
                elif(not amd and intel):
                    data[intel[0]] = p
                    intel.pop(0)
                elif(amd and not intel):
                    data[amd[0]] = p
                    amd.pop(0)
            except Exception as e:
                print(e)
        print(data)
        print(tweetText)

with open("data/processors.json", "w") as tweetsData:
    json.dump(data, tweetsData, indent=4)

