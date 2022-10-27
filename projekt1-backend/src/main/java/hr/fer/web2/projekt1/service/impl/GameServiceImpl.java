package hr.fer.web2.projekt1.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import hr.fer.web2.projekt1.domain.dto.EditGameRequest;
import hr.fer.web2.projekt1.domain.dto.GameDTO;
import hr.fer.web2.projekt1.domain.dto.NewGameRequest;
import hr.fer.web2.projekt1.domain.mappers.GameGameDTOMapper;
import hr.fer.web2.projekt1.domain.models.Competitor;
import hr.fer.web2.projekt1.domain.models.Game;
import hr.fer.web2.projekt1.domain.models.Round;
import hr.fer.web2.projekt1.persistance.CompetitorRepository;
import hr.fer.web2.projekt1.persistance.GameRepository;
import hr.fer.web2.projekt1.persistance.RoundRepository;
import hr.fer.web2.projekt1.service.GameService;
import hr.fer.web2.projekt1.service.PrincipalService;

@Service
public class GameServiceImpl implements GameService {
    private final GameRepository gameRepository;
    private final CompetitorRepository competitorRepository;
    private final RoundRepository roundRepository;
    private final GameGameDTOMapper gameGameDTOMapper;
    private final PrincipalService principalService;

    public GameServiceImpl(GameRepository gameRepository, GameGameDTOMapper gameGameDTOMapper,
            CompetitorRepository competitorRepository, RoundRepository roundRepository,
            PrincipalService principalService) {
        this.gameRepository = gameRepository;
        this.gameGameDTOMapper = gameGameDTOMapper;
        this.competitorRepository = competitorRepository;
        this.roundRepository = roundRepository;
        this.principalService = principalService;
    }

    @Override
    public List<GameDTO> getAllGamesByRoundId(Long roundId) {
        List<GameDTO> result = gameRepository.findByRoundId(roundId).stream()
                .map(game -> gameGameDTOMapper.gameToGameDTO(game))
                .sorted((g1, g2) -> g1.getScheduledDate().compareTo(g2.getScheduledDate()))
                .toList();
        return result;
    }

    @Override
    public GameDTO createNewGame(NewGameRequest game, Long roundId) {
        if (!principalService.isCurrentUserAdmin())
            throw new IllegalArgumentException("Only admins can create new game");
        Optional<Competitor> first = competitorRepository.findById(game.getFirstCompetitorId());
        Optional<Competitor> second = competitorRepository.findById(game.getSecondCompetitorId());
        Optional<Round> round = roundRepository.findById(roundId);
        if (first.isEmpty() || second.isEmpty())
            throw new IllegalArgumentException("Unexisting competitor/competitors were given");
        if (round.isEmpty())
            throw new IllegalArgumentException("Unexisting round was given");
        if (game.getDate() == null)
            throw new IllegalArgumentException("Date can not be null");

        Game newGame = gameRepository
                .save(new Game(game.getDate(), game.getFirstCompetitorScore(), game.getSecondCompetitorScore(),
                        first.get(), second.get(), round.get()));
        newGame.setId(null);
        return gameGameDTOMapper.gameToGameDTO(newGame);
    }

    @Override
    public GameDTO editGameScores(EditGameRequest scores, Long id) {
        if (!principalService.isCurrentUserAdmin())
            throw new IllegalArgumentException("Only admins can edit game");
        Optional<Game> optionalGame = gameRepository.findById(id);
        if (optionalGame.isEmpty())
            throw new IllegalArgumentException("Invalid game id");
        Game game = optionalGame.get();
        game.setFirstCompetitorScore(scores.getFirstCompetitorScore());
        game.setSecondCompetitorScore(scores.getSecondCompetitorScore());
        game = gameRepository.save(game);
        return gameGameDTOMapper.gameToGameDTO(game);
    }

}
