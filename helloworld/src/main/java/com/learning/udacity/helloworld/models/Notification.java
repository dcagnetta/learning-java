package com.learning.udacity.helloworld.models;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@JsonInclude(JsonInclude.Include.NON_NULL)
public class Notification {

    public String type;
    public String title;
    public String payload;

    public Notification(String payload) {
        this.payload = payload;
    }

    @Override
    public String toString() {
        return "Notification{" +
                "type='" + type + '\'' +
                "title='" + title + '\'' +
                "payload='" + payload + '\'' +
                '}';
    }
}
