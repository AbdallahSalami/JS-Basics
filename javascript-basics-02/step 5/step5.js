
const images = [
    'image1',
    'image2',
    'image3',
    'image4',
    'image5',
  ];
  

  function handleImageHover(event) {
    if (event.target.tagName === 'IMG') {
      const imageId = event.target.id;
      const imageElement = document.getElementById(imageId);
  
      const isReplaced = imageElement.src.includes('_2.jpg');

      if (isReplaced) {
        imageElement.src = `images/${imageId}.jpg`;
      } else {
        imageElement.src = `images/${imageId}_2.jpg`;
      }
    }
  }

  document.querySelector('.container').addEventListener('mouseover', handleImageHover);
  document.querySelector('.container').addEventListener('mouseout', handleImageHover);
  