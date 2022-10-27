package hr.fer.web2.projekt1.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import hr.fer.web2.projekt1.domain.dto.RoundDTO;
import hr.fer.web2.projekt1.domain.mappers.RoundQueryRoundDTOMapper;
import hr.fer.web2.projekt1.domain.models.Round;
import hr.fer.web2.projekt1.persistance.RoundRepository;
import hr.fer.web2.projekt1.service.PrincipalService;
import hr.fer.web2.projekt1.service.RoundService;

@Service
public class RoundServiceImpl implements RoundService {
    private final RoundRepository roundRepository;
    private final RoundQueryRoundDTOMapper roundQueryRoundDTOMapper;
    private final PrincipalService principalService;

    public RoundServiceImpl(RoundRepository roundRepository, RoundQueryRoundDTOMapper roundQueryRoundDTOMapper,
            PrincipalService principalService) {
        this.roundRepository = roundRepository;
        this.roundQueryRoundDTOMapper = roundQueryRoundDTOMapper;
        this.principalService = principalService;
    }

    @Override
    public List<RoundDTO> getAllRounds() {
        return roundRepository.getAllRounds().stream()
                .map(round -> roundQueryRoundDTOMapper.roundQueryToRoundDTO(round))
                .sorted((r1, r2) -> r1.getOrdinalNumber().compareTo(r2.getOrdinalNumber())).toList();
    }

    @Override
    public void addRound(Integer ordinalNumber) {
        if (!principalService.isCurrentUserAdmin())
            throw new IllegalArgumentException("Only admins can create new round");
        Round round = new Round();
        round.setOrdinalNumber(ordinalNumber);

        roundRepository.save(round);
    }

}
