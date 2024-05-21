const q1Answer = (a) => {
  alert("q1의 답체크를 합싀다");
};

const hint = () => {
  $(".bg").show();
  $(".hint").show();
};

const next = () => {
  location.href = "266.html";
};

const wrong = (e) => {
  e.preventDefault();
  alert("틀렸어, 뿅.. 다시 생각해봐.");
};

$(document).ready(function () {
  $(".bg").click(function () {
    $(this).hide();
    $(".hint").hide();
  });

  $(".button-hint").click(function (e) {
    e.preventDefault();
    hint();
  });

  $(".button-answer").click(function (e) {
    const page = $(".page").val();
    const answer = $(".answer").val();

    e.preventDefault();
    // alert(page);
    // alert(answer);
    if (page == 1) {
      if (answer != 6) {
        wrong(e);
      } else {
        location.href = "6.html";
      }
    } else if (page == 2) {
      if (answer.toLowerCase() == "love") {
        $(".question").hide();
        $(".answer-ok").show();
      } else {
        wrong(e);
      }
    } else if (page == 3) {
      if (answer == 266 || answer == "이육육") {
        $(".question").hide();
        $(".answer-ok").html(
          "<hr><br>혀, 혀, 형. 머리가 어떻게 된 거에요! 우성이 비명을 질렀지만 그런 것쯤, 운전석에 앉은 이명헌에 비하면 중요한 게 아니었다. 어제까지만 해도 제법길러 멋들어지게 뒤로 넘기고 있던 머리가-고등학교 때 마냥, 가닥 하나 없이 맨들하게 정리되어 있었으니까. <br /><br />그러나 이명헌은 이번 질문에도 굳이 대답하지 않고 어깨를 으쓱하며 옆자리를 가리켰다. -타라, 뿅. 우성은 벌어진 입을 다물지도 못하고 차에 오르며 종알거렸다. 아니, 뭐, 안, 안 어울리진 않아요. 옛날 생각나서 좋기도 해요. 근데 이제 머리 세팅하고 그럴 때 생각하면-말하다가 우성은 아차, 한다. 저도 모르게 결혼식 때 턱시도 입을 걸 생각했는데, 입을 떼고 보니 아직 프러포즈 대답을 못 들었음이 떠오른 것이다. <br /> <br /> …뭐, 형 요즘은 비시즌이라 공식 석상이나, 정장 입을 일이 많으니까… 어설프게 말꼬리를 흐리는 우성을 흘긋, 돌아본 명헌이 말없이 다시 앞으로 시선을 고정한다. 두 사람 사이에서 침묵이 불편의 의미를 잃게 된 지는 오래였는데, 우성은 오랜만에 약간 긴장감을 느낀다. 명헌의 속을 알 수 없다는 사실이- 제 손바닥을 간질이는 느낌. 우성은 느리게 숨 쉬며 차창 밖의, 오랜만에 보는 고국의 도로 풍경을 더듬다가 문득 묻는다. <br /> <br /> “형, 그런데 우리… 어디 가는 거예요?” <div class='bebas-neue-regular hvBlue' style='font-size: 30px; margin-top: 10px; float: right; cursor:pointer;' onclick='javascript: next();'> >>>> NEXT >>>></div>"
        );
      } else wrong(e);
    } else if (page == 4) {
      if (answer != 18) {
        wrong(e);
      } else {
        location.href = "18.html";
      }
    } else if (page == 5) {
      if (answer != 139) {
        wrong(e);
      } else {
        location.href = "139.html";
      }
    } else if (page == 6) {
      if (answer != "인천국제공항") {
        wrong(e);
      } else {
        location.href = "icn.html";
      }
    } else if (page == 7) {
      if (answer != "ㅁㅣㄷㅇㅡㅁ" && answer != "믿음") {
        wrong(e);
      } else {
        location.href = "faith.html";
      }
    }
  });
});
