package digital.scholars.backend.dao.entities;


import digital.scholars.backend.dao.request.AccountCreationRequest;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.*;
import lombok.Data;

import java.util.List;
@Entity
@Data
public class Account {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    private String firstName;
    private String lastName;
    private String email;
    private String password;
    private String game1;
    private String game2;
    private String game3;
    public Account() {
    }

    public Account(AccountCreationRequest accountCreationRequest) {
        this.setFirstName(accountCreationRequest.getFirstName());
        this.setLastName(accountCreationRequest.getLastName());
        this.setEmail(accountCreationRequest.getEmail());
        this.setPassword(accountCreationRequest.getPassword());
    }

}
