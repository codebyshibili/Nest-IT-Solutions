document.addEventListener('DOMContentLoaded', () => {
    // Array of background images for each project box
    const backgrounds = [
        'linear-gradient( rgba(8,53,83,0.6), rgba(8,53,83,0.8)),url("Nest-images/What-is-cyber-security-software.png")',
        'linear-gradient( rgba(8,53,83,0.6), rgba(8,53,83,0.8)),url("Nest-images/Video-Surveillance-ky.jpg")',
        'linear-gradient( rgba(8,53,83,0.6), rgba(8,53,83,0.8)),url("Nest-images/top-11-web-development-technologies-you-must-know-in-2024-12grids-compressed.jpg")',
        'linear-gradient( rgba(8,53,83,0.6), rgba(8,53,83,0.8)),url("Nest-images/360_F_639629017_YjfnLtEGhYsnXr9GlyXf6dXwLVmVdaRW.jpg")',
    ];
  
    // Select all elements with the class 'project-box'
    const projectBoxes = document.querySelectorAll('.enhance');
  
    // Loop through each project box and set the background image from the array
    projectBoxes.forEach((box, index) => {
        if (backgrounds[index]) { // Check if there's a background image for this box
            box.style.backgroundImage = backgrounds[index];
        }
    });
  });




  const box = document.querySelector(".box");
  const outerBox = document.querySelector(".outerBox")
  outerBox.onmousemove = (e) => {
      let x = e.clientX/6;
      box.style.transform = "perspective(1000px) rotateY("+ x +"deg)";
  }

