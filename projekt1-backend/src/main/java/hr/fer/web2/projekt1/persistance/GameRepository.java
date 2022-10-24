package hr.fer.web2.projekt1.persistance;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import hr.fer.web2.projekt1.domain.models.Game;

@Repository
public interface GameRepository extends JpaRepository<Game, Long> {
    List<Game> findByRoundId(Long roundId);
}
