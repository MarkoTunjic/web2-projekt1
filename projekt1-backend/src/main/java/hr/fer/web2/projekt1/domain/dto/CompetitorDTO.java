package hr.fer.web2.projekt1.domain.dto;

public class CompetitorDTO {
    private Long id;
    private String name;
    private String alias;
    private Integer pointsSum;

    public CompetitorDTO() {
    }

    public CompetitorDTO(Long id, String name, String alias, Integer pointsSum) {
        this.id = id;
        this.name = name;
        this.alias = alias;
        this.pointsSum = pointsSum;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAlias() {
        return alias;
    }

    public void setAlias(String alias) {
        this.alias = alias;
    }

    public Integer getPointsSum() {
        return pointsSum;
    }

    public void setPointsSum(Integer pointsSum) {
        this.pointsSum = pointsSum;
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
        CompetitorDTO other = (CompetitorDTO) obj;
        if (id == null) {
            if (other.id != null)
                return false;
        } else if (!id.equals(other.id))
            return false;
        return true;
    }

}
