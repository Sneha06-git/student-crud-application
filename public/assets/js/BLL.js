var studentArr = [];

function addStudent(rollNo, name, degree, city) {

    var student = {
        rollNo: rollNo,
        name: name,
        degree: degree,
        city: city
    };

    studentArr.push(student);
}


function searchStudent(name) {

    function matchStudentOnBasisOfName(student) {
        return student.name.toLowerCase() == name.toLowerCase();
    }

    var obj = studentArr.find(matchStudentOnBasisOfName);

    return obj;
}


function deleteStudent(rollNo) {

    function matchStudentOnTheBasisOfRollNo(student) {
        return student.rollNo == rollNo;
    }

    var arrIndex = studentArr.findIndex(matchStudentOnTheBasisOfRollNo);

    if (arrIndex != -1) {
        studentArr.splice(arrIndex, 1);
        return true;
    }
    else {
        return false;
    }
}


function modifyStudent(rollNo, name, degree, city) {

    function matchStudentOnTheBasisOfRollNo(student) {
        return student.rollNo == rollNo;
    }

    var arrIndex = studentArr.findIndex(matchStudentOnTheBasisOfRollNo);

    if (arrIndex != -1) {

        studentArr[arrIndex].name = name;
        studentArr[arrIndex].degree = degree;
        studentArr[arrIndex].city = city;

        return true;
    }
    else {
        return false;
    }
}