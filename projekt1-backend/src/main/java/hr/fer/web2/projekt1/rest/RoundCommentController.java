package hr.fer.web2.projekt1.rest;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import hr.fer.web2.projekt1.domain.dto.CommentDTO;
import hr.fer.web2.projekt1.service.RoundCommentService;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;

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

    @PostMapping("/round/{roundId}")
    @SecurityRequirement(name = "BearerAuthentication")
    @PreAuthorize("!hasRole('')")
    public ResponseEntity<CommentDTO> newComment(@PathVariable Long roundId, @RequestBody String commentText) {
        return new ResponseEntity<>(roundCommentService.newComment(roundId, commentText), HttpStatus.CREATED);
    }

    @DeleteMapping("/{commentId}")
    @SecurityRequirement(name = "BearerAuthentication")
    @PreAuthorize("!hasRole('')")
    public ResponseEntity<Void> deleteComment(@PathVariable Long commentId) {
        roundCommentService.deleteComment(commentId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
