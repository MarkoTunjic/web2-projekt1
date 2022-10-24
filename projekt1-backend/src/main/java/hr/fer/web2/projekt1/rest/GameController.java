package hr.fer.web2.projekt1.rest;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import hr.fer.web2.projekt1.domain.dto.GameDTO;
import hr.fer.web2.projekt1.service.GameService;

@RestController
@RequestMapping("games")
public class GameController {
    private final GameService gameService;

    public GameController(GameService gameService) {
        this.gameService = gameService;
    }

    @GetMapping("/round/{roundId}")
    public ResponseEntity<List<GameDTO>> getAllGamesByRoundId(Long roundId) {
        return ResponseEntity.ok(gameService.getAllGamesByRoundId(roundId));
    }
}
