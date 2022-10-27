package hr.fer.web2.projekt1.service;

import java.util.List;

import hr.fer.web2.projekt1.domain.dto.RoundDTO;

public interface RoundService {
    List<RoundDTO> getAllRounds();

    void addRound(Integer ordinalNumber);
}
