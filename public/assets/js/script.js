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

    addStudent(rollNo, name, degree, city);

    alert('Student added successfully');

    clearForm();

    displayStudents();
});


btnSearch.addEventListener('click', function () {

    var name = varName.value;

    var obj = searchStudent(name);

    removeHighlight();

    if (obj) {

        varRollNo.value = obj.rollNo;
        varName.value = obj.name;
        varDegree.value = obj.degree;
        varCity.value = obj.city;

        highlightStudent(obj.rollNo);

    }
    else {

        alert('Student not found ...!');
    }
});


btnDelete.addEventListener('click', function () {

    var rollNo = varRollNo.value;

    var obj = deleteStudent(rollNo);

    if (obj) {

        alert('Student deleted successfully');

        clearForm();

        displayStudents();
    }
    else {

        alert('Roll No. not found ...!');
    }
});


btnModify.addEventListener('click', function () {

    var rollNo = varRollNo.value;
    var name = varName.value;
    var degree = varDegree.value;
    var city = varCity.value;

    var obj = modifyStudent(rollNo, name, degree, city);

    if (obj) {

        alert('Student modified successfully');

        displayStudents();
    }
    else {

        alert('Roll No. not found ...!');
    }
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


function displayStudents() {

    var data = '';

    for (var i = 0; i < studentArr.length; i++) {

        var student = studentArr[i];

        data += `
            <tr data-rollno="${student.rollNo}">
                <td>${student.rollNo}</td>
                <td>${student.name}</td>
                <td>${student.degree}</td>
                <td>${student.city}</td>
            </tr>
        `;
    }

    studentTableBody.innerHTML = data;
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