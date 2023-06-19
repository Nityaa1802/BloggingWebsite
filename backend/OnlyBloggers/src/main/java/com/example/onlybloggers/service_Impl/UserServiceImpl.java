package com.example.onlybloggers.service_Impl;

import com.example.onlybloggers.dao.BlogRepo;
import com.example.onlybloggers.dao.UserRepo;
import com.example.onlybloggers.entity.Blog;
import com.example.onlybloggers.entity.User;
import com.example.onlybloggers.service.UserService;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class UserServiceImpl implements UserService {

    @Autowired
    UserRepo userRepo;

    @Autowired
    BlogRepo blogRepo;

    @Override
    public User createUser(User user) {
        User user1=userRepo.getUserByEmail(user.getEmail());
        if(user1==null)
        {  user1=userRepo.save(user);}
        return user1;
    }

    @Override
    public User getUser(String email) {
        User user=userRepo.getUserByEmail(email);
        return user;
    }

    @Override
    public User saveBlog(long blogId,String email) throws Exception {
        Blog blog=blogRepo.getBlogByBlogId(blogId);
        if(blog==null){
            throw new Exception("Blog not found");
        }
        User user=userRepo.getUserByEmail(email);
        if(user==null){
            throw new Exception("User Not Found");
        }
        user.getSavedPost().add(blog);
        User savedUser=userRepo.save(user);
        return savedUser;
    }

    @Override
    public User likeBlog(long blogId,String email) throws Exception {
        Blog blog=blogRepo.getBlogByBlogId(blogId);
        if(blog==null){
            throw new Exception("Blog not found");
        }
        User user=userRepo.getUserByEmail(email);
        if(user==null){
            throw new Exception("User Not Found");
        }
        blog.setLikes(blog.getLikes()+1);
        blogRepo.save(blog);
        user.getLikedPost().add(blog);
        User savedUser=userRepo.save(user);

        return savedUser;
    }


}
