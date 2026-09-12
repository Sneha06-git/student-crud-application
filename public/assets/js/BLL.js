function addStudent(rollNo, name, degree, city) {

    return fetch('/save', {

        method: 'POST',

        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },

        body:
            'rollNo=' + encodeURIComponent(rollNo) +
            '&name=' + encodeURIComponent(name) +
            '&degree=' + encodeURIComponent(degree) +
            '&city=' + encodeURIComponent(city)

    });

}


function searchStudent(name) {

    return fetch('/search?name=' + encodeURIComponent(name))
        .then(response => response.json());

}


function modifyStudent(rollNo, name, degree, city) {

    return fetch('/modify', {

        method: 'POST',

        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },

        body:
            'rollNo=' + encodeURIComponent(rollNo) +
            '&name=' + encodeURIComponent(name) +
            '&degree=' + encodeURIComponent(degree) +
            '&city=' + encodeURIComponent(city)

    });

}


function deleteStudent(rollNo) {

    return fetch('/delete', {

        method: 'POST',

        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },

        body:
            'rollNo=' + encodeURIComponent(rollNo)

    });

}