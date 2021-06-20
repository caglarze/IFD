window.addEventListener("load", function () {
    document.querySelector('button').addEventListener("click", function () {
    
        var artyom = new Artyom();
        artyom.addCommands({
            indexes: ["Hallo *"],
            smart: true,
            action: function (i, wildcard) 
            {
                document.getElementById('answer').innerHTML = "Hallo! Ich bin " + wildcard;
                artyom.say("Hallo. Wie kann ich behilflich sein.");
            }
      });
    
    var noCommandMatched = "NOT_COMMAND_MATCHED";
    artyom.when(noCommandMatched,function(){
    document.getElementById('answer').innerHTML = "Bitte wiederholen.";
    });
    
    artyom.addCommands
([
    {
    indexes: ["Hey", "Hallo", "Hi", "Guten Tag", "Guten Morgen","Guten Abend"],
    action: function (i) {
      artyom.say("Hallo. Wie kann ich behilflich sein.");
      document.getElementById('answer').innerHTML = "Wie kann ich behilflich sein?";
    }
    },
    
    {
    indexes: ["Wie ist der aktuelle Stromverbrauch","Wie ist der Stromverbrauch", "Erzähle mir etwas zum Stromverbrauch","Stromverbrauch","Stromverbrauch anzeigen","Stromverbrauch darstellen"],
    action: function (i) {
      artyom.say("Aktuell verbrauche ich so und so viel Strom. Eine ausführlichere Grafik zu deinem Stromverbauch erhälst du auf dem Dashboard. Möchten Sie noch etwas erfahren?");
      document.getElementById('answer').innerHTML = "Dies ist der aktuelle Stromverbrauch: ...";
    }
    },
    
    {
    indexes: ["Welche Lebensmittel werden bald schlecht", "Welche Lebensmittel verfallen", "Schlechte Lebensmittel", "Verfallende Lebensmittel", "Verfallende Lebensmittel anzeigen"],
    action: function (i) {
      artyom.say("3 Produkte aus der Kategorie Gemüse und 2 aus der Kategorie Käseprodukte sind nicht länger haltbar. Möchten Sie Genaueres erfahren?");
      document.getElementById('answer').innerHTML = "(3)Gemüse & (2) Käseprodukte; [mehr erfahren]";
    }
    },

    {
    indexes: ["mehr erfahren"],
    action: function (i) {
      artyom.say("Folgende Gemüsesorten sind nicht länger haltbar: Gurken, Sellerie und Tomaten. Bei den Käseprodukten sind es Gouda und Frischkäse.");
      document.getElementById('answer').innerHTML = "(3)Gemüse: Gurken, Sellerie, Tomaten; (2)Käseprodukte: Gouda, Frischkräse";
    }
    },

    {
    indexes: ["Danke","Vielen Dank","Danke dir","Okey","Alles klar","Super","Klasse","Spitze"],
    action: function (i) {
      artyom.say("Keine Ursache. Kann ich Ihnen sonst noch behilflich sein.");
      document.getElementById('answer').innerHTML = "Kann ich Ihnen sonst noch behilflich sein? [Ja / Nein]";
    }
    },

    {
    indexes: ["Ja","Gerne","Ja bitte","Yes","Jep"],
    action: function (i) {
      artyom.say("Wie kann ich behilflich sein?");
      document.getElementById('answer').innerHTML = "Wie kann ich behilflich sein?";
    }
    },
    
    {
    indexes: ["Nein","Nein danke","Tschüss","Ciao","Bye"],
    action: function (i) {
      artyom.say("Alles klar. Bis dann.");
      document.getElementById('answer').innerHTML = "Bis dann!";
    }
    },

    {
    indexes: ["Bestätigen","Vorgang bestätigen", "bestätigt","Vorgang bestätigt"],
    action: function (i) {
      artyom.say("Vorgang bestätigt. Ihr Produkt wurde hinzugefügt. Möchten Sie weitere Produkte hinzufügen?");
      document.getElementById('answer').innerHTML = "Ihr Produkt wurde hinzugefügt.[hinzufügen]";
    } 
    },

    {
    indexes: ["Abbrechen","Vorgang abbrechen", "nein abbrechen","bitte abbrechen"],
    action: function (i) {
      artyom.say("Vorgang abgebrochen. Möchten Sie ein neues Produkt hinzufügen");
      document.getElementById('answer').innerHTML = "Vorgang abgebrochen. [hinzufügen]";
    }
    },
    
    {
    indexes: ["hinzufügen"],
    action: function (i) {
      artyom.say("Welches Produkt möchten Sie hinzufügen.");
      document.getElementById('answer').innerHTML = "[Produktname + hinzufügen]";
    }
    },
    
]);

      artyom.addCommands({
        indexes: ["Sind * im Kühlschrank","Sind * da","Haben wir *",],
        smart: true,
        action: function (i, wildcard) {
            artyom.say("Es sind noch 3 " + wildcard + " im Kühlschrank");
            document.getElementById('answer').innerHTML = "(3) " + wildcard + " im Kühlschrank";
        }
    });


    artyom.addCommands({
      indexes: ["Ist * noch gut","Ist * abgelaufen","Kann man * noch essen","Kann man * noch trinken"],
      smart: true,
      action: function (i, wildcard) {
          artyom.say( wildcard + " wurde kürzlich erst hinzugefügt. Das Produkt ist noch genießbar. Guten Appetit.");
          document.getElementById('answer').innerHTML = wildcard + " ist genießbar. Guten Appetit.";
      }
  });

    artyom.addCommands({
      indexes: ["Entferne * aus dem Kühlschrank","Lösche * aus dem Kühlschrank","* entfernen ","* löschen",],
      smart: true,
      action: function (i, wildcard) {
          artyom.say("Okay, ich entferne " + wildcard + " aus dem Kühlschrank");
          document.getElementById('answer').innerHTML = wildcard + " aus dem Kühlschrank entfernt";
      }
  });

  artyom.addCommands({
    indexes: ["Wie frisch sind die * ","Wie frisch ist die * ","Firsche * ","* Frische ","Sind * frisch","Ist * frisch"],
    smart: true,
    action: function (i, wildcard) {
        artyom.say( wildcard + " wurden vor 10 Tagen hinzugefügt. Sie sollten" + wildcard + "innerhalb der nächsten 7 Tage verzehren.");
        document.getElementById('answer').innerHTML = wildcard + " wurden vor 10 Tagen hinzugefügt. Verbleibende Zeit: 7 Tage.";
    }
  });


  artyom.addCommands({
    indexes: ["Füge * auf Liste","Füge * auf die Einkaufsliste","* auf Einkaufsliste hinzufügen","* auf Liste setzen"],
    smart: true,
    action: function (i, wildcard) {
        artyom.say( wildcard + " wird auf die Einkaufsliste gesetzt. Möchten Sie den Vorgang bestätigen");
        document.getElementById('answer').innerHTML = wildcard + " auf Einkaufsliste hinzugefügt. [Bestätigen / Abbrechen]";
    }
  });
  

    artyom.addCommands({
      indexes: ["Füge * in den Kühlschrank ein","Füge * hinzu","Lege * in den Kühlschrank"," * in den Kühlschrank hinzufügen"],
      smart: false,
      action: function (i, wildcard) {
          artyom.say("Ich habe " + wildcard + " in den Kühlschrank hinzugefügt");
          document.getElementById('answer').innerHTML = wildcard + " hinzugefügt.";
      }
  });
    


  artyom.addCommands({
    indexes: [" * hinzufügen"],
    smart: true,
    action: function (i, wildcard) {
        artyom.say("Das Produkt wurde auf die Einkaufliste gesetzt. Möchten Sie ein weiteres Produkt hinzufügen.");
        document.getElementById('answer').innerHTML = "Das Produkt wurde auf die Einkaufsliste gesetzt. Neues Produkt hinzufügen? [hinzufügen]";
    }
});
  
      artyom.redirectRecognizedTextOutput(function(text,isFinal) {
      var span = document.getElementById ('output');
      span.innerHTML = text;
    
    });
    
        function startContinuousArtyom() {
            artyom.fatality();
            setTimeout(function () {
                artyom.initialize({
                    lang: "de-DE",
                    continuous: true,
                    listen: true,
                    interimResults: true,
                    debug: true
                }).then(function () {
                    console.log("Ready!");
                });
            }, 250);
        }
        startContinuousArtyom();
    });
    });

    //# sourceMappingURL=playgroud-artyom-script.js.map
