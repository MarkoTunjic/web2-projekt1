package hr.fer.web2.projekt1.service;

import java.util.List;

import hr.fer.web2.projekt1.domain.dto.GameDTO;

public interface GameService {
    List<GameDTO> getAllGamesByRoundId(Long roundId);
}
