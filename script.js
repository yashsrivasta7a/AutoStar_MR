function selectAllFiveStars() {
    document.querySelectorAll("input.star-5").forEach(star => {
        star.checked = true;
        star.dispatchEvent(new Event("input", { bubbles: true }));
    });
}

document.getElementById("select-stars-btn").addEventListener("click", selectAllFiveStars);
