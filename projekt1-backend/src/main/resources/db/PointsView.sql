CREATE VIEW points_view AS
    SELECT competitor.id as competitor_id,
	(SELECT COUNT(*)*3
	 FROM game
	 WHERE (game.first_competitor_score>game.second_competitor_score and game.first_competitor_id=competitor.id)
			or (game.first_competitor_score<game.second_competitor_score and game.second_competitor_id=competitor.id)
	)+
	(SELECT COUNT(*)
	 FROM game
	 WHERE game.first_competitor_score=game.second_competitor_score and (game.first_competitor_id=competitor.id or game.second_competitor_id=competitor.id)
	) as points
	FROM competitor