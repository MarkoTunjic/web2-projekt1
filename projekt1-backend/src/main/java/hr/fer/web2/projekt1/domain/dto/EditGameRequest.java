package hr.fer.web2.projekt1.domain.dto;

public class EditGameRequest {
    private Integer firstCompetitorScore;
    private Integer secondCompetitorScore;

    public EditGameRequest() {
    }

    public EditGameRequest(Integer firstCompetitorScore, Integer secondCompetitorScore) {
        this.firstCompetitorScore = firstCompetitorScore;
        this.secondCompetitorScore = secondCompetitorScore;
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

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((firstCompetitorScore == null) ? 0 : firstCompetitorScore.hashCode());
        result = prime * result + ((secondCompetitorScore == null) ? 0 : secondCompetitorScore.hashCode());
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
        EditGameRequest other = (EditGameRequest) obj;
        if (firstCompetitorScore == null) {
            if (other.firstCompetitorScore != null)
                return false;
        } else if (!firstCompetitorScore.equals(other.firstCompetitorScore))
            return false;
        if (secondCompetitorScore == null) {
            if (other.secondCompetitorScore != null)
                return false;
        } else if (!secondCompetitorScore.equals(other.secondCompetitorScore))
            return false;
        return true;
    }

}
