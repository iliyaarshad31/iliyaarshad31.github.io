window.confirm("به سامانه هنرستان سعیدی خوش آمدید");

function checkForm() {
    var username = document.getElementById("username").value.trim();
    var phone    = document.getElementById("phone").value.trim();
    var melli    = document.getElementById("melli").value.trim();
    var password = document.getElementById("password").value.trim();

    if (username === "") { alert("لطفاً نام کاربری خود را وارد کنید"); return false; }
    if (phone === "")    { alert("لطفاً شماره همراه خود را وارد کنید"); return false; }
    if (melli === "")    { alert("لطفاً کد ملی خود را وارد کنید"); return false; }
    if (password === "") { alert("لطفاً رمز عبور خود را وارد کنید"); return false; }

    var gender = document.querySelector('input[name="gender"]:checked');
    if (!gender) { alert("لطفاً جنسیت خود را انتخاب کنید"); return false; }

    var ok = confirm("آیا اطلاعات صحیح هستند؟");
    if (ok) { alert("ورود با موفقیت انجام شد"); return true; }
    else { alert("لغو شد"); return false; }
}

function toggleMenu() {
    var menu = document.getElementById("menu-popup");
    menu.style.display = (menu.style.display === "block") ? "none" : "block";
}

function openInfo(infoId) {
    document.getElementById(infoId).style.display = "block";
}

function closeInfo(infoId) {
    document.getElementById(infoId).style.display = "none";
}
