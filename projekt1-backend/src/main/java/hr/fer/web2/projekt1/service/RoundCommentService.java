package hr.fer.web2.projekt1.service;

import java.util.List;

import hr.fer.web2.projekt1.domain.dto.CommentDTO;

public interface RoundCommentService {
    List<CommentDTO> getAllCommentsForRoundId(Long roundId);

    CommentDTO newComment(Long roundId, String commentText);

    void deleteComment(Long commentId);
}
