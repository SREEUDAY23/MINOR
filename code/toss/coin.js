
    
    function even() {
        var i;
        var toss = ["odd", "even"];
      var image = new Array("odd.jpeg","even.jpeg");
      var d = ["bat","ball"];
    var ch = d[Math.floor(Math.random() * d.length)];
     var res = Math.floor(Math.random() * toss.length);
       if(res == 0) {
        alert("congratulations you have won the toss");
        document.getElementById("flip").src = image[1];
        while(i <= 10000) {
            i = i + 1;
        }
        window.location.replace("http://127.0.0.1:5500/code/toss%20result/toss_res.html");
       } else {
        alert("computer has won the toss and elected to " + ch + " first");
        document.getElementById("flip").src = image[0];
        if(ch == "ball") {
            window.location.replace("http://127.0.0.1:5500/code/player2.html");
        } else {
            window.location.replace("http://127.0.0.1:5500/code/player1.html");
        }
       }
    }
    function odd() {
        var toss = ["odd", "even"];
    var image = new Array("odd.jpeg","even.jpeg");
    var res = Math.floor(Math.random() * toss.length);
    var d = ["bat","ball"];
    var ch = d[Math.floor(Math.random() * d.length)];
    
        if(res == 1) {
            document.getElementById("flip").src = image[0];
            alert("congratulations you have won the toss");
            window.location.replace("http://127.0.0.1:5500/code/toss%20result/toss_res.html");
        } else {
            alert("computer has won the toss and elected to " + ch + " first");
            document.getElementById("flip").src = image[1];
            if(ch == "ball") {
                window.location.replace("http://127.0.0.1:5500/code/player2.html");
            } else {
                window.location.replace("http://127.0.0.1:5500/code/player1.html");
            }
        }
    }
