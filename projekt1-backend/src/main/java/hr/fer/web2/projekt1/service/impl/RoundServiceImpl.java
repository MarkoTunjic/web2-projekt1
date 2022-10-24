package hr.fer.web2.projekt1.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import hr.fer.web2.projekt1.domain.dto.RoundDTO;
import hr.fer.web2.projekt1.domain.mappers.RoundQueryRoundDTOMapper;
import hr.fer.web2.projekt1.persistance.RoundRepository;
import hr.fer.web2.projekt1.service.RoundService;

@Service
public class RoundServiceImpl implements RoundService {
    private final RoundRepository roundRepository;
    private final RoundQueryRoundDTOMapper roundQueryRoundDTOMapper;

    public RoundServiceImpl(RoundRepository roundRepository, RoundQueryRoundDTOMapper roundQueryRoundDTOMapper) {
        this.roundRepository = roundRepository;
        this.roundQueryRoundDTOMapper = roundQueryRoundDTOMapper;
    }

    @Override
    public List<RoundDTO> getAllRounds() {
        return roundRepository.getAllRounds().stream()
                .map(round -> roundQueryRoundDTOMapper.roundQueryToRoundDTO(round)).toList();
    }

}
