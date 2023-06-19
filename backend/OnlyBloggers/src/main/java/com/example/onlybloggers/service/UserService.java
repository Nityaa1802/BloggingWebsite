package com.example.onlybloggers.service;

import com.example.onlybloggers.entity.User;

public interface UserService {

    public User createUser(User user);

    public User getUser(String email);

    public User saveBlog(long blogId,String email) throws Exception;
    public User likeBlog(long blogId,String email) throws Exception;
}
