# **REDDIT API DOCUMENTATION**

##  **/reddit/callback**

*OAuth login*


***Parameters***
- code
- state

#
##  [GET] **/reddit/me**

*Display all user information*
#
## [GET] **/reddit/subs**

*Returns all subs from user*
#
## [GET] **/reddit/best**

*return all post sorted by best*
#
## [GET] **/reddit/hot**

*return all post sorted by hot*
#
## [GET] **/reddit/top**

*return all post sorted by top*
#
## [GET] **/reddit/new**

*return all post sorted by new*
#
## [GET] **/reddit/controversial**

*return all post sorted by constroversial**
#
## [GET] **/reddit/random**

*return all post sorted by random*
#
## [GET] **/reddit/:id**
***Parameters***
- id (subreddit name)
  
*return all informations about a subreddit*
#
## [GET] **/reddit/:id/best**
***Parameters***
- id (subreddit name)

*return all post from a subreddit sorted by best*
#
## [GET] **/reddit/:id/hot**
***Parameters***
- id (subreddit name)

*return all post from a subreddit sorted by hot*
#
## [GET] **/reddit/:id/top**
***Parameters***
- id (subreddit name)

*return all post from a subreddit sorted by top*
#
## [GET] **/reddit/:id/new**
***Parameters***
- id (subreddit name)

*return all post from a subreddit sorted by best*
#
## [GET] **/reddit/:id/controversial**
***Parameters***
- id (subreddit name)

*return all post from a subreddit sorted by controversial*
#
## [GET] **/reddit/:id/random**
***Parameters***
- id (subreddit name)

*return all post from a subreddit sorted by random*
#
## [GET] **/reddit/:id/subscribe**
***Parameters***
- [subreddit fullname](https://www.reddit.com/dev/api/#fullname)

*subscribe to a subreddit*
#
## [GET] **/reddit/:id/unsubscribe**
***Parameters***
- [subreddit full name](https://www.reddit.com/dev/api/#fullname)

*unsubscribe from a subreddit*
#
## [GET] **/reddit/:id/best**
***Parameters***
- id (subreddit name)

*return all post from a subreddit sorted by best*
#
## [GET] **/reddit/settings**

*return all user settings*
#
#
## [PATCH] **/reddit/settings**

*change user settings*

***Data***
- [ Settings name ](https://www.reddit.com/dev/api/#PATCH_api_v1_me_prefs)
#
