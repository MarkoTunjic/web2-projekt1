package hr.fer.web2.projekt1.service;

import java.util.List;

import hr.fer.web2.projekt1.domain.dto.GameDTO;
import hr.fer.web2.projekt1.domain.dto.NewGameRequest;

public interface GameService {
    List<GameDTO> getAllGamesByRoundId(Long roundId);

    GameDTO createNewGame(NewGameRequest game, Long roundId);
}
