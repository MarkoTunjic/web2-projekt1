package hr.fer.web2.projekt1.domain.models;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
@Table(name = "game")
public class Game {
    private Long id;
    private Date scheduledDate;
    private Integer firstCompetitorScore;
    private Integer secondCompetitorScore;
    private Competitor firstCompetitor;
    private Competitor secondCompetitor;
    private Round round;

    public Game() {
    }

    public Game(Date scheduledDate, Integer firstCompetitorScore, Integer secondCompetitorScore,
            Competitor firstCompetitor, Competitor secondCompetitor, Round round) {
        this.scheduledDate = scheduledDate;
        this.firstCompetitorScore = firstCompetitorScore;
        this.secondCompetitorScore = secondCompetitorScore;
        this.firstCompetitor = firstCompetitor;
        this.secondCompetitor = secondCompetitor;
        this.round = round;
    }

    @Id
    @GeneratedValue
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    @Temporal(TemporalType.TIMESTAMP)
    @Column(nullable = false)
    public Date getScheduledDate() {
        return scheduledDate;
    }

    public void setScheduledDate(Date scheduledDate) {
        this.scheduledDate = scheduledDate;
    }

    @Column(nullable = false)
    public Integer getFirstCompetitorScore() {
        return firstCompetitorScore;
    }

    public void setFirstCompetitorScore(Integer firstCompetitorScore) {
        this.firstCompetitorScore = firstCompetitorScore;
    }

    @Column(nullable = false)
    public Integer getSecondCompetitorScore() {
        return secondCompetitorScore;
    }

    public void setSecondCompetitorScore(Integer secondCompetitorScore) {
        this.secondCompetitorScore = secondCompetitorScore;
    }

    @ManyToOne
    @JoinColumn(nullable = false)
    public Competitor getFirstCompetitor() {
        return firstCompetitor;
    }

    public void setFirstCompetitor(Competitor firstCompetitor) {
        this.firstCompetitor = firstCompetitor;
    }

    @ManyToOne
    @JoinColumn(nullable = false)
    public Competitor getSecondCompetitor() {
        return secondCompetitor;
    }

    public void setSecondCompetitor(Competitor secondCompetitor) {
        this.secondCompetitor = secondCompetitor;
    }

    @ManyToOne
    @JoinColumn(nullable = false)
    public Round getRound() {
        return round;
    }

    public void setRound(Round round) {
        this.round = round;
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((id == null) ? 0 : id.hashCode());
        return result;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj)
            return true;
        if (obj == null)
            return false;
        if (getClass() != obj.getClass())
            return false;
        Game other = (Game) obj;
        if (id == null) {
            if (other.id != null)
                return false;
        } else if (!id.equals(other.id))
            return false;
        return true;
    }

}
