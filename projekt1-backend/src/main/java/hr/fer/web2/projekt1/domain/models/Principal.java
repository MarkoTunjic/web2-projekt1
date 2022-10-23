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

import hr.fer.web2.projekt1.domain.helpers.PrincipalType;

@Entity
@Table(name = "principal")
public class Principal {
    private Long id;
    private String eMail;
    private PrincipalType principalType;
    private List<RoundComment> roundComments = new ArrayList<>();

    public Principal() {
    }

    public Principal(String eMail, PrincipalType principalType, List<RoundComment> roundComments) {
        this.eMail = eMail;
        this.principalType = principalType;
        this.roundComments = roundComments;
    }

    @Id
    @GeneratedValue
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    @Column(length = 320, nullable = false)
    public String getEMail() {
        return eMail;
    }

    public void setEMail(String eMail) {
        this.eMail = eMail;
    }

    @Column(nullable = false)
    public PrincipalType getPrincipalType() {
        return principalType;
    }

    public void setPrincipalType(PrincipalType principalType) {
        this.principalType = principalType;
    }

    @OneToMany(mappedBy = "author", fetch = FetchType.LAZY, cascade = CascadeType.PERSIST, orphanRemoval = true)
    @OrderBy("datePosted")
    public List<RoundComment> getRoundComments() {
        return roundComments;
    }

    public void setRoundComments(List<RoundComment> roundComments) {
        this.roundComments = roundComments;
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
        Principal other = (Principal) obj;
        if (id == null) {
            if (other.id != null)
                return false;
        } else if (!id.equals(other.id))
            return false;
        return true;
    }

}
