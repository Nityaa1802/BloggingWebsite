package com.example.onlybloggers.service_Impl;

import com.example.onlybloggers.dao.BlogRepo;
import com.example.onlybloggers.entity.Blog;
import com.example.onlybloggers.service.BlogService;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Transactional
public class BlogServiceImpl implements BlogService {

    @Autowired
    BlogRepo blogRepo;

    @Override
    public List<Blog> getAllBlogs() {
        List<Blog> blogList=blogRepo.getAllBlogs();
        return blogList;
    }

    @Override
    public Blog postBlog(Blog blog) {
        Blog savedBlog=blogRepo.save(blog);
        return savedBlog;
    }

    @Override
    public Blog getBlog(long blogId) throws Error {
        Blog blog=blogRepo.getBlogByBlogId(blogId);
        if(blog==null)
        {
            throw new Error("Blog Not Found");
        }
        return blog;
    }

    @Override
    public void deleteBlog(long blogId) {
        blogRepo.deleteById(blogId);
    }

    @Override
    public List<Blog> getBlogsByAuthor(String author) {
        List<Blog> blogList=blogRepo.getBlogsByAuthor(author);
        return blogList;
    }

//    @Override
//    public List<Blog> getBlogbyLikes(int pageNumber, int pageSize) {
//
//        Pageable pageable= PageRequest.of(pageNumber,pageSize,Sort.by("likes").descending());
//        Page<Blog> page=blogRepo.getBlogByLikes(pageable);
//        List<Blog> blogList=page.getContent();
//        return blogList;
//    }
}
