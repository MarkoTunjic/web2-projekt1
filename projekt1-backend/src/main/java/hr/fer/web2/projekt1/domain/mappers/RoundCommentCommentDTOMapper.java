package hr.fer.web2.projekt1.domain.mappers;

import org.mapstruct.Mapper;

import hr.fer.web2.projekt1.domain.dto.CommentDTO;
import hr.fer.web2.projekt1.domain.models.RoundComment;

@Mapper(componentModel = "spring")
public interface RoundCommentCommentDTOMapper {
    CommentDTO roundCommentToCommentDTO(RoundComment roundComment);
}
