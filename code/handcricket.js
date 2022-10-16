var num = [1,2,3,4,5,6];
var s2 = 0;
var w = 0,t=0;
var sig = 0,sig2=0;
var s1=0;
var sayone = ["that is a sharp single taken", "just a single", "they are rotating the strike well enough", "an excellent single", "quick single taken"];
var saytwo = ["that is excellent running between the wickets", "in the gap for a couple", "wide and taken a single", "a single taken in no-ball", "that is very quick between the wickets", "the first one is a husstle and 2 runs taken", "that is good running"];
var saythree = ["well fielded to stop for a boundary three runs taken", "that is some running between the wickets for three", "wides and two runs taken", "no ball gone for a couple", "inside the deep three runs taken"];
var sayfour = ["that is cut away for four","thats hit hard for a four", "nicely timed for a four", "wonderful cover-drive for a four", "beautiful shot gone for four", "in the gap and four runs", "sweetly timed", "what a shot for a four"];
var sayfive = ["that is five wides", "keeper can't get that one that is a wide and four", "no-ball and what a shot for four", "single taken !! oh an overthrow and gone for four costed five", "above the keepers head a wide and that will race for four total five"];
var saysix = ["in the slot for a six","that is a massive six runs!!!", "fetch that one it's gone for six", "full-toss and put away for a six", "that is a cracking shot for a six", "no one is catching this one because it is gone for a six", "high!! and handsome six runs", "punished for six runs", "this one is gone miles in the air for a six"];
var wick1 = ["that's out lbw", "what a delivary that is gone bowled","a direct hit to the wickets by the fielder out for a runout", "that is poor running he is no where to make to other side and gone for a run-out", "edge and taken by the keeper", "tried to put in the gap for a single but gone for a lbw"];
var wick2 = ["hurry!!! and did'nt make in time for a two gone for a runout", "that is bowled", "an inswinger and the batsmen never had an idea hitting the wickets" ,"they are trying for two runs and !! gone for a runout", "a mix of actions and run-out no co-ordination between these two batsmen", "that is some catch in the cover wow!!", "edge and taken by the slip"];
var wick3 = ["tried for three runs but could'nt make it gone for a runout", "straight up in the air and caught", "haven't gone towards the area he wished for and caught", "that is clean bowled", "what a ball cleaned him up", "hitting the pad and that is gone"];
var wick4 = ["caught behind", "thin edge and taken", "thick edge and caught in the cover", "no timing at all gone for a catch", "wow that is good bowling for lbw", "wicket to wicket and gone", "tried for a scoop and keeper takes it"];
var wick5 = ["pace on and hits the wickets", "that is gone for the leg stump", "hitting straight to the bails", "change of angle and a catch", "what a delivary he is never expecting that for a lbw", "that is gone for a run-out in the no-ball"];
var wick6 = ["fielder underneath it and takes the catch", "change of pace and taken by the fielder", "what a stunning catch", "did not time the ball at all and caught", "that is straight in the bowlers arc for a wicket", "hitting the off stump for a lbw", "fielder makes no mistake and caught in deep", "that is not the proper shot for this ball and gone"];
var x = 0;
var sig3 = 0;
function one() {
     var r1 =  num[Math.floor(Math.random()*num.length)];
     var c1 = sayone[Math.floor(Math.random()*sayone.length)];
     var cc1 = saytwo[Math.floor(Math.random()*saytwo.length)];
     var ccc1 = saythree[Math.floor(Math.random()*saythree.length)];
     var cccc1 = sayfour[Math.floor(Math.random()*sayfour.length)];
     var ccccc1 = sayfive[Math.floor(Math.random()*sayfive.length)];
     var cccccc1 = saysix[Math.floor(Math.random()*saysix.length)];
     x = r1;
     if(sig == 0) {
     if(r1 == 1) {
        document.getElementById("box1").innerHTML = "<img src = '1.png' width = '200px' /> ";
        document.getElementById("box2").innerHTML = "<img src = '1.png' width = '200px' /> ";
        w = w + 1;
        document.getElementById("wickets").innerHTML = w;
       wicketone(x);
        if(w >= 10) {
            alert("game over");
            document.getElementById("wickets").innerHTML = w;
            document.getElementById("box3").innerHTML = "That is the end of first innings";
            t = s2+1;
            sig = 1;
            sig2 = 1;
            sig3 = 1;
            w = 0;
            document.getElementById("tar").innerHTML = "TARGET : " + t;
        }
     } else {
         s2 = s2 + r1;
         if(r1 == 3) {
            document.getElementById("box1").innerHTML = "<img src = '1.png' width = '200px' /> ";
             document.getElementById("box2").innerHTML = "<img src = '3.png' width = '200px' /> ";
             document.getElementById("box3").innerHTML = ccc1;
             document.getElementById("runs").innerHTML = s2;
         } else if(r1 == 2) {
            document.getElementById("box1").innerHTML = "<img src = '1.png' width = '200px' /> ";
            document.getElementById("box2").innerHTML = "<img src = '2.png' width = '200px' /> ";
            document.getElementById("box3").innerHTML = cc1;
            document.getElementById("runs").innerHTML = s2;
         } else if(r1 == 4) {
            document.getElementById("box1").innerHTML = "<img src = '1.png' width = '200px' /> ";
            document.getElementById("box2").innerHTML = "<img src = '4.png' width = '200px' /> ";
            document.getElementById("box3").innerHTML = cccc1;
            document.getElementById("runs").innerHTML = s2;
         } else if(r1 == 5) {
            document.getElementById("box1").innerHTML = "<img src = '1.png' width = '200px' /> ";
            document.getElementById("box2").innerHTML = "<img src = '5.png' width = '200px' /> ";
            document.getElementById("box3").innerHTML = ccccc1;
            document.getElementById("runs").innerHTML = s2;
         } else if(r1 == 6) {
            document.getElementById("box1").innerHTML = "<img src = '1.png' width = '200px' /> ";
            document.getElementById("box2").innerHTML = "<img src = '6.png' width = '200px' /> ";
            document.getElementById("box3").innerHTML = cccccc1;
            document.getElementById("runs").innerHTML = s2;
         }
     }
    }
    if(sig == 1) {
       if(sig2 == 1) {
           sig2 = 0;
           document.getElementById("runs").innerHTML = 0;
           document.getElementById("wickets").innerHTML = 0;
           document.getElementById("overs").innerHTML = 0.0;
           onew();
       } else {
        var b1 =  num[Math.floor(Math.random()*num.length)];
        if(b1 == 1) {
            document.getElementById("box1").innerHTML = "<img src = '1.png' width = '200px' /> ";
            document.getElementById("box2").innerHTML = "<img src = '1.png' width = '200px' /> ";
            wicketone(x)
            w = w +1;
            document.getElementById("wickets").innerHTML = w;
            if(w >= 10) {
                alert("you lost");
            }
        } else {
            s1 = s1 + 1;
            if(s1 >= t) {
                alert("you won");
            }
            if(b1 == 2) {
                document.getElementById("box1").innerHTML = "<img src = '1.png' width = '200px' /> ";
                document.getElementById("box2").innerHTML = "<img src = '2.png' width = '200px' /> ";
                document.getElementById("runs").innerHTML = s1;
                document.getElementById("box3").innerHTML = c1;
            } else if(b1 == 3) {
                document.getElementById("box1").innerHTML = "<img src = '1.png' width = '200px' /> ";
                document.getElementById("box2").innerHTML = "<img src = '3.png' width = '200px' /> ";
                document.getElementById("box3").innerHTML = c1;
                document.getElementById("runs").innerHTML = s1;
            } else if(b1 == 4) {
                document.getElementById("box1").innerHTML = "<img src = '1.png' width = '200px' /> ";
                document.getElementById("box2").innerHTML = "<img src = '4.png' width = '200px' /> ";
                document.getElementById("box3").innerHTML = c1;
                document.getElementById("runs").innerHTML = s1;
            } else if(b1 == 5) {
                document.getElementById("box1").innerHTML = "<img src = '1.png' width = '200px' /> ";
                document.getElementById("box2").innerHTML = "<img src = '5.png' width = '200px' /> ";
                document.getElementById("box3").innerHTML = c1;
                document.getElementById("runs").innerHTML = s1;
            } else if(b1 == 6) {
                document.getElementById("box1").innerHTML = "<img src = '1.png' width = '200px' /> ";
                document.getElementById("box2").innerHTML = "<img src = '6.png' width = '200px' /> ";
                document.getElementById("box3").innerHTML = c1;
                document.getElementById("runs").innerHTML = s1;
            }
        }
    }

    }
}
function wicketone(y) {
    var w1 = wick1[Math.floor(Math.random()*wick1.length)];
   if(y == 1) {
       document.getElementById("box3").innerHTML = w1;
   }
}
function two() {
    var r2 =  num[Math.floor(Math.random()*num.length)];
    var c2 =  sayone[Math.floor(Math.random()*sayone.length)];
    var cc2 =  saytwo[Math.floor(Math.random()*saytwo.length)];
    var ccc2 = saythree[Math.floor(Math.random()*saythree.length)];
    var cccc2 = sayfour[Math.floor(Math.random()*sayfour.length)];
    var ccccc2 = sayfive[Math.floor(Math.random()*sayfive.length)];
    var cccccc2 = saysix[Math.floor(Math.random()*saysix.length)];
    var w2 = wick2[Math.floor(Math.random()*wick2.length)]; 
    if(sig == 0) {
       if(r2 == 2) {
             document.getElementById("box1").innerHTML = "<img src = '2.png' width = '200px' /> ";
             document.getElementById("box2").innerHTML = "<img src = '2.png' width = '200px' /> ";
             w = w + 1;
             document.getElementById("box3").innerHTML = w2;
             document.getElementById("wickets").innerHTML = w;

             if(w >= 10) {
                 alert("game-over");
                 document.getElementById("wickets").innerHTML = w;
                 document.getElementById("box3").innerHTML = "That is the end of first innings";
                 sig = 1;
                 sig2 = 1;
                 sig3 = 1;
                 w = 0;
                 t = s2+1;
                 document.getElementById("tar").innerHTML = "TARGET : " + t;
             }
       } else {
           s2 = s2 + r2;
           if(r2 == 1) {
           document.getElementById("box1").innerHTML =  "<img src = '2.png' width = '200px' /> ";
           document.getElementById("box2").innerHTML =  "<img src = '1.png' width = '200px' /> ";
           document.getElementById("runs").innerHTML = s2;
           document.getElementById("box3").innerHTML = c2;
           }else if(r2 == 3) {
            document.getElementById("box1").innerHTML =  "<img src = '2.png' width = '200px' /> ";
            document.getElementById("box2").innerHTML =  "<img src = '3.png' width = '200px' /> ";
            document.getElementById("box3").innerHTML = ccc2;
            document.getElementById("runs").innerHTML = s2;
           }else if(r2 == 4) {
            document.getElementById("box1").innerHTML =  "<img src = '2.png' width = '200px' /> ";
            document.getElementById("box2").innerHTML =  "<img src = '4.png' width = '200px' /> ";
            document.getElementById("box3").innerHTML = cccc2;
            document.getElementById("runs").innerHTML = s2;
           }else if(r2 == 5) {
            document.getElementById("box1").innerHTML =  "<img src = '2.png' width = '200px' /> ";
            document.getElementById("box2").innerHTML =  "<img src = '5.png' width = '200px' /> ";
            document.getElementById("box3").innerHTML = ccccc2;
            document.getElementById("runs").innerHTML = s2;
           }
             else if (r2 == 6) {
            document.getElementById("box1").innerHTML =  "<img src = '2.png' width = '200px' /> ";
            document.getElementById("box2").innerHTML =  "<img src = '6.png' width = '200px' /> ";
            document.getElementById("box3").innerHTML = cccccc2;
            document.getElementById("runs").innerHTML = s2;
           }
       }
    }
    if(sig == 1) {
        if(sig2 == 1) {
            document.getElementById("wickets").innerHTML = 0;
            document.getElementById("runs").innerHTML = 0;
            sig2 = 0;
            document.getElementById("overs").innerHTML = 0.0;
            onew();
        } else {
            var b2 =  num[Math.floor(Math.random()*num.length)];
            if(b2 == 2) {
                alert("out");
                w = w + 1;
                document.getElementById("box1").innerHTML =  "<img src = '2.png' width = '200px' /> ";
                document.getElementById("box2").innerHTML =  "<img src = '2.png' width = '200px' /> ";
                document.getElementById("wickets").innerHTML = w;
                document.getElementById("box3").innerHTML = w2;
                if(w >= 10) {
                    alert("game-over");
                    window.location.reload();
                }
            } else {
                s1 = s1 + 2;
                if(s1 >= t) {
                    alert("won");
                    window.location.reload();
                }
                if(b2 == 1) {
                    document.getElementById("box1").innerHTML =  "<img src = '2.png' width = '200px' /> ";
                    document.getElementById("box2").innerHTML =  "<img src = '1.png' width = '200px' /> ";
                    document.getElementById("box3").innerHTML = cc2;
                    document.getElementById("runs").innerHTML = s1;
                }
                if(b2 == 3) {
                    document.getElementById("box1").innerHTML =  "<img src = '2.png' width = '200px' /> ";
                    document.getElementById("box2").innerHTML =  "<img src = '3.png' width = '200px' /> ";
                    document.getElementById("box3").innerHTML = cc2;
                    document.getElementById("runs").innerHTML = s1;
                }
                if(b2 == 4) {
                    document.getElementById("box1").innerHTML =  "<img src = '2.png' width = '200px' /> ";
                    document.getElementById("box2").innerHTML =  "<img src = '4.png' width = '200px' /> ";
                    document.getElementById("box3").innerHTML = cc2;
                    document.getElementById("runs").innerHTML = s1;
                }
                if(b2 == 5) {
                    document.getElementById("box1").innerHTML =  "<img src = '2.png' width = '200px' /> ";
                    document.getElementById("box2").innerHTML =  "<img src = '5.png' width = '200px' /> ";
                    document.getElementById("box3").innerHTML = cc2;
                    document.getElementById("runs").innerHTML = s1;
                }
                if(b2 == 6) {
                    document.getElementById("box1").innerHTML =  "<img src = '2.png' width = '200px' /> ";
                    document.getElementById("box2").innerHTML =  "<img src = '6.png' width = '200px' /> ";
                    document.getElementById("box3").innerHTML = cc2;
                    document.getElementById("runs").innerHTML = s1;
                }
            }
        }
    }
}
    function three() {
        var r3 =  num[Math.floor(Math.random()*num.length)];
        var c3 =  sayone[Math.floor(Math.random()*sayone.length)];
        var cc3 = saytwo[Math.floor(Math.random()*saytwo.length)];
        var ccc3 = saythree[Math.floor(Math.random()*saythree.length)];
        var cccc3 = sayfour[Math.floor(Math.random()*sayfour.length)];
        var ccccc3 = sayfive[Math.floor(Math.random()*sayfive.length)];
        var cccccc3 = saysix[Math.floor(Math.random()*saysix.length)];
        var w3 = wick3[Math.floor(Math.random()*wick3.length)]; 
        if(sig == 0) {
        if(r3 == 3) {
            document.getElementById("box2").innerHTML =  "<img src = '3.png' width = '200px' /> ";
            document.getElementById("box1").innerHTML =  "<img src = '3.png' width = '200px' /> ";
            w = w + 1;
            document.getElementById("wickets").innerHTML = w;
            document.getElementById("box3").innerHTML = w3;
            if(w >= 10) {
                alert("game-over");
                document.getElementById("wickets").innerHTML = w;
                document.getElementById("box3").innerHTML = "That is the end of first innings";
                sig = 1;
                sig2 = 1;
                sig3 = 1;
                w = 0;
                t = s2 + 1;
                document.getElementById("tar").innerHTML = "TARGET : " + t;
            }
        } else {
            s2 = s2 + r3;
            if(r3 == 1) {
           document.getElementById("box1").innerHTML =  "<img src = '3.png' width = '200px' /> ";
           document.getElementById("box2").innerHTML =  "<img src = '1.png' width = '200px' /> ";
           document.getElementById("box3").innerHTML = c3;
           document.getElementById("runs").innerHTML = s2;
           }else if(r3 == 2) {
            document.getElementById("box1").innerHTML =  "<img src = '3.png' width = '200px' /> ";
            document.getElementById("box2").innerHTML =  "<img src = '2.png' width = '200px' /> ";
            document.getElementById("box3").innerHTML = cc3;
            document.getElementById("runs").innerHTML = s2;
           }else if(r3 == 4) {
            document.getElementById("box1").innerHTML =  "<img src = '3.png' width = '200px' /> ";
            document.getElementById("box2").innerHTML =  "<img src = '4.png' width = '200px' /> ";
            document.getElementById("box3").innerHTML = cccc3;
            document.getElementById("runs").innerHTML = s2;
           }else if(r3 == 5) {
            document.getElementById("box1").innerHTML =  "<img src = '3.png' width = '200px' /> ";
            document.getElementById("box2").innerHTML =  "<img src = '5.png' width = '200px' /> ";
            document.getElementById("box3").innerHTML = ccccc3;
            document.getElementById("runs").innerHTML = s2;
           }
             else if (r3 == 6) {
            document.getElementById("box1").innerHTML =  "<img src = '3.png' width = '200px' /> ";
            document.getElementById("box2").innerHTML =  "<img src = '6.png' width = '200px' /> ";
            document.getElementById("box3").innerHTML = cccccc3;
            document.getElementById("runs").innerHTML = s2;
             }
        }
    }
    if(sig == 1) {
        if(sig2 == 1) {
            sig2 = 0;
            document.getElementById("wickets").innerHTML = 0;
            document.getElementById("runs").innerHTML = 0;
            document.getElementById("overs").innerHTML = 0.0;
            onew();
        } else {
            var b3 =  num[Math.floor(Math.random()*num.length)];
            if(b3 == 3) {
                w = w + 1;
                document.getElementById("wickets").innerHTML = w;
                document.getElementById("box1").innerHTML = "<img src = '3.png' width = '200px' /> ";
                document.getElementById("box2").innerHTML = "<img src = '3.png' width = '200px' /> ";
                document.getElementById("box3").innerHTML = w3;
                if(w >= 10) {
                    alert("lose");
                    window.location.reload();
                }
            } else {
                s1 = s1 + 3;
                if(s1 >= t) {
                    alert("you won");
                    window.location.reload();
                }
                if(b3 == 1) {
                    document.getElementById("box1").innerHTML = "<img src = '3.png' width = '200px' /> ";
                    document.getElementById("box2").innerHTML = "<img src = '1.png' width = '200px' /> ";
                    document.getElementById("box3").innerHTML = ccc3;
                    document.getElementById("runs").innerHTML = s1;
                }
                if(b3 == 2) {
                    document.getElementById("box1").innerHTML = "<img src = '3.png' width = '200px' /> ";
                    document.getElementById("box2").innerHTML = "<img src = '2.png' width = '200px' /> ";
                    document.getElementById("box3").innerHTML = ccc3;
                    document.getElementById("runs").innerHTML = s1;
                }
                if(b3 == 4) {
                    document.getElementById("box1").innerHTML = "<img src = '3.png' width = '200px' /> ";
                    document.getElementById("box2").innerHTML = "<img src = '4.png' width = '200px' /> ";
                    document.getElementById("box3").innerHTML = ccc3;
                    document.getElementById("runs").innerHTML = s1;
                }
                if(b3 == 5) {
                    document.getElementById("box1").innerHTML = "<img src = '3.png' width = '200px' /> ";
                    document.getElementById("box2").innerHTML = "<img src = '5.png' width = '200px' /> ";
                    document.getElementById("box3").innerHTML = ccc3;
                    document.getElementById("runs").innerHTML = s1;
                }
                if(b3 == 6) {
                    document.getElementById("box1").innerHTML = "<img src = '3.png' width = '200px' /> ";
                    document.getElementById("box2").innerHTML = "<img src = '6.png' width = '200px' /> ";
                    document.getElementById("box3").innerHTML = ccc3;
                    document.getElementById("runs").innerHTML = s1;
                }
            }
        }
    }
    }
    function four() {
        var r4 =  num[Math.floor(Math.random()*num.length)];
        var c4 =  sayone[Math.floor(Math.random()*sayone.length)];
        var cc4 = saytwo[Math.floor(Math.random()*saytwo.length)];
        var ccc4 = saythree[Math.floor(Math.random()*saythree.length)];
        var cccc4 = sayfour[Math.floor(Math.random()*sayfour.length)];
        var ccccc4 = sayfive[Math.floor(Math.random()*sayfive.length)];
        var cccccc4 = saysix[Math.floor(Math.random()*saysix.length)];
        var w4 = wick4[Math.floor(Math.random()*wick4.length)]; 
        if(sig == 0) {
        if(r4 == 4) {
            document.getElementById("box2").innerHTML =  "<img src = '4.png' width = '200px' /> ";
            document.getElementById("box1").innerHTML =  "<img src = '4.png' width = '200px' /> ";
            w = w + 1;
            document.getElementById("box3").innerHTML = w4;
            document.getElementById("wickets").innerHTML = w;
            if(w >= 10) {
                alert("game-over");
                document.getElementById("wickets").innerHTML = w;
                document.getElementById("box3").innerHTML = "That is the end of first innings";
                sig = 1;
                sig2 = 1;
                sig3 = 1;
                w = 0;
                t = s2 + 1;
                document.getElementById("tar").innerHTML = "TARGET : " + t;
            }
        } else {
            s2 = s2 + r4;
            if(r4 == 1) {
           document.getElementById("box1").innerHTML =  "<img src = '4.png' width = '200px' /> ";
           document.getElementById("box2").innerHTML =  "<img src = '1.png' width = '200px' /> ";
           document.getElementById("box3").innerHTML = c4;
           document.getElementById("runs").innerHTML = s2;
           }else if(r4 == 3) {
            document.getElementById("box1").innerHTML =  "<img src = '4.png' width = '200px' /> ";
            document.getElementById("box2").innerHTML =  "<img src = '3.png' width = '200px' /> ";
            document.getElementById("box3").innerHTML = ccc4;
            document.getElementById("runs").innerHTML = s2;
           }else if(r4 == 2) {
            document.getElementById("box1").innerHTML =  "<img src = '4.png' width = '200px' /> ";
            document.getElementById("box2").innerHTML =  "<img src = '2.png' width = '200px' /> ";
            document.getElementById("box3").innerHTML = cc4;
            document.getElementById("runs").innerHTML = s2;
           }else if(r4 == 5) {
            document.getElementById("box1").innerHTML =  "<img src = '4.png' width = '200px' /> ";
            document.getElementById("box2").innerHTML =  "<img src = '5.png' width = '200px' /> ";
            document.getElementById("box3").innerHTML = ccccc4;
            document.getElementById("runs").innerHTML = s2;
           }
             else if (r4 == 6) {
            document.getElementById("box1").innerHTML =  "<img src = '4.png' width = '200px' /> ";
            document.getElementById("box2").innerHTML =  "<img src = '6.png' width = '200px' /> ";
            document.getElementById("box3").innerHTML = cccccc4;
            document.getElementById("runs").innerHTML = s2;
             }
        }
    }
    if(sig == 1) {
        if(sig2 == 1) {
            sig2 = 0;
            document.getElementById("wickets").innerHTML = 0;
            document.getElementById("runs").innerHTML = 0;
            document.getElementById("overs").innerHTML = 0.0;
            onew();
        } else {
            var b4 =  num[Math.floor(Math.random()*num.length)];
            if(b4 == 4) {
                w = w + 1;
                document.getElementById("wickets").innerHTML = w;
                document.getElementById("box1").innerHTML = "<img src = '4.png' width = '200px' /> ";
                document.getElementById("box2").innerHTML = "<img src = '4.png' width = '200px' /> ";
                document.getElementById("box3").innerHTML = w4;
                if(w >= 10) {
                    alert("lose");
                    window.location.reload();
                }
            } else {
                s1 = s1 + 4;
                if(s1 >= t) {
                    alert("you won");
                    window.location.reload();
                }
                if(b4 == 1) {
                    document.getElementById("box1").innerHTML = "<img src = '4.png' width = '200px' /> ";
                    document.getElementById("box2").innerHTML = "<img src = '1.png' width = '200px' /> ";
                    document.getElementById("box3").innerHTML = cccc4;
                    document.getElementById("runs").innerHTML = s1;
                }
                if(b4 == 2) {
                    document.getElementById("box1").innerHTML = "<img src = '4.png' width = '200px' /> ";
                    document.getElementById("box2").innerHTML = "<img src = '2.png' width = '200px' /> ";
                    document.getElementById("box3").innerHTML = cccc4;
                    document.getElementById("runs").innerHTML = s1;
                }
                if(b4 == 3) {
                    document.getElementById("box1").innerHTML = "<img src = '4.png' width = '200px' /> ";
                    document.getElementById("box2").innerHTML = "<img src = '3.png' width = '200px' /> ";
                    document.getElementById("box3").innerHTML = cccc4;
                    document.getElementById("runs").innerHTML = s1;
                }
                if(b4 == 5) {
                    document.getElementById("box1").innerHTML = "<img src = '4.png' width = '200px' /> ";
                    document.getElementById("box2").innerHTML = "<img src = '5.png' width = '200px' /> ";
                    document.getElementById("box3").innerHTML = cccc4;
                    document.getElementById("runs").innerHTML = s1;
                }
                if(b4 == 6) {
                    document.getElementById("box1").innerHTML = "<img src = '4.png' width = '200px' /> ";
                    document.getElementById("box2").innerHTML = "<img src = '6.png' width = '200px' /> ";
                    document.getElementById("box3").innerHTML = cccc4;
                    document.getElementById("runs").innerHTML = s1;
                }
            }
        }
    }
}
    function five() {
        var r5 =  num[Math.floor(Math.random()*num.length)];
        var c5 =  sayone[Math.floor(Math.random()*sayone.length)];
        var cc5 = saytwo[Math.floor(Math.random()*saytwo.length)];
        var ccc5 = saythree[Math.floor(Math.random()*saythree.length)];
        var cccc5 = sayfour[Math.floor(Math.random()*sayfour.length)];
        var ccccc5 = sayfive[Math.floor(Math.random()*sayfive.length)];
        var cccccc5 = saysix[Math.floor(Math.random()*saysix.length)];
        var w5 = wick5[Math.floor(Math.random()*wick5.length)]; 
        if(sig == 0) { 
        if(r5 == 5) {
            document.getElementById("box2").innerHTML =  "<img src = '5.png' width = '200px' /> ";
            document.getElementById("box1").innerHTML =  "<img src = '5.png' width = '200px' /> ";
            w = w + 1;
            document.getElementById("box3").innerHTML = w5;
            document.getElementById("wickets").innerHTML = w;
            if(w >= 10) {
                alert("game-over");
                document.getElementById("wickets").innerHTML = w;
                document.getElementById("box3").innerHTML = "That is the end of first innings";
                sig = 1;
                sig2 = 1;
                sig3 = 1;
                w = 0;
                t = s2 + 1;
                document.getElementById("tar").innerHTML = "TARGET : " + t;
            }
        } else {
            s2 = s2 + r5;
            if(r5 == 1) {
           document.getElementById("box1").innerHTML =  "<img src = '5.png' width = '200px' /> ";
           document.getElementById("box2").innerHTML =  "<img src = '1.png' width = '200px' /> ";
           document.getElementById("box3").innerHTML = c5;
           document.getElementById("runs").innerHTML = s2;
           }else if(r5 == 3) {
            document.getElementById("box1").innerHTML =  "<img src = '5.png' width = '200px' /> ";
            document.getElementById("box2").innerHTML =  "<img src = '3.png' width = '200px' /> ";
            document.getElementById("box3").innerHTML = ccc5;
            document.getElementById("runs").innerHTML = s2;
           }else if(r5 == 4) {
            document.getElementById("box1").innerHTML =  "<img src = '5.png' width = '200px' /> ";
            document.getElementById("box2").innerHTML =  "<img src = '4.png' width = '200px' /> ";
            document.getElementById("box3").innerHTML = cccc5;
            document.getElementById("runs").innerHTML = s2;
           }else if(r5 == 2) {
            document.getElementById("box1").innerHTML =  "<img src = '5.png' width = '200px' /> ";
            document.getElementById("box2").innerHTML =  "<img src = '2.png' width = '200px' /> ";
            document.getElementById("box3").innerHTML = cc5;
            document.getElementById("runs").innerHTML = s2;
           }
             else if (r5 == 6) {
            document.getElementById("box1").innerHTML =  "<img src = '5.png' width = '200px' /> ";
            document.getElementById("box2").innerHTML =  "<img src = '6.png' width = '200px' /> ";
            document.getElementById("box3").innerHTML = cccccc5;
            document.getElementById("runs").innerHTML = s2;
             }
        }
    }
    if(sig == 1) {
        if(sig2 == 1) {
            sig2 = 0;
            document.getElementById("wickets").innerHTML = 0;
            document.getElementById("runs").innerHTML = 0;
            document.getElementById("overs").innerHTML = 0.0;
            document.getElementById("tar").innerHTML = "Target : " +  t;
            onew();
        } else {
            var b5 = num[Math.floor(Math.random()*num.length)];
            if(b5 == 5) {
                document.getElementById("box1").innerHTML =  "<img src = '5.png' width = '200px' /> ";
                document.getElementById("box2").innerHTML =  "<img src = '5.png' width = '200px' /> ";
                document.getElementById("box3").innerHTML = w5;
                w = w + 1;
                document.getElementById("wickets").innerHTML = w;
                if(w >= 10) {
                    alert("out");
                    window.location.reload();
                }
            } else {
                s1 = s1 + 5;
                if(s1 >= t) {
                    alert("won");
                    window.location.reload();
                }
                if(b5 == 1) {
                    document.getElementById("box1").innerHTML =  "<img src = '5.png' width = '200px' /> ";
                    document.getElementById("box2").innerHTML =  "<img src = '1.png' width = '200px' /> ";
                    document.getElementById("box3").innerHTML = ccccc5;
                    document.getElementById("runs").innerHTML = s1;
                } else if(b5 == 2) {
                    document.getElementById("box2").innerHTML =  "<img src = '2.png' width = '200px' /> ";
                    document.getElementById("box1").innerHTML =  "<img src = '5.png' width = '200px' /> ";
                    document.getElementById("box3").innerHTML = ccccc5;
                    document.getElementById("runs").innerHTML = s1;
                } else if(b5 == 3) {
                    document.getElementById("box1").innerHTML =  "<img src = '5.png' width = '200px' /> ";
                    document.getElementById("box2").innerHTML =  "<img src = '3.png' width = '200px' /> ";
                    document.getElementById("box3").innerHTML = ccccc5;
                    document.getElementById("runs").innerHTML = s1;
                } else if(b5 == 4) {
                    document.getElementById("box2").innerHTML =  "<img src = '4.png' width = '200px' /> ";
                    document.getElementById("box1").innerHTML =  "<img src = '5.png' width = '200px' /> ";
                    document.getElementById("box3").innerHTML = ccccc5;
                    document.getElementById("runs").innerHTML = s1;
                } else if(b5 == 6) {
                    document.getElementById("box2").innerHTML =  "<img src = '6.png' width = '200px' /> ";
                    document.getElementById("box1").innerHTML =  "<img src = '5.png' width = '200px' /> ";
                    document.getElementById("box3").innerHTML = ccccc5;
                    document.getElementById("runs").innerHTML = s1;
                }
            }
        }
    }
}
    function six() {
        var r6 =  num[Math.floor(Math.random()*num.length)];
        var c6 =  sayone[Math.floor(Math.random()*sayone.length)];
        var cc6 = saytwo[Math.floor(Math.random()*saytwo.length)];
        var ccc6 = saythree[Math.floor(Math.random()*saythree.length)];
        var cccc6 = sayfour[Math.floor(Math.random()*sayfour.length)];
        var ccccc6 = sayfive[Math.floor(Math.random()*sayfive.length)];
        var cccccc6 = saysix[Math.floor(Math.random()*saysix.length)];
        var w6 = wick6[Math.floor(Math.random()*wick6.length)]; 
        if(sig == 0) {
        if(r6 == 6) {
            document.getElementById("box2").innerHTML =  "<img src = '6.png' width = '200px' /> ";
            document.getElementById("box1").innerHTML =  "<img src = '6.png' width = '200px' /> ";
            document.getElementById("box3").innerHTML = w6;
            w = w + 1;
            document.getElementById("wickets").innerHTML = w;
            if(w >= 10) {
                alert("game-over");
                document.getElementById("wickets").innerHTML = w;
                document.getElementById("box3").innerHTML = "That is the end of first innings";
                sig = 1;
                sig2 = 1;
                sig3 = 1;
                w = 0;
                t = s2 + 1;
                document.getElementById("tar").innerHTML = "TARGET : " + t;
            }
        } else {
            s2 = s2 + r6;
            if(r6 == 1) {
           document.getElementById("box1").innerHTML =  "<img src = '6.png' width = '200px' /> ";
           document.getElementById("box2").innerHTML =  "<img src = '1.png' width = '200px' /> ";
           document.getElementById("box3").innerHTML = c6;
           document.getElementById("runs").innerHTML = s2;
           }else if(r6 == 3) {
            document.getElementById("box1").innerHTML =  "<img src = '6.png' width = '200px' /> ";
            document.getElementById("box2").innerHTML =  "<img src = '3.png' width = '200px' /> ";
            document.getElementById("box3").innerHTML = ccc6;
            document.getElementById("runs").innerHTML = s2;
           }else if(r6 == 4) {
            document.getElementById("box1").innerHTML =  "<img src = '6.png' width = '200px' /> ";
            document.getElementById("box2").innerHTML =  "<img src = '4.png' width = '200px' /> ";
            document.getElementById("box3").innerHTML = cccc6;
            document.getElementById("runs").innerHTML = s2;
           }else if(r6 == 5) {
            document.getElementById("box1").innerHTML =  "<img src = '6.png' width = '200px' /> ";
            document.getElementById("box2").innerHTML =  "<img src = '5.png' width = '200px' /> ";
            document.getElementById("box3").innerHTML = ccccc6;
            document.getElementById("runs").innerHTML = s2;
           }
             else if (r6 == 2) {
            document.getElementById("box1").innerHTML =  "<img src = '6.png' width = '200px' /> ";
            document.getElementById("box2").innerHTML =  "<img src = '2.png' width = '200px' /> ";
            
            document.getElementById("box3").innerHTML = cc6;
            document.getElementById("runs").innerHTML = s2;
             }
        }
    }
    if(sig == 1) {
        if(sig2 == 1) {
            sig2 = 0;
            document.getElementById("wickets").innerHTML = 0;
            document.getElementById("runs").innerHTML = 0;
            document.getElementById("overs").innerHTML = 0.0;
            onew();
        } else {
            var b6 =  num[Math.floor(Math.random()*num.length)];
            if(b6 == 6) {
                w = w + 1;
                document.getElementById("wickets").innerHTML = w;
                document.getElementById("box1").innerHTML = "<img src = '5.png' width = '200px' /> ";
                document.getElementById("box2").innerHTML = "<img src = '5.png' width = '200px' /> ";
                document.getElementById("box3").innerHTML = w6;
                if(w >= 10) {
                    alert("lose");
                    window.location.reload();
                }
            } else {
                s1 = s1 + 6;
                if(s1 >= t) {
                    alert("you won");
                    window.location.reload();
                }
                if(b6 == 1) {
                    document.getElementById("box1").innerHTML = "<img src = '6.png' width = '200px' /> ";
                    document.getElementById("box2").innerHTML = "<img src = '1.png' width = '200px' /> ";
                    document.getElementById("box3").innerHTML = cccccc6;
                    document.getElementById("runs").innerHTML = s1;
                }
                if(b6 == 2) {
                    document.getElementById("box1").innerHTML = "<img src = '6.png' width = '200px' /> ";
                    document.getElementById("box2").innerHTML = "<img src = '2.png' width = '200px' /> ";
                    document.getElementById("box3").innerHTML = cccccc6;
                    document.getElementById("runs").innerHTML = s1;
                }
                if(b6 == 4) {
                    document.getElementById("box1").innerHTML = "<img src = '6.png' width = '200px' /> ";
                    document.getElementById("box2").innerHTML = "<img src = '4.png' width = '200px' /> ";
                    document.getElementById("box3").innerHTML = cccccc6;
                    document.getElementById("runs").innerHTML = s1;
                }
                if(b6 == 3) {
                    document.getElementById("box1").innerHTML = "<img src = '6.png' width = '200px' /> ";
                    document.getElementById("box2").innerHTML = "<img src = '3.png' width = '200px' /> ";
                    document.getElementById("box3").innerHTML = cccccc6;
                    document.getElementById("runs").innerHTML = s1;
                }
                if(b6 == 5) {
                    document.getElementById("box1").innerHTML = "<img src = '6.png' width = '200px' /> ";
                    document.getElementById("box2").innerHTML = "<img src = '5.png' width = '200px' /> ";
                    document.getElementById("box3").innerHTML = cccccc6;
                    document.getElementById("runs").innerHTML = s1;
                }
            }
        }
    }
}

    var o1=0,o2=0;
    function overs() {
        o2 = o2 + 1;
        
        if(o2 >= 6) {
            o2 = 0;
            o1 = o1 + 1;
        } 
        if(o2 <= 5) {
            document.getElementById("overs").innerHTML = o1 + "." + o2;
        }
        if(sig3 == 1) {
            o2 = 0;
            o1 = 0;
            sig3 = 0;
        }
    }
    function onew() {
        var image_x = document.getElementById('imgbat');
         imgbat.parentNode.removeChild(image_x);
        document.getElementById("p1-name").innerHTML =   "<img src = 'cricket-bat.png' width = '50px' /> ";
        document.getElementById("cen").innerHTML =   "Player 1 batting | bowling Player 2";
        var image_y = document.getElementById('imgball');
         imgball.parentNode.removeChild(image_y)
        document.getElementById("p2-name").innerHTML =   "<img src = 'cricket-ball.png' width = '50px' /> ";
    }