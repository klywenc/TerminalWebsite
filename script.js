document.addEventListener('DOMContentLoaded', function() {
 
  document.getElementsByTagName('form')[0].onsubmit = function(evt) {
    evt.preventDefault();
    checkWord(); 
    window.scrollTo(0,150);
  }
 
  document.getElementById('terminalTextInput').focus();

  var textInputValue = document.getElementById('terminalTextInput').value.trim();
  var textResultsValue = document.getElementById('terminalReslutsCont').innerHTML;
 
  var clearInput = function(){
    document.getElementById('terminalTextInput').value = "";
  }
 
  var scrollToBottomOfResults = function(){
    var terminalResultsDiv = document.getElementById('terminalReslutsCont');
    terminalResultsDiv.scrollTop = terminalResultsDiv.scrollHeight;
  }
 
  scrollToBottomOfResults();
  var addTextToResults = function(textToAdd){
    document.getElementById('terminalReslutsCont').innerHTML += "<p>" + textToAdd + "</p>";
    scrollToBottomOfResults();
  }

  // Komenda Help, ?
 
  var postHelpList = function(){
    var helpKeyWords = [
      "- Open + Nazwa podstrony (ex. open portfolio)",
      "- 'Time' Wyświetli aktualną godzinę.",
      "- 'Date' wyświetli dzisiejszą datę.",
      "* Komend jest sporo ale niektóre znajdziesz samemu kopiąc :)."
    ].join('<br>');
    addTextToResults(helpKeyWords);
  }

  // Time

  var getTimeAndDate = function(postTimeDay){
    var timeAndDate = new Date();
    var timeHours = timeAndDate.getHours();
    var timeMinutes = timeAndDate.getMinutes();
    var dateDay = timeAndDate.getDate();
    console.log(dateDay);
    var dateMonth = timeAndDate.getMonth() + 1; 
    var dateYear = timeAndDate.getFullYear(); 
 
    if (timeHours < 10){ 
      timeHours = "0" + timeHours;
    }
 
    if (timeMinutes < 10){ 
      timeMinutes = "0" + timeMinutes;
    }
 
    var currentTime = timeHours + ":" + timeMinutes;
    var currentDate = dateDay + "/" + dateMonth + "/" + dateYear;
 
    if (postTimeDay == "time"){
      addTextToResults(currentTime);
    }
    if (postTimeDay == "date"){
      addTextToResults(currentDate);
    }
  }
 
  // Nowa Karta

  var openLinkInNewWindow = function(linkToOpen){
    window.open(linkToOpen, '_blank');
    clearInput();
  }

  // Odpowiedzi (komendy).

  var textReplies = function() {
    switch(textInputValueLowerCase){
      case "code":
        clearInput();
        addTextToResults("Kod strony <a target='_blank' href='2137.pl'</a>");
        break;
 
      case "founder":
        clearInput();
        addTextToResults("Ta, ten debil Klywenc/Megu");
        break;
 
        case "i love you":
        case "love you":
        case "love":
        case "kocham":
        case "kocham cie":
        clearInput();
        addTextToResults("Aww! ja ciebie też :) ❤");
        break;
 
      case "megu":
        clearInput();
        addTextToResults('Pierdolony Kretyn');
        break;
 
        case "siema":
        case "elo":
        case "hi":
        case "hi":
        clearInput();
        addTextToResults("Siema, witam na mojej stronie.");
        break;

        case "idiota":
        clearInput();
        addTextToResults("Megu.moe wszyscy kochamy Vtuberki");
        break;
 
        case "what the":
        case "wtf":
        clearInput();
        addTextToResults("F***.");
        break;

        case "asie":
        case "asiekierka":
        clearInput();
        addTextToResults("jakie argumenty przyjmuje funkcja addEventListener");
        break;

        case "Jarzyna":
        case "Jarzus":
        clearInput();
        addTextToResults("Jarzyna kocha vtuby");
        break;
 
        case "shit":
        case "shit":
        case "poop":
        case "💩":
        clearInput();
        addTextToResults("💩");
        break; 
 
        case "time":
        clearInput();
        getTimeAndDate("time");
        break;
 
        case "date":
        clearInput();
        getTimeAndDate("date");
        break;
 
        case "help":
        case "?":
        clearInput();
        postHelpList();
        break;

        case "clear":
        case "cls":
        clearInput();
        clear.textResultsValue;
        break;

        case "shiina":
        case "waifu":
        clearInput();
        break;

        case "vtuberki":
        case "vtuber":
        case "vtube":
        openLinkInNewWindow("http://vtuber.pl/");
        clearInput();
        break;

        case "gui":
        openLinkInNewWindow("http://megu.moe/gui")
        clearInput();
        break;
      
        case "sudo":
        case "su":
        openLinkInNewWindow("https://www.youtube.com/watch?v=dQw4w9WgXcQ")
        clearInput();
        break;
     
        default:
        clearInput();
        addTextToResults("<p><i>Komenda " + "<b>" + textInputValue + "</b>" + " nie została znaleziona. Użyj komendy <b>Help</b> aby zobaczyć listę komend.</i></p>");
        break;
    }
  }
 
    // checkword

  var checkWord = function() {
    textInputValue = document.getElementById('terminalTextInput').value.trim(); 
    textInputValueLowerCase = textInputValue.toLowerCase();

    // Wyszukiwanie

    if (textInputValue != ""){ 
      addTextToResults("<p class='userEnteredText'>> " + textInputValue + "</p>");
      if (textInputValueLowerCase.substr(0,5) == "open ") { 
        openLinkInNewWindow('http://' + textInputValueLowerCase.substr(5));
        addTextToResults("<i>Otwieranie " + "<b>" + textInputValue.substr(5) + "</b>" + "</i>");
      } else if (textInputValueLowerCase.substr(0,8) == "youtube ") {
        openLinkInNewWindow('https://www.youtube.com/results?search_query=' + textInputValueLowerCase.substr(8));
        addTextToResults("<i>Wyszukano " + "<b>" + textInputValue.substr(8) + "</b>" + " trwa otwieranie.</i>");
      } else if (textInputValueLowerCase.substr(0,7) == "google ") {
        openLinkInNewWindow('https://www.google.com/search?q=' + textInputValueLowerCase.substr(7));
        addTextToResults("<i>Wyszukano " + "<b>" + textInputValue.substr(7) + "</b>" + " trwa otwieranie.</i>");
      } else if (textInputValueLowerCase.substr(0,5) == "wiki "){
        openLinkInNewWindow('https://pl.wikipedia.org/w/index.php?search=' + textInputValueLowerCase.substr(5));
        addTextToResults("<i>Wyszukano " + "<b>" + textInputValue.substr(5) + "</b>" + " trwa otwieranie.</i>");
      } else{
        textReplies();
      }
    }
  };
 
});
