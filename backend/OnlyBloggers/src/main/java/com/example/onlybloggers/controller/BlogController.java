package com.example.onlybloggers.controller;

import com.example.onlybloggers.entity.Blog;
import com.example.onlybloggers.response.ApiResponse;
import com.example.onlybloggers.service_Impl.BlogServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/blogs")
@CrossOrigin("*")
public class BlogController {
    @Autowired
    BlogServiceImpl blogService;

    @GetMapping("/")
    public ResponseEntity<List<Blog>> getAllBlog(){
        List<Blog> blogList=blogService.getAllBlogs();
        return ResponseEntity.ok(blogList);
    }

    @PostMapping("/createBlog")
    public ResponseEntity<ApiResponse> createBlog(@RequestBody Blog blog){
        Blog savedBlog=blogService.postBlog(blog);
        if(savedBlog!=null)
        return ResponseEntity.ok(new ApiResponse("Blog is posted",true));
        else
            return new ResponseEntity<>(new ApiResponse("Something went wrong.Blog not posted",false), HttpStatus.NOT_ACCEPTABLE);
    }

    @GetMapping("/{blogId}")
    public ResponseEntity<Blog> getBlogById(@PathVariable long blogId){
        Blog blog =blogService.getBlog(blogId);
        return ResponseEntity.ok(blog);
    }

    @DeleteMapping("/{blogId}")
        public ResponseEntity deleteBlog(@PathVariable long blogId){
        blogService.deleteBlog(blogId);
        return new ResponseEntity<>(HttpStatus.OK);
        }

        @GetMapping("/author/{author}")
        public ResponseEntity<List<Blog>> getBlogsByAuthor(@PathVariable String author){
        List<Blog> blogList=blogService.getBlogsByAuthor(author);
        return ResponseEntity.ok(blogList);
        }
    }
