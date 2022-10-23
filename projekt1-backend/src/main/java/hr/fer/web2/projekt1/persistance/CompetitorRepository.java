package hr.fer.web2.projekt1.persistance;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import hr.fer.web2.projekt1.domain.models.Competitor;

@Repository
public interface CompetitorRepository extends JpaRepository<Competitor, Long> {
}
