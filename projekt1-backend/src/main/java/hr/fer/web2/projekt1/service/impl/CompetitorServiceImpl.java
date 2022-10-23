package hr.fer.web2.projekt1.service.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import hr.fer.web2.projekt1.domain.dto.CompetitorDTO;
import hr.fer.web2.projekt1.persistance.CompetitorRepository;
import hr.fer.web2.projekt1.service.CompetitorService;

@Service
public class CompetitorServiceImpl implements CompetitorService {
    private final CompetitorRepository competitorRepository;

    public CompetitorServiceImpl(CompetitorRepository competitorRepository) {
        this.competitorRepository = competitorRepository;
    }

    @Override
    public List<CompetitorDTO> getAllCompetitors() {
        return competitorRepository.findAll().stream().map(competitor -> new CompetitorDTO(competitor.getId(),
                competitor.getName(), competitor.getAlias(), competitor.getPoints().getPoints()))
                .collect(Collectors.toList());
    }

}
