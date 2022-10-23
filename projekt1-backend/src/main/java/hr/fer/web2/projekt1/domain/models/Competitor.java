package hr.fer.web2.projekt1.domain.models;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.OrderBy;
import javax.persistence.Table;

import hr.fer.web2.projekt1.domain.views.PointsView;

@Entity
@Table(name = "competitor")
public class Competitor {
    private Long id;
    private String name;
    private String alias;
    private PointsView points;
    private List<Game> games = new ArrayList<>();

    public Competitor() {
    }

    public Competitor(String name, String alias, PointsView points, List<Game> games) {
        this.name = name;
        this.alias = alias;
        this.points = points;
        this.games = games;
    }

    @Id
    @GeneratedValue
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    @Column(length = 100, nullable = false)
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Column(length = 50, nullable = false)
    public String getAlias() {
        return alias;
    }

    public void setAlias(String alias) {
        this.alias = alias;
    }

    @OneToOne(mappedBy = "competitor")
    public PointsView getPoints() {
        return points;
    }

    public void setPoints(PointsView points) {
        this.points = points;
    }

    @OneToMany(mappedBy = "round", fetch = FetchType.LAZY, cascade = CascadeType.PERSIST, orphanRemoval = true)
    @OrderBy("scheduledDate")
    public List<Game> getGames() {
        return games;
    }

    public void setGames(List<Game> games) {
        this.games = games;
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
        Competitor other = (Competitor) obj;
        if (id == null) {
            if (other.id != null)
                return false;
        } else if (!id.equals(other.id))
            return false;
        return true;
    }

}
