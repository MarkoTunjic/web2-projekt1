package hr.fer.web2.projekt1.domain.dto;

import java.util.Date;

public class NewGameRequest {
    private Long firstCompetitorId;
    private Long secondCompetitorId;
    private Integer firstCompetitorScore;
    private Integer secondCompetitorScore;
    private Date date;

    public NewGameRequest() {
    }

    public NewGameRequest(Long firstCompetitorId, Long secondCompetitorId, Integer firstCompetitorScore,
            Integer secondCompetitorScore, Date date) {
        this.firstCompetitorId = firstCompetitorId;
        this.secondCompetitorId = secondCompetitorId;
        this.firstCompetitorScore = firstCompetitorScore;
        this.secondCompetitorScore = secondCompetitorScore;
        this.date = date;
    }

    public Long getFirstCompetitorId() {
        return firstCompetitorId;
    }

    public void setFirstCompetitorId(Long firstCompetitorId) {
        this.firstCompetitorId = firstCompetitorId;
    }

    public Long getSecondCompetitorId() {
        return secondCompetitorId;
    }

    public void setSecondCompetitorId(Long secondCompetitorId) {
        this.secondCompetitorId = secondCompetitorId;
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

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((firstCompetitorId == null) ? 0 : firstCompetitorId.hashCode());
        result = prime * result + ((secondCompetitorId == null) ? 0 : secondCompetitorId.hashCode());
        result = prime * result + ((date == null) ? 0 : date.hashCode());
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
        NewGameRequest other = (NewGameRequest) obj;
        if (firstCompetitorId == null) {
            if (other.firstCompetitorId != null)
                return false;
        } else if (!firstCompetitorId.equals(other.firstCompetitorId))
            return false;
        if (secondCompetitorId == null) {
            if (other.secondCompetitorId != null)
                return false;
        } else if (!secondCompetitorId.equals(other.secondCompetitorId))
            return false;
        if (date == null) {
            if (other.date != null)
                return false;
        } else if (!date.equals(other.date))
            return false;
        return true;
    }

}
