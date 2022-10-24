package hr.fer.web2.projekt1.domain.dto;

import java.util.Date;

public class GameDTO {
    private CompetitorDTO firstCompetitor;
    private CompetitorDTO secondCompetitor;
    private Date scheduledDate;
    private Integer firstCompetitorScore;
    private Integer secondCompetitorScore;
    private Integer roundOrdinalNumber;

    public GameDTO() {
    }

    public GameDTO(CompetitorDTO firstCompetitor, CompetitorDTO secondCompetitor, Date scheduledDate,
            Integer firstCompetitorScore, Integer secondCompetitorScore, Integer roundOrdinalNumber) {
        this.firstCompetitor = firstCompetitor;
        this.secondCompetitor = secondCompetitor;
        this.scheduledDate = scheduledDate;
        this.firstCompetitorScore = firstCompetitorScore;
        this.secondCompetitorScore = secondCompetitorScore;
        this.roundOrdinalNumber = roundOrdinalNumber;
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

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((firstCompetitor == null) ? 0 : firstCompetitor.hashCode());
        result = prime * result + ((secondCompetitor == null) ? 0 : secondCompetitor.hashCode());
        result = prime * result + ((scheduledDate == null) ? 0 : scheduledDate.hashCode());
        result = prime * result + ((roundOrdinalNumber == null) ? 0 : roundOrdinalNumber.hashCode());
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
        if (firstCompetitor == null) {
            if (other.firstCompetitor != null)
                return false;
        } else if (!firstCompetitor.equals(other.firstCompetitor))
            return false;
        if (secondCompetitor == null) {
            if (other.secondCompetitor != null)
                return false;
        } else if (!secondCompetitor.equals(other.secondCompetitor))
            return false;
        if (scheduledDate == null) {
            if (other.scheduledDate != null)
                return false;
        } else if (!scheduledDate.equals(other.scheduledDate))
            return false;
        if (roundOrdinalNumber == null) {
            if (other.roundOrdinalNumber != null)
                return false;
        } else if (!roundOrdinalNumber.equals(other.roundOrdinalNumber))
            return false;
        return true;
    }

}
