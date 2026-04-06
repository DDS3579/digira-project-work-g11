// Navbar CSS Starts:

const openMenu = document.getElementById("openMenu");
const closeMenu = document.getElementById("closeMenu");
const menu = document.getElementById("menu");

openMenu.addEventListener("click", () => {
  menu.classList.remove("max-md:w-0");
  menu.classList.add("max-md:w-full");
});

closeMenu.addEventListener("click", () => {
  menu.classList.remove("max-md:w-full");
  menu.classList.add("max-md:w-0");
});




// For 3d Globe in the landing page:
// Initialize 3D Globe Animation
const initHeroGlobe = () => {
  const canvas = document.getElementById('globe-canvas');
  if (!canvas) return;
  
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  
  renderer.setSize(canvas.clientWidth, canvas.clientHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  
  // Lighting
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
  scene.add(ambientLight);
  
  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
  directionalLight.position.set(5, 3, 5);
  scene.add(directionalLight);
  
  const pointLight = new THREE.PointLight(0x2563eb, 1, 100);
  pointLight.position.set(-10, -10, 10);
  scene.add(pointLight);
  
  // Create Globe
  const globeGeometry = new THREE.SphereGeometry(3, 64, 64);
  const globeMaterial = new THREE.MeshPhongMaterial({
    color: 0x2563eb,
    transparent: true,
    opacity: 0.15,
    shininess: 80,
    specular: 0x111111
  });
  const globe = new THREE.Mesh(globeGeometry, globeMaterial);
  scene.add(globe);
  
  // Wireframe Globe
  const wireframeGeometry = new THREE.SphereGeometry(3.02, 32, 32);
  const wireframeMaterial = new THREE.MeshBasicMaterial({
    color: 0x2563eb,
    wireframe: true,
    transparent: true,
    opacity: 0.3
  });
  const wireframe = new THREE.Mesh(wireframeGeometry, wireframeMaterial);
  scene.add(wireframe);
  
  // Particle System for "Students"
  const particlesGeometry = new THREE.BufferGeometry();
  const particleCount = 200;
  const posArray = new Float32Array(particleCount * 3);
  
  for(let i = 0; i < particleCount * 3; i++) {
    posArray[i] = (Math.random() - 0.5) * 15;
  }
  
  particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
  
  const particlesMaterial = new THREE.PointsMaterial({
    size: 0.08,
    color: 0x059669,
    transparent: true,
    opacity: 0.9,
    sizeAttenuation: true
  });
  
  const particles = new THREE.Points(particlesGeometry, particlesMaterial);
  scene.add(particles);
  
  // Connecting Lines (Pathways)
  const lineMaterial = new THREE.LineBasicMaterial({ 
    color: 0xfcd34d, 
    transparent: true, 
    opacity: 0.4 
  });
  
  for(let i = 0; i < 15; i++) {
    const lineGeometry = new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3((Math.random() - 0.5) * 8, (Math.random() - 0.5) * 8, (Math.random() - 0.5) * 8),
      new THREE.Vector3((Math.random() - 0.5) * 8, (Math.random() - 0.5) * 8, (Math.random() - 0.5) * 8)
    ]);
    const line = new THREE.Line(lineGeometry, lineMaterial);
    scene.add(line);
  }
  
  // Camera Position
  camera.position.z = 8;
  
  // Animation
  let rotationSpeed = 0.002;
  
  const animate = () => {
    requestAnimationFrame(animate);
    
    globe.rotation.y += rotationSpeed;
    globe.rotation.x += rotationSpeed * 0.3;
    wireframe.rotation.y += rotationSpeed;
    wireframe.rotation.x += rotationSpeed * 0.3;
    particles.rotation.y += rotationSpeed * 0.5;
    
    // Gentle particle movement
    const positions = particlesGeometry.attributes.position.array;
    for(let i = 0; i < positions.length; i += 3) {
      positions[i + 2] += 0.005;
      if(positions[i + 2] > 7) positions[i + 2] = -7;
    }
    particlesGeometry.attributes.position.needsUpdate = true;
    
    renderer.render(scene, camera);
  };
  
  animate();
  
  // Handle Resize
  const handleResize = () => {
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
  };
  
  window.addEventListener('resize', handleResize);
  
  // Mouse Interaction (subtle parallax)
  let mouseX = 0, mouseY = 0;
  document.addEventListener('mousemove', (e) => {
    mouseX = (e.clientX / window.innerWidth) * 2 - 1;
    mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
    
    camera.position.x += (mouseX * 0.5 - camera.position.x) * 0.05;
    camera.position.y += (mouseY * 0.3 - camera.position.y) * 0.05;
    camera.lookAt(scene.position);
  });
  
  // Cleanup
  return () => {
    window.removeEventListener('resize', handleResize);
    renderer.dispose();
  };
};

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', initHeroGlobe);