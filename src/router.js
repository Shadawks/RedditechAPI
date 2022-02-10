const router = require('express').Router();
const axios = require('axios');
const { CLIENT_ID, CLIENT_SECRET } = require('../config/oauth.json')

router.get('/callback', async (req, res) => {
    if (!req.query.code) return res.send({ error: 'Invalid code provided' });
    if (!req.query.state) return res.send({ error: 'Invalid state provided' });
    const params = new URLSearchParams();
    params.append('grant_type', 'authorization_code');
    params.append('code', req.query.code);
    params.append('redirect_uri', 'http://localhost:3000/reddit/callback');
    const config = {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        auth: {
            username: CLIENT_ID,
            password: CLIENT_SECRET
        }
    }
    axios.post('https://www.reddit.com/api/v1/access_token', params, config).then(response => {
       return res.send(response.data);
    }).catch(err => {
        return res.send(err.response.data);
    })
})

router.get("/me", async (req, res) => {
    const token = req.headers.authorization.split(' ')[1];
    if (!token) return res.send({ error: 'No token provided' });
    axios.get("https://oauth.reddit.com/api/v1/me", {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).then(response => {
        return res.send(response.data);
    }).catch(err => {
        console.log(token)
        return res.send({"error" : "Invalid token"});
    })
})

router.get("/subs", async (req, res) => {
    const token = req.headers.authorization.split(' ')[1];
    if (!token) return res.send({ error: 'No token provided' });
    axios.get("https://oauth.reddit.com/subreddits/mine/subscriber", {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).then(response => {
        //return subs name
        return res.send({"subs": response.data.data.children.map(sub => sub.data.display_name)});
    }).catch(err => {
        return res.send({"error" : "Invalid token"});
    })
})

router.get("/best", async (req, res) => {
    const token = req.headers.authorization.split(' ')[1];
    if (!token) return res.send({ error: 'No token provided' });
    axios.get("https://oauth.reddit.com/best", {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).then(response => {
        return res.send(response.data);
    }).catch(err => {
        return res.send(err.response.data);
    })
})

router.get("/top", async (req, res) => {
    const token = req.headers.authorization.split(' ')[1];
    if (!token) return res.send({ error: 'No token provided' });
    axios.get("https://oauth.reddit.com/top", {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).then(response => {
        return res.send(response.data);
    }).catch(err => {
        return res.send({"error" : "Invalid token"})
    })
})

router.get("/hot", async (req, res) => {
    const token = req.headers.authorization.split(' ')[1];
    if (!token) return res.send({ error: 'No token provided' });
    axios.get("https://oauth.reddit.com/hot", {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).then(response => {
        return res.send(response.data);
    }).catch(err => {
        return res.send({"error" : "Invalid token"})
    })
})

router.get('/controversial', (req, res) => {
    const token = req.headers.authorization.split(' ')[1];
    if (!token) return res.send({ error: 'No token provided' });
    axios.get("https://oauth.reddit.com/controversial", {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).then(response => {
        return res.send(response.data);
    }).catch(err => {
        return res.send({"error" : "Invalid token"})
    })
})

router.get('/random', (req, res) => {
    const token = req.headers.authorization.split(' ')[1];
    if (!token) return res.send({ error: 'No token provided' });
    axios.get("https://oauth.reddit.com/random", {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).then(response => {
        return res.send(response.data);
    }).catch(err => {
        return res.send({"error" : "Invalid token"})
    })
})

router.get('/new', (req, res) => {
    const token = req.headers.authorization.split(' ')[1];
    if (!token) return res.send({ error: 'No token provided' });
    axios.get("https://oauth.reddit.com/new", {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).then(response => {
        return res.send(response.data);
    }).catch(err => {
        return res.send({"error" : "Invalid token"})
    })
})

router.get('/sub/:id', (req, res) => {
    const token = req.headers.authorization.split(' ')[1];
    if (!token) return res.send({ error: 'No token provided' });
    axios.get(`https://oauth.reddit.com/r/${req.params.id}/about`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).then(response => {
        return res.send(response.data);
    }).catch(err => {
        return res.send({"error" : "Invalid subreddit name"})
    })
})

router.get('/sub/:id/best', (req, res) => {
    const token = req.headers.authorization.split(' ')[1];
    if (!token) return res.send({ error: 'No token provided' });
    axios.get(`https://oauth.reddit.com/r/${req.params.id}/best`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).then(response => {
        return res.send(response.data);
    }).catch(err => {
        return res.send({"error" : "Invalid subreddit name"})
    })
})

router.get('/sub/:id/hot', (req, res) => {
    const token = req.headers.authorization.split(' ')[1];
    if (!token) return res.send({ error: 'No token provided' });
    axios.get(`https://oauth.reddit.com/r/${req.params.id}/hot`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).then(response => {
        return res.send(response.data);
    }).catch(err => {
        return res.send({"error" : "Invalid subreddit name"})
    })
})

router.get('/sub/:id/top', (req, res) => {
    const token = req.headers.authorization.split(' ')[1];
    if (!token) return res.send({ error: 'No token provided' });
    axios.get(`https://oauth.reddit.com/r/${req.params.id}/top`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).then(response => {
        return res.send(response.data);
    }).catch(err => {
        return res.send({"error" : "Invalid subreddit name"})
    })
})

router.get('/sub/:id/new', (req, res) => {
    const token = req.headers.authorization.split(' ')[1];
    if (!token) return res.send({ error: 'No token provided' });
    axios.get(`https://oauth.reddit.com/r/${req.params.id}/new`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).then(response => {
        return res.send(response.data);
    }).catch(err => {
        return res.send({"error" : "Invalid subreddit name"})
    })
})

router.get('/sub/:id/random', (req, res) => {
    const token = req.headers.authorization.split(' ')[1];
    if (!token) return res.send({ error: 'No token provided' });
    axios.get(`https://oauth.reddit.com/r/${req.params.id}/random`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).then(response => {
        return res.send(response.data);
    }).catch(err => {
        return res.send({"error" : "Invalid subreddit name"})
    })
})

router.get('/sub/:id/controversial', (req, res) => {
    const token = req.headers.authorization.split(' ')[1];
    if (!token) return res.send({ error: 'No token provided' });
    axios.get(`https://oauth.reddit.com/r/${req.params.id}/controversial`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).then(response => {
        return res.send(response.data);
    }).catch(err => {
        return res.send({"error" : "Invalid subreddit name"})
    })
})

router.get('/sub/:id/subscribe', (req, res) => {
    const token = req.headers.authorization.split(' ')[1];
    if (!token) return res.send({ error: 'No token provided' });
    axios.post(`https://oauth.reddit.com/api/subscribe`, {
        headers: {
            Authorization: `Bearer ${token}`
        },
        data: {
            action: "sub",
            sr: req.params.id
        }
    }).then(response => {
        return res.send(response.data);
    }).catch(err => {
        return res.send({"error" : "Invalid token"})
    })
})

router.get('/sub/:id/unsubscribe', (req, res) => {
    const token = req.headers.authorization.split(' ')[1];
    if (!token) return res.send({ error: 'No token provided' });
    axios.post(`https://oauth.reddit.com/api/subscribe`, {
        headers: {
            Authorization: `Bearer ${token}`
        },
        data: {
            action: "unsub",
            sr: req.params.id
        }
    }).then(response => {
        return res.send(response.data);
    }).catch(err => {
        return res.send({"error" : "Invalid token"})
    })
})

router.get("/settings", (req, res) => {
    const token = req.headers.authorization.split(' ')[1];
    if (!token) return res.send({ error: 'No token provided' });
    axios.get(`https://oauth.reddit.com/api/v1/me/prefs`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).then(response => {
        return res.send(response.data);
    }).catch(err => {
        return res.send({"error" : "Invalid token"})
    })
})

router.patch('/settings', (req, res) => {
    const token = req.headers.authorization.split(' ')[1];
    if (!token) return res.send({ error: 'No token provided' });
    axios.patch(`https://oauth.reddit.com/api/v1/me/prefs`, {
        headers: {
            Authorization: `Bearer ${token}`
        },
        data: {
            ...req.body
        }
    }).then(response => {
        return res.send(response.data);
    }).catch(err => {
        return res.send({"error" : "Invalid token"})
    })
})

module.exports = router;