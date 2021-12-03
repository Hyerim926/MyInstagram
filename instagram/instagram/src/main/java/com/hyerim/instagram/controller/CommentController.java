package com.hyerim.instagram.controller;

import com.hyerim.instagram.entity.Comments;
import com.hyerim.instagram.service.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@RequestMapping("/comments")
public class CommentController {

    @Autowired
    CommentService commentService;

    @PostMapping("")
    private Comments submitComment(@RequestBody Comments comment) {
        return commentService.submitCommentToDB(comment);
    }

    @GetMapping("/{postId}")
    private ArrayList<Comments> getCommentsForPost(@PathVariable("postId") String postId){
        return commentService.getAllCommentsForDB(postId);
    }
}
