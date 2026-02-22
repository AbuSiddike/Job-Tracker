const jobsContainer = document.getElementById('jobs-container');
const totalCount = document.getElementById('total-count');
const interviewCount = document.getElementById('interview-count');
const rejectedCount = document.getElementById('rejected-count');
const jobCountText = document.getElementById('job-count');
const tabs = document.querySelectorAll('.tab');

let currentTab = 'all';

function renderJobs(jobArray) {
  jobsContainer.innerHTML = "";

  if (jobArray.length === 0) {
    jobsContainer.innerHTML = 
    `
      <div class="col-span-full text-center p-10 bg-base-100 rounded-xl shadow">
        <h3 class="text-xl font-bold mb-2">No Jobs Available</h3>
        <p class="text-gray-500">You haven’t added any job to this category.</p>
      </div>
    `;
    jobCountText.innerText = "0 Jobs";
    return;
  }

  jobArray.forEach(job => {
    const card = document.createElement("div");
    card.className = "card bg-base-100 shadow-xl";

    card.innerHTML = 
    `
      <div class="card-body">
        <h2 class="card-title">${job.company}</h2>
        <p><strong>Position:</strong> ${job.position}</p>
        <p><strong>Location:</strong> ${job.location}</p>
        <p><strong>Type:</strong> ${job.type}</p>
        <p><strong>Salary:</strong> ${job.salary}</p>
        <p class="text-sm text-gray-600">${job.description}</p>

        <div class="card-actions justify-between mt-4">
          <div>
            <button class="btn btn-success btn-sm interview-btn" data-id="${job.id}">
              Interview
            </button>
            <button class="btn btn-error btn-sm reject-btn" data-id="${job.id}">
              Rejected
            </button>
          </div>
          <button class="btn btn-neutral btn-sm delete-btn" data-id="${job.id}">
            Delete
          </button>
        </div>
      </div>
    `;

    jobsContainer.appendChild(card);
  });

  jobCountText.innerText = `${jobArray.length} Jobs`;
}
