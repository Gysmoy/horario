moment.locale("es");
setInterval(function () {
  var date = new Date();
  var day = `day${date.getDay()}`;
  $("#header").html(`
    ${moment().format("dddd, DD MMMM YYYY")}<br>
    ${moment().format("HH:mm:ss")}
  `);
  if (horario[day]) {
    var now = {
      course: null,
    };
    horario[day].forEach((course) => {
      var time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
      var _now = time.split(":");
      var _start = course.start.split(":");
      var _end = course.end.split(":");
      var __start = _start[0] * 3600 + _start[1] * 60 + 0;
      var __end = _end[0] * 3600 + _end[1] * 60 + 0;
      var __now = _now[0] * 3600 + _now[1] * 60 + _now[2] * 1;
      if (__now >= __start && __now <= __end) {
        now = course;
      }
    });
    if (now.course == null) {
      for (let i = 0; i < horario[day].length; i++) {
        const course = horario[day][i];
        var time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
        var _now = time.split(":");
        var _start = course.start.split(":");
        var _end = course.end.split(":");
        var __start = _start[0] * 3600 + _start[1] * 60 + 0;
        var __end = _end[0] * 3600 + _end[1] * 60 + 0;
        var __now = _now[0] * 3600 + _now[1] * 60 + _now[2] * 1;
        if (__now < __start) {
          now = course;
          break;
        }
      }
    }
    if (now.course != null) {
      // Variables de tiempo
      var start = `${moment().format("YYYY-MM-DD")} ${now.start}:00`;
      var end = `${moment().format("YYYY-MM-DD")} ${now.end}:00`;

      var _start = now.start.split(":");
      var _end = now.end.split(":");
      var _now = moment().format("HH:mm:ss").split(":");
      var __start = _start[0] * 3600 + _start[1] * 60;
      var __end = _end[0] * 3600 + _end[1] * 60;
      var __now = _now[0] * 3600 + _now[1] * 60 + _now[2] * 1;

      if (__now - __start == 0) {
        window.open(now.link, "_alt");
      }
      if (__now - __start >= 0) {
        var percent = ((__now - __start) * 100) / (__end - __start);
        $('#footer .mark').text(`${percent.toFixed(2)}%`)
          .css('left', `calc(${percent}% - 25px)`);
        $("#footer .link").css(
          "background",
          `linear-gradient(90deg, #fff 0%, #7a83ea33 ${percent}%, #fff ${percent}%)`
        );
      } else {
        $('#footer .mark').text('0.00%')
          .css('left', `calc(0% - 25px)`);
        $("#footer .link").css("background", "#fff");
      }

      $("#body.false").hide();
      $("#body.true").show(250);
      $("#footer").show(250);
      $("#body.true .time.start").text(`${moment(start).fromNow()}`).attr('title', now.start);
      $("#body.true .time.end").text(`${moment(end).fromNow()}`).attr('title', now.end);
      $("#body.true .course").text(now.course);
      $("#body.true .instructor").text(now.instructor);
      $("#footer .link").attr("href", now.link);
      //window.open(now.link , '_blank');
    } else {
      $("#body.true").hide();
      $("#footer").hide();
      $("#body.false").show(250);
      $("#body.false").text("- No hay clases por ahora -");
    }
  } else {
    $("#body.true").hide();
    $("#footer").hide();
    $("#body.false").show(250);
    $("#body.false").text("- No hay clases en este día -");
  }
}, 1000);
