package com.hyerim.instagram.controller;

import com.hyerim.instagram.entity.Post;
import com.hyerim.instagram.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@RequestMapping("/post")
public class PostController {

    @Autowired
    PostService postService;

    @PostMapping("")
    private Post submitUserPost(@RequestBody Post post) {
        return postService.submitPostToDB(post);
    }

    @GetMapping("")
    private ArrayList<Post> getAllPost() {
        return postService.retrievePostFromDB();
    }


}
