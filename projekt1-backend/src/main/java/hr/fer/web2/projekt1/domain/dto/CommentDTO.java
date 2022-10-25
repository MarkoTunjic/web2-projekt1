package hr.fer.web2.projekt1.domain.dto;

import java.util.Date;

public class CommentDTO {
    private Long id;
    private String commentText;
    private Date datePosted;
    private PrincipalDTO principal;

    public CommentDTO() {
    }

    public CommentDTO(Long id, String commentText, Date datePosted, PrincipalDTO principal) {
        this.id = id;
        this.commentText = commentText;
        this.datePosted = datePosted;
        this.principal = principal;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCommentText() {
        return commentText;
    }

    public void setCommentText(String commentText) {
        this.commentText = commentText;
    }

    public Date getDatePosted() {
        return datePosted;
    }

    public void setDatePosted(Date datePosted) {
        this.datePosted = datePosted;
    }

    public PrincipalDTO getPrincipal() {
        return principal;
    }

    public void setPrincipal(PrincipalDTO principal) {
        this.principal = principal;
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
        CommentDTO other = (CommentDTO) obj;
        if (id == null) {
            if (other.id != null)
                return false;
        } else if (!id.equals(other.id))
            return false;
        return true;
    }

}
