
const images = [
    'image1',
    'image2',
    'image3',
    'image4',
    'image5',
  ];

  function handleImageHoverOn(event) {
    if (event.target.tagName === 'IMG') {
      const imageId = event.target.id;
      const imageElement = document.getElementById(imageId);
  

      imageElement.src = `images/${imageId}_2.jpg`;
    }
  }
    function handleImageHoverOff(event) {
    if (event.target.tagName === 'IMG') {
      const imageId = event.target.id;
      const imageElement = document.getElementById(imageId);
  
   
      imageElement.src = `images/${imageId}.jpg`;
    }
  }
  

  for (const imageId of images) {
    const imageElement = document.getElementById(imageId);
    imageElement.addEventListener('mouseover', handleImageHoverOn);
  }

  for (const imageId of images) {
    const imageElement = document.getElementById(imageId);
    imageElement.addEventListener('mouseout', handleImageHoverOff);
  }
  