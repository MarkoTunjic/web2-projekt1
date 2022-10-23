package hr.fer.web2.projekt1;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

@SpringBootApplication(exclude = { SecurityAutoConfiguration.class })
public class Projekt1Application {

	public static void main(String[] args) {
		SpringApplication.run(Projekt1Application.class, args);
	}

}
