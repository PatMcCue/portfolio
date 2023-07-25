    var balls = document.getElementsByClassName("ball");
    var pupils = document.getElementsByClassName("pupil");
    var eyelidTopElements = document.getElementsByClassName("eyelid top");
    var eyelidBottomElements = document.getElementsByClassName("eyelid bottom");

    function changeEyeColor(color) {
        for (let i = 0; i < balls.length; i++) {
          balls[i].style.backgroundColor = color;
        }
      }

      document.addEventListener("click", () => {
        for (let i = 0; i < eyelidTopElements.length; i++) {
          eyelidTopElements[i].classList.add("blink");
          eyelidBottomElements[i].classList.add("blink");
        }

        setTimeout(() => {
          for (let i = 0; i < eyelidTopElements.length; i++) {
            eyelidTopElements[i].classList.remove("blink");
            eyelidBottomElements[i].classList.remove("blink");
          }
        }, 300);
      });
    
    document.onmousemove = () => {
      var x = (event.clientX * 100) / window.innerWidth + "%";
      var y = (event.clientY * 100) / window.innerHeight + "%";

      for (let i = 0; i < 2; i++) {
        balls[i].style.left = x;
        balls[i].style.top = y;
        balls[i].transform = "translate(-" + x + ",-" + y + ")";
      }

      for (let i = 0; i < 2; i++) {
        pupils[i].style.left = x;
        pupils[i].style.top = y;
        pupils[i].transform = "translate(-" + x + ",-" + y + ")";
      }
    };