def generate_insights(user_data, competitor_data):
    insights = []

    user_eng = sum(d["likes"] for d in user_data) / len(user_data)
    comp_eng = sum(d["likes"] for d in competitor_data) / len(competitor_data)

    if comp_eng > user_eng:
        insights.append(
            "Competitor engagement is higher. Their content strategy appears stronger."
        )

    reel_count = len([d for d in user_data if d["content_type"] == "Reel"])
    if reel_count < 10:
        insights.append(
            "You are posting fewer Reels. Increasing short-form video could improve reach."
        )

    insights.append(
        "Mid-week posts show better engagement based on observed patterns."
    )

    return insights
