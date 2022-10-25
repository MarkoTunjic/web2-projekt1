package hr.fer.web2.projekt1.rest;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import hr.fer.web2.projekt1.domain.dto.CompetitorDTO;
import hr.fer.web2.projekt1.service.CompetitorService;

@CrossOrigin
@RestController
@RequestMapping("competitors")
public class CompetitorController {
    private final CompetitorService competitorService;

    public CompetitorController(CompetitorService competitorService) {
        this.competitorService = competitorService;
    }

    @GetMapping
    public ResponseEntity<List<CompetitorDTO>> getAllCompetitors() {
        return ResponseEntity.ok(competitorService.getAllCompetitors());
    }
}
