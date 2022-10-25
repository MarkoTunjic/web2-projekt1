package hr.fer.web2.projekt1.domain.mappers;

import org.mapstruct.Mapper;

import hr.fer.web2.projekt1.domain.dto.PrincipalDTO;
import hr.fer.web2.projekt1.domain.models.Principal;

@Mapper(componentModel = "spring")
public interface PrincipalPrincipalDTOMapper {
    PrincipalDTO principalToPrincipalDTO(Principal principal);
}
