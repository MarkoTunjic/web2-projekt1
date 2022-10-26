package hr.fer.web2.projekt1.rest;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import hr.fer.web2.projekt1.domain.dto.GameDTO;
import hr.fer.web2.projekt1.domain.dto.NewGameRequest;
import hr.fer.web2.projekt1.service.GameService;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;

@CrossOrigin
@RestController
@RequestMapping("games")
public class GameController {
    private final GameService gameService;

    public GameController(GameService gameService) {
        this.gameService = gameService;
    }

    @GetMapping("/round/{roundId}")
    public ResponseEntity<List<GameDTO>> getAllGamesByRoundId(@PathVariable Long roundId) {
        return ResponseEntity.ok(gameService.getAllGamesByRoundId(roundId));
    }

    @PostMapping("/round/{roundId}")
    @SecurityRequirement(name = "BearerAuthentication")
    @PreAuthorize("!hasRole('')")
    public ResponseEntity<GameDTO> createNewGame(@RequestBody NewGameRequest game, @PathVariable Long roundId) {
        Jwt userDetails = (Jwt) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        String email = userDetails.getClaim("email");
        return new ResponseEntity<GameDTO>(gameService.createNewGame(game, roundId), HttpStatus.CREATED);
    }
}
