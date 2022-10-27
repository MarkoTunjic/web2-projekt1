package hr.fer.web2.projekt1.domain.mappers;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import hr.fer.web2.projekt1.domain.dto.GameDTO;
import hr.fer.web2.projekt1.domain.models.Game;

@Mapper(componentModel = "spring")
public interface GameGameDTOMapper {
    @Mapping(target = "roundOrdinalNumber", source = "game.round.ordinalNumber")
    @Mapping(target = "firstCompetitor.pointsSum", source = "game.firstCompetitor.points.points")
    @Mapping(target = "secondCompetitor.pointsSum", source = "game.secondCompetitor.points.points")
    GameDTO gameToGameDTO(Game game);
}
