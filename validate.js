function validateForm() {
    const email = document.querySelector('input[name="email"]');
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!pattern.test(email.value)) {
        alert('请输入有效的邮箱地址');
        return false;
    }
    return true;
}