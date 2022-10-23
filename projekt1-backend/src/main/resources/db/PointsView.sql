CREATE VIEW points_view AS
    SELECT principal.id as principal_id,
	(SELECT COUNT(*)*3
	 FROM game
	 WHERE (game.first_competitor_score>game.second_competitor_score and game.first_competitor_id=principal.id)
			or (game.first_competitor_score<game.second_competitor_score and game.second_competitor_id=principal.id)
	)+
	(SELECT COUNT(*)
	 FROM game
	 WHERE game.first_competitor_score=game.second_competitor_score and (game.first_competitor_id=principal.id or game.second_competitor_id=principal.id)
	) as points
	FROM principal