function attachEvents() {
  const baseUrl = "http://localhost:3030/jsonstore/collections/students";

  const [firstName, lastName, facultyNumber, grade] = document.querySelectorAll(`input[type="text"]`);
  const tbody = document.querySelector("#results tbody");
  const submitBtn = document.getElementById("submit");

  fetch(baseUrl)
    .then(res => res.json())
    .then(data => {
      const students = Object.values(data);

      students.forEach(currStudent => {
        const student = {
          firstName: currStudent.firstName,
          lastName: currStudent.lastName,
          facultyNumber: currStudent.facultyNumber,
          grade: currStudent.grade,
        };

        createTr(student);
      });
    });

  submitBtn.addEventListener("click", () => {
    const student = {
      firstName: firstName.value,
      lastName: lastName.value,
      facultyNumber: facultyNumber.value,
      grade: grade.value
    };

    fetch(baseUrl, {
      method: "POST",
      body: JSON.stringify(student)
    })
      .then(res => res.json())
      .then(data => {

        if (student.firstName && student.lastName && student.facultyNumber && student.grade) {
          createTr(student);
          cleanFields();
        }
      });
  });

  function createTr(student) {
    const tr = document.createElement("tr");
    const tdFirstName = document.createElement("td");
    const tdLastName = document.createElement("td");
    const tdFacultyNumber = document.createElement("td");
    const tdGrade = document.createElement("td");

    tdFirstName.textContent = student.firstName;
    tdLastName.textContent = student.lastName;
    tdFacultyNumber.textContent = student.facultyNumber;
    tdGrade.textContent = student.grade;

    tr.appendChild(tdFirstName);
    tr.appendChild(tdLastName);
    tr.appendChild(tdFacultyNumber);
    tr.appendChild(tdGrade);

    tbody.appendChild(tr);
  }

  function cleanFields() {
    firstName.value = "";
    lastName.value = "";
    facultyNumber.value = "";
    grade.value = "";
  }
}

attachEvents();