package hr.fer.web2.projekt1.persistance;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import hr.fer.web2.projekt1.domain.helpers.RoundQuery;
import hr.fer.web2.projekt1.domain.models.Round;

@Repository
public interface RoundRepository extends JpaRepository<Round, Long> {

    @Query("""
            SELECT new hr.fer.web2.projekt1.domain.helpers.RoundQuery(r.id,
                r.ordinalNumber,
                (SELECT COUNT(round1)
                FROM Round round1
                WHERE round1.id=r.id))
            FROM Round r
            """)
    List<RoundQuery> getAllRounds();
}
