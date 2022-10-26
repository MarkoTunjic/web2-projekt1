package hr.fer.web2.projekt1.domain.dto;

import java.util.Date;

public class GameDTO {
    private Long id;
    private CompetitorDTO firstCompetitor;
    private CompetitorDTO secondCompetitor;
    private Date scheduledDate;
    private Integer firstCompetitorScore;
    private Integer secondCompetitorScore;
    private Integer roundOrdinalNumber;

    public GameDTO() {
    }

    public GameDTO(CompetitorDTO firstCompetitor, CompetitorDTO secondCompetitor, Date scheduledDate,
            Integer firstCompetitorScore, Integer secondCompetitorScore, Integer roundOrdinalNumber, Long id) {
        this.firstCompetitor = firstCompetitor;
        this.secondCompetitor = secondCompetitor;
        this.scheduledDate = scheduledDate;
        this.firstCompetitorScore = firstCompetitorScore;
        this.secondCompetitorScore = secondCompetitorScore;
        this.roundOrdinalNumber = roundOrdinalNumber;
        this.id = id;
    }

    public CompetitorDTO getFirstCompetitor() {
        return firstCompetitor;
    }

    public void setFirstCompetitor(CompetitorDTO firstCompetitor) {
        this.firstCompetitor = firstCompetitor;
    }

    public CompetitorDTO getSecondCompetitor() {
        return secondCompetitor;
    }

    public void setSecondCompetitor(CompetitorDTO secondCompetitor) {
        this.secondCompetitor = secondCompetitor;
    }

    public Date getScheduledDate() {
        return scheduledDate;
    }

    public void setScheduledDate(Date scheduledDate) {
        this.scheduledDate = scheduledDate;
    }

    public Integer getFirstCompetitorScore() {
        return firstCompetitorScore;
    }

    public void setFirstCompetitorScore(Integer firstCompetitorScore) {
        this.firstCompetitorScore = firstCompetitorScore;
    }

    public Integer getSecondCompetitorScore() {
        return secondCompetitorScore;
    }

    public void setSecondCompetitorScore(Integer secondCompetitorScore) {
        this.secondCompetitorScore = secondCompetitorScore;
    }

    public Integer getRoundOrdinalNumber() {
        return roundOrdinalNumber;
    }

    public void setRoundOrdinalNumber(Integer roundOrdinalNumber) {
        this.roundOrdinalNumber = roundOrdinalNumber;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
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
        GameDTO other = (GameDTO) obj;
        if (id == null) {
            if (other.id != null)
                return false;
        } else if (!id.equals(other.id))
            return false;
        return true;
    }

}
