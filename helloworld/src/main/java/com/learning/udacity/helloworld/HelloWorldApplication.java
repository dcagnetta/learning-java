package com.learning.udacity.helloworld;

import com.learning.udacity.helloworld.models.Notification;
import com.microsoft.signalr.HubConnection;
import com.microsoft.signalr.HubConnectionBuilder;
import io.reactivex.Single;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.ServletComponentScan;

@SpringBootApplication
@ServletComponentScan
@Slf4j
public class HelloWorldApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(HelloWorldApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {

		log.info("Connecting to SignalR hub...");

		HubConnection hubConnection = HubConnectionBuilder
				.create("http://localhost:5000/notifyhub")
				//.withHeader("Authorization", "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik5VUXhORVkwT1VJM1JFSkZRalEwTWtNMk9UWTNSREF5UXpjd01EVkRRamxFTVVFd09EQkNPUSJ9.eyJpc3MiOiJodHRwczovL2dvZGNvZGUuYXV0aDAuY29tLyIsInN1YiI6ImF1dGgwfDVlODVhNDFhYWI4OGQ0MGJlOGE0ZTg0MCIsImF1ZCI6WyJXaGF0c0FwcE1lc3Nlbmdlci5BcGkiLCJodHRwczovL2dvZGNvZGUuYXV0aDAuY29tL3VzZXJpbmZvIl0sImlhdCI6MTU4NTk2NzQyOSwiZXhwIjoxNTg2MDUzODI5LCJhenAiOiJKcUttZUV4MThVWGhBVzF3cXA5UmxYb3gxNEVxZFFUZyIsInNjb3BlIjoib3BlbmlkIHByb2ZpbGUgZW1haWwifQ.KDY5oScNSb2TGEmzv8REQsyZZ-cHRerMpaEUQ5Q6W-Yd1yeb4o9E8M-Z2NdusxvkP2rhxsz9XbcaenCWYXcInbPF5RjD4gVNCrKwXwkeijVvfcmpZcikTZ920cWwQ_8MFRZgd8XgtU_czGUSMmZNZsKeCx2p_iehVeuAKrX4Oq-AsYdmgwXw2sVKqXJr2QWdnD5pXWfN2BrEfXCXj8AU4paJstj6KrR-vlgeoux0BOejhh9Ki14sqg0g9BD34eOMjfNMoxvY8vcYUVHwyWRzp3UfMAfQyoyu7bgtx2O8HrK3YtEAVa5YdY157o4xN6XSnKqcffACAPx_SThIVYXlIQ")
				.withAccessTokenProvider(Single.defer(() -> {
					// Your logic here.
					return Single.just("eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik5VUXhORVkwT1VJM1JFSkZRalEwTWtNMk9UWTNSREF5UXpjd01EVkRRamxFTVVFd09EQkNPUSJ9.eyJpc3MiOiJodHRwczovL2dvZGNvZGUuYXV0aDAuY29tLyIsInN1YiI6ImF1dGgwfDVlODVhNDFhYWI4OGQ0MGJlOGE0ZTg0MCIsImF1ZCI6WyJXaGF0c0FwcE1lc3Nlbmdlci5BcGkiLCJodHRwczovL2dvZGNvZGUuYXV0aDAuY29tL3VzZXJpbmZvIl0sImlhdCI6MTU4NTk2NzQyOSwiZXhwIjoxNTg2MDUzODI5LCJhenAiOiJKcUttZUV4MThVWGhBVzF3cXA5UmxYb3gxNEVxZFFUZyIsInNjb3BlIjoib3BlbmlkIHByb2ZpbGUgZW1haWwifQ.KDY5oScNSb2TGEmzv8REQsyZZ-cHRerMpaEUQ5Q6W-Yd1yeb4o9E8M-Z2NdusxvkP2rhxsz9XbcaenCWYXcInbPF5RjD4gVNCrKwXwkeijVvfcmpZcikTZ920cWwQ_8MFRZgd8XgtU_czGUSMmZNZsKeCx2p_iehVeuAKrX4Oq-AsYdmgwXw2sVKqXJr2QWdnD5pXWfN2BrEfXCXj8AU4paJstj6KrR-vlgeoux0BOejhh9Ki14sqg0g9BD34eOMjfNMoxvY8vcYUVHwyWRzp3UfMAfQyoyu7bgtx2O8HrK3YtEAVa5YdY157o4xN6XSnKqcffACAPx_SThIVYXlIQ");
				})).build();

		hubConnection.start();

		hubConnection.on("directMessage", (message) -> {
			log.info("New Message: " + message);
		}, Notification.class);
	}
}
