package hr.fer.web2.projekt1.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import hr.fer.web2.projekt1.domain.dto.GameDTO;
import hr.fer.web2.projekt1.domain.mappers.GameGameDTOMapper;
import hr.fer.web2.projekt1.persistance.GameRepository;
import hr.fer.web2.projekt1.service.GameService;

@Service
public class GameServiceImpl implements GameService {
    private final GameRepository gameRepository;
    private final GameGameDTOMapper gameGameDTOMapper;

    public GameServiceImpl(GameRepository gameRepository, GameGameDTOMapper gameGameDTOMapper) {
        this.gameRepository = gameRepository;
        this.gameGameDTOMapper = gameGameDTOMapper;
    }

    @Override
    public List<GameDTO> getAllGamesByRoundId(Long roundId) {
        return gameRepository.findByRoundId(roundId).stream()
                .map(game -> gameGameDTOMapper.gameToGameDTO(game))
                .toList();
    }

}
