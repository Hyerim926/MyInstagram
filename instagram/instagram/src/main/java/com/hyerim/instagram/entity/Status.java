package com.hyerim.instagram.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.sql.Timestamp;

@Entity(name = "Status")
@Getter @Setter
public class Status {

    @Id
    @GeneratedValue
    private int id;

    private String statusId;
    private String userId;
    private String path;
    private String userName;
    private Timestamp timeStamp;

    public Status() {
        super();
    }
    public Status(int id, String statusId, String userId, String path, Timestamp timeStamp) {
        super();
        this.id = id;
        this.statusId = statusId;
        this.userId = userId;
        this.path = path;
        this.timeStamp = timeStamp;
    }
}
