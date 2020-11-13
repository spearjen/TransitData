from config import api_key, api_secret, bearer_token, access_token, access_secret
import tweepy
import time
#This sets the authorization for tweepy, seems to work
#Have to set auth every time. 
auth = tweepy.OAuthHandler(api_key, api_secret)
auth.set_access_token(access_token, access_secret)
api = tweepy.API(auth)
##This gets a few most recent tweets from my timeline.
public_tweets = api.home_timeline()
# for tweet in public_tweets:
#     print(tweet.text)

#Next, try getting a specific user-this works! 
user = api.get_user('RideRTD')
# print(user.screen_name)
# print(user.followers_count)


#More on authorization: before using API, have to do the following: 
### Get request token from twitter
### Redirect user to twitter.com to authorize application
### Exchange authorized request for access token. 

#This works! Redirect_url appears usable, though shouldn't try to
# Grab it a bunch of times in the interest of not getting banned from API. Lol.
# try:
#     redirect_url = auth.get_authorization_url()
#     print(redirect_url)
# except tweepy.TweepError:
#     print('Error! Failed to get request token.')


#This is a test of appending tweet items to a list to use later.
#I tried this with 'bus' and got an error--i think it has to do w/
#the contents of the tweet. 
test_list = []
# for tweet in tweepy.Cursor(api.search, q='tweepy').items(10):
#     test_list.append(tweet.text)

# print(test_list)



#Now try printing 'status' to figure out what that means
# for status in tweepy.Cursor(api.home_timeline).items(30):
#     print(status.text)
#     #Might also want status.location. 
#     time.sleep(900)

#Status is a HUGE JSON that we may or may not actually need all of it.

#Now, I want to try searching for a specific topic and getting the text and location.
#Aka, parameters into the API. 


#Try setting up a stream of  tweets in realtime
# stream_statuses = []
# class MyStreamListener(tweepy.StreamListener):
#     def on_status(self, status)

# myStreamListener = MyStreamListener()
# myStream = tweepy.Stream(auth = api.auth, listener = myStreamListener)
# myStream.filter(track = ['public transit'])



#Try grabbing a bunch of tweets about public transit

#This code works! Flaws: it grabs retweets and replies and I don't like that
#Also only grabs 140 chars and doesn't filter by location. can be improved! 
# transit_list = []
# transit_locations = []
# for status in tweepy.Cursor(api.search, q = 'public transit').items(10):
#     transit_locations.append(status.user.location)
#     transit_list.append(status.text)
#     time.sleep(60)

# print(transit_list)
# print(transit_locations)


states = ["Alabama","Alaska","Arizona","Arkansas","California","Colorado",
  "Connecticut","Delaware","Florida","Georgia","Hawaii","Idaho","Illinois",
  "Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Maryland",
  "Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana",
  "Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York",
  "North Carolina","North Dakota","Ohio","Oklahoma","Oregon","Pennsylvania",
  "Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah",
  "Vermont","Virginia","Washington","West Virginia","Wisconsin","Wyoming"]
state_tweets = dict()
# for i in states:
#     state_tweets[i] = ['test']
# print(state_tweets)

#This loop does work to iterate through each state....now just need to figure out the dictionary bit. 
loop = 0
for i in states:
    for status in tweepy.Cursor(api.search, q = f'public transit {i} exclude:retweets', tweet_mode = 'extended').items(1):
        try:
            state_tweets[i] = [status.full_text]
            time.sleep(2)
        except UnicodeEncodeError:
            print("Unable to process this tweet, moving on.....")
            pass
        loop +=1
        print(f"Loop {loop} complete.")
        print(state_tweets)
    


