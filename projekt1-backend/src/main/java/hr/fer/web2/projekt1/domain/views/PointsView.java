package hr.fer.web2.projekt1.domain.views;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.hibernate.annotations.Immutable;

import hr.fer.web2.projekt1.domain.models.Competitor;

@Entity
@Immutable
@Table(name = "points_view")
public class PointsView implements Serializable {
    private Competitor competitor;
    private Integer points;

    public PointsView() {
    }

    public PointsView(Competitor competitor, Integer points) {
        this.competitor = competitor;
        this.points = points;
    }

    @Id
    @OneToOne
    @JoinColumn
    public Competitor getCompetitor() {
        return competitor;
    }

    public void setCompetitor(Competitor competitor) {
        this.competitor = competitor;
    }

    @Column(nullable = false)
    public Integer getPoints() {
        return points;
    }

    public void setPoints(Integer points) {
        this.points = points;
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((competitor == null) ? 0 : competitor.hashCode());
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
        PointsView other = (PointsView) obj;
        if (competitor == null) {
            if (other.competitor != null)
                return false;
        } else if (!competitor.equals(other.competitor))
            return false;
        return true;
    }

}
