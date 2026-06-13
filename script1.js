const filter = document.getElementById("levelFilter");
const jobs = document.querySelectorAll(".job");

filter.addEventListener("change", function() {
    const selected = this.value;

    jobs.forEach(job => {
        if(selected === "all" || job.dataset.level === selected){
            job.style.display = "block";
        } else {
            job.style.display = "none";
        }
    });
});