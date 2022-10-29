package hr.fer.web2.projekt1.service.impl;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import hr.fer.web2.projekt1.domain.dto.CommentDTO;
import hr.fer.web2.projekt1.domain.helpers.PrincipalType;
import hr.fer.web2.projekt1.domain.mappers.RoundCommentCommentDTOMapper;
import hr.fer.web2.projekt1.domain.models.Principal;
import hr.fer.web2.projekt1.domain.models.Round;
import hr.fer.web2.projekt1.domain.models.RoundComment;
import hr.fer.web2.projekt1.persistance.RoundCommentRepository;
import hr.fer.web2.projekt1.persistance.RoundRepository;
import hr.fer.web2.projekt1.service.PrincipalService;
import hr.fer.web2.projekt1.service.RoundCommentService;

@Service
public class RoundCommentServiceImpl implements RoundCommentService {
    private final RoundCommentRepository roundCommentRepository;
    private final RoundCommentCommentDTOMapper roundCommentCommentDTOMapper;
    private final PrincipalService principalService;
    private final RoundRepository roundRepository;

    public RoundCommentServiceImpl(RoundCommentRepository roundCommentRepository,
            RoundCommentCommentDTOMapper roundCommentCommentDTOMapper, PrincipalService principalService,
            RoundRepository roundRepository) {
        this.roundCommentRepository = roundCommentRepository;
        this.roundCommentCommentDTOMapper = roundCommentCommentDTOMapper;
        this.principalService = principalService;
        this.roundRepository = roundRepository;
    }

    @Override
    public List<CommentDTO> getAllCommentsForRoundId(Long roundId) {
        return roundCommentRepository.findByRoundId(roundId).stream()
                .map(roundComment -> roundCommentCommentDTOMapper
                        .roundCommentToCommentDTO(roundComment))
                .toList();
    }

    @Override
    public CommentDTO newComment(Long roundId, String commentText) {
        Principal principal = principalService.getCurrentPrincipal();
        Optional<Round> round = roundRepository.findById(roundId);
        if (round.isEmpty())
            throw new IllegalArgumentException("Unexisting round");
        RoundComment newComment = new RoundComment(commentText, new Date(), principal, round.get());
        return roundCommentCommentDTOMapper.roundCommentToCommentDTO(roundCommentRepository.save(newComment));
    }

    @Override
    public void deleteComment(Long commentId) {
        Principal principal = principalService.getCurrentPrincipal();
        Optional<RoundComment> comment = roundCommentRepository.findById(commentId);
        if (comment.isEmpty())
            throw new IllegalArgumentException("Invalid comment id");
        if (!principal.getPrincipalType().equals(PrincipalType.ADMIN))
            if (!principal.equals(comment.get().getPrincipal()))
                throw new IllegalArgumentException("This user can not delete comment with id: " + commentId);
        roundCommentRepository.deleteById(commentId);
    }

    @Override
    public void updateComment(Long commentId, String commentText) {
        Principal principal = principalService.getCurrentPrincipal();
        Optional<RoundComment> optionalComment = roundCommentRepository.findById(commentId);
        if (optionalComment.isEmpty())
            throw new IllegalArgumentException("Invalid comment id");
        RoundComment comment = optionalComment.get();
        if (!principal.equals(comment.getPrincipal()))
            throw new IllegalArgumentException("This user can not update comment with id: " + commentId);
        comment.setCommentText(commentText);
        roundCommentRepository.save(comment);
    }
}
