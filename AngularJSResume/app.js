// AngularJS Portfolio Application
var app = angular.module("portfolioApp", ["ngAnimate"]);

app.controller("MainController", [
  "$scope",
  "$window",
  "$timeout",
  "$interval",
  function ($scope, $window, $timeout, $interval) {
    // Navigation and scroll handling
    $scope.isScrolled = false;
    $scope.menuActive = false;

    angular.element($window).bind("scroll", function () {
      $scope.$apply(function () {
        $scope.isScrolled = $window.pageYOffset > 50;
      });
    });

    $scope.toggleMenu = function () {
      $scope.menuActive = !$scope.menuActive;
    };

    $scope.scrollTo = function (section) {
      $scope.menuActive = false;
      var element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };

    // Typing animation
    $scope.typedText = "";
    var titles = [
      "Data Engineer",
      "Python Developer",
      "Problem Solver",
      "Tech Enthusiast",
    ];
    var titleIndex = 0;
    var charIndex = 0;
    var isDeleting = false;

    function typeText() {
      var currentTitle = titles[titleIndex];

      if (isDeleting) {
        $scope.typedText = currentTitle.substring(0, charIndex - 1);
        charIndex--;
      } else {
        $scope.typedText = currentTitle.substring(0, charIndex + 1);
        charIndex++;
      }

      var typeSpeed = isDeleting ? 50 : 100;

      if (!isDeleting && charIndex === currentTitle.length) {
        typeSpeed = 2000;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        titleIndex = (titleIndex + 1) % titles.length;
        typeSpeed = 500;
      }

      $timeout(function () {
        typeText();
      }, typeSpeed);
    }

    typeText();

    // Stats
    $scope.stats = [
      { value: "8.8", label: "CGPA" },
      { value: "3+", label: "Projects" },
      { value: "3", label: "Certifications" },
      { value: "100%", label: "Dedication" },
    ];

    // Highlights
    $scope.highlights = [
      {
        icon: "fas fa-trophy",
        title: "Award Winner",
        description: "1st Prize at PCU Tech Fest 2023 for IoT project",
      },
      {
        icon: "fas fa-code",
        title: "Full Stack Developer",
        description:
          "Experienced in Flask, Django, and modern web technologies",
      },
      {
        icon: "fas fa-graduation-cap",
        title: "Continuous Learner",
        description: "Certified in Red Hat System Administration and Python",
      },
      {
        icon: "fas fa-users",
        title: "Team Leader",
        description: "Led multiple successful projects and team collaborations",
      },
    ];

    // Education
    $scope.education = [
      {
        year: "2023 - Present",
        degree: "B.Tech in Computer Science & Engineering",
        institution: "Pimpri Chinchwad University",
        score: "CGPA: 8.8",
      },
      {
        year: "2021 - 2023",
        degree: "Higher Secondary Education (Class XII)",
        institution: "Matoshri Junior College (Science)",
        score: "Percentage: 64.83%",
      },
      {
        year: "2019 - 2021",
        degree: "Secondary Education (Class X)",
        institution: "M.S. Kothari Academy",
        score: "Percentage: 86%",
      },
    ];

    // Certifications
    $scope.certifications = [
      {
        name: "Red Hat System Administration I (RH124)",
        issuer: "Red Hat",
        pdfUrl: "Red Hat System Administration I (RH124).pdf",
      },
      {
        name: "Python Preparatory Certificate",
        issuer: "Intellipaat",
        pdfUrl: "Python Preparatory Certificate.pdf",
      },
      {
        name: "Python & Data Handling",
        issuer: "Intellipaat",
        pdfUrl: null, // Add PDF file if available
      },
    ];

    // Technical Skills
    $scope.technicalSkills = [
      { name: "Python", level: 90, icon: "fab fa-python" },
      { name: "SQL & MySQL", level: 85, icon: "fas fa-database" },
      { name: "Java", level: 70, icon: "fab fa-java" },
      { name: "C/C++", level: 75, icon: "fas fa-code" },
      { name: "Flask/Django", level: 80, icon: "fas fa-flask" },
      { name: "Linux (RHEL)", level: 75, icon: "fab fa-linux" },
      { name: "Git & GitHub", level: 85, icon: "fab fa-git-alt" },
      { name: "IoT & ESP32", level: 70, icon: "fas fa-microchip" },
    ];

    // Soft Skills
    $scope.softSkills = [
      "Creative Thinking",
      "Team Collaboration",
      "Problem Solving",
      "Communication",
      "Presentation Skills",
      "Stress Management",
      "Leadership",
      "Time Management",
    ];

    // Projects
    $scope.projects = [
      {
        name: "Dr.Precaution",
        description:
          "A Flask web application that analyzes blood reports and predicts potential diseases using Cohere API. Features include MySQL database integration, user authentication, and an intuitive dashboard.",
        technologies: ["Flask", "Python", "MySQL", "Cohere API", "HTML/CSS"],
        icon: "fas fa-heartbeat",
        github: "https://github.com/harshalahire07/My_First_Project",
        live: null,
      },
      {
        name: "Smart Hydroponics System",
        description:
          "An IoT-based automated irrigation system using ESP32 microcontroller and Blynk platform to monitor soil moisture levels and control water supply. Won 1st Prize at PCU Tech Fest 2023.",
        technologies: ["ESP32", "IoT", "Blynk", "C++", "Sensors"],
        icon: "fas fa-seedling",
        github: null,
        live: null,
      },
      {
        name: "Django Task Manager",
        description:
          "A full-stack task management web application built with Django framework, featuring user authentication, CRUD operations, task categorization, and deadline tracking.",
        technologies: ["Django", "Python", "SQLite", "Bootstrap", "JavaScript"],
        icon: "fas fa-tasks",
        github: "https://github.com/harshalahire07/django_fullstackproject",
        live: null,
      },
    ];

    // Contact Form
    $scope.contactForm = {
      name: "",
      email: "",
      subject: "",
      message: "",
    };

    $scope.formStatus = "";

    $scope.sendMessage = function () {
      // In a real application, this would send data to a backend
      $scope.formStatus =
        "Message sent successfully! I'll get back to you soon.";

      // Reset form
      $timeout(function () {
        $scope.contactForm = {
          name: "",
          email: "",
          subject: "",
          message: "",
        };
        $scope.formStatus = "";
      }, 3000);
    };

    $scope.downloadResume = function () {
      alert(
        "Resume download functionality would be implemented here. Please contact me via email for my resume."
      );
    };

    $scope.viewCertificate = function (pdfUrl) {
      if (pdfUrl) {
        $window.open(pdfUrl, "_blank");
      } else {
        alert("Certificate PDF not available at the moment.");
      }
    };

    // Animate elements on scroll
    var observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px",
    };

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
        }
      });
    }, observerOptions);

    // Wait for DOM to load before observing elements
    $timeout(function () {
      var elements = document.querySelectorAll(
        ".project-card, .skill-card, .timeline-item, .cert-card"
      );
      elements.forEach(function (el) {
        observer.observe(el);
      });
    }, 100);
  },
]);

// Custom directive for smooth scroll
app.directive("smoothScroll", [
  "$timeout",
  function ($timeout) {
    return {
      restrict: "A",
      link: function (scope, element, attrs) {
        element.on("click", function (e) {
          e.preventDefault();
          var target = attrs.href;
          var targetElement = document.querySelector(target);
          if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth" });
          }
        });
      },
    };
  },
]);
