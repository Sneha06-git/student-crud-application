var varRollNo = document.getElementById('rollNo');
var varName = document.getElementById('name');
var varDegree = document.getElementById('degree');
var varCity = document.getElementById('city');

var btnAdd = document.getElementById('btnAdd');
var btnSearch = document.getElementById('btnSearch');
var btnModify = document.getElementById('btnModify');
var btnDelete = document.getElementById('btnDelete');
var btnClear = document.getElementById('btnClear');

var studentTableBody = document.getElementById('studentTableBody');


btnAdd.addEventListener('click', function () {

    var rollNo = varRollNo.value;
    var name = varName.value;
    var degree = varDegree.value;
    var city = varCity.value;

    if (rollNo == '' || name == '' || degree == '' || city == '') {

        alert('Please fill all the fields');
        return;

    }

    addStudent(rollNo, name, degree, city)
        .then(() => {

            alert('Student added successfully');

            window.location.href = '/';

        });

});


btnSearch.addEventListener('click', function () {

    var name = varName.value;

    if (name == '') {

        alert('Please enter student name');
        return;

    }

    searchStudent(name)
        .then(function (student) {

            removeHighlight();

            if (student) {

                varRollNo.value = student.rollNo;
                varName.value = student.name;
                varDegree.value = student.degree;
                varCity.value = student.city;

                highlightStudent(student.rollNo);

            }
            else {

                alert('Student not found ...!');

            }

        });

});


btnModify.addEventListener('click', function () {

    var rollNo = varRollNo.value;
    var name = varName.value;
    var degree = varDegree.value;
    var city = varCity.value;

    if (rollNo == '' || name == '' || degree == '' || city == '') {

        alert('Please fill all the fields');
        return;

    }

    modifyStudent(rollNo, name, degree, city)
        .then(function () {

            alert('Student modified successfully');

            window.location.href = '/';

        });

});


btnDelete.addEventListener('click', function () {

    var rollNo = varRollNo.value;

    if (rollNo == '') {

        alert('Please search a student first');
        return;

    }

    deleteStudent(rollNo)
        .then(function () {

            alert('Student deleted successfully');

            window.location.href = '/';

        });

});


btnClear.addEventListener('click', function () {

    clearForm();

    removeHighlight();

});


function clearForm() {

    varRollNo.value = '';
    varName.value = '';
    varDegree.value = '';
    varCity.value = '';

}


function highlightStudent(rollNo) {

    var rows = studentTableBody.getElementsByTagName('tr');

    for (var i = 0; i < rows.length; i++) {

        if (rows[i].getAttribute('data-rollno') == rollNo) {

            rows[i].classList.add('highlight-row');

            rows[i].scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });

            break;

        }

    }

}


function removeHighlight() {

    var rows = studentTableBody.getElementsByTagName('tr');

    for (var i = 0; i < rows.length; i++) {

        rows[i].classList.remove('highlight-row');

    }

}