package com.example.onlybloggers.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Entity
@Table
@Data
public class User {
    @Id
    @Column
    private String email;

    @Column
    private String name;


    @Column
    @ManyToMany
    private List<Blog> savedPost;


    @Column
    @ManyToMany
    private List<Blog> likedPost;




}
