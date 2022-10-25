package hr.fer.web2.projekt1.persistance;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import hr.fer.web2.projekt1.domain.models.RoundComment;

public interface RoundCommentRepository extends JpaRepository<RoundComment, Long> {
    List<RoundComment> findByRoundId(Long roundId);
}
