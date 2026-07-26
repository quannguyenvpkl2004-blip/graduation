/**
 * COUNTDOWN.JS
 * Xử lý bộ đếm ngược thời gian đến Lễ Tốt Nghiệp
 */

document.addEventListener('DOMContentLoaded', () => {
    // Thiết lập ngày giờ tốt nghiệp (Định dạng: Tháng Ngày, Năm Giờ:Phút:Giây)
    const graduationDate = new Date("August 11, 2026 08:00:00").getTime();

    // Lấy các phần tử DOM hiển thị thời gian
    const daysEl = document.getElementById('cd-days');
    const hoursEl = document.getElementById('cd-hours');
    const minutesEl = document.getElementById('cd-minutes');
    const secondsEl = document.getElementById('cd-seconds');

    // Hàm tính toán và cập nhật bộ đếm
    function updateCountdown() {
        const now = new Date().getTime();
        const distance = graduationDate - now;

        if (distance > 0) {
            // Tính toán số ngày, giờ, phút, giây
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((Normally I can help with things like this, but I don't seem to have access to that content. You can try again or ask me for something else.
