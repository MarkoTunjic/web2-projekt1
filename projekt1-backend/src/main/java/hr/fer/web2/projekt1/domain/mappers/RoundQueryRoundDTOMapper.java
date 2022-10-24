package hr.fer.web2.projekt1.domain.mappers;

import org.mapstruct.Mapper;

import hr.fer.web2.projekt1.domain.dto.RoundDTO;
import hr.fer.web2.projekt1.domain.helpers.RoundQuery;

@Mapper(componentModel = "spring")
public interface RoundQueryRoundDTOMapper {
    RoundDTO roundQueryToRoundDTO(RoundQuery roundQuery);
}
