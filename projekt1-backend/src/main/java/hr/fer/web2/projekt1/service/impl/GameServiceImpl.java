package hr.fer.web2.projekt1.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

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

@Service
public class GameServiceImpl implements GameService {
    private final GameRepository gameRepository;
    private final CompetitorRepository competitorRepository;
    private final RoundRepository roundRepository;
    private final GameGameDTOMapper gameGameDTOMapper;

    public GameServiceImpl(GameRepository gameRepository, GameGameDTOMapper gameGameDTOMapper,
            CompetitorRepository competitorRepository, RoundRepository roundRepository) {
        this.gameRepository = gameRepository;
        this.gameGameDTOMapper = gameGameDTOMapper;
        this.competitorRepository = competitorRepository;
        this.roundRepository = roundRepository;
    }

    @Override
    public List<GameDTO> getAllGamesByRoundId(Long roundId) {
        return gameRepository.findByRoundId(roundId).stream()
                .map(game -> gameGameDTOMapper.gameToGameDTO(game))
                .toList();
    }

    @Override
    public GameDTO createNewGame(NewGameRequest game, Long roundId) {
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

}
