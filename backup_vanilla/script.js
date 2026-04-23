
// REGISTER ONCE
gsap.registerPlugin(ScrollTrigger);

// DEFAULT SMOOTHNESS
gsap.defaults({
  ease: "power3.out",
  duration: 1
});


// 🎯 HERO ENTRY ANIMATION
gsap.from(".left-content", {
  scrollTrigger: {
    trigger: ".hero-split",
    start: "top 80%",
  },
  x: -100,
  opacity: 0
});


gsap.to(".profile-img", {
  scrollTrigger: {
    trigger: ".hero-split",
    start: "top top",
    end: "bottom top",
    scrub: true
  },
  opacity: 0,
  scale: 0.95,
  filter: "blur(10px)"
});


// 🎯 PROJECT & CARD ANIMATION
gsap.utils.toArray(".project, .card").forEach((el) => {
  gsap.from(el, {
    scrollTrigger: {
      trigger: el,
      start: "top 85%",
    },
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power3.out"
  });
});

// 🎯 HERO PARALLAX
gsap.to(".hero-split", {
  scrollTrigger: {
    trigger: ".hero-split",
    start: "top top",
    end: "bottom top",
    scrub: true
  },
  y: 100,
  opacity: 0.2
});


// 🎯 IPHONE SECTION ANIMATION
gsap.to(".iphone", {
  scrollTrigger: {
    trigger: ".iphone-section",
    start: "top center",
    end: "bottom center",
    scrub: true
  },
  rotateY: 0,
  rotateX: 0,
  scale: 1.2
});

gsap.to(".blend-overlay", {
  scrollTrigger: {
    trigger: ".hero-split",
    start: "top top",
    end: "+=500",
    scrub: true,
  },
  opacity: 1
});



window.onload = function () {

  const texts = [
    "iOS Developer",
    "Freelancer",
    "Hybrid App Developer",
    "Apple Watch App Developer"
  ];

  let index = 0;
  let charIndex = 0;
  let isDeleting = false;

  const typingElement = document.getElementById("typing");

  console.log("Typing element:", typingElement); // DEBUG

  function typeEffect() {
    if (!typingElement) return;

    const currentText = texts[index];

    if (!isDeleting) {
      typingElement.textContent = currentText.substring(0, charIndex);
      charIndex++;
    } else {
      typingElement.textContent = currentText.substring(0, charIndex);
      charIndex--;
    }

    let speed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentText.length + 1) {
      speed = 1200;
      isDeleting = true;
    }
    else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      index = (index + 1) % texts.length;
    }

    setTimeout(typeEffect, speed);
  }

  typeEffect();
};

tsParticles.load("particles", {
  background: {
    color: "transparent"
  },
  fpsLimit: 60,
  particles: {
    number: {
      value: 60
    },
    color: {
      value: "#00ffcc"
    },
    links: {
      enable: true,
      color: "#00ffcc",
      distance: 120,
      opacity: 0.2
    },
    move: {
      enable: true,
      speed: 1
    },
    size: {
      value: 2
    },
    opacity: {
      value: 0.5
    }
  },
  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: "repulse"
      },
      onClick: {
        enable: true,
        mode: "push"
      }
    },
    modes: {
      repulse: {
        distance: 100
      },
      push: {
        quantity: 4
      }
    }
  },
  detectRetina: true
});



const carousel = document.querySelector(".carousel");

let isDown = false;
let startX;
let scrollLeft;

carousel.addEventListener("mousedown", (e) => {
  isDown = true;
  carousel.style.cursor = "grabbing";
  startX = e.pageX - carousel.offsetLeft;
  scrollLeft = carousel.scrollLeft;
});

carousel.addEventListener("mouseleave", () => {
  isDown = false;
  carousel.style.cursor = "grab";
});

carousel.addEventListener("mouseup", () => {
  isDown = false;
  carousel.style.cursor = "grab";
});

carousel.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - carousel.offsetLeft;
  const walk = (x - startX) * 2;
  carousel.scrollLeft = scrollLeft - walk;
});



// Carousel
let autoScrollSpeed = 0.6;
let isPaused = false;

carousel.addEventListener("mouseenter", () => {
  isPaused = true;
});

carousel.addEventListener("mouseleave", () => {
  isPaused = false;
});

function autoScroll() {
  if (!carousel) return;

  if (!isPaused) {
    carousel.scrollLeft += autoScrollSpeed;
  }

  // seamless loop
  if (carousel.scrollLeft >= carousel.scrollWidth - carousel.clientWidth) {
    carousel.scrollLeft = 0;
  }

  requestAnimationFrame(autoScroll);
}

autoScroll();

