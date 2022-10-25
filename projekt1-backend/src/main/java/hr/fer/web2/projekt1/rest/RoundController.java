package hr.fer.web2.projekt1.rest;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import hr.fer.web2.projekt1.domain.dto.RoundDTO;
import hr.fer.web2.projekt1.service.RoundService;

@CrossOrigin
@RestController
@RequestMapping("rounds")
public class RoundController {
    private final RoundService roundService;

    public RoundController(RoundService roundService) {
        this.roundService = roundService;
    }

    @GetMapping("")
    public ResponseEntity<List<RoundDTO>> getAllRounds() {
        return ResponseEntity.ok(roundService.getAllRounds());
    }
}
