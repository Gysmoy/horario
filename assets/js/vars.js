var courses = {
    "FPR": "FORMACIÓN PRÁCTICA REMOTA",
    "FME": "FORMACIÓN DE MONITORES DE EMPRESA",
    "SYP": "SOFTWARE Y PROTOTIPADO"
};
var links = {
    "FPR": "https://teams.microsoft.com/l/meetup-join/19%3ameeting_Y2I5ZjdiZTUtZDU2Yy00MjAxLWJkOWEtYWYxZTk5ODYxZGEy%40thread.v2/0?context=%7b%22Tid%22%3a%22b4a40545-7779-4b38-aff7-1f1738f80840%22%2c%22Oid%22%3a%2262bb5d48-3c99-467a-9a06-047dca328b0d%22%7d",
    "FME": "https://teams.microsoft.com/l/meetup-join/19%3ameeting_YTNmODEyYWEtMTQ3OC00YzAyLWE0MDgtNjNhMTk5Y2MxMzNk%40thread.v2/0?context=%7b%22Tid%22%3a%22b4a40545-7779-4b38-aff7-1f1738f80840%22%2c%22Oid%22%3a%22d499d961-a0c5-41ed-bb9a-cfb5181f9b34%22%7d",
    "SYP": "https://teams.microsoft.com/l/meetup-join/19%3ameeting_ZWQyN2ViZGYtODYxYi00MTdhLTg5ODEtNDgzZmQwMjgwZjBl%40thread.v2/0?context=%7b%22Tid%22%3a%22b4a40545-7779-4b38-aff7-1f1738f80840%22%2c%22Oid%22%3a%22a26ca2dd-e541-4d46-aa85-d90977bad110%22%7d"
};
var instructors = {
    "PNJA": "POMA NUÑEZ, JOSÉ ANTONIO",
    "DCLM": "DE LA CRUZ CAMPOS, LEANDRO MARCELINO",
    "VDJC": "VILCHEZ DEGREGORI, JUAN CARLOS"
};
var horario = {
    "day1": [
        {
            "start": "08:00",
            "end": "13:00",
            "course": "KARLOS SEGUROS",
            "instructor": "FREDDY BENDEZÚ",
            "link": "https://wa.me/?text=Buenos días ingeniero, buenos días a todos: https://meet.google.com/bxt-oavn-uxi",
        },
        {
            "start": "13:30",
            "end": "15:45",
            "course": courses.FPR,
            "instructor": instructors.PNJA,
            "link": links.FPR
        },
        {
            "start": "16:00",
            "end": "17:30",
            "course": courses.FPR,
            "instructor": instructors.PNJA,
            "link": links.FPR
        }
    ],
    "day2": [
        {
            "start": "13:30",
            "end": "15:00",
            "course": courses.FPR,
            "instructor": instructors.PNJA,
            "link": links.FPR
        },
        {
            "start": "15:15",
            "end": "16:45",
            "course": courses.FPR,
            "instructor": instructors.PNJA,
            "link": links.FPR
        }
    ],
    "day3": [
        {
            "start": "13:30",
            "end": "15:00",
            "course": courses.FME,
            "instructor": instructors.DCLM,
            "link": links.FME
        },
        {
            "start": "15:15",
            "end": "17:30",
            "course": courses.SYP,
            "instructor": instructors.VDJC,
            "link": links.SYP
        }
    ],
    "day4": [
        {
            "start": "13:30",
            "end": "15:00",
            "course": courses.SYP,
            "instructor": instructors.VDJC,
            "link": links.SYP
        },
        {
            "start": "15:15",
            "end": "16:45",
            "course": courses.SYP,
            "instructor": instructors.VDJC,
            "link": links.SYP
        }
    ],
    "day0": [
        {
            "start": "22:20",
            "end": "22:22",
            "course": courses.SYP,
            "instructor": instructors.VDJC,
            "link": links.SYP
        }
    ]
};