const apps = [
  {
    title: "Speech Timer",
    desc: "Practice speeches with real-time tracking and feedback.",
    img: "projects/speechtimer.png",
    link: "https://apps.apple.com/gb/app/speaker-presentation-timer/id1496053701"
  },
  {
    title: "Crop Diagnostix",
    desc: "AI-powered crop disease detection app.",
    img: "app2.png",
    link: "#"
  },
  {
    title: "Attendee",
    desc: "Professional networking and event management.",
    img: "app3.png",
    link: "#"
  }
];

let currentIndex = 0;

const appImage = document.getElementById("appImage");
const appTitle = document.getElementById("appTitle");
const appDesc = document.getElementById("appDesc");
const appLink = document.getElementById("appLink");

document.getElementById("nextApp").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % apps.length;

  const app = apps[currentIndex];

  // smooth fade transition
  gsap.to(".iphone-frame img", {
    opacity: 0,
    duration: 0.3,
    onComplete: () => {
      appImage.src = app.img;
      appTitle.textContent = app.title;
      appDesc.textContent = app.desc;
      appLink.href = app.link;

      gsap.to(".iphone-frame img", {
        opacity: 1,
        duration: 0.3
      });
    }
  });
});

// --- THREE.JS 3D BACKGROUND ---
const canvas = document.getElementById('threeCanvas');
if (canvas) {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: true });

  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  // Particles
  const geometry = new THREE.BufferGeometry();
  const particlesCount = 800;
  const posArray = new Float32Array(particlesCount * 3);

  for (let i = 0; i < particlesCount * 3; i++) {
    posArray[i] = (Math.random() - 0.5) * 12; // spread
  }

  geometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

  // Glowing particle material
  const material = new THREE.PointsMaterial({
    size: 0.015,
    color: 0x00ffcc,
    transparent: true,
    opacity: 0.8,
    blending: THREE.AdditiveBlending
  });

  const particlesMesh = new THREE.Points(geometry, material);
  scene.add(particlesMesh);

  // Subtle floating geometric shape
  const torusGeometry = new THREE.TorusGeometry(2, 0.5, 16, 100);
  const torusMaterial = new THREE.MeshStandardMaterial({
    color: 0x00aaff,
    wireframe: true,
    transparent: true,
    opacity: 0.15
  });
  const torus = new THREE.Mesh(torusGeometry, torusMaterial);
  torus.position.x = 2;
  scene.add(torus);

  // Secondary floating shape
  const icosaGeometry = new THREE.IcosahedronGeometry(1.5, 0);
  const icosaMaterial = new THREE.MeshStandardMaterial({
    color: 0x00ffcc,
    wireframe: true,
    transparent: true,
    opacity: 0.1
  });
  const icosahedron = new THREE.Mesh(icosaGeometry, icosaMaterial);
  icosahedron.position.x = -2;
  scene.add(icosahedron);

  const ambientLight = new THREE.AmbientLight(0xffffff, 1);
  scene.add(ambientLight);

  camera.position.z = 3;

  // Mouse Interaction
  let mouseX = 0;
  let mouseY = 0;
  let targetX = 0;
  let targetY = 0;
  const windowHalfX = window.innerWidth / 2;
  const windowHalfY = window.innerHeight / 2;

  document.addEventListener('mousemove', (event) => {
    mouseX = (event.clientX - windowHalfX);
    mouseY = (event.clientY - windowHalfY);
  });

  const clock = new THREE.Clock();

  function animate() {
    requestAnimationFrame(animate);
    const elapsedTime = clock.getElapsedTime();
    const scrollY = window.scrollY;

    targetX = mouseX * 0.001;
    targetY = mouseY * 0.001;

    // Auto rotation
    particlesMesh.rotation.y = -elapsedTime * 0.03;
    particlesMesh.rotation.x = -elapsedTime * 0.01;

    torus.rotation.x += 0.002;
    torus.rotation.y += 0.003;

    icosahedron.rotation.x -= 0.002;
    icosahedron.rotation.y -= 0.003;

    // Scroll interaction (parallax)
    camera.position.y = -scrollY * 0.0015;

    // Mouse follow easing
    particlesMesh.rotation.y += 0.05 * (targetX - particlesMesh.rotation.y);
    particlesMesh.rotation.x += 0.05 * (targetY - particlesMesh.rotation.x);

    torus.position.x += 0.02 * (targetX - torus.position.x);
    torus.position.y += 0.02 * (-targetY - torus.position.y);

    icosahedron.position.x += 0.02 * (-targetX - icosahedron.position.x);
    icosahedron.position.y += 0.02 * (targetY - icosahedron.position.y);

    renderer.render(scene, camera);
  }
  animate();

  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });
}