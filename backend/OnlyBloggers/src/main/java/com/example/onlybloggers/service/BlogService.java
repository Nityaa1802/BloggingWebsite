package com.example.onlybloggers.service;

import com.example.onlybloggers.entity.Blog;

import java.util.List;

public interface BlogService {
    public List<Blog> getAllBlogs();

    public Blog postBlog(Blog blog);

    public Blog getBlog(long blogId);

    public void deleteBlog(long bloId);

    public List<Blog> getBlogsByAuthor(String author);

//    public  List<Blog> getBlogbyLikes(int pageNumber,int pageSize);
}
