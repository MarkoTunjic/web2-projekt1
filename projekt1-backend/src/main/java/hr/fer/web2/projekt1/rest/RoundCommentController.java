package hr.fer.web2.projekt1.rest;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import hr.fer.web2.projekt1.domain.dto.CommentDTO;
import hr.fer.web2.projekt1.service.RoundCommentService;

@RestController
@CrossOrigin
@RequestMapping("roundComments")
public class RoundCommentController {
    private final RoundCommentService roundCommentService;

    public RoundCommentController(RoundCommentService roundCommentService) {
        this.roundCommentService = roundCommentService;
    }

    @GetMapping("round/{roundId}")
    public ResponseEntity<List<CommentDTO>> getAllCommentsForRound(@PathVariable Long roundId) {
        return ResponseEntity.ok(roundCommentService.getAllCommentsForRoundId(roundId));
    }
}
