import random
from datetime import datetime, timedelta

def fetch_profile_data(username: str):
    data = []
    followers = random.randint(1000, 3000)

    for i in range(30):
        followers += random.randint(5, 25)

        data.append({
            "date": (datetime.now() - timedelta(days=i)).strftime("%Y-%m-%d"),
            "followers": followers,
            "likes": random.randint(50, 400),
            "comments": random.randint(5, 60),
            "shares": random.randint(2, 30),
            "content_type": random.choice(["Reel", "Post", "Carousel"])
        })

    return data
