package hr.fer.web2.projekt1.rest;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import hr.fer.web2.projekt1.domain.dto.RoundDTO;
import hr.fer.web2.projekt1.service.RoundService;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;

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

    @PostMapping("")
    @SecurityRequirement(name = "BearerAuthentication")
    @PreAuthorize("!hasRole('')")
    public ResponseEntity<Void> addRound(@RequestBody Integer ordinalNumber) {
        roundService.addRound(ordinalNumber);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
