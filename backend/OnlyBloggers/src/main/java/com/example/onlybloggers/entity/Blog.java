package com.example.onlybloggers.entity;

import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;

import java.sql.Date;

@Data
@Table
@Entity
public class Blog {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private long blogId;
    @Column
    private String title;
    @Column
    private String description;
    @Column
    private String body;
    @Column
    @CreationTimestamp
    private Date uploadDate;
    @Column
    private String author;
    @Column
    private String img;
}
