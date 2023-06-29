package digital.scholars.backend.controllers;

import digital.scholars.backend.pojo.AccountCreationRequest;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@Slf4j
public class BasicController {

    @PostMapping(path="/create/account")
    @ResponseBody
    public ResponseEntity<String> createAccount(@RequestBody AccountCreationRequest accountCreationRequest) {
        log.info("Request Object: {}", accountCreationRequest.toString());
        return new ResponseEntity<String>(HttpStatusCode.valueOf(200));
    }
}