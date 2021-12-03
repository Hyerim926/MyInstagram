package com.hyerim.instagram.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.sql.Timestamp;

@Entity(name = "Post")
@Getter @Setter
public class Post {

    @Id
    @GeneratedValue
    private int Id;

    private String postId;
    private String userId;
    private String userName;
    private String postPath;
    private Timestamp timeStamp;
    private int likeCount;

    public Post() {
        super();
    }

    public Post(int id, String postId, String userId, String postPath, Timestamp timeStamp, int likeCount) {
        super();
        Id = id;
        this.postId = postId;
        this.userId = userId;
        this.postPath = postPath;
        this.timeStamp = timeStamp;
        this.likeCount = likeCount;
    }
}
