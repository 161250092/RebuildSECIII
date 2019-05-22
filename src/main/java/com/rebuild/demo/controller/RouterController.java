package com.rebuild.demo.controller;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class RouterController {

 /*
 返回值是页面在template的相对地址，不需要.html后缀
  */

        @GetMapping(value =  {"","/","/index"})
        public String index(){
                    return "index";
        }



        @GetMapping(value="/publisher/editorTask")
        public String editorTask(){
            return "publisher/editorTask";
        }







}
