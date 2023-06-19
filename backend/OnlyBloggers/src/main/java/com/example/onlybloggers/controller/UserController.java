package com.example.onlybloggers.controller;

import com.example.onlybloggers.entity.User;
import com.example.onlybloggers.response.ApiResponse;
import com.example.onlybloggers.service_Impl.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("*")
@RequestMapping("/users")
public class UserController {

    @Autowired
    UserServiceImpl userService;

    @PostMapping("/createUser")
    public ResponseEntity<User> createUser(@RequestBody User user){
        System.out.println("createUser");
        User savedUser=userService.createUser(user);
        return ResponseEntity.ok(savedUser);
    }

    @GetMapping("/userExist/{email}")
    public ResponseEntity<ApiResponse> getUser(@PathVariable String email){
        System.out.println("checkUSer");
        User user=userService.getUser(email);
        if (user==null){
            return ResponseEntity.ok(new ApiResponse("User Not Found",false));
        }
        else {
            return ResponseEntity.ok(new ApiResponse("User Found",true));
        }
    }
    @GetMapping("/{email}")
    public ResponseEntity<User> getUserObject(@PathVariable String email){
        System.out.println("getUSer");
        User user=userService.getUser(email);

            return ResponseEntity.ok(user);

    }
    @PutMapping("/saveBlog")
    public ResponseEntity<ApiResponse> savePost(@RequestParam("blogId") long blogId,@RequestParam("email") String email) throws Exception {
        System.out.println("saveBlog");
        User user=userService.saveBlog(blogId,email);
        if (user==null){
            return ResponseEntity.ok(new ApiResponse("Blog saved ",false));
        }else {
            return ResponseEntity.ok(new ApiResponse("Blog not saved",true));
        }
    }
    @PutMapping("/likeBlog")
    public ResponseEntity<ApiResponse> LikePost(@RequestParam("blogId") long blogId,@RequestParam("email") String email) throws Exception {
        System.out.println("likeBlog");
        User user=userService.likeBlog(blogId,email);
        if (user==null){
            return ResponseEntity.ok(new ApiResponse("Blog saved ",false));
        }else {
            return ResponseEntity.ok(new ApiResponse("Blog not saved",true));
        }
    }


}
