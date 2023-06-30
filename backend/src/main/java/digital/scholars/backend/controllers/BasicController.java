package digital.scholars.backend.controllers;

import digital.scholars.backend.dao.entities.Account;
import digital.scholars.backend.dao.request.AccountCreationRequest;
import digital.scholars.backend.repo.AccountRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@Slf4j
public class BasicController {
    @Autowired
    AccountRepository accountRepository;

    @PostMapping(path="/create/account")
    @ResponseBody
    public ResponseEntity<String> createAccount(@RequestBody AccountCreationRequest accountCreationRequest) {
        log.info("Request Object: {}", accountCreationRequest.toString());
        Account account = new Account(accountCreationRequest);
        accountRepository.save(account);
        return new ResponseEntity<String>(HttpStatusCode.valueOf(200));
    }

}