package com.example.onlybloggers.dao;

import com.example.onlybloggers.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.PathVariable;

@Repository
public interface UserRepo extends JpaRepository<User,String> {

    @Query("select u from User u where u.email= :email")
    User getUserByEmail(@PathVariable String email);
}
