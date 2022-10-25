package hr.fer.web2.projekt1.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import hr.fer.web2.projekt1.domain.dto.CommentDTO;
import hr.fer.web2.projekt1.domain.mappers.RoundCommentCommentDTOMapper;
import hr.fer.web2.projekt1.persistance.RoundCommentRepository;
import hr.fer.web2.projekt1.service.RoundCommentService;

@Service
public class RoundCommentServiceImpl implements RoundCommentService {
    private final RoundCommentRepository roundCommentRepository;
    private final RoundCommentCommentDTOMapper roundCommentCommentDTOMapper;

    public RoundCommentServiceImpl(RoundCommentRepository roundCommentRepository,
            RoundCommentCommentDTOMapper roundCommentCommentDTOMapper) {
        this.roundCommentRepository = roundCommentRepository;
        this.roundCommentCommentDTOMapper = roundCommentCommentDTOMapper;
    }

    @Override
    public List<CommentDTO> getAllCommentsForRoundId(Long roundId) {
        return roundCommentRepository.findByRoundId(roundId).stream()
                .map(roundComment -> roundCommentCommentDTOMapper
                        .roundCommentToCommentDTO(roundComment))
                .toList();
    }
}
