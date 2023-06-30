package digital.scholars.backend.controllers;

import digital.scholars.backend.dao.entities.Account;
import digital.scholars.backend.dao.entities.Game;
import digital.scholars.backend.dao.request.AccountCreationRequest;
import digital.scholars.backend.dao.request.AddGameRequest;
import digital.scholars.backend.dao.request.RemoveGameRequest;
import digital.scholars.backend.repo.AccountRepository;
import digital.scholars.backend.repo.GameRepository;
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

    @Autowired
    GameRepository gameRepository;

    @PostMapping(path="/create/account")
    @ResponseBody
    public ResponseEntity<String> createAccount(@RequestBody AccountCreationRequest accountCreationRequest) {
        log.info("Request Object: {}", accountCreationRequest.toString());
        Account account = new Account(accountCreationRequest);
        accountRepository.save(account);
        return new ResponseEntity<>(HttpStatusCode.valueOf(200));
    }

    @PostMapping(path="/add/game")
    @ResponseBody
    public ResponseEntity<String> addGame(@RequestBody AddGameRequest addGameRequest) {
        log.info("Request Object: {}", addGameRequest.toString());
        Account account = accountRepository.findByEmail(addGameRequest.getEmail());
        Game game = new Game();
        game.setGameName(addGameRequest.getGameName());
        game.setAccount(account);
        gameRepository.save(game);
        return new ResponseEntity<>(HttpStatusCode.valueOf(200));
    }

    @DeleteMapping(path="/remove/game")
    @ResponseBody
    public ResponseEntity<String> removeGame(@RequestBody RemoveGameRequest removeGameRequest) {
        log.info("Request Object: {}", removeGameRequest.toString());

        Account account = accountRepository.findByEmail(removeGameRequest.getEmail());

        Game game = account.getGames().get(0);
        gameRepository.delete(game);

        return new ResponseEntity<>(HttpStatusCode.valueOf(200));
    }

}