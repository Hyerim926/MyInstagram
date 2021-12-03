package com.hyerim.instagram.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.sql.Timestamp;

@Entity(name = "Comments")
@Getter @Setter
public class Comments {

    @Id
    @GeneratedValue
    private int id;

    private String commentId;
    private String userId;
    private String postId;
    private Timestamp timeStamp;
    private String comment;
    private String userName;

    public Comments() {
        super();
    }

    public Comments(int id, String commentId, String userId, String postId, Timestamp timeStamp, String comment) {
        super();
        this.id = id;
        this.commentId = commentId;
        this.userId = userId;
        this.postId = postId;
        this.timeStamp = timeStamp;
        this.comment = comment;
    }

}
