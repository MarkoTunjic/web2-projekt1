package hr.fer.web2.projekt1.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import hr.fer.web2.projekt1.domain.dto.CompetitorDTO;
import hr.fer.web2.projekt1.domain.mappers.CompetitorCompetitorDTOMapper;
import hr.fer.web2.projekt1.persistance.CompetitorRepository;
import hr.fer.web2.projekt1.service.CompetitorService;

@Service
public class CompetitorServiceImpl implements CompetitorService {
    private final CompetitorRepository competitorRepository;
    private final CompetitorCompetitorDTOMapper competitorCompetitorDTOMapper;

    public CompetitorServiceImpl(CompetitorRepository competitorRepository,
            CompetitorCompetitorDTOMapper competitorCompetitorDTOMapper) {
        this.competitorRepository = competitorRepository;
        this.competitorCompetitorDTOMapper = competitorCompetitorDTOMapper;
    }

    @Override
    public List<CompetitorDTO> getAllCompetitors() {
        return competitorRepository.findAll().stream()
                .map(competitor -> competitorCompetitorDTOMapper.competitorToCompetitorDTO(competitor))
                .toList();
    }

}
