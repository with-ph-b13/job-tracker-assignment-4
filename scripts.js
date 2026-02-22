let jobs = [
  {
    id: 1,
    company: "Mobile First Corp",
    position: "React Native Developer",
    location: "Remote",
    type: "Full-time",
    salary: "$130,000 - $175,000",
    description:
      "Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.",
    status: "NOT APPLIED",
  },
  {
    id: 2,
    company: "WebFlow Agency",
    position: "Web Designer & Developer",
    location: "Los Angeles, CA",
    type: "Part-time",
    salary: "$60,000 - $120,000",
    description:
      "Create stunning web experiences for high-profile clients. Must have portfolio and experience with modern web design trends.",
    status: "NOT APPLIED",
  },
  {
    id: 3,
    company: "DataViz Solutions",
    position: "Data Visualization Specialist",
    location: "Boston, MA",
    type: "Full-time",
    salary: "$125,000 - $155,000",
    description:
      "Transform complex data into compelling visualizations. Required skills: D3.js, React, and strong analytical thinking.",
    status: "NOT APPLIED",
  },
  {
    id: 4,
    company: "CloudFirst Inc",
    position: "Backend Developer",
    location: "Seattle, WA",
    type: "Full-time",
    salary: "$140,000 - $180,000",
    description:
      "Design and maintain scalable backend systems using Python and AWS. Work with modern DevOps practices and cloud infrastructure.",
    status: "NOT APPLIED",
  },
  {
    id: 5,
    company: "Innovation Labs",
    position: "UI/UX Engineer",
    location: "Austin, TX",
    type: "Full-time",
    salary: "$110,000 - $150,000",
    description:
      "Create beautiful and functional user interfaces for our suite of products. Strong design skills and frontend development expertise required.",
    status: "NOT APPLIED",
  },
  {
    id: 6,
    company: "MegaCorp Solutions",
    position: "JavaScript Developer",
    location: "New York, NY",
    type: "Full-time",
    salary: "$120,000 - $170,000",
    description:
      "Build enterprise applications with JavaScript and modern frameworks. We offer competitive compensation, health insurance, and professional development opportunities.",
    status: "NOT APPLIED",
  },
  {
    id: 7,
    company: "StartupXYZ",
    position: "Full Stack Engineer",
    location: "Remote",
    type: "Full-time",
    salary: "$120,000 - $160,000",
    description:
      "Join our fast-growing startup and work on our core platform. Experience with Node.js and React required. Great benefits and equity package included.",
    status: "NOT APPLIED",
  },
  {
    id: 8,
    company: "TechCorp Industries",
    position: "Senior Frontend Developer",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$150,000 - $175,000",
    description:
      "We are looking for an experienced Frontend Developer to build scalable web applications using React and TypeScript. You will work with a talented team on cutting-edge projects.",
    status: "NOT APPLIED",
  },
];

const listContainer = document.getElementById("job-container");

function renderJobs() {
  listContainer.innerHTML = "";

  for (let i = 0; i < jobs.length; i++) {
    const job = jobs[i];
    const jobElement = document.createElement("div");

    jobElement.classList.add(
      "bg-white",
      "p-6",
      "rounded-lg",
      "shadow-sm",
      "relative",
    );
    jobElement.innerHTML = `
        <h4 class="text-lg font-bold">${job.company}</h4>
        <p class="text-sm text-gray-400 mb-3">${job.position}</p>
        <p class="text-sm text-gray-500 mb-3">${job.location} • ${job.type} • ${job.salary}</p>
        <span class="inline-block px-4 py-2 rounded-md bg-gray-100 text-blue-900 mb-3">
            ${job.status}
        </span>
        <p class="text-sm text-gray-500">${job.description}</p>
        
        <svg 
            class="w-5 h-5 absolute top-8 right-8 delbtn hover:text-red-700"
            style="cursor: pointer;"
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 640 640"
            fill="currentColor"
        >
            <path d="M232.7 69.9L224 96L128 96C110.3 96 96 110.3 96 128C96 145.7 110.3 160 128 160L512 160C529.7 160 544 145.7 544 128C544 110.3 529.7 96 512 96L416 96L407.3 69.9C402.9 56.8 390.7 48 376.9 48L263.1 48C249.3 48 237.1 56.8 232.7 69.9zM512 208L128 208L149.1 531.1C150.7 556.4 171.7 576 197 576L443 576C468.3 576 489.3 556.4 490.9 531.1L512 208z"/>
        </svg>
        <div class="flex gap-2 mt-4">
            <button class="border border-emerald-500 text-emerald-500 hover:bg-emerald-50 uppercase font-bold rounded-md px-4 py-2 interview-btn">Interview</button>
            <button class="border border-red-400 text-red-400 hover:bg-red-50 uppercase font-bold rounded-md px-4 py-2 rejected-btn">Rejected</button>
        </div>        
        
    `;

    const delBtn = jobElement.querySelector(".delbtn");
    delBtn.onclick = function () {
      deleteJob(job.id);
    };

    const interviewBtn = jobElement.querySelector(".interview-btn");
    interviewBtn.onclick = function () {
      updateJobStatus(job.id, "INTERVIEW");
    };

    const rejectedBtn = jobElement.querySelector(".rejected-btn");
    rejectedBtn.onclick = function () {
      updateJobStatus(job.id, "REJECTED");
    };

    function updateJobStatus(id, status) {
      jobs = jobs.map((job) => {
        if (job.id === id) {
          return { ...job, status };
        }
        return job;
      });
      renderJobs();
    }

    jobElement.appendChild(delBtn);
    listContainer.appendChild(jobElement);
  }
}

function deleteJob(id) {
  jobs = jobs.filter((job) => job.id !== id);
  renderJobs();
}

renderJobs();
