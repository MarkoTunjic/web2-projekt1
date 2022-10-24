package hr.fer.web2.projekt1.domain.mappers;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import hr.fer.web2.projekt1.domain.dto.CompetitorDTO;
import hr.fer.web2.projekt1.domain.models.Competitor;

@Mapper(componentModel = "spring")
public interface CompetitorCompetitorDTOMapper {
    @Mapping(target = "pointsSum", source = "competitor.points.points")
    CompetitorDTO competitorToCompetitorDTO(Competitor competitor);
}
