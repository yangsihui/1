// 移动端导航折叠
const navList = document.querySelector('.nav-list');
const logo = document.querySelector('.logo');

logo.addEventListener('click', () => {
    navList.classList.toggle('active');
});