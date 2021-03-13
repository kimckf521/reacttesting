import React from "react";
import { web } from "../data";

function Work() {
  const webApp = web.App;

  const btn = {
    btnNote: (
      <a class="btn btn-primary" href={webApp.noteKeeper} role="button">
        Note Keeper
      </a>
    ),
    btnKeyboard: (
      <a class="btn btn-primary" href={webApp.keyboardSound} role="button">
        Keyboard Music
      </a>
    ),
    btnSimon: (
      <a class="btn btn-primary" href={webApp.simonGame} role="button">
        Simon Game
      </a>
    ),
    btnDice: (
      <a class="btn btn-primary" href={webApp.diceGame} role="button">
        Dice Game
      </a>
    ),
    btnNews: (
      <a class="btn btn-primary" href={webApp.newsletter} role="button">
        News Letter
      </a>
    ),
    btnTo: (
      <a class="btn btn-primary" href={webApp.toDoList} role="button">
        To Do List
      </a>
    ),
  };

  const appContent = {
    note: "Create Notes and Delete Notes",
    keyboard: "Press keyboard and make some music",
    simon: "Play Simon Game",
    dice: "Play dice with computer",
    news: "Sign up for newsletter",
    toDoList: "Add and delete list items, it also contains database",
  };

  function projCard(content, title) {
    return (
      <div class="card">
        <div class="card-body" style={{ height: "100px" }}>
          <p class="card-text">{content}</p>
        </div>
        <div class="card-footer">
          <small class="text-muted">{title}</small>
        </div>
      </div>
    );
  }

  return (
    <div
      class="w3-half w3-light-grey w3-center"
      style={{ minHeight: "700px" }}
      id="work"
    >
      <div class="w3-padding-64">
        <h1>My Work</h1>
        <p>Some of my latest projects.</p>
      </div>

      <div class="card-group" style={{ padding: "0 20px" }}>
        {projCard(appContent.note, btn.btnNote)}
        {projCard(appContent.news, btn.btnNews)}
        {projCard(appContent.toDoList, btn.btnTo)}
      </div>

      <div class="card-group" style={{ padding: "0 20px" }}>
        {projCard(appContent.keyboard, btn.btnKeyboard)}
        {projCard(appContent.simon, btn.btnSimon)}
        {projCard(appContent.dice, btn.btnDice)}
      </div>
    </div>
  );
}

export default Work;
