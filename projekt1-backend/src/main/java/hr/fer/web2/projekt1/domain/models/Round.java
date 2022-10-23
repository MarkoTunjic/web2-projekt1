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
import javax.persistence.OrderBy;
import javax.persistence.Table;

@Entity
@Table(name = "round")
public class Round {
    private Long id;
    private Integer ordinalNumber;
    private List<RoundComment> roundComments = new ArrayList<>();
    private List<Game> games = new ArrayList<>();

    public Round() {
    }

    public Round(Integer ordinalNumber, List<RoundComment> roundComments, List<Game> games) {
        this.ordinalNumber = ordinalNumber;
        this.roundComments = roundComments;
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

    @Column(nullable = false)
    public Integer getOrdinalNumber() {
        return ordinalNumber;
    }

    public void setOrdinalNumber(Integer ordinalNumber) {
        this.ordinalNumber = ordinalNumber;
    }

    @OneToMany(mappedBy = "round", fetch = FetchType.LAZY, cascade = CascadeType.PERSIST, orphanRemoval = true)
    @OrderBy("datePosted")
    public List<RoundComment> getRoundComments() {
        return roundComments;
    }

    public void setRoundComments(List<RoundComment> roundComments) {
        this.roundComments = roundComments;
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
        Round other = (Round) obj;
        if (id == null) {
            if (other.id != null)
                return false;
        } else if (!id.equals(other.id))
            return false;
        return true;
    }

}
