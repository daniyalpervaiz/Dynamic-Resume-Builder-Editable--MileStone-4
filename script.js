window.addEventListener("load", function () {
    var name = localStorage.getItem("name");
    var profession = localStorage.getItem("profession");
    var tel = localStorage.getItem("tel");
    var email = localStorage.getItem("email");
    var address = localStorage.getItem("address");
    var skill1 = localStorage.getItem("skill1");
    var skill2 = localStorage.getItem("skill2");
    var skill3 = localStorage.getItem("skill3");
    var lang1 = localStorage.getItem("lang1");
    var lang2 = localStorage.getItem("lang2");
    var lang3 = localStorage.getItem("lang3");
    var about = localStorage.getItem("about");
    var company1 = localStorage.getItem("company1");
    var company1Start = localStorage.getItem("company1Start");
    var company1End = localStorage.getItem("company1End");
    var company2 = localStorage.getItem("company2");
    var company2Start = localStorage.getItem("company2Start");
    var company2End = localStorage.getItem("company2End");
    var company3 = localStorage.getItem("company3");
    var company3Start = localStorage.getItem("company3Start");
    var company3End = localStorage.getItem("company3End");
    var schoolDegree = localStorage.getItem("schoolDegree");
    var schoolStart = localStorage.getItem("schoolStart");
    var schoolEnd = localStorage.getItem("schoolEnd");
    var collegeDegree = localStorage.getItem("collegeDegree");
    var collegeStart = localStorage.getItem("collegeStart");
    var collegeEnd = localStorage.getItem("collegeEnd");
    var uniDegree = localStorage.getItem("uniDegree");
    var uniStart = localStorage.getItem("uniStart");
    var uniEnd = localStorage.getItem("uniEnd");
    var profilepic = localStorage.getItem("profilepic");
    var resumeFirstName = document.getElementById("resumeFirstName");
    resumeFirstName.textContent = name;
    var resumeProfession = document.getElementById("resumeProfession");
    resumeProfession.textContent = profession;
    var resumeTel = document.getElementById("resumeTel");
    resumeTel.textContent = tel;
    var resumeEmail = document.getElementById("resumeEmail");
    resumeEmail.textContent = email;
    var ResumeAddress = document.getElementById("ResumeAddress");
    ResumeAddress.textContent = address;
    var resumeLang1 = document.getElementById("resumeLang1");
    resumeLang1.textContent = lang1;
    var resumeLang2 = document.getElementById("resumeLang2");
    resumeLang2.textContent = lang2;
    var resumeLang3 = document.getElementById("resumeLang3");
    resumeLang3.textContent = lang3;
    var resumeSkill1 = document.getElementById("resumeSkill1");
    resumeSkill1.textContent = skill1;
    var resumeSkill2 = document.getElementById("resumeSkill2");
    resumeSkill2.textContent = skill2;
    var resumeSkill3 = document.getElementById("resumeSkill3");
    resumeSkill3.textContent = skill3;
    var resumeAbout = document.getElementById("resumeAbout");
    resumeAbout.textContent = about;
    var resumeCompany1 = document.getElementById("resumeCompany1");
    resumeCompany1.textContent = company1;
    var resumeCompany1Start = document.getElementById("resumeCompany1Start");
    resumeCompany1Start.textContent = company1Start;
    var resumeCompany1End = document.getElementById("resumeCompany1End");
    resumeCompany1End.textContent = company1End;
    var resumeCompany2 = document.getElementById("resumeCompany2");
    resumeCompany2.textContent = company2;
    var resumeCompany2Start = document.getElementById("resumeCompany2Start");
    resumeCompany2Start.textContent = company2Start;
    var resumeCompany2End = document.getElementById("resumeCompany2End");
    resumeCompany2End.textContent = company2End;
    var resumeCompany3 = document.getElementById("resumeCompany3");
    resumeCompany3.textContent = company3;
    var resumeCompany3Start = document.getElementById("resumeCompany3Start");
    resumeCompany3Start.textContent = company3Start;
    var resumeCompany3End = document.getElementById("resumeCompany3End");
    resumeCompany3End.textContent = company3End;
    var resumeSchool = document.getElementById("resumeSchool");
    resumeSchool.textContent = schoolDegree;
    var resumeSchoolStart = document.getElementById("resumeSchoolStart");
    resumeSchoolStart.textContent = schoolStart;
    var resumeSchoolEnd = document.getElementById("resumeSchoolEnd");
    resumeSchoolEnd.textContent = schoolEnd;
    var resumeCollege = document.getElementById("resumeCollege");
    resumeCollege.textContent = collegeDegree;
    var resumeCollegeStart = document.getElementById("resumeCollegeStart");
    resumeCollegeStart.textContent = collegeStart;
    var resumeCollegeEnd = document.getElementById("resumeCollegeEnd");
    resumeCollegeEnd.textContent = collegeEnd;
    var resumeUni = document.getElementById("resumeUni");
    resumeUni.textContent = uniDegree;
    var resumeUniStart = document.getElementById("resumeUniStart");
    resumeUniStart.textContent = uniStart;
    var resumeUniEnd = document.getElementById("resumeUniEnd");
    resumeUniEnd.textContent = uniEnd;
    var resumeImg = document.getElementById("resumeImg");
    resumeImg.src = profilepic;
});
var skillBtn = document.getElementById("skills-button");
var skill = document.getElementById("skills-Id");
skillBtn.addEventListener("click", function () {
    skill.classList.toggle("hide");
});
var printBtn = document.getElementById("print-button");
printBtn.addEventListener("click", function () {
    window.print();
});
var editBtn = document.getElementById("edit-button");
editBtn.addEventListener("click", function () {
    window.history.back();
});