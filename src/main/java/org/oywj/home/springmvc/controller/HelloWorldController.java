package org.oywj.home.springmvc.controller;
 
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.servlet.ModelAndView;
 
@Controller
public class HelloWorldController {
 
 @RequestMapping("/helloworld")
 public ModelAndView hello() {
 
  String helloWorldMessage = "Hello world from java2blog!";
  return new ModelAndView("hello", "message", helloWorldMessage);
  //return "redirect:/html/index.html";
 }

 @RequestMapping("/getMirror")
 @ResponseBody
 public String foo(@RequestBody String a){
 	return a;
 }

}
 
