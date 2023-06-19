package com.example.onlybloggers.dao;

import com.example.onlybloggers.entity.Blog;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.*;


@Repository
public interface BlogRepo extends JpaRepository<Blog,Long> {

    @Query(value = "select * from Blog ",nativeQuery = true)
    public List<Blog> getAllBlogs();

    @Query(value = "select b from Blog b where b.blogId= :blogId")
    public Blog getBlogByBlogId(@PathVariable long blogId);

    @Query(value = "select b from Blog b where b.author= :author")
    public List<Blog> getBlogsByAuthor(@PathVariable String author);

//    public Page<Blog> getBlogByLikes(Pageable pageable);
}
