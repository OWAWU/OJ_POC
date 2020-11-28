package com.example.springboot;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.PostMapping;

import javax.servlet.http.HttpServletRequest;

@RestController
@RequestMapping("/api")
public class HelloController {

	@PostMapping("/ip")
	public ResponseEntity<String> ip (HttpServletRequest request){
		return ResponseEntity.ok(request.getRemoteAddr());
	}

	/*@RequestMapping("/")
	public String index() {
		return "Hello, World!";
	}

	@RequestMapping("toPython")
	public String toPython() {
		return "python hi";
	}*/
	

}